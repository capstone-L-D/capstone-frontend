import { useNavigate } from "react-router-dom";
import { FiClock } from "react-icons/fi";

function CourseCard({ course }) {
  const navigate = useNavigate();
  const UCID=course.userCourseId;
  const cName =course.courseTitle;
  const cId=course.courseId;
  const discription = course.courseDescription;
  
  const getDaysUntilDeadline = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate - today;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const getDeadlineStyles = (deadline) => {
    const daysLeft = getDaysUntilDeadline(deadline);
    if (daysLeft < 0) {
      return {
        bg: "bg-gray-50",
        border: "border-gray-200",
        icon: "text-gray-500",
        text: "text-gray-600",
        highlight: "text-gray-500"
      };
    }
    if (daysLeft <= 1) {
      return {
        bg: "bg-red-50",
        border: "border-red-200",
        icon: "text-red-500",
        text: "text-red-600",
        highlight: "text-red-500"
      };
    }
    return {
      bg: "bg-indigo-50",
      border: "border-indigo-200",
      icon: "text-indigo-500",
      text: "text-indigo-600",
      highlight: "text-indigo-500"
    };
  };

  const getDeadlineText = (deadline) => {
    const daysLeft = getDaysUntilDeadline(deadline);
    if (daysLeft < 0) {
      return `Overdue by ${Math.abs(daysLeft)} day${Math.abs(daysLeft) !== 1 ? 's' : ''}`;
    }
    if (daysLeft <= 1) {
      return "Due Soon!  " + new Date(deadline).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })  ;
    }
    return new Date(deadline).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };
  
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
        {course.deadLine && (
          <div className={`mt-3 flex items-center ${getDeadlineStyles(course.deadLine).bg} rounded-lg p-2 border ${getDeadlineStyles(course.deadLine).border} transition-all duration-300 hover:shadow-md`}>
            <FiClock className={`${getDeadlineStyles(course.deadLine).icon} w-4 h-4 mr-2`} />
            <div>
              <span className={`text-xs font-medium ${getDeadlineStyles(course.deadLine).text}`}>
                {getDaysUntilDeadline(course.deadLine) < 0 ? 'Status:' : 'Due Date:'}
              </span>
              <span className={`text-sm ${getDeadlineStyles(course.deadLine).highlight} ml-2 font-medium ${getDaysUntilDeadline(course.deadLine) <= 1 && getDaysUntilDeadline(course.deadLine) >= 0 ? 'animate-pulse' : ''}`}>
                {getDeadlineText(course.deadLine)}
              </span>
            </div>
          </div>
        )}
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
