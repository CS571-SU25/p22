import { HashRouter, Routes, Route } from 'react-router'
import './App.css'
import ActivityMenu from './components/activity-menu/ActivityMenu'
import Questionnaire from './components/questionnaire/Questionnaire'
import Recommendation from './components/questionnaire/Recommendation'
import SavedActivities from './components/saved-activities/SavedActivities'
import HomePage from './components/home/HomePage'
import Layout from './structural/Layout'
import PageDNE from './components/page-not-found/PageDNE'
import Activity from './components/activity-page/Activity'
import { useEffect, useState } from 'react'
import fetchWeather from './tools/fetchWeather'
import SavedActivitiesContext from './contexts/SavedActivitiesContext'
import useStorage from "./hooks/useStorage"

function App() {
  const [activityData, setActivityData] = useState([]);
  const [weatherData, setWeatherData] = useState({});
  const [savedActivities, setSavedActivities] = useStorage("saved-activities", []);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/p22/activities/activityData.json");
      const data = await res.json();
      setActivityData(data);
    }

    const getWeather = async () => {
      const weather = await fetchWeather();
      setWeatherData(weather.current);
    }

    getData();
    getWeather();
  }, [])
    
  return (
    <SavedActivitiesContext.Provider value={[savedActivities, setSavedActivities]}> 
      <HashRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<HomePage weather={weatherData}/>} />
              <Route path="activity-menu" element={<ActivityMenu />} />
              <Route path="questionnaire" element={<Questionnaire />} />
              <Route path="recommendation" element={<Recommendation />} />
              <Route path="saved" element={<SavedActivities />} /> 
              {
                activityData.map(activity => <Route path={activity.name} element={<Activity {...activity}/>}/>)
              }
              <Route path='*' element={<PageDNE />}/>
            </Route>
        </Routes>
      </HashRouter>
    </SavedActivitiesContext.Provider>
  )
}

export default App
