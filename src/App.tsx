import { Habit } from "./components/habit"

function App() {
  return (
    <div>
      <Habit completed={3}/>
      <Habit/>
      <Habit/>
      <Habit/>
      <Habit/>
    </div>
  )
}

export default App
