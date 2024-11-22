import { FiHome, FiBook, FiCalendar, FiSettings, FiHelpCircle, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Sidebar({ isOpen, onClose }) {
  const menuItems = [
    { icon: FiHome, label: 'Dashboard', path: '/dashboard', active: true },
    { icon: FiBook, label: 'All Courses', path: '/all-courses' },
  
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out z-30`}
    >
      <div className="p-6 flex justify-between items-center border-b border-gray-200">
        <h1 className="text-2xl font-bold text-blue-600">Emp-Power</h1>
        <button onClick={onClose} className="text-gray-600 hover:text-gray-800 focus:outline-none">
          <FiX className="w-6 h-6" />
        </button>
      </div>
      <nav className="mt-6">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 ${
              item.active ? 'bg-blue-50 text-blue-600 font-semibold' : ''
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="p-6 text-gray-400 text-sm border-t border-gray-100">
        © 2024 Emp-Power
      </div>
    </div>
  );
}

export default Sidebar;
