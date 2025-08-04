import { Link, Outlet } from 'react-router'
import "./Layout.css"

const Layout = () => {
  return (
    <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <div className='navbar-container'>
        <nav className='navbar' style={{justifyContent: "space-around", padding: "0.5rem 2rem", display: "flex"}}>
            <Link to="/" className='link' style={{animationDelay: '0.1s'}}>Home</Link>
            <Link to="/activity-menu" className='link' style={{animationDelay: '0.2s'}}>Activity Menu</Link>
            <Link to="/questionnaire" className='link' style={{animationDelay: '0.3s'}}>Questionnaire</Link>
            <Link to="/saved" className='link' style={{animationDelay: '0.4s'}}>My Saved Activities</Link>
        </nav>
      </div>
      <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '100%' }}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout