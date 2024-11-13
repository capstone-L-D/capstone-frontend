import { useEffect, useState } from "react";
import ModuleSidebar from "./ModuleSIdebar";
import ContentViewer from "../components/ContentViewer";
import { useParams } from "react-router-dom";

function CourseContent() {
  const [selectedContent, setSelectedContent] = useState(null);
  const [openModule, setOpenModule] = useState(null); // Track which module's dropdown is open

  const [modules, setModules] = useState([]);
  let {cName, UCID } = useParams();
  const url = `http://localhost:7076/api/user-course-modules/modules/${UCID}`;
  console.log("ucid" + UCID);
  console.log("name " + cName)
  const token = localStorage.getItem("authToken");
  const loadAllModules = async () => {
    const UserData = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`, // Include the JWT token in the header
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setModules([...data]);

        console.log(data);
      });
  };
  useEffect(() => {
    loadAllModules();
  }, []);

  // completionDate
  // :
  // "2024-03-01"
  // completionStatus
  // :
  // "In Progress"
  // courseModuleId
  // :
  // "CM101"
  // moduleDuration
  // :
  // "2 hours"
  // moduleId
  // :
  // "M102"
  // moduleTitle
  // :
  // "Introduction to Microservices2"
  // progress
  // :
  // 75.5
  // startDate
  // :
  // "2024-01-15"
  // userCourseId
  // :
  // "UC102"
  // userCourseModuleId
  // :
  // "UCM1002"
  // const modules = [
  //   {
  //     id: 1,
  //     title: "Module 1: Introduction to React",
  //     contents: [
  //       {
  //         id: 1,
  //         type: "video",
  //         title: "Getting Started with React",
  //         url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  //         description: "Learn the basics of React and its core concepts.",
  //         onSelect: (content) => setSelectedContent(content),
  //       },
  //       {
  //         id: 2,
  //         type: "pdf",
  //         title: "React Fundamentals Guide",
  //         url: "https://mozilla.github.io/pdf.js/web/viewer.html",
  //         onSelect: (content) => setSelectedContent(content),
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "Module 2: State Management",
  //     contents: [
  //       {
  //         id: 3,
  //         type: "video",
  //         title: "Understanding React State",
  //         url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  //         description: "Deep dive into React state management.",
  //         onSelect: (content) => setSelectedContent(content),
  //       },
  //       {
  //         id: 4,
  //         type: "pdf",
  //         title: "State Management Best Practices",
  //         url: "https://mozilla.github.io/pdf.js/web/viewer.html",
  //         onSelect: (content) => setSelectedContent(content),
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title: "Module 3: Advanced Concepts",
  //     contents: [
  //       {
  //         id: 5,
  //         type: "video",
  //         title: "React Hooks in Depth",
  //         url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  //         description: "Master React Hooks and their use cases.",
  //         onSelect: (content) => setSelectedContent(content),
  //       },
  //       {
  //         id: 6,
  //         type: "pdf",
  //         title: "Advanced React Patterns",
  //         url: "https://mozilla.github.io/pdf.js/web/viewer.html",
  //         onSelect: (content) => setSelectedContent(content),
  //       },
  //     ],
  //   },
  // ];

  const toggleDropdown = (moduleId) => {
    if (openModule === moduleId) {
      setOpenModule(null); // Close dropdown if it's already open
    } else {
      setOpenModule(moduleId); // Open dropdown
    }
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
            <div key={module.id} style={{ marginBottom: "15px" }}>
              <button
                onClick={() => toggleDropdown(module.mooduleId)}
                style={{
                  backgroundColor: "#00509e",
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
                {module.moduleTitle}
              </button>
              {openModule === module.id && (
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
                      style={{
                        cursor: "pointer",
                        color: content.type === "video" ? "#333" : "#555",
                        padding: "8px 12px",
                        borderRadius: "4px",
                        backgroundColor: "#f9f9f9",
                        border: "1px solid #ddd",
                        margin: "5px 0",
                      }}
                      onClick={() => setSelectedContent(content)}
                    >
                      {content.ContentType === "video" ? "🎬 " : "📄 "} {content.contentTitle}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Main Content Area */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            padding: "20px",
            overflowY: "auto",
            backgroundColor: "#ffffff",
          }}
        >
          {selectedContent ? (
            <ContentViewer content={selectedContent} />
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#888",
                fontSize: "18px",
                height: "100%",
              }}
            >
              <p>Select a module to start learning</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseContent;
