import React from 'react';
import Navbar from './Navbar';
import { BookOpen, Users, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 mix-blend-multiply z-10" />
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Education Background"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
            Transform Your Future
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto drop-shadow">
            Discover a world of knowledge with our cutting-edge learning platform
          </p>
          <button
            onClick={() => navigate("/register")}
            className="px-8 py-4 text-lg font-semibold rounded-full 
              bg-gradient-to-r from-blue-600 to-cyan-500 
              hover:from-blue-700 hover:to-cyan-600 
              text-white transform hover:scale-105 transition-all duration-200 
              shadow-lg hover:shadow-blue-500/25"
          >
            Start Learning Now
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Why Choose Our Platform?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-2xl bg-white/70 backdrop-blur-sm
              border border-blue-100 hover:border-blue-200 transition-all duration-300
              hover:shadow-xl hover:shadow-blue-100/50">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-blue-50 mb-4 group-hover:bg-blue-100 transition-colors">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blue-900">Expert-Led Content</h3>
                <p className="text-slate-600">
                  Learn from industry experts with our carefully curated courses and resources.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-2xl bg-white/70 backdrop-blur-sm
              border border-blue-100 hover:border-blue-200 transition-all duration-300
              hover:shadow-xl hover:shadow-blue-100/50">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-blue-50 mb-4 group-hover:bg-blue-100 transition-colors">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blue-900">Interactive Learning</h3>
                <p className="text-slate-600">
                  Engage with peers and mentors in our collaborative learning environment.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-2xl bg-white/70 backdrop-blur-sm
              border border-blue-100 hover:border-blue-200 transition-all duration-300
              hover:shadow-xl hover:shadow-blue-100/50">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-blue-50 mb-4 group-hover:bg-blue-100 transition-colors">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blue-900">Industry Recognition</h3>
                <p className="text-slate-600">
                  Earn verified certificates recognized by top employers worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;