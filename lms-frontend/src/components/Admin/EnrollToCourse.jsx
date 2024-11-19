import React, { useState } from 'react';
import AdminHeaderSidebar from './AdminHeaderSidebar';

function StudentList() {
  const [students] = useState([
    { id: "STU001", name: "Alice Johnson" },
    { id: "STU002", name: "Bob Wilson" },
    { id: "STU003", name: "Carol Martinez" },
    { id: "STU004", name: "David Thompson" },
    { id: "STU005", name: "Eva Rodriguez" },
    { id: "STU006", name: "Frank Miller" },
    { id: "STU007", name: "Grace Lee" },
    { id: "STU008", name: "Henry Garcia" },
  ]);

  const [selectedStudents, setSelectedStudents] = useState(new Set());

  const handleCheckboxChange = (studentId) => {
    const newSelected = new Set(selectedStudents);
    if (newSelected.has(studentId)) {
      newSelected.delete(studentId);
    } else {
      newSelected.add(studentId);
    }
    setSelectedStudents(newSelected);
  };

  const handleEnroll = () => {
    console.log("Enrolling students:", Array.from(selectedStudents));
  };

  return (
    <AdminHeaderSidebar>
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Student List</h2>
        <div className="text-sm text-gray-600">
          {selectedStudents.size} student{selectedStudents.size !== 1 ? 's' : ''} selected
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
                Student ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Student Name
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={selectedStudents.has(student.id)}
                    onChange={() => handleCheckboxChange(student.id)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {student.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleEnroll}
          disabled={selectedStudents.size === 0}
          className={`px-4 py-2 rounded-lg font-medium ${
            selectedStudents.size === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
          } transition-colors duration-200`}
        >
          Enroll Selected Students
        </button>
      </div>
    </div></AdminHeaderSidebar>
  );
}

export default StudentList;
