import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";

export const HabitsContext = createContext();

export function HabitsProvider({ children }) {
  const [habits, setHabits] = useState([]);
  const {currentUser} = useContext(UserContext)

  useEffect(() => {
        if(currentUser){
            const allHabits = JSON.parse(localStorage.getItem('habits')) || {}
            const currentUserHabits = allHabits[currentUser.id] || []
            setHabits(currentUserHabits)
        }else{
            setHabits([])
        }
    }, [currentUser])

  useEffect(() => {
        if (currentUser && habits.length >= 0){

            const allHabits = JSON.parse(localStorage.getItem('habits')) || {}

            allHabits[currentUser.id] = habits
            localStorage.setItem('habits', JSON.stringify(allHabits))
        }
    }, [habits, currentUser])

  const addHabit = (habit, priority) => {
    const newHabit = {
      id: Date.now(),
      userId: currentUser.id,
      habitId: habit.id,
      label: habit.label,
      icon: habit.icon,
      priority,
      repetitions: 0,
    };
    setHabits((prev) => [...prev, newHabit]);
  };

  const updateRepetitions = (id, newCount) => {
    setHabits(
      habits.map((h) => (h.id === id ? { ...h, repetitions: newCount } : h))
    );
  };

  return (
    <HabitsContext.Provider value={{ habits, addHabit, updateRepetitions }}>
      {children}
    </HabitsContext.Provider>
  );
}
