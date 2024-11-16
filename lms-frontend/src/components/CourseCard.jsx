import { useNavigate } from "react-router-dom";

function CourseCard({ course }) {
  const navigate = useNavigate();
  const UCID=course.userCourseId;
  const cName =course.courseTitle;
  
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
        <p className="text-sm text-gray-500 mt-1">{course.instructor}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="bg-blue-100 rounded-full px-3 py-1">
            <span className="text-sm text-blue-600">
              {course.progress} % Complete
            </span>
          </div>
          <button
            className="text-blue-600 hover:text-blue-700"
            onClick={() => navigate("/courseContent/" + UCID+"/"+cName)}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
