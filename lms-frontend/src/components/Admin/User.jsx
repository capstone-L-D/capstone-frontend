import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminHeaderSidebar from "./AdminHeaderSidebar";

function User() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8333/api/auth ", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        // Filter users to only show those with role "USER"
        const userRoleOnly = data.filter(user => user.role === "USER");
        setUsers(userRoleOnly);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [token]);

  const handleViewProgress = (userId) => {
    console.log(userId);
    navigate(`/user-progress/${userId}`);
  };

  const handleNavigateToCourses = () => {
    navigate("/AdminCourses");
  };

  const handleNavigateToUsers = () => {
    navigate("/users");
  };

  const filteredUsers = users.filter(user =>
    user.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.userMail.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.jobRole.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminHeaderSidebar
      onNavigateToCourses={handleNavigateToCourses}
      onNavigateToUsers={handleNavigateToUsers}
    >
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">User Management</h2>
        <p className="text-lg text-gray-600 mb-8">View and manage user progress</p>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by name, email or job role..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Job Role
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 font-medium text-gray-900">
                      {user.userName}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-500">
                      {user.userMail}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-500">
                      {user.jobRole}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <button
                      onClick={() => handleViewProgress(user.userId)}
                      className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      View Progress
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminHeaderSidebar>
  );
}

export default User;
