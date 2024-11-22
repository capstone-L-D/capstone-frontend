import React from 'react';
import { GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => navigate('/')}
          >
            <div className="flex items-center group">
              <GraduationCap className="h-8 w-8 mr-2 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Emp-Power
              </span>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          
          <div className="flex items-center space-x-4">
         
          
          <button 
              onClick={() => navigate("/")} 
              className="px-6 py-2 text-sm font-medium rounded-full 
                text-blue-600 hover:bg-blue-50/80
                border border-blue-200 hover:border-blue-300
                transition-all duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => navigate("/login")} 
              className="px-6 py-2 text-sm font-medium rounded-full 
                text-blue-600 hover:bg-blue-50/80
                border border-blue-200 hover:border-blue-300
                transition-all duration-300"
            >
              Login
            </button>
            <button 
              onClick={() => navigate("/register")}
              className="px-6 py-2 text-sm font-medium rounded-full
                bg-gradient-to-r from-blue-600 to-cyan-500 
                hover:from-blue-700 hover:to-cyan-600
                text-white transform hover:scale-105 
                transition-all duration-300 shadow-lg 
                hover:shadow-blue-500/25"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;