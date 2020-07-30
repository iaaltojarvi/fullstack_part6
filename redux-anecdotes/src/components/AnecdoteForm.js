import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import Notification from './Notification';

const NewAnecdote = (props) => {
    const [anecdote, setAnecdote] = useState('')
    const dispatch = useDispatch()
    const notifState = useSelector(state => state.notification)

    const createNew = async (event) => {
        event.preventDefault()
        dispatch(newAnecdote(anecdote))
        dispatch(setNotification(`You added '${anecdote}'`, 3500))
        setTimeout(() => {
            setAnecdote('')
        }, 3000)
    }

    return (
        <>
            {notifState !== '' && notifState.includes('voted') ? <Notification /> : null}
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