import { createContext, useState } from "react"

export const EventContext = createContext()

export default function EventProvider({children}){

    const [events, setEvents] = useState([])


    return(
        <EventContext value={{events, setEvents}}>
            {children}
        </EventContext>
    )
}