import { useNavigate } from "react-router-dom";

function CourseCard({ course }) {
  const navigate = useNavigate();
  const UCID=course.userCourseId;
  const cName =course.courseTitle;
  const cId=course.courseId;
  const discription = course.courseDescription;
  
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
        <p className="text-sm text-gray-600 mt-2 line-clamp-2 h-10">
          {discription}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <div className="bg-blue-100 rounded-full px-3 py-1">
            <span className="text-sm text-blue-600">
              {course.progress} % Complete
            </span>
          </div>
          <button
            className={`${course.progress === 100 ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'} text-white px-4 py-2 rounded-lg transition-colors duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
            onClick={() => navigate("/courseContent/" + UCID+"/"+cName+"/"+cId)}
          >
            {course.progress === 100 ? 'Completed' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
