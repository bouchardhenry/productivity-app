import { useContext } from "react"
import { EventContext } from "../../context/EventContext"
import styles from '../EventsDiv/Events.module.css'

const Events = () => {

    const {events} = useContext(EventContext)
    return(
        <div className={styles.eventsGrid}>
            {events?.map(event => (
                <div className={styles.eventsDiv}>
                    <h3>{event.title}</h3>
                    <ul>
                        <li>Starttid: {event.start}</li>
                        <li>Sluttid: {event.end}</li>
                        <li>Beskrivning: {event.description}</li>
                    </ul>
                </div>
            ))}
        </div>
    )
}
export default Events