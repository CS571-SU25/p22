import { HashRouter, Routes, Route } from 'react-router'
import './App.css'
import ActivityMenu from './components/activity-menu/ActivityMenu'
import Questionnaire from './components/questionnaire/Questionnaire'
import Recommendation from './components/questionnaire/Recommendation'
import SavedActivities from './components/saved-activities/SavedActivities'
import HomePage from './components/home/HomePage'
import Layout from './structural/Layout'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="activity-menu" element={<ActivityMenu />} />
          <Route path="questionnaire" element={<Questionnaire />} />
          <Route path="recommendation" element={<Recommendation />} />
          <Route path="saved" element={<SavedActivities />} /> 
        </Route>
      </Routes>
    </HashRouter>
   
  )
}

export default App
