


import React from "react";
import { useNavigate } from "react-router-dom";

function AdminHome() {
    const navigate = useNavigate();
  const handleAddCourse = () => {
   navigate("/courseAdd")
  };

  const handleAddModule = () => {
    navigate("/madd")
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg">
        <div className="container mx-auto py-4 px-6">
          <h1 className="text-3xl font-bold">Welcome, Admin</h1>
          
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg">
          <nav className="p-6">
            <ul className="space-y-4">
              <li>
                <button
                  className="w-full text-left px-4 py-2 text-gray-700 font-medium hover:bg-indigo-100 hover:text-indigo-600 rounded-lg focus:outline-none"
                  onClick={() => console.log("Navigating to Courses...")}
                >
                  Courses
                </button>
              </li>
              
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Admin Actions</h2>
            <p className="text-gray-600 mb-8">Select an option below to manage the LMS platform:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Add Course Button */}
              <button
                onClick={handleAddCourse}
                className="w-full px-6 py-4 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add Course
              </button>

              {/* Add Module Button */}
              <button
                onClick={handleAddModule}
                className="w-full px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Add Module
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminHome;