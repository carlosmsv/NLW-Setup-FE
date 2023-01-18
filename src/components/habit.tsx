interface HabitProps {
  completed: number
}

export function Habit(props){
  return (
    <p>{props.completed}</p>
  )
}