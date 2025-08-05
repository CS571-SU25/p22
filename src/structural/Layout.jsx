import { Link, Outlet, useLocation } from 'react-router'
import "./Layout.css"

const Layout = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isActive = (path) => currentPath === path;

  return (
    <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <div className='navbar-container'>
        <nav className='navbar' style={{justifyContent: "space-around", padding: "0.5rem 2rem", display: "flex"}}>
            <Link to="/" className={`link ${isActive('/') ? 'active-link' : ''}`} style={{animationDelay: '0.1s'}}>Home</Link>
            <Link to="/activity-menu" className={`link ${isActive('/activity-menu') ? 'active-link' : ''}`} style={{animationDelay: '0.2s'}}>Activity Menu</Link>
            <Link to="/questionnaire" className={`link ${isActive('/questionnaire') ? 'active-link' : ''}`} style={{animationDelay: '0.3s'}}>Questionnaire</Link>
            <Link to="/saved" className={`link ${isActive('/saved') ? 'active-link' : ''}`} style={{animationDelay: '0.4s'}}>My Saved Activities</Link>
        </nav>
      </div>
      <div style={{ flexGrow: 1, alignContent: 'center' }}>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout