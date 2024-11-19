// function CourseCard({ course }) {
//     return (
//       <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//         <img
//           src={course.image}
//           alt={course.title}
//           className="w-full h-40 object-cover"
//         />
//         <div className="p-4">
//           <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
//           <p className="text-sm text-gray-500 mt-1">{course.instructor}</p>
//         </div>
//       </div>
//     );
//   }
  
//   export default CourseCard;
  


// AdminCourseCard Component
// import React from 'react';

// function AdminCourseCard({ course }) {
//   return (
//     <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
//       <img
//         src={course.image}
//         alt={course.title}
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-6">
//         <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
//         <p className="text-gray-600 mt-2">{course.instructor}</p>
//         <button className="mt-4 w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg shadow-lg hover:bg-indigo-700 transition-all">
//           View Course
//         </button>
//       </div>
//     </div>
//   );
// }

// export default AdminCourseCard;




// import React from 'react';

// function AdminCourseCard({ course }) {
//   return (
//     <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
//       <img
//         src={course.imgUrl}
//         alt={course.courseTitle}
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-6">
//         <h3 className="text-xl font-semibold text-gray-800">
//           {course.courseTitle}
//         </h3>
//         <p className="text-gray-600 mt-2">{course.courseDescription}</p>
//         <p className="text-gray-500 mt-1">
//           <strong>Duration:</strong> {course.courseDuration}
//         </p>
//         <p className="text-gray-500 mt-1">
//           <strong>Level:</strong> {course.courseLevel}
//         </p>
//         <p className="text-gray-500 mt-1">
//           <strong>Category:</strong> {course.courseCategory}
//         </p>
//         <button className="mt-4 w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg shadow-lg hover:bg-indigo-700 transition-all">
//           View Course
//         </button>
//       </div>
//     </div>
//   );
// }

// export default AdminCourseCard;


import React from 'react';

function AdminCourseCard({ course }) {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 p-1 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="bg-white bg-opacity-40 backdrop-blur-lg p-6 rounded-lg">
        <img
          src={course.imgUrl}
          alt={course.courseTitle}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-100">
            {course.courseTitle}
          </h3>
          <p className="text-gray-200 mt-2">{course.courseDescription}</p>
          <p className="text-gray-300 mt-1">
            <strong>Duration:</strong> {course.courseDuration}
          </p>
          <p className="text-gray-300 mt-1">
            <strong>Level:</strong> {course.courseLevel}
          </p>
          <p className="text-gray-300 mt-1">
            <strong>Category:</strong> {course.courseCategory}
          </p>
          <button className="mt-4 w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg shadow-lg hover:bg-indigo-700 transition-all" >
            View Course
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminCourseCard;


