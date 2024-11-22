import React, { useEffect, useState } from 'react';
import AdminHeaderSidebar from './AdminHeaderSidebar';
import { useParams } from 'react-router-dom';

function StudentList() {
  const {courseId} = useParams();
  const [users, setUsers] = useState([]);
  const[allUsers, setAllUsers] = useState([]);
  const[courseUsers, setCourseUsers] = useState([]);
  const [message, setMessage] = useState('');
  const url="http://localhost:8333/api/auth"
  const url2 = `http://localhost:8333/api/user-courses/user/${courseId}`;
  const token = localStorage.getItem("authToken");
  const loadAllUsers = async () => {
    try {
      // Fetch user enrolled courses
      const allUsersResponse = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the header
        },
      });
      const allUsersData = await allUsersResponse.json();
      console.log("allUsersData",allUsersData);
      
      // Filter users with role "USER"
      const userRoleOnly = allUsersData.filter(user => user.role === "USER");
      setAllUsers(userRoleOnly);
  
      // Fetch all courses
      const courseUsersResponse = await fetch(url2, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the header
        }
       
      });
      const courseUsersData = await courseUsersResponse.json();
      console.log("courseUsersData",courseUsersData)
      
      // Filter out users who are already enrolled in the course
      const newUsersData = userRoleOnly.filter(
        (user) => !courseUsersData.includes(user.userId)
      );
      console.log("newUsers",newUsersData)
      setUsers(newUsersData);
    } catch (error) {
      console.error("Error loading courses:", error);
    }
  };
  
  useEffect(() => {
    loadAllUsers();
  }, []);


  const [selectedUsers, setSelectedUsers] = useState(new Set());

  const handleCheckboxChange = (userId) => {
    const newSelected = new Set(selectedUsers);
    if (newSelected.has(userId)) {
      newSelected.delete(userId);
    } else {
      newSelected.add(userId);
    }
    setSelectedUsers(newSelected);
  };

  const enrollUser = async(userId) =>{
    console.log("yes")
    try {
       
        const response = await fetch("http://localhost:8333/api/user-courses/enroll", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            userId: userId,
            courseId: courseId
          }),
        });
      console.log(response);
      return response.ok;
     
    } catch (err) {
      console.log(err)
      return false;
    } 
  } 

  const handleEnroll = async () => {
    const results = await Promise.all(
      Array.from(selectedUsers).map(userId => enrollUser(userId))
    );
    
    if (results.every(success => success)) {
      setMessage('Users successfully enrolled!');
      loadAllUsers(); // Refresh the user list
      setSelectedUsers(new Set()); // Clear selections
    } else {
      setMessage('Some enrollments failed. Please try again.');
    }

    // Clear message after 3 seconds
    setTimeout(() => {
      setMessage('');
    }, 3000);
  }

  return (
    <AdminHeaderSidebar>
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto">
      {message && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
          {message}
        </div>
      )}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">User List</h2>
        <div className="text-sm text-gray-600">
          {selectedUsers.size} user{selectedUsers.size !== 1 ? 's' : ''} selected
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden mb-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-16 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Select
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User Mail
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User Name
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.userId} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={selectedUsers.has(user.userId)}
                    onChange={() => handleCheckboxChange(user.userId)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {user.userMail}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.userName}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleEnroll}
          disabled={selectedUsers.size === 0}
          className={`px-4 py-2 rounded-lg font-medium ${
            selectedUsers.size === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
          } transition-colors duration-200`}
        >
          Enroll Selected Users
        </button>
      </div>
    </div></AdminHeaderSidebar>
  );
}

export default StudentList;
