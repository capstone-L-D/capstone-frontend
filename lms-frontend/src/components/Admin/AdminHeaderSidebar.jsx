


import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function AdminHeaderSidebar({ children, onNavigateToCourses, onNavigateToUsers }) {
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const navigate = useNavigate();

  const handleProfileToggle = () => {
    setIsProfileVisible(!isProfileVisible);
  };

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#f3f4f6" }}>
      {/* Header */}
      <header style={{ background: "linear-gradient(to right, #4f46e5, #3b82f6)", color: "#fff", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ flex: 1, textAlign: "center" }}>
            <h1 style={{ fontSize: "24px", fontWeight: "bold", margin: "0" }}>Welcome, Admin</h1>
            <p style={{ fontSize: "14px", margin: "4px 0 0", color: "#c7d2fe" }}>
              
            </p>
            
            
          </div>
          
          <div>
          <button
            onClick={handleProfileToggle}
            style={{ fontSize: "24px", color: "#fff", background: "none", border: "none", cursor: "pointer", outline: "none" }}
          >
            <FaUserCircle />
          </button>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar */}
        <aside style={{ width: "256px", backgroundColor: "#fff", boxShadow: "2px 0 4px rgba(0, 0, 0, 0.1)", padding: "24px" }}>
          <nav>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "16px" }}>
                <button
                  onClick={() => navigate("/Admin")}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "8px 16px",
                    color: "#374151",
                    fontWeight: "500",
                    background: "none", 
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Home
                </button>
              </li>
              <li style={{ marginBottom: "16px" }}>
                <button
                  onClick={() => navigate("/AdminCourses")}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "8px 16px",
                    color: "#374151",
                    fontWeight: "500",
                    background: "none",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Courses
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateToUsers}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "8px 16px",
                    color: "#374151",
                    fontWeight: "500",
                    background: "none",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Users
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Profile Card */}
        {isProfileVisible && (
          <div
            style={{
              position: "fixed",
              top: "80px",
              right: "32px",
              width: "256px",
              backgroundColor: "#fff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              padding: "24px",
            }}
          >
            <h3 style={{ fontSize: "18px", fontWeight: "bold", color: "#1f2937", marginBottom: "16px" }}>Admin Profile</h3>
            <button
              onClick={handleLogout}
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#ef4444",
                color: "#fff",
                fontWeight: "bold",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                border: "none",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </div>
        )}

        {/* Main Content */}
        <main style={{ flex: 1, padding: "32px" }}>{children}</main>
      </div>
    </div>
  );
}

export default AdminHeaderSidebar;
