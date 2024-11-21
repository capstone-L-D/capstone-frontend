import { useEffect, useState } from "react";
import ModuleSidebar from "./ModuleSidebar";
import ContentViewer from "../components/ContentViewer";
import { useNavigate, useParams } from "react-router-dom";
import Feedback from "./Feedback";
import AssessmentStart from "./Assessment/AssessmentStart";

function CourseContent() {
  const [selectedContent, setSelectedContent] = useState(null);
  const [openModule, setOpenModule] = useState(null); // Track which module's dropdown is open
  const [modules, setModules] = useState([]);
  const [courseProgress, setCourseProgress] = useState(0); // Track the course progress percentage
  const [isCourseCompleted, setIsCourseCompleted] = useState(false); // Track if the course is completed
  const [showFeedback, setShowFeedback] = useState(false);
  const [showAssessment, setShowAssessment] = useState(false);
  const { cName, UCID, cId } = useParams();
  console.log(cId);
  const navigate = useNavigate()

  const url = `http://localhost:8333/api/user-course-modules/modules/${UCID}`;
  const token = localStorage.getItem("authToken");

  const loadAllModules = async () => {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`, // Include the JWT token in the header
      },
    });
    const data = await response.json();
    setModules(data);
    console.log(data);
  };

  useEffect(() => {
    loadAllModules();
  }, []);

  const toggleDropdown = (moduleId) => {
    setOpenModule(openModule === moduleId ? null : moduleId);
  };

  // Function to update module completion status in the backend
  const updateModuleCompletionStatus = async (userCourseModuleId) => {
    const url = `http://localhost:8333/api/user-course-modules/update-module-progress`;
    const token = localStorage.getItem("authToken");

    const data = {
      userCourseModuleId: userCourseModuleId,
      moduleCompleted: true,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const updatedModule = await response.json();
        console.log("Module completion status updated successfully:", updatedModule);
        
        // Update modules state to reflect completion
        setModules(prevModules => 
          prevModules.map(module => 
            module.userCourseModuleId === userCourseModuleId 
              ? {...module, moduleCompleted: true}
              : module
          )
        );
        
        // Calculate and update course progress
        const updatedModules = modules.map(module =>
          module.userCourseModuleId === userCourseModuleId 
            ? {...module, moduleCompleted: true}
            : module
        );
        
        const completedModules = updatedModules.filter(module => module.moduleCompleted).length;
        const progress = (completedModules / updatedModules.length) * 100;
        setCourseProgress(progress);

        // Check if course is completed
        if (progress === 100) {
          setIsCourseCompleted(true);
          updateCourseCompletionStatus(progress, true);
        } else {
          updateCourseCompletionStatus(progress, false);
        }

      } else {
        console.error("Failed to update module completion status:", response.status);
      }
    } catch (error) {
      console.error("Error updating module completion status:", error);
    }
  };

  // Function to update the course progress based on completed modules
  const updateCourseProgress = () => {
    const completedModules = modules.filter(module => module.moduleCompleted).length;
    const totalModules = modules.length;
    const progress = (completedModules / totalModules) * 100;
    
    setCourseProgress(progress);

    if (progress === 100) {
      setIsCourseCompleted(true);
      updateCourseCompletionStatus(progress, true);
    } else {
      updateCourseCompletionStatus(progress, false);
    }
  };

  // Function to update the course completion status in the backend
  const updateCourseCompletionStatus = async (progress, isCompleted) => {
    const url = `http://localhost:8333/api/user-courses/update-course-progress`;
    const token = localStorage.getItem("authToken");

    const data = {
      userCourseId: UCID,
      progress: progress,
      isCompleted: isCompleted,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const updatedCourse = await response.json();
        console.log("Course progress updated successfully:", updatedCourse);
      } else {
        console.error("Failed to update course progress:", response.status);
      }
    } catch (error) {
      console.error("Error updating course progress:", error);
    }
  };

  // Function to handle content completion and check module completion
  const markContentCompleted = (userCourseModuleId, contentId) => {
    setModules(prevModules =>
      prevModules.map(module => {
        if (module.userCourseModuleId === userCourseModuleId) {
          // Update content completion status
          const updatedContentList = module.contentList.map(content =>
            content.contentId === contentId
              ? { ...content, completed: true }
              : content
          );

          // Check if all contents in module are completed
          const allContentsCompleted = updatedContentList.every(content => content.completed);

          // If all contents are completed and module wasn't previously completed
          if (allContentsCompleted && !module.moduleCompleted) {
            updateModuleCompletionStatus(userCourseModuleId);
          }

          return {
            ...module,
            contentList: updatedContentList,
            moduleCompleted: module.moduleCompleted || allContentsCompleted // Keep existing completion status or update if newly completed
          };
        }
        return module;
      })
    );

    // Set selected content
    const selectedModule = modules.find(module => module.userCourseModuleId === userCourseModuleId);
    const selectedContent = selectedModule?.contentList.find(content => content.contentId === contentId);
    
    setSelectedContent(selectedContent);
    setShowFeedback(false);
    setShowAssessment(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0f2f5",
      }}
    >
      {/* Header */}
      <header
        style={{
          padding: "15px 30px",
          backgroundColor: "#003366",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <button
          style={{
            backgroundColor: 'transparent',
            color: '#fff',
            border: '2px solid #fff',
            padding: '8px 16px',
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '20px',
            fontSize: '14px',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#fff';
            e.target.style.color = '#003366';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#fff';
          }}
          onClick={() => navigate("/dashboard")}
        >
          ← Dashboard
        </button>
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
          Course: {cName}
        </h1>
      </header>

      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar */}
        <div
          style={{
            width: "300px",
            height: "100%",
            overflowY: "auto",
            backgroundColor: "#ffffff",
            borderRight: "1px solid #ddd",
            padding: "20px",
            boxShadow: "2px 0px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2
            style={{ fontSize: "18px", color: "#003366", marginBottom: "15px" }}
          >
            Modules
          </h2>
          {modules.map((module) => (
            <div key={module.moduleId} style={{ marginBottom: "15px" }}>
              <button
                onClick={() => toggleDropdown(module.moduleId)}
                style={{
                  backgroundColor: module.completed ? "#228B22" : "#00509e", // Change color if completed
                  color: "#fff",
                  width: "100%",
                  padding: "12px",
                  borderRadius: "5px",
                  textAlign: "left",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "16px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "background-color 0.3s",
                }}
              >
                {module.moduleTitle} {module.moduleCompleted && "✓"}
              </button>
              {openModule === module.moduleId && (
                <ul
                  style={{
                    listStyleType: "none",
                    padding: "10px 0",
                    margin: 0,
                  }}
                >
                  {module.contentList.map((content) => (
                    <li
                      key={content.contentId}
                      onClick={() =>
                        markContentCompleted(
                          module.userCourseModuleId,
                          content.contentId
                        )
                      }
                      style={{
                        cursor: "pointer",
                        color: content.type === "video" ? "#333" : "#555",
                        padding: "8px 12px",
                        borderRadius: "4px",
                        backgroundColor: content.completed
                          ? "#e0ffe0"
                          : "#f9f9f9",
                        border: "1px solid #ddd",
                        margin: "5px 0",
                      }}
                    >
                      {content.contentType === "video" ? "🎬 " : "📄 "}{" "}
                      {content.contentTitle}
                    </li>
                  ))}
                </ul>
              )}
              
            </div>
          ))}
          <button
            style={{
              backgroundColor: '#4a90e2',
              color: '#fff',
              width: '100%',
              padding: '12px',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              marginTop: '20px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s',
            }}
            onClick={() => {
              setSelectedContent(null);
              setShowFeedback(false);
              setShowAssessment(true);
            }}
          >
            Assessment
          </button>
          <button
            style={{
              backgroundColor: '#28a745',
              color: '#fff',
              width: '100%',
              padding: '12px',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              marginTop: '20px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s',
            }}
            onClick={() => {
              setSelectedContent(null);
              setShowFeedback(true);
              setShowAssessment(false);
            }}
          >
            Feedback
          </button>

        </div>
        

        {/* Content Viewer */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#ffffff",
            padding: "20px",
            overflowY: "auto",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          {showFeedback ? (
            <Feedback />
          ) : showAssessment ? (
            <AssessmentStart />
          ) : (
            selectedContent && <ContentViewer content={selectedContent} UCID={UCID} />
          )}
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          padding: "10px 30px",
          backgroundColor: "#003366",
          color: "#fff",
          textAlign: "center",
          boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p>&copy; 2024 Course Management System</p>
      </footer>
    </div>
  );
}

export default CourseContent;
