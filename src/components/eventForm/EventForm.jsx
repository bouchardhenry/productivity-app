import { useContext, useEffect, useState } from "react"
import { EventContext } from "../../context/EventContext"
import styles from '../eventForm/EventForm.module.css'

const EventForm = () => {

    const { events, setEvents, editEvent, stopEditing } = useContext(EventContext)
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    let now = new Date().toISOString().slice(0, 16)

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
            alert('You need to pick a valid date')
            return;
        }

        if (!title || !description || !start || !end){
            alert('You need to fill all the empty fields')
            return;
        }

        setEvents([...events, newEvent])
        emptyEvents()
        
    }

    return (
        <div className={styles.formDiv}>
            <form className={styles.form} onSubmit={addEvent}>
                <h2>Create an event</h2>
                <div className={styles.inputContainer}>
                <div>
                <label className={styles.startTime}>Starts: </label>
                <input type="datetime-local" min={now} max='2099-12-31T23:59' value={start} onChange={(e) => setStart(e.target.value)} />
                </div>
                <div>
                <label className={styles.endTime}>Ends: </label>
                <input type="datetime-local" min={now} max='2099-12-31T23:59' value={end} onChange={(e) => setEnd(e.target.value)} />
                </div>
                <input type="text" value={title} placeholder="Choose a title" onChange={(e) => setTitle(e.target.value)} />

                <textarea value={description} rows='4' cols='30' placeholder="Describe your event..." onChange={(e) => setDescription(e.target.value)} />
                <button>{ editEvent ? 'Save changes' : 'Add event' }</button>
                </div>
            </form>

        </div>
    )
}
export default EventForm