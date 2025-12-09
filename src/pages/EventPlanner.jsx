import EventForm from '../components/navigation/eventForm/EventForm/'
import Events from '../components/EventsDiv/Events'
import { useState } from 'react'

export default function EventPlanner(){

    const [show, setShow] = useState(true)

    return(
        <>
        {show ? <EventForm /> : <button>Lägg till händelse</button>}
        <Events />
        </>
    )
}