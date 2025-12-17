import { useState } from "react";
import HabitForm from "../../components/habit/habitForm/HabitForm";
import HabitsDiv from "../../components/habit/habitsDiv/habitsDiv";
import styles from "./Habits.module.css";
import Navigation from "../../components/navigation/Navigation";

export default function Habits() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="layout">
        <Navigation />
        <main className="content">
          <div className={styles.titleDiv}>
            <h1>Habits</h1>
            <h2>
              <strong>X</strong> of <strong>Y</strong> habits honored today
            </h2>
          </div>
          <div className={styles.habitsForm}>
            {show ? (
              <>
                {/* OVERLAY */}
                <div
                  className={styles.overlay}
                  onClick={() => setShow(false)}
                ></div>

                {/* MODAL */}
                <div className={styles.modal}>
                  <button
                    className={styles.closeBtn}
                    onClick={() => setShow(false)}
                  >
                    ✕
                  </button>
                  <HabitForm onClose={() => setShow(false)} />
                </div>
              </>
            ) : (
              <button
                onClick={() => setShow(true)}
                className={styles.addNewHabit}
              >
                Add a new Habit
              </button>
            )}
          </div>

          <div className={styles.habitsDiv}>
            <HabitsDiv />
          </div>
        </main>
      </div>
    </>
  );
}
