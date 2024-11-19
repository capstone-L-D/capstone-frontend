// import React, { useState } from "react";
// import { FaUserCircle } from "react-icons/fa";
// import AdminCourseCard from "./AdminCourseCard"; // Assuming CourseCard is correctly imported

// function AdminCourses() {
//   const [isProfileOpen, setIsProfileOpen] = useState(false);

//   const courses = [
//     {
//       id: 1,
//       title: "React.js Advanced Concepts",
//       instructor: "Sarah Johnson",
//       image:
//         "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     },
//     {
//       id: 2,
//       title: "Node.js Backend Development",
//       instructor: "Michael Chen",
//       image:
//         "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     },
//     {
//       id: 3,
//       title: "UI/UX Design Fundamentals",
//       instructor: "Emma Davis",
//       image:
//         "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     },
//     {
//       id: 4,
//       title: "Frontend Web Development",
//       instructor: "John Smith",
//       image:
//         "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     },
//     {
//       id: 5,
//       title: "Data Science Essentials",
//       instructor: "Alice Brown",
//       image:
//         "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     },
//   ];

//   // Sample user data
//   const user = {
//     name: "Admin Username",
//   };

//   // Sample navigation functions
//   const handleNavigateToCourses = () => {
//     console.log("Navigating to Courses...");
//   };

//   const handleNavigateToUsers = () => {
//     console.log("Navigating to Users...");
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       {/* Header */}
//       <header className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg">
//         <div className="container mx-auto py-4 px-6">
//           <h1 className="text-3xl font-bold">Welcome, Admin</h1>
//           <p className="text-sm text-indigo-200">Manage your courses effectively.</p>
//         </div>
//       </header>

//       {/* Main Layout */}
//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <aside className="w-64 bg-white shadow-lg">
//           <nav className="p-6">
//             <ul className="space-y-4">
//               <li>
//                 <button
//                   className="w-full text-left px-4 py-2 text-gray-700 font-medium hover:bg-indigo-100 hover:text-indigo-600 rounded-lg focus:outline-none"
//                   onClick={handleNavigateToCourses}
//                 >
//                   Courses
//                 </button>
//               </li>
//               <li>
//                 <button
//                   className="w-full text-left px-4 py-2 text-gray-700 font-medium hover:bg-indigo-100 hover:text-indigo-600 rounded-lg focus:outline-none"
//                   onClick={handleNavigateToUsers}
//                 >
//                   Users
//                 </button>
//               </li>
//             </ul>
//           </nav>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-8">
//           <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">Current Courses</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {courses.map((course) => (
//                 <AdminCourseCard key={course.id} course={course} />
//               ))}
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default AdminCourses;


// import React, { useState } from "react";
// import { FaUserCircle } from "react-icons/fa";
// import AdminCourseCard from "./AdminCourseCard"; // Renamed from CourseCard

// function AdminCourses() {
//   const [isProfileOpen, setIsProfileOpen] = useState(false);

//   const courses = [
//     {
//       id: 1,
//       title: "React.js Advanced Concepts",
//       instructor: "Sarah Johnson",
//       image:
//         "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     },
//     {
//       id: 2,
//       title: "Node.js Backend Development",
//       instructor: "Michael Chen",
//       image:
//         "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     },
//     {
//       id: 3,
//       title: "UI/UX Design Fundamentals",
//       instructor: "Emma Davis",
//       image:
//         "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     },
//     {
//       id: 4,
//       title: "Frontend Web Development",
//       instructor: "John Smith",
//       image:
//         "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     },
//     {
//       id: 5,
//       title: "Data Science Essentials",
//       instructor: "Alice Brown",
//       image:
//         "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     },
//   ];

//   // Sample user data
//   const user = {
//     name: "Admin Username",
//   };

//   // Sample navigation functions
//   const handleNavigateToCourses = () => {
//     console.log("Navigating to Courses...");
//   };

//   const handleNavigateToUsers = () => {
//     console.log("Navigating to Users...");
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       {/* Header */}
//       <header className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg">
//         <div className="container mx-auto py-4 px-6">
//           <h1 className="text-3xl font-bold">Welcome, Admin</h1>
//           <p className="text-sm text-indigo-200">Manage your courses effectively.</p>
//         </div>
//       </header>

//       {/* Main Layout */}
//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <aside className="w-64 bg-white shadow-lg">
//           <nav className="p-6">
//             <ul className="space-y-4">
//               <li>
//                 <button
//                   className="w-full text-left px-4 py-2 text-gray-700 font-medium hover:bg-indigo-100 hover:text-indigo-600 rounded-lg focus:outline-none"
//                   onClick={handleNavigateToCourses}
//                 >
//                   Courses
//                 </button>
//               </li>
//               <li>
//                 <button
//                   className="w-full text-left px-4 py-2 text-gray-700 font-medium hover:bg-indigo-100 hover:text-indigo-600 rounded-lg focus:outline-none"
//                   onClick={handleNavigateToUsers}
//                 >
//                   Users
//                 </button>
//               </li>
//             </ul>
//           </nav>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-8">
//           <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">Current Courses</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {courses.map((course) => (
//                 <AdminCourseCard key={course.id} course={course} />
//               ))}
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default AdminCourses;



// import React, { useState } from "react";
// import { FaUserCircle } from "react-icons/fa";
// import AdminCourseCard from "./AdminCourseCard"; // Renamed from CourseCard

// function AdminCourses() {
//   const [isProfileOpen, setIsProfileOpen] = useState(false);

//   const courses = [
//     {
//       id: 1,
//       title: "React.js Advanced Concepts",
//       instructor: "Sarah Johnson",
//       image:
//         "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     },
//     {
//       id: 2,
//       title: "Node.js Backend Development",
//       instructor: "Michael Chen",
//       image:
//         "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     },
//     {
//       id: 3,
//       title: "UI/UX Design Fundamentals",
//       instructor: "Emma Davis",
//       image:
//         "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     },
//     {
//       id: 4,
//       title: "Frontend Web Development",
//       instructor: "John Smith",
//       image:
//         "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     },
//     {
//       id: 5,
//       title: "Data Science Essentials",
//       instructor: "Alice Brown",
//       image:
//         "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     },
//   ];

//   // Sample user data
//   const user = {
//     name: "Admin Username",
//   };

//   // Sample navigation functions
//   const handleNavigateToCourses = () => {
//     console.log("Navigating to Courses...");
//   };

//   const handleNavigateToUsers = () => {
//     console.log("Navigating to Users...");
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       {/* Header */}
//       <header className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg">
//         <div className="container mx-auto py-6 px-6">
//           <h1 className="text-4xl font-bold">Welcome, Admin</h1>
//           <p className="text-lg text-indigo-200">Manage your courses effectively.</p>
//         </div>
//       </header>

//       {/* Main Layout */}
//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <aside className="w-64 bg-white shadow-lg">
//           <nav className="p-6">
//             <ul className="space-y-4">
//               <li>
//                 <button
//                   className="w-full text-left px-4 py-2 text-gray-700 font-medium hover:bg-indigo-100 hover:text-indigo-600 rounded-lg focus:outline-none transition-all"
//                   onClick={handleNavigateToCourses}
//                 >
//                   Courses
//                 </button>
//               </li>
//               <li>
//                 <button
//                   className="w-full text-left px-4 py-2 text-gray-700 font-medium hover:bg-indigo-100 hover:text-indigo-600 rounded-lg focus:outline-none transition-all"
//                   onClick={handleNavigateToUsers}
//                 >
//                   Users
//                 </button>
//               </li>
//             </ul>
//           </nav>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-8">
//           <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-8">
//             <h2 className="text-3xl font-bold text-gray-800 mb-6">Current Courses</h2>
//             <p className="text-lg text-gray-600 mb-8">Browse and manage the courses below.</p>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//               {courses.map((course) => (
//                 <AdminCourseCard key={course.id} course={course} />
//               ))}
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default AdminCourses;




// import React, { useState } from "react";
// import AdminHeaderSidebar from "./AdminHeaderSidebar"; // Import the AdminHeaderSidebar component
// import AdminCourseCard from "./AdminCourseCard"; // Renamed from CourseCard

// function AdminCourses() {
//   const [isProfileOpen, setIsProfileOpen] = useState(false);

//   const courses = [
//     {
//       id: 1,
//       title: "React.js Advanced Concepts",
//       instructor: "Sarah Johnson",
//       image:
//         "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     },
//     {
//       id: 2,
//       title: "Node.js Backend Development",
//       instructor: "Michael Chen",
//       image:
//         "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     },
//     {
//       id: 3,
//       title: "UI/UX Design Fundamentals",
//       instructor: "Emma Davis",
//       image:
//         "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     },
//     {
//       id: 4,
//       title: "Frontend Web Development",
//       instructor: "John Smith",
//       image:
//         "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     },
//     {
//       id: 5,
//       title: "Data Science Essentials",
//       instructor: "Alice Brown",
//       image:
//         "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     },
//   ];

//   // Sample user data
//   const user = {
//     name: "Admin Username",
//   };

//   // Sample navigation functions
//   const handleNavigateToCourses = () => {
//     console.log("Navigating to Courses...");
//   };

//   const handleNavigateToUsers = () => {
//     console.log("Navigating to Users...");
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       {/* Admin Header and Sidebar */}
//       <AdminHeaderSidebar
//         onNavigateToCourses={handleNavigateToCourses}
//         onNavigateToUsers={handleNavigateToUsers}
//       />

//       {/* Main Content */}
//       <main className="flex-1 p-8">
//         <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-8">
//           <h2 className="text-3xl font-bold text-gray-800 mb-6">Current Courses</h2>
//           <p className="text-lg text-gray-600 mb-8">Browse and manage the courses below.</p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {courses.map((course) => (
//               <AdminCourseCard key={course.id} course={course} />
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default AdminCourses;

// import React, { useState } from "react";
// import AdminHeaderSidebar from "./AdminHeaderSidebar"; // Import the AdminHeaderSidebar component
// import AdminCourseCard from "./AdminCourseCard"; // Renamed from CourseCard

// function AdminCourses() {
//   const [isProfileOpen, setIsProfileOpen] = useState(false);

//   const courses = [
//     {
//       id: 1,
//       title: "React.js Advanced Concepts",
//       instructor: "Sarah Johnson",
//       image:
//         "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     },
//     {
//       id: 2,
//       title: "Node.js Backend Development",
//       instructor: "Michael Chen",
//       image:
//         "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     },
//     {
//       id: 3,
//       title: "UI/UX Design Fundamentals",
//       instructor: "Emma Davis",
//       image:
//         "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     },
//     {
//       id: 4,
//       title: "Frontend Web Development",
//       instructor: "John Smith",
//       image:
//         "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     },
//     {
//       id: 5,
//       title: "Data Science Essentials",
//       instructor: "Alice Brown",
//       image:
//         "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     },
//   ];

//   // Sample user data
//   const user = {
//     name: "Admin Username",
//   };

//   // Sample navigation functions
//   const handleNavigateToCourses = () => {
//     console.log("Navigating to Courses...");
//   };

//   const handleNavigateToUsers = () => {
//     console.log("Navigating to Users...");
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       {/* Admin Header and Sidebar */}
//       <AdminHeaderSidebar
//         onNavigateToCourses={handleNavigateToCourses}
//         onNavigateToUsers={handleNavigateToUsers}
//       />

//       {/* Main Content (Courses Section) */}
//       <div className="flex flex-1">
//         {/* Sidebar is already handled by AdminHeaderSidebar */}
//         <main className="flex-1 p-8 ml-64"> {/* Added ml-64 to provide space for the sidebar */}
//           <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-8">
//             <h2 className="text-3xl font-bold text-gray-800 mb-6">Current Courses</h2>
//             <p className="text-lg text-gray-600 mb-8">Browse and manage the courses below.</p>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//               {courses.map((course) => (
//                 <AdminCourseCard key={course.id} course={course} />
//               ))}
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default AdminCourses;


// import React, { useState } from "react";
// import AdminHeaderSidebar from "./AdminHeaderSidebar"; // Import the AdminHeaderSidebar component
// import AdminCourseCard from "./AdminCourseCard"; // Renamed from CourseCard

// function AdminCourses() {
//   const [isProfileOpen, setIsProfileOpen] = useState(false);

//   const courses = [
//     {
//       id: 1,
//       title: "React.js Advanced Concepts",
//       instructor: "Sarah Johnson",
//       image:
//         "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     },
//     {
//       id: 2,
//       title: "Node.js Backend Development",
//       instructor: "Michael Chen",
//       image:
//         "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     },
//     {
//       id: 3,
//       title: "UI/UX Design Fundamentals",
//       instructor: "Emma Davis",
//       image:
//         "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     },
//     {
//       id: 4,
//       title: "Frontend Web Development",
//       instructor: "John Smith",
//       image:
//         "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     },
//     {
//       id: 5,
//       title: "Data Science Essentials",
//       instructor: "Alice Brown",
//       image:
//         "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     },
//   ];

//   // Sample user data
//   const user = {
//     name: "Admin Username",
//   };

//   // Sample navigation functions
//   const handleNavigateToCourses = () => {
//     console.log("Navigating to Courses...");
//   };

//   const handleNavigateToUsers = () => {
//     console.log("Navigating to Users...");
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       {/* Admin Header and Sidebar */}
//       <AdminHeaderSidebar
//         onNavigateToCourses={handleNavigateToCourses}
//         onNavigateToUsers={handleNavigateToUsers}
//       />

//       {/* Replace the <main> with the courses display */}
//       <div className="flex-1 p-8 ml-64">
//         <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-8">
//           <h2 className="text-3xl font-bold text-gray-800 mb-6">Current Courses</h2>
//           <p className="text-lg text-gray-600 mb-8">Browse and manage the courses below.</p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
//               <img
//                 src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
//                 alt="React.js Advanced Concepts"
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-800">React.js Advanced Concepts</h3>
//                 <p className="text-gray-600 mt-2">Sarah Johnson</p>
//                 <button className="mt-4 w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg shadow-lg hover:bg-indigo-700 transition-all">
//                   View Course
//                 </button>
//               </div>
//             </div>
//             <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
//               <img
//                 src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
//                 alt="Node.js Backend Development"
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-800">Node.js Backend Development</h3>
//                 <p className="text-gray-600 mt-2">Michael Chen</p>
//                 <button className="mt-4 w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg shadow-lg hover:bg-indigo-700 transition-all">
//                   View Course
//                 </button>
//               </div>
//             </div>
//             <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
//               <img
//                 src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
//                 alt="UI/UX Design Fundamentals"
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-800">UI/UX Design Fundamentals</h3>
//                 <p className="text-gray-600 mt-2">Emma Davis</p>
//                 <button className="mt-4 w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg shadow-lg hover:bg-indigo-700 transition-all">
//                   View Course
//                 </button>
//               </div>
//             </div>
//             <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
//               <img
//                 src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
//                 alt="Frontend Web Development"
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-800">Frontend Web Development</h3>
//                 <p className="text-gray-600 mt-2">John Smith</p>
//                 <button className="mt-4 w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg shadow-lg hover:bg-indigo-700 transition-all">
//                   View Course
//                 </button>
//               </div>
//             </div>
//             <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
//               <img
//                 src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
//                 alt="Data Science Essentials"
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-800">Data Science Essentials</h3>
//                 <p className="text-gray-600 mt-2">Alice Brown</p>
//                 <button className="mt-4 w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg shadow-lg hover:bg-indigo-700 transition-all">
//                   View Course
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminCourses;


// import React, { useState } from "react";
// import AdminHeaderSidebar from "./AdminHeaderSidebar"; // Import the AdminHeaderSidebar component

// function AdminCourses() {
//   const courses = [
//     {
//       id: 1,
//       title: "React.js Advanced Concepts",
//       instructor: "Sarah Johnson",
//       image:
//         "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     },
//     {
//       id: 2,
//       title: "Node.js Backend Development",
//       instructor: "Michael Chen",
//       image:
//         "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     },
//     {
//       id: 3,
//       title: "UI/UX Design Fundamentals",
//       instructor: "Emma Davis",
//       image:
//         "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     },
//     {
//       id: 4,
//       title: "Frontend Web Development",
//       instructor: "John Smith",
//       image:
//         "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     },
//     {
//       id: 5,
//       title: "Data Science Essentials",
//       instructor: "Alice Brown",
//       image:
//         "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     },
//   ];

//   const handleNavigateToCourses = () => {
//     console.log("Navigating to Courses...");
//   };

//   const handleNavigateToUsers = () => {
//     console.log("Navigating to Users...");
//   };

//   return (
//     <AdminHeaderSidebar
//       onNavigateToCourses={handleNavigateToCourses}
//       onNavigateToUsers={handleNavigateToUsers}
//     >
//       {/* Courses Section */}
//       <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-8">
//         <h2 className="text-3xl font-bold text-gray-800 mb-6">Current Courses</h2>
//         <p className="text-lg text-gray-600 mb-8">Browse and manage the courses below.</p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {courses.map((course) => (
//             <div
//               key={course.id}
//               className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
//             >
//               <img
//                 src={course.image}
//                 alt={course.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
//                 <p className="text-gray-600 mt-2">{course.instructor}</p>
//                 <button className="mt-4 w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg shadow-lg hover:bg-indigo-700 transition-all">
//                   View Course
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </AdminHeaderSidebar>
//   );
// }

// export default AdminCourses;





// import React from "react";
// import AdminHeaderSidebar from "./AdminHeaderSidebar";

// function AdminCourses() {
  
//     const courses = [
//       {
//         courseId: "1",
//         courseTitle: "React.js Advanced Concepts",
//         courseDescription: "Deep dive into React.js advanced features and patterns.",
//         courseDuration: "6 weeks",
//         courseLevel: "Advanced",
//         courseCategory: "Frontend Development",
//         imgUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//       },
//       {
//         courseId: "2",
//         courseTitle: "Node.js Backend Development",
//         courseDescription: "Learn how to build scalable backend applications with Node.js.",
//         courseDuration: "8 weeks",
//         courseLevel: "Intermediate",
//         courseCategory: "Backend Development",
//         imgUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//       },
//       {
//         courseId: "3",
//         courseTitle: "UI/UX Design Fundamentals",
//         courseDescription: "Master the essentials of user interface and user experience design.",
//         courseDuration: "4 weeks",
//         courseLevel: "Beginner",
//         courseCategory: "Design",
//         imgUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//       },
//       {
//         courseId: "4",
//         courseTitle: "Frontend Web Development",
//         courseDescription: "Comprehensive guide to modern frontend development practices.",
//         courseDuration: "10 weeks",
//         courseLevel: "Intermediate",
//         courseCategory: "Frontend Development",
//         imgUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//       },
//       {
//         courseId: "5",
//         courseTitle: "Data Science Essentials",
//         courseDescription: "Get started with data science, including Python and machine learning basics.",
//         courseDuration: "12 weeks",
//         courseLevel: "Beginner",
//         courseCategory: "Data Science",
//         imgUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//       },
//     ];
    

//   const handleNavigateToCourses = () => {
//     console.log("Navigating to Courses...");
//   };

//   const handleNavigateToUsers = () => {
//     console.log("Navigating to Users...");
//   };

//   return (
//     <AdminHeaderSidebar
//       onNavigateToCourses={handleNavigateToCourses}
//       onNavigateToUsers={handleNavigateToUsers}
//     >
//       <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-8">
//         <h2 className="text-3xl font-bold text-gray-800 mb-6">Current Courses</h2>
//         <p className="text-lg text-gray-600 mb-8">Browse and manage the courses below.</p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {courses.map((course) => (
//             <div
//               key={course.id}
//               className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
//             >
//               <img
//                 src={course.image}
//                 alt={course.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
//                 <p className="text-gray-600 mt-2">{course.instructor}</p>
//                 <button className="mt-4 w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg shadow-lg hover:bg-indigo-700 transition-all">
//                   View Course
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </AdminHeaderSidebar>
//   );
// }

// export default AdminCourses;




import React from "react";
import AdminHeaderSidebar from "./AdminHeaderSidebar";

function AdminCourses() {
  const courses = [
    {
      courseId: "1",
      courseTitle: "React.js Advanced Concepts",
      courseDescription: "Deep dive into React.js advanced features and patterns.",
      courseDuration: "6 weeks",
      courseLevel: "Advanced",
      courseCategory: "Frontend Development",
      imgUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      courseId: "2",
      courseTitle: "Node.js Backend Development",
      courseDescription: "Learn how to build scalable backend applications with Node.js.",
      courseDuration: "8 weeks",
      courseLevel: "Intermediate",
      courseCategory: "Backend Development",
      imgUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      courseId: "3",
      courseTitle: "UI/UX Design Fundamentals",
      courseDescription: "Master the essentials of user interface and user experience design.",
      courseDuration: "4 weeks",
      courseLevel: "Beginner",
      courseCategory: "Design",
      imgUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      courseId: "4",
      courseTitle: "Frontend Web Development",
      courseDescription: "Comprehensive guide to modern frontend development practices.",
      courseDuration: "10 weeks",
      courseLevel: "Intermediate",
      courseCategory: "Frontend Development",
      imgUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      courseId: "5",
      courseTitle: "Data Science Essentials",
      courseDescription: "Get started with data science, including Python and machine learning basics.",
      courseDuration: "12 weeks",
      courseLevel: "Beginner",
      courseCategory: "Data Science",
      imgUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
  ];

  const handleNavigateToCourses = () => {
    console.log("Navigating to Courses...");
  };

  const handleNavigateToUsers = () => {
    console.log("Navigating to Users...");
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
                {/* <p className="text-gray-500 mt-1">
                  <strong>Category:</strong> {course.courseCategory}
                </p> */}
                <button className="mt-4 w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg shadow-lg hover:bg-indigo-700 transition-all">
                  View Course
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
