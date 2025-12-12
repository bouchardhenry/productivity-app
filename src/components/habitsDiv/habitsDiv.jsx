import { useContext } from "react";
import { HabitsContext } from "../../context/HabitsContext";
import styles from "./habitsDiv.module.css"
import Repetition from "./repetiton";

export default function HabitsDiv() {
  const { habits } = useContext(HabitsContext);

  return (
    <div className={styles.habits}>
      <h2>Your Habits</h2>
      <div className={styles.habitCards}>
      {habits.length === 0 ? (
        <p>No habits yet. Add one to get started!</p>
      ) : (
        habits.map((habit) => (
          <div key={habit.id} className={styles.habitCard}>
            <h3>{habit.habit}</h3>
            <p>Priority: {habit.priority}</p>
            <Repetition />
          </div>
        ))
      )}
      </div>
    </div>
  );
}
