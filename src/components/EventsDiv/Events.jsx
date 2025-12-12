import { useContext } from "react"
import { EventContext } from "../../context/EventContext"
import styles from '../EventsDiv/Events.module.css'

const Events = () => {

    const { sortedEvents, deleteEvent, startEditing } = useContext(EventContext)

    const isPastEvent = (event) => {
        const now = new Date();
        const startDate = new Date(event.end);
        return startDate < now;
    }
    return (
        <div className={styles.eventsGrid}>
            {sortedEvents?.map(event => (
                <div key={event.id} className={`${styles.eventsDiv} ${isPastEvent(event) ? styles.past : ''}`}>
                    <h3>{event.title}</h3>
                    <ul>
                        <li>Description: {event.description}</li>
                        <li>Starttime: {new Date(event.start).toLocaleDateString('sv-SE')} {' '}
                            {new Date(event.start).toLocaleTimeString('sv-SE',
                                { hour: '2-digit', minute: '2-digit' })}</li>
                        <li>Endtime: {new Date(event.end).toLocaleDateString('sv-SE')} {' '}
                            {new Date(event.end).toLocaleTimeString('sv-SE',
                                { hour: '2-digit', minute: '2-digit' })}</li>
                    </ul>
                    <div>
                        <button onClick={() => startEditing(event)}>Edit</button>
                        <button onClick={() => deleteEvent(event.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Events