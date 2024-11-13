import Sidebar from "./SideBar";
import CourseCard from "./CourseCard";
import { FiUser, FiSearch, FiMenu } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DashBoard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const token = localStorage.getItem("authToken");
  const userId = localStorage.getItem("userId");

  console.log(userId);
  const url = `http://localhost:8333/api/user-courses/courses/${userId}`;
  // const courses = [
  //   {
  //     id: 1,
  //     title: 'React.js Advanced Concepts',
  //     instructor: 'Sarah Johnson',
  //     progress: 60,
  //     image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  //   },
  //   {
  //     id: 2,
  //     title: 'Node.js Backend Development',
  //     instructor: 'Michael Chen',
  //     progress: 35,
  //     image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  //   },
  //   {
  //     id: 3,
  //     title: 'UI/UX Design Fundamentals',
  //     instructor: 'Emma Davis',
  //     progress: 85,
  //     image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  //   },
  //   {
  //       id: 4,
  //       title: 'UI/UX Design Fundamentals',
  //       instructor: 'Emma Davis',
  //       progress: 85,
  //       image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  //     },
  //     {
  //       id: 5,
  //       title: 'UI/UX Design Fundamentals',
  //       instructor: 'Emma Davis',
  //       progress: 85,
  //       image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  //     },
  // ];

  const loadAllCourses = async () => {
    const UserData = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`, // Include the JWT token in the header
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCourses([...data]);

        console.log(data);
      });
  };
  useEffect(() => {
    loadAllCourses();
  }, []);
  // Sample user data
  // const user = {
  //   name: ,
  // };
  function handleLogout() {
    window.localStorage.clear();
    window.location.href = "/";
  }
  console.log(localStorage.getItem("userName"));
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Sidebar Toggle Button */}
      <button
        className="p-4 fixed top-4 left-4 z-20 text-gray-600 hover:text-gray-800 focus:outline-none"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <FiMenu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div
        className={`transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-0"
        } p-8`}
      >
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-800">Dashboard</h1>
            <p className="text-gray-500 mt-1">
              Welcome back! Continue your learning journey
            </p>
          </div>

          <div className="flex items-center gap-4 relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                className="pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* User Icon with Popup */}
            <button
              className="p-2 hover:bg-gray-100 rounded-full relative"
              onClick={() => setIsPopupOpen(!isPopupOpen)}
            >
              <FiUser className="w-6 h-6 text-gray-600" />{" "}
              {/* Replaced FiBell with FiUser */}
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white"></span>
            </button>

            {/* Popup */}
            {isPopupOpen && (
              <div className="absolute right-0 top-12 bg-white shadow-lg rounded-lg p-4 w-48 z-20">
                <p className="text-gray-800 font-semibold">
                  {localStorage.getItem("User")}
                </p>
                <button
                  className="mt-3 w-full bg-indigo-600 text-white py-1 px-4 rounded hover:bg-indigo-700 transition duration-200"
                  onClick={handleLogout} // Replace with actual logout logic
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-gray-500 text-sm mb-1">Courses in Progress</h3>
            <p className="text-3xl font-bold text-indigo-600">4</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-gray-500 text-sm mb-1">Completed Courses</h3>
            <p className="text-3xl font-bold text-indigo-600">12</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-gray-500 text-sm mb-1">Certificates Earned</h3>
            <p className="text-3xl font-bold text-indigo-600">8</p>
          </div>
        </div>

        {/* Current Courses */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Continue Learning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default DashBoard;
