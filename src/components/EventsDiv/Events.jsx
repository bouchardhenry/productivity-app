import { useContext } from "react"
import { EventContext } from "../../context/EventContext"

const Events = () => {

    const {events} = useContext(EventContext)
    return(
        <div>
            {events?.map(event => (
                <div>
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