import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Pages.css';

function Home() {
  const { currentUser } = useAuth();

  return (
    <div className="home-container min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100">
      <div className="hero-section glass animate-fadein text-center py-16 mb-12">
        <h1 className="text-5xl font-extrabold mb-4 text-blue-800 drop-shadow-lg tracking-tight">TaskBoard Pro</h1>
        <p className="tagline text-xl text-gray-700 mb-8 max-w-2xl mx-auto">A collaborative project management platform that helps teams work efficiently</p>
        {currentUser ? (
          <Link to="/dashboard" className="cta-button bg-gradient-to-r from-blue-600 to-purple-500 text-white px-8 py-3 rounded-full shadow-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-600 transition">Go to Dashboard</Link>
        ) : (
          <Link to="/login" className="cta-button bg-gradient-to-r from-blue-600 to-purple-500 text-white px-8 py-3 rounded-full shadow-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-600 transition">Get Started</Link>
        )}
      </div>

      {/* Breaker Divider */}
      <div className="flex justify-center mb-12">
        <div className="w-2/3 h-1 rounded-full bg-gradient-to-r from-blue-300 via-pink-300 to-purple-300 opacity-70"></div>
      </div>

      <div className="features-section animate-slidein py-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Features</h2>
        <div className="feature-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="feature-card bg-white rounded-2xl shadow-xl p-8 border-t-4 border-blue-400 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Project Management</h3>
            <p className="text-gray-600">Create and manage projects with flexible boards</p>
          </div>
          <div className="feature-card bg-white rounded-2xl shadow-xl p-8 border-t-4 border-purple-400 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Task Organization</h3>
            <p className="text-gray-600">Create, assign and track tasks across different statuses</p>
          </div>
          <div className="feature-card bg-white rounded-2xl shadow-xl p-8 border-t-4 border-pink-400 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-pink-700 mb-2">Team Collaboration</h3>
            <p className="text-gray-600">Work together with your team in real-time</p>
          </div>
          <div className="feature-card bg-white rounded-2xl shadow-xl p-8 border-t-4 border-green-400 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Workflow Automation</h3>
            <p className="text-gray-600">Set up rules to automate your workflow processes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
