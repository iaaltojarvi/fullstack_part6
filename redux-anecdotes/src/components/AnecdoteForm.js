import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { newAnecdote } from './../reducers/anecdoteReducer';

const NewAnecdote = (props) => {
    const [anecdote, setAnecdote] = useState('')
    const dispatch = useDispatch()

    const createNew = (event) => {
        event.preventDefault()
        dispatch(newAnecdote(anecdote))
    }

    return (
        <form onSubmit={(event) => createNew(event)}>
            <h2>create new</h2>
            <div><input type="text" value={anecdote} onChange={event => setAnecdote(event.target.value)} /></div>
            <br></br>
            <button>create</button>
        </form>
    )
}

export default NewAnecdote