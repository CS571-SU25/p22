import { HashRouter, Routes, Route } from 'react-router'
import './App.css'
import ActivityMenu from './components/ActivityMenu'
import Questionnaire from './components/Questionnaire'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'

function App() {

  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/activity-menu" element={<ActivityMenu />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
      </Routes>
    </HashRouter>
   
  )
}

export default App
