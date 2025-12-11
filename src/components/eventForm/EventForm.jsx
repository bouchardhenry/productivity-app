import { useContext, useEffect, useState } from "react"
import { EventContext } from "../../context/EventContext"
import styles from '../eventForm/EventForm.module.css'

const EventForm = () => {

    const { events, setEvents, editEvent, stopEditing } = useContext(EventContext)
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const emptyEvents = () => {
        setTitle('')
        setDescription('')
        setStart('')
        setEnd('')
    }

    useEffect(() => {
        if(editEvent){
            setTitle(editEvent.title)
            setDescription(editEvent.description)
            setStart(editEvent.start)
            setEnd(editEvent.end)
        }
    }, [editEvent])

    const addEvent = (e) => {
        e.preventDefault()
        console.log(events)

        if(editEvent){

            const updatedEvents = events.map(ev => 
                ev.id === editEvent.id ? 
                {...ev, title, description, start, end} : ev
            )
            
            setEvents(updatedEvents)
            stopEditing()
            emptyEvents()
            return;
        }

        let newEvent = {
            id: Date.now().toString(),
            title,
            description,
            start,
            end
        }

        if (start >= end ){
            alert('Du måste välja korrekt datum')
            return;
        }

        if (!title || !description || !start || !end){
            alert('Du måste fylla i alla fälten')
            return;
        }

        setEvents([...events, newEvent])
        emptyEvents()
        
    }

    return (
        <div className={styles.formDiv}>
            <form className={styles.form} onSubmit={addEvent}>
                <h2>Skapa ett event</h2>
                <div className={styles.inputContainer}>
                <div>
                <label className={styles.startTime}>Start: </label>
                <input type="datetime-local" value={start} onChange={(e) => setStart(e.target.value)} />
                </div>
                <div>
                <label className={styles.endTime}>Slut: </label>
                <input type="datetime-local" value={end} onChange={(e) => setEnd(e.target.value)} />
                </div>
                <input type="text" value={title} placeholder="Skriv en titel..." onChange={(e) => setTitle(e.target.value)} />

                <textarea value={description} rows='4' cols='30' placeholder="Beskriv din händelse..." onChange={(e) => setDescription(e.target.value)} />
                <button>{ editEvent ? 'Spara ändringar' : 'Lägg till' }</button>
                </div>
            </form>

        </div>
    )
}
export default EventForm