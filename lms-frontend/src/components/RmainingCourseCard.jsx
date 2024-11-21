import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RemainingCourseCard({ course,loadAllCourses }) {
  const navigate = useNavigate();
 
  const cName =course.courseTitle;
  const cId=course.courseId;
  const uId=localStorage.getItem("userId")
  const [error,setError]=useState("");
  const token = localStorage.getItem("authToken");
  const discription = course.courseDescription;
  const handleEnroll = async(e) =>{
    console.log("yes")
    try {
       
        const response = await fetch("http://localhost:8333/api/user-courses/enroll", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            userId: uId,
            courseId: cId
          }),
        });
      console.log(response);
      loadAllCourses();
     
     
    } catch (err) {
      if (err.response) {
        setError(
          `Login failed: ${
            err.response.data.message || err.response.statusText
          }`
        );
      } else if (err.request) {
        setError("No response received from the server. Please try again.");
      } else {
        setError(`Error: ${err.message}`);
      }
    }  



  }
  
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <img
        src={course.imgUrl}
        alt={course.courseTitle}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {course.courseTitle}
        </h3>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2 h-10">
          {discription}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <div className="bg-blue-100 rounded-full px-3 py-1">
            <span className="text-sm text-blue-600">
              {course.courseLevel} 
            </span>
          </div>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={handleEnroll}
          >
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
}

export default RemainingCourseCard;
