import React, { useEffect, useState } from "react";
import {
  BookOpen,
  FileCheck,
  Clock,
  BarChart2,
  FolderOpen,
  Image,
} from "lucide-react";
import ModuleSelect from "./ModuleSelect";

// Sample modules data
// const AVAILABLE_MODULES = [
//   {
//     moduleId: "mod-001",
//     moduleTitle: "Introduction to JavaScript",
//     moduleDuration: "2 hours",

//   },
//   {
//     moduleId: "mod-002",
//     moduleTitle: "Advanced JavaScript Concepts",
//     moduleDuration: "3 hours",

//   },
//   {
//     moduleId: "mod-003",
//     moduleTitle: "Working with JavaScript Frameworks",
//     moduleDuration: "4 hours",

//   }
// ];

function AddModuleMain() {
  const [formData, setFormData] = useState({
    courseTitle: "",
    courseDescription: "",
    courseDuration: "",
    courseLevel: "",
    courseCategory: "",
    imgUrl: "",
    selectedModules: [],
  });
  const url = `http://localhost:8333/modules`;
  const [availableModules, setAvailableModules] = useState([]);
  const token = localStorage.getItem("authToken");
  const [submissionMessage, setSubmissionMessage] = useState();

  const loadAllModules = async () => {
    try {
      const UserData = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the header
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAvailableModules([...data]);

          // Set these counts in state

          console.log(data);
        });
    } catch (error) {
      console.error("Error loading courses:", error);
    }
  };
  useEffect(() => {
    loadAllModules();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Update selected modules when the user selects/deselects modules in the ModuleSelect dropdown
  const handleModuleChange = (selectedModules) => {
    setFormData((prev) => ({
      ...prev,
      selectedModules,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionMessage(""); // Clear previous message
    console.log("Form submitted:", formData);

    try {
      const response = await fetch("http://localhost:8333/api/courses/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // If the response is successful
        setSubmissionMessage("Course created successfully!");
        setFormData({
          courseTitle: "",
          courseDescription: "",
          courseDuration: "",
          courseLevel: "",
          courseCategory: "",
          imgUrl: "",
          selectedModules: [],
        }); // Reset form
      } else {
        // If the response fails
        const responseData = await response.json();
        setSubmissionMessage(
          `Failed to create course: ${
            responseData.message || response.statusText
          }`
        );
      }
    } catch (err) {
      // Catch network or other unexpected errors
      if (err.response) {
        setSubmissionMessage(
          `Error: ${err.response.data.message || err.response.statusText}`
        );
      } else if (err.request) {
        setSubmissionMessage(
          "No response from the server. Please try again later."
        );
      } else {
        setSubmissionMessage(`Error: ${err.message}`);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Create New Course
            </h2>
            <p className="text-gray-600 mt-2">
              Fill in the details to create a new course
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                  <FileCheck className="h-4 w-4 mr-2" />
                  Course Title
                </label>
                <input
                  type="text"
                  name="courseTitle"
                  value={formData.courseTitle}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                  <FileCheck className="h-4 w-4 mr-2" />
                  Course Description
                </label>
                <textarea
                  name="courseDescription"
                  value={formData.courseDescription}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                  <Clock className="h-4 w-4 mr-2" />
                  Course Duration
                </label>
                <input
                  type="text"
                  name="courseDuration"
                  value={formData.courseDuration}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                  <BarChart2 className="h-4 w-4 mr-2" />
                  Course Level
                </label>
                <input
                  type="text"
                  name="courseLevel"
                  value={formData.courseLevel}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                  <FolderOpen className="h-4 w-4 mr-2" />
                  Course Category
                </label>
                <input
                  type="text"
                  name="courseCategory"
                  value={formData.courseCategory}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                  <Image className="h-4 w-4 mr-2" />
                  Image URL
                </label>
                <input
                  type="url"
                  name="imgUrl"
                  value={formData.imgUrl}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Select Modules
                </label>
                <ModuleSelect
                  selectedModules={formData.selectedModules}
                  onChange={handleModuleChange}
                  modules={availableModules}
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Create Course
              </button>
            </div>
            {submissionMessage && (
              <div
                className={`mt-4 text-center ${
                  submissionMessage.startsWith("Failed")
                    ? "text-red-600"
                    : "text-green-600"
                }`}
              >
                {submissionMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddModuleMain;
