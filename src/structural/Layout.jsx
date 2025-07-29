import { Link, Outlet } from 'react-router'
import "./Layout.css"

const Layout = () => {
  return (
    <div>
      <div className='navbar-container'>
        <nav className='navbar' style={{justifyContent: "space-around", padding: "0.5rem 2rem", display: "flex"}}>
            <Link to="/" className='link' style={{animationDelay: '0.1s'}}>Home</Link>
            <Link to="/activity-menu" className='link' style={{animationDelay: '0.2s'}}>Activity Menu</Link>
            <Link to="/questionnaire" className='link' style={{animationDelay: '0.3s'}}>Questionnaire</Link>
            <Link to="/saved" className='link' style={{animationDelay: '0.4s'}}>My Saved Activities</Link>
        </nav>
      </div>
      <Outlet />
    </div>
  )
}

export default Layout