import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import './Layout.css';

function Header() {
  const { currentUser, logOut } = useAuth();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <header className="app-header glass animate-fadein" style={{ background: 'rgba(245,245,247,0.85)', padding: '0.2rem 1.2rem', height: '48px', display: 'flex', alignItems: 'center' }}>
      <div className="logo" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <Link to="/" style={{ color: '#2563eb', fontWeight: 800, fontSize: '1.5rem', textDecoration: 'none' }}>TaskBoard Pro</Link>
      </div>
      
      <nav className="nav-links" style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
        {currentUser ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/projects">Projects</Link>
          </>
        ) : (
          <Link to="/about">About</Link>
        )}
      </nav>
      
      <div className="user-section" style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
        {currentUser ? (
          <div className="user-profile">
            <Link to="/profile" className="user-avatar-link">
              <img 
                src={currentUser.photoURL || '/default-avatar.png'} 
                alt="Profile" 
                className="user-avatar" 
              />
            </Link>
            <span className="user-name">{currentUser.displayName}</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        ) : (
          <Link to="/login" className="login-btn">Login</Link>
        )}
      </div>
    </header>
  );
}

export default Header;
