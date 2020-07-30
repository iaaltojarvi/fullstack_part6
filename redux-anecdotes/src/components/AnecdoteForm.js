import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { anecdoteNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'
import Notification from './Notification';

const NewAnecdote = (props) => {
    const [anecdote, setAnecdote] = useState('')
    const [notif, setNotif] = useState(false)
    const dispatch = useDispatch()

    const createNew = async (event) => {
        event.preventDefault()
        console.log('in create', anecdote)
        const posted = await anecdoteService.createNew(anecdote)
        console.log('posted', posted)
        dispatch(newAnecdote(anecdote))
        setNotif(true)
        dispatch(anecdoteNotification(anecdote))
        setTimeout(() => {
            setNotif(false)
            setAnecdote('')
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