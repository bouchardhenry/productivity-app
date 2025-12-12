import { useState } from "react";
import HabitForm from "../../components/habitForm/HabitForm";
import HabitsDiv from "../../components/habitsDiv/habitsDiv";
import styles from "./Habits.module.css";
import habitsIcon from "../../assets/glove.png"

export default function Habits() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className={styles.titleDiv}>
        <h1>Habits</h1>
        <h2>
          <strong>X</strong> of <strong>Y</strong> habits honored today
        </h2>
        <img src={habitsIcon} alt="Two hands reaching upward with a 3D box floating above them, symbolizing support, collaboration, or receiving resources" />
      </div>
      <div className={styles.habitsForm}>
        {show ? (
          <HabitForm onClose={() => setShow(false)} />
        ) : (
          <button onClick={() => setShow(true)} className={styles.addNewHabit}>Add a new Habit</button>
        )}
      </div>

      <div className={styles.habitsDiv}>
        <HabitsDiv />
      </div>
    </>
  );
}
