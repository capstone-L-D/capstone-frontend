// import { FiHome, FiBook, FiCalendar, FiSettings, FiHelpCircle } from 'react-icons/fi';

// function Sidebar() {
//   const menuItems = [
//     { icon: FiHome, label: 'Dashboard', active: true },
//     { icon: FiBook, label: 'My Courses' },
//     { icon: FiCalendar, label: 'Schedule' },
//     { icon: FiSettings, label: 'Settings' },
//     { icon: FiHelpCircle, label: 'Help Center' },
//   ];

//   return (
//     <div className="w-64 h-screen bg-white border-r border-gray-200 fixed left-0 top-0">
//       <div className="p-6">
//         <h1 className="text-2xl font-bold text-blue-600">LearnHub</h1>
//       </div>
//       <nav className="mt-6">
//         {menuItems.map((item, index) => (
//           <a
//             key={index}
//             href="#"
//             className={`flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${
//               item.active ? 'bg-blue-50 text-blue-600' : ''
//             }`}
//           >
//             <item.icon className="w-5 h-5 mr-3" />
//             <span>{item.label}</span>
//           </a>
//         ))}
//       </nav>
//     </div>
//   );
// }

// export default Sidebar;






// import { FiHome, FiBook, FiCalendar, FiSettings, FiHelpCircle } from 'react-icons/fi';

// function Sidebar() {
//   const menuItems = [
//     { icon: FiHome, label: 'Dashboard', active: true },
//     { icon: FiBook, label: 'My Courses' },
//     { icon: FiCalendar, label: 'Schedule' },
//     { icon: FiSettings, label: 'Settings' },
//     { icon: FiHelpCircle, label: 'Help Center' },
//   ];

//   return (
//     <div className="w-64 h-screen bg-white shadow-lg fixed left-0 top-0 flex flex-col border-r border-gray-200">
//       {/* Logo */}
//       <div className="p-6">
//         <h1 className="text-3xl font-extrabold text-indigo-600">LearnHub</h1>
//       </div>
      
//       {/* Navigation Menu */}
//       <nav className="flex-grow mt-6">
//         {menuItems.map((item, index) => (
//           <a
//             key={index}
//             href="#"
//             className={`flex items-center px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200 ${
//               item.active ? 'bg-indigo-50 text-indigo-600 font-semibold' : ''
//             }`}
//           >
//             <item.icon className="w-5 h-5 mr-3" />
//             <span>{item.label}</span>
//           </a>
//         ))}
//       </nav>
      
//       {/* Footer */}
//       <div className="p-6 text-gray-400 text-sm border-t border-gray-100">
//         © 2024 LearnHub
//       </div>
//     </div>
//   );
// }

// export default Sidebar;

import { FiHome, FiBook, FiCalendar, FiSettings, FiHelpCircle, FiX } from 'react-icons/fi';

function Sidebar({ isOpen, onClose }) {
  const menuItems = [
    { icon: FiHome, label: 'Dashboard', active: true },
    { icon: FiBook, label: 'My Courses' },
    { icon: FiCalendar, label: 'Schedule' },
    { icon: FiSettings, label: 'Settings' },
    { icon: FiHelpCircle, label: 'Help Center' },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out z-30`}
    >
      <div className="p-6 flex justify-between items-center border-b border-gray-200">
        <h1 className="text-2xl font-bold text-blue-600">LearnHub</h1>
        <button onClick={onClose} className="text-gray-600 hover:text-gray-800 focus:outline-none">
          <FiX className="w-6 h-6" />
        </button>
      </div>
      <nav className="mt-6">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 ${
              item.active ? 'bg-blue-50 text-blue-600 font-semibold' : ''
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
      <div className="p-6 text-gray-400 text-sm border-t border-gray-100">
        © 2024 LearnHub
      </div>
    </div>
  );
}

export default Sidebar;

