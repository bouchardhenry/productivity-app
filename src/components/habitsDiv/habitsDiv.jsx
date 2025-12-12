import { useContext } from "react";
import { HabitsContext } from "../../context/HabitsContext";

export default function HabitsDiv() {
  const { habits } = useContext(HabitsContext);

  return (
    <div>
      <h2>Your Habits</h2>
      {habits.length === 0 ? (
        <p>No habits yet. Add one to get started!</p>
      ) : (
        habits.map((habit) => (
          <div key={habit.id}>
            <h3>{habit.habit}</h3>
            <p>Priority: {habit.priority}</p>
          </div>
        ))
      )}
    </div>
  );
}
