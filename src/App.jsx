import chili from '/chili.png'
import ActivityCard from './components/ActivityCard'
import './App.css'

function App() {

  return (
    <>
      <ActivityCard name={"Chili"} img={{src: chili}} desc={"A delicious bowl of chili"} delay={100}/>
    </>
  )
}

export default App
