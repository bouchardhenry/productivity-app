import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/dashboard/Home";
import TodosActivities from "./pages/TodosActivities/TodosActivities";
import Habits from "./pages/habits/Habits";
import EventPlanner from "./pages/events/EventPlanner";
import Login from "./pages/login/Login";
import ErrorPage from "./pages/errorpage/ErrorPage";
import SignUp from "./pages/signup/SignUp";
import EventProvider from "./context/EventContext";
import TodoProvider from "./context/TodoContext";
import { HabitsProvider } from "./context/HabitsContext";

function App() {
  return (
    <>
      <EventProvider>
        <HabitsProvider>
        <TodoProvider>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/todos" element={<TodosActivities />} />
                <Route path="/habits" element={<Habits />} />
                <Route path="/events" element={<EventPlanner />} />
                <Route path="/dashboard" element={<Home />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
              </TodoProvider>
        </HabitsProvider>
      </EventProvider>
    </>
  );
}

export default App;
