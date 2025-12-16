import EventForm from "../components/eventForm/EventForm";
import Events from "../components/EventsDiv/Events";
import { useState } from "react";
import styles from "../components/eventForm/EventForm.module.css";
import Navigation from "../components/navigation/Navigation";

export default function EventPlanner() {
  const [show, setShow] = useState(true);

  return (
    <>
      <div className="layout">
        <Navigation />
        <main className="content">
          {!show ? (
            <EventForm />
          ) : (
            <button
              onClick={() => setShow(false)}
              className={styles.newEventButton}
            >
              Skapa ny händelse
            </button>
          )}
          <Events />
        </main>
      </div>
    </>
  );
}
