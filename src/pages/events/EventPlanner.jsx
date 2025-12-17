import { useContext, useState } from 'react'
import { EventContext } from '../../context/EventContext'
import styles from '../../components/event/EventsDiv/Events.module.css' 
import EventForm from '../../components/event/eventForm/EventForm'
import Events from '../../components/event/EventsDiv/Events'
import Navigation from "../../components/navigation/Navigation";

export default function EventPlanner() {
  const [show, setShow] = useState(true);

    const {events, showForm, setShowForm} = useContext(EventContext)

    return(
        <>
          <div className="layout">
            <Navigation />
              <main className="content">
                {showForm ? <EventForm /> : 
                <button onClick={() => setShowForm(true)} className={styles.newEventButton}>Create new event</button>
                }
                { events.length < 1 ? <p className={styles.popupText}>Created events will show here!</p> : <Events />}
              </main>
          </div>
        </>
    )
}
