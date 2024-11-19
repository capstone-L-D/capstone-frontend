import { useNavigate, useLocation } from 'react-router-dom';
import { FiHome, FiBook, FiClipboard, FiMessageSquare } from 'react-icons/fi';

function UserNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname.includes(path);
  };

  const navButtonStyle = (active) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 20px',
    backgroundColor: active ? '#1a4b8c' : '#003366',
    color: '#ffffff',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    fontSize: '16px',
    fontWeight: '500',
    borderRadius: '5px',
    margin: '0 5px',
  });

  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#003366',
    color: '#ffffff',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
  };

  return (
    <nav style={navbarStyle}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <button
          style={navButtonStyle(isActive('/Dashboard'))}
          onClick={() => navigate('/Dashboard')}
        >
          <FiHome />
          Dashboard
        </button>

        <button
          style={navButtonStyle(isActive('/Course'))}
          onClick={() => navigate(-1)}
        >
          <FiBook />
          Course Content
        </button>

        <button
          style={navButtonStyle(isActive('/Assessment'))}
          onClick={() => navigate(-1)}
        >
          <FiClipboard />
          Assessment
        </button>

        <button
          style={navButtonStyle(isActive('/Feedback'))}
          onClick={() => navigate(-1)}
        >
          <FiMessageSquare />
          Feedback
        </button>
      </div>

      <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
        Course Management System
      </div>
    </nav>
  );
}

export default UserNavbar;

