import Sidebar from "./SideBar";
import CourseCard from "./CourseCard";
import { FiUser, FiSearch, FiMenu, FiBookOpen } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RemainingCourseCard from "./RmainingCourseCard";

function DashBoard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [allCourses, setAllCourses] = useState([]);
  const [recommendedCourses, setRecommendedCourses] = useState([]);
  const token = localStorage.getItem("authToken");
  const userId = localStorage.getItem("userId");

  const jobRoleRecommendations = {
    "DevOps Engineer": ["devops", "security"],
    "Game Developer": ["Gaming", "AI"],
    "Full Stack Developer": ["App Development", "security"],
    "Mobile App Developer": ["App Development", "AI"],
    "Machine Learning Engineer": ["AI", "security"],
  };

  console.log(userId);
  const url = `http://localhost:8333/api/user-courses/courses/${userId}`;
  const url2 = `http://localhost:8333/api/courses`;

  const loadAllCourses = async () => {
    try {
      // Fetch user enrolled courses
      const userCoursesResponse = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const userCoursesData = await userCoursesResponse.json();
      console.log(userCoursesData);
      setCourses(userCoursesData);

      // Calculate progress counts
      const inProgress = userCoursesData.filter(
        (course) => !course.isCompleted
      ).length;
      const completed = userCoursesData.filter(
        (course) => course.isCompleted
      ).length;
      setInProgressCount(inProgress);
      setCompletedCount(completed);

      // Fetch all courses
      const allCoursesResponse = await fetch(url2, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const allCoursesData = await allCoursesResponse.json();

      // Filter new courses
      const newCourses = allCoursesData.filter(
        (course) =>
          !userCoursesData.some(
            (userCourse) => userCourse.courseId === course.courseId
          )
      );
      console.log(newCourses);
      setAllCourses(newCourses);

      // Get user's job role and filter recommended courses
      const userJobRole = localStorage.getItem("jobRole");
      if (userJobRole && jobRoleRecommendations[userJobRole]) {
        const recommendedStacks = jobRoleRecommendations[userJobRole];
        const recommended = newCourses.filter((course) =>
          recommendedStacks.some(
            (stack) =>
              course.courseCategory &&
              course.courseCategory.toLowerCase().includes(stack.toLowerCase())
          )
        );
        setRecommendedCourses(recommended);
      }
    } catch (error) {
      console.error("Error loading courses:", error);
    }
  };

  useEffect(() => {
    loadAllCourses();
  }, []);

  function handleLogout() {
    window.localStorage.clear();
    window.location.href = "/";
  }
  console.log(localStorage.getItem("userName"));
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Sidebar Toggle Button */}
      <button
        className="p-4 fixed top-4 left-4 z-20 text-indigo-600 hover:text-indigo-800 focus:outline-none transition-colors duration-300"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <FiMenu className="w-6 h-6 transform hover:rotate-180 transition-transform duration-300" />
      </button>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div
        className={`transition-all duration-500 ease-in-out ${
          sidebarOpen ? "ml-64" : "ml-0"
        } p-8`}
      >
        {/* Header */}
        <header className="flex items-center justify-between mb-12 bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg">
          <div className="flex-1 text-center">
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-gray-600 mt-2 font-medium">
              Welcome {localStorage.getItem("User")}! Continue your learning journey
            </p>
          </div>

          <div className="flex items-center gap-6 relative">
            

            {/* User Icon with Popup */}
            <button
              className="p-3 bg-white/80 hover:bg-indigo-100 rounded-xl relative shadow-md transition-all duration-300 border-2 border-indigo-200"
              onClick={() => setIsPopupOpen(!isPopupOpen)}
            >
              <FiUser className="w-6 h-6 text-indigo-600" />
              </button>

            {/* Popup */}
            {isPopupOpen && (
              <div className="absolute right-0 top-16 bg-white/95 backdrop-blur-lg shadow-xl rounded-xl p-6 w-56 z-50 border-2 border-indigo-100 transform transition-all duration-300 ease-out">
                <p className="text-gray-800 font-semibold text-lg mb-2">
                  {localStorage.getItem("User")}
                </p>
                <button
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition duration-300 transform hover:scale-105 active:scale-95 font-medium"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ">
            <h3 className="text-white/80 text-sm font-medium mb-2">Courses in Progress</h3>
            <p className="text-4xl font-bold text-white">
              {inProgressCount}
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ">
            <h3 className="text-white/80 text-sm font-medium mb-2">Completed Courses</h3>
            <p className="text-4xl font-bold text-white">
              {completedCount}
            </p>
          </div>
        </div>

        {/* Current Courses */}
        {courses.length > 0 ? (
          <section className="mb-32 bg-white/40 backdrop-blur-md rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-indigo-500 pb-2 inline-block">
              Continue Learning
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <div
                  key={course.courseId}
                  className="transform transition-all duration-500 hover:scale-105 animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          </section>
        ) : (
          <section className="mb-32 bg-white/40 backdrop-blur-md rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col items-center justify-center py-12">
              <FiBookOpen className="w-16 h-16 text-indigo-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Start Your Learning Journey
              </h2>
              <p className="text-gray-600 mb-6 text-center max-w-md">
                You haven't enrolled in any courses yet. Explore our course catalog to find the perfect courses for you!
              </p>
              <button
                onClick={() => navigate('/all-courses')}
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full 
                          hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 
                          transition-all duration-300 shadow-lg hover:shadow-indigo-500/25
                          font-medium"
              >
                Explore Courses
              </button>
            </div>
          </section>
        )}

        {/* Recommended Courses */}
        {recommendedCourses.length > 0 && (
          <section className="mt-8 mb-32 bg-white/40 backdrop-blur-md rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-indigo-500 pb-2 inline-block">
              Recommended for You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recommendedCourses.map((course, index) => (
                <div
                  key={course.courseId}
                  className="transform transition-all duration-500 hover:scale-105 animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <RemainingCourseCard
                    course={course}
                    loadAllCourses={loadAllCourses}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* New Courses */}
        
      </div>
    </div>
  );
}

export default DashBoard;
