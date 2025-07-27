import { Link } from 'react-router'

const NavBar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/activity-menu" style={{ marginRight: '1rem' }}>Activity Menu</Link>
      <Link to="/questionnaire" style={{ marginRight: '1rem' }}>Questionnaire</Link>
      <Link to="/saved" style={{ marginRight: '1rem' }} >My Saved Activities</Link>
    </nav>
  )
}

export default NavBar