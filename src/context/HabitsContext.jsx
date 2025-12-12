import { createContext, useState } from "react";

export const HabitsContext = createContext();

export function HabitsProvider({ children }) {
  const [habits, setHabits] = useState([]);

  const addHabit = (habit, priority) => {
    const newHabit = {
      id: Date.now(),
      habit,
      priority,
    };
    setHabits([...habits, newHabit]);
  };

  return (
    <HabitsContext.Provider value={{ habits, addHabit }}>
      {children}
    </HabitsContext.Provider>
  );
}