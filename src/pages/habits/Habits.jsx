import { useState } from "react";
import HabitForm from "../../components/habitForm/HabitForm";
import HabitsDiv from "../../components/habitsDiv/habitsDiv";
import styles from "./Habits.module.css";

export default function Habits() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className={styles.titleDiv}>
        <h1>Habits</h1>
        <h2>
          <strong>4</strong> of <strong>6</strong> habits honored today
        </h2>
      </div>
      <div className={styles.habitsForm}>
        {show ? (
          <HabitForm onClose={() => setShow(false)} />
        ) : (
          <button onClick={() => setShow(true)}>Add a new Habit</button>
        )}
      </div>

      <div className={styles.habitsDiv}>
        <HabitsDiv />
      </div>
    </>
  );
}
