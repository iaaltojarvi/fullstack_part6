import React, { useState, useSelector } from 'react'
import { useDispatch } from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { anecdoteNotification } from '../reducers/notificationReducer'
import Notification from './Notification';

const NewAnecdote = (props) => {
    const [anecdote, setAnecdote] = useState('')
    const [notif, setNotif] = useState(false)
    const dispatch = useDispatch()

    const createNew = (event) => {
        event.preventDefault()
        dispatch(newAnecdote(anecdote))
        setAnecdote('')
        setNotif(true)
        dispatch(anecdoteNotification(anecdote))
        setTimeout(() => {
            setNotif(false)
        }, 3000)
    }

    return (
        <>
            {notif && <Notification />}
            <form onSubmit={(event) => createNew(event)}>
                <h2>create new</h2>
                <div><input type="text" value={anecdote} onChange={event => setAnecdote(event.target.value)} /></div>
                <br></br>
                <button type="submit">create</button>
            </form>
        </>
    )
}

export default NewAnecdote