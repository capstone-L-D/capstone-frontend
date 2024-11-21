




import React, { useEffect, useState } from "react";
import AdminHeaderSidebar from "./AdminHeaderSidebar";
import { useNavigate } from "react-router-dom";

function AdminCourses() {
  const navigate = useNavigate();
  // const courses = [
  //   {
  //     courseId: "1",
  //     courseTitle: "React.js Advanced Concepts",
  //     courseDescription: "Deep dive into React.js advanced features and patterns.",
  //     courseDuration: "6 weeks",
  //     courseLevel: "Advanced",
  //     courseCategory: "Frontend Development",
  //     imgUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  //   },
  //   {
  //     courseId: "2",
  //     courseTitle: "Node.js Backend Development",
  //     courseDescription: "Learn how to build scalable backend applications with Node.js.",
  //     courseDuration: "8 weeks",
  //     courseLevel: "Intermediate",
  //     courseCategory: "Backend Development",
  //     imgUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  //   },
  //   {
  //     courseId: "3",
  //     courseTitle: "UI/UX Design Fundamentals",
  //     courseDescription: "Master the essentials of user interface and user experience design.",
  //     courseDuration: "4 weeks",
  //     courseLevel: "Beginner",
  //     courseCategory: "Design",
  //     imgUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  //   },
  //   {
  //     courseId: "4",
  //     courseTitle: "Frontend Web Development",
  //     courseDescription: "Comprehensive guide to modern frontend development practices.",
  //     courseDuration: "10 weeks",
  //     courseLevel: "Intermediate",
  //     courseCategory: "Frontend Development",
  //     imgUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  //   },
  //   {
  //     courseId: "5",
  //     courseTitle: "Data Science Essentials",
  //     courseDescription: "Get started with data science, including Python and machine learning basics.",
  //     courseDuration: "12 weeks",
  //     courseLevel: "Beginner",
  //     courseCategory: "Data Science",
  //     imgUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  //   },
  // ];
  const url2=`http://localhost:8333/api/courses`;
  const [courses, setAllCourses] = useState([]);
  const token = localStorage.getItem("authToken");
  const loadAllCourses = async () => {
    try {
  const allCoursesResponse = await fetch(url2, {
    headers: {
      Authorization: `Bearer ${token}`, // Include the JWT token in the header
    },
  });
  const allCoursesData = await allCoursesResponse.json();

  
  
  setAllCourses(allCoursesData);
} catch (error) {
  console.error("Error loading courses:", error);
}
};
useEffect(() => {
  loadAllCourses();
}, []);

  const handleNavigateToCourses = () => {
    console.log("Navigating to Courses...");
  };

  const handleNavigateToUsers = () => {
    console.log("Navigating to Users...");
  };
  const handleEnrollUsers = (courseId) => {
    navigate(`/enroll-to-course/${courseId}`);
  };

  return (
    <AdminHeaderSidebar
      onNavigateToCourses={handleNavigateToCourses}
      onNavigateToUsers={handleNavigateToUsers}
    >
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Current Courses</h2>
        <p className="text-lg text-gray-600 mb-8">Browse and manage the courses below.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.courseId}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={course.imgUrl}
                alt={course.courseTitle}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{course.courseTitle}</h3>
              
                <p className="text-gray-500 mt-1">
                  <strong>Duration:</strong> {course.courseDuration}
                </p>
                <p className="text-gray-500 mt-1">
                  <strong>Level:</strong> {course.courseLevel}
                </p>
                
                <button 
                onClick={() => handleEnrollUsers(course.courseId)}
                className="mt-4 w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg shadow-lg hover:bg-indigo-700 transition-all">
                 Enroll Users
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminHeaderSidebar>
  );
}

export default AdminCourses;
