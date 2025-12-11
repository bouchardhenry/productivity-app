import { createContext, useState } from "react"

export const EventContext = createContext()

export default function EventProvider({children}){

    const [events, setEvents] = useState([])
    const [editEvent, setEditEvent] = useState(null)

    const startEditing = (event) => {
        setEditEvent(event)
    }
    const stopEditing = () => {
        setEditEvent(null)
    }

    const sortedEvents = [...events].sort(
        (a, b) => new Date(a.start) - new Date(b.start)
    )

    const deleteEvent = (id) => {

        setEvents([...events].filter(e => e.id !== id))

    }

    return(
        <EventContext value={{
            events, setEvents, sortedEvents, deleteEvent, editEvent, startEditing, stopEditing}}>
            {children}
        </EventContext>
    )
}