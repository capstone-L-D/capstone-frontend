


import React from "react";
import AdminHeaderSidebar from "./AdminHeaderSidebar";
import { useNavigate } from "react-router-dom";

function AdminHome() {
  const navigate = useNavigate();
  const handleAddCourse = () => {
   navigate("/courseAdd")
  };

  const handleAddModule = () => {
    navigate("/madd")
  };

  const handleNavigateToCourses = () => {
    console.log("Navigating to Courses...");
  };

  const handleNavigateToUsers = () => {
    console.log("Navigating to Users...");
  };

  return (
    <AdminHeaderSidebar
      onNavigateToCourses={handleNavigateToCourses}
      onNavigateToUsers={handleNavigateToUsers}
    >
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Admin Actions</h2>
        <p className="text-gray-600 mb-8">Select an option below to manage the LMS platform:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <button
            onClick={handleAddCourse}
            className="w-full px-6 py-4 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add Course
          </button>
          <button
            onClick={handleAddModule}
            className="w-full px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add Module
          </button>
        </div>
      </div>
    </AdminHeaderSidebar>
  );
}

export default AdminHome;
