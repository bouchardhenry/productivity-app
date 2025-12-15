import { useState, useContext } from "react";
import { HabitsContext } from "../../context/HabitsContext";
import styles from "./Habitform.module.css";

export default function HabitForm({ onClose }) {
  const { addHabit } = useContext(HabitsContext);
  
  const habitsArray = [
    "Meditation",
    "Journaling",
    "Exercise",
    "Water Intake",
    "Reading",
    "Sleep 8hrs",
  ];

  const priorityArray = ["High", "Medium", "Low"];

  const [selectedHabit, setSelectedHabit] = useState(habitsArray[0]);
  const [selectedPriority, setSelectedPriority] = useState(priorityArray[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addHabit(selectedHabit, selectedPriority);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formContent}>
      <label htmlFor="habits">Select a new habit</label>
      <br />
      <select
        name="habits"
        id="habits"
        value={selectedHabit}
        onChange={(e) => setSelectedHabit(e.target.value)}
      >
        {habitsArray.map((habit) => (
          <option key={habit} value={habit}>
            {habit}
          </option>
        ))}
      </select>
      <br />
      <br />
      <label htmlFor="priorities">Priority</label>
      <br />
      <select
        name="priorities"
        id="priorities"
        value={selectedPriority}
        onChange={(e) => setSelectedPriority(e.target.value)}
      >
        {priorityArray.map((priority) => (
          <option key={priority} value={priority}>
            {priority}
          </option>
        ))}
      </select>
      </div>
      <br />
      <br />
      <button type="submit" className={styles.addBtn}>Add</button>
    </form>
  );
}