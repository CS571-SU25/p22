import chili from '/chili.png'
import ActivityCard from './components/ActivityCard'
import './App.css'

function App() {

  return (
    <>
      <ActivityCard name={"Test"} img={{src: chili}} desc={"Description"} delay={100}/>
    </>
  )
}

export default App
