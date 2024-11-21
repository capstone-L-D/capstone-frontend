import { useEffect, useState } from "react";
import RemainingCourseCard from "./RmainingCourseCard";
import CourseCard from "./CourseCard";
import { FiBookOpen, FiMenu, FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Sidebar from "./SideBar";

function AllCourses() {
  const navigate = useNavigate();
  const [allCourses, setAllCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [courses, setCourses] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const userId = localStorage.getItem("userId");
  const url2 = `http://localhost:8333/api/courses`;
  const url = `http://localhost:8333/api/user-courses/courses/${userId}`;
  const token = localStorage.getItem("authToken");

  const loadAllCourses = async () => {
    try {
      const userCoursesResponse = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const userCoursesData = await userCoursesResponse.json();
      console.log(userCoursesData);
      setCourses(userCoursesData);

      setIsLoading(true);
      const allCoursesResponse = await fetch(url2, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!allCoursesResponse.ok) {
        throw new Error("Failed to fetch courses");
      }

      const allCoursesData = await allCoursesResponse.json();

      // Filter out courses that user is already enrolled in
      const remainingCourses = allCoursesData.filter(
        (course) =>
          !userCoursesData.some(
            (userCourse) => userCourse.courseId === course.courseId
          )
      );

      setAllCourses(remainingCourses);
      setFilteredCourses(remainingCourses);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadAllCourses();
  }, []);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredCourses(allCourses);
      return;
    }

    const searchTermLower = searchTerm.toLowerCase();
    const filtered = allCourses.filter((course) => {
      const titleMatch = course.courseTitle
        ?.toLowerCase()
        .includes(searchTermLower);
      const categoryMatch = course.courseCategory
        ?.toLowerCase()
        .includes(searchTermLower);
      const instructorMatch = course.instructor
        ?.toLowerCase()
        .includes(searchTermLower);
      return titleMatch || categoryMatch || instructorMatch;
    });
    setFilteredCourses(filtered);
  }, [searchTerm, allCourses]);

  const handleSearch = () => {
    // Search is now handled by the useEffect above
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 p-8">
      <button
        className="p-4 fixed top-4 left-4 z-20 text-indigo-600 hover:text-indigo-800 focus:outline-none transition-colors duration-300"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <FiMenu className="w-6 h-6 transform hover:rotate-180 transition-transform duration-300" />
      </button>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Available Courses Section */}
      {allCourses.length > 0 ? (
        <section className="mt-8 bg-white/40 backdrop-blur-md rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
          <div className="flex flex-col gap-6 mb-8">
            <div className="flex items-center gap-3">
              <FiBookOpen className="w-8 h-8 text-indigo-600" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Explore New Courses
              </h2>
            </div>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Search courses"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </div>
              <button
                onClick={handleSearch}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
              >
                Search
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
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
          {filteredCourses.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600">
                No courses found matching your search.
              </p>
            </div>
          )}
        </section>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <FiBookOpen className="w-16 h-16 text-gray-400 mb-4" />
          <h3 className="text-xl text-gray-600 font-medium">
            No courses available at the moment
          </h3>
        </div>
      )}

      {/* Enrolled Courses Section */}
      {courses.length > 0 && (
        <section className="mb-8 bg-white/40 backdrop-blur-md rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <FiBookOpen className="w-8 h-8 text-indigo-600" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Your Enrolled Courses
            </h2>
          </div>
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
      )}
    </div>
  );
}

export default AllCourses;
