import React, { useState } from 'react'
import { connect } from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const NewAnecdote = (props) => {
    const [anecdote, setAnecdote] = useState('')

    const createNew = async (event) => {
        event.preventDefault()
        setAnecdote(event.target.value)
        props.newAnecdote(anecdote)
        props.setNotification(`You added '${anecdote}'`)
        setAnecdote('')
    }

    return (
        <>
            <form onSubmit={(event) => createNew(event)}>
                <h2>create new</h2>
                <div><input type="text" value={anecdote} onChange={event => setAnecdote(event.target.value)} /></div>
                <br></br>
                <button type="submit">create</button>
            </form>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        newAnecdote: state.newAnecdote,
        notification: state.notification
    }
}

const mapDispatchToProps = {
    setNotification,
    newAnecdote,
}

const ConnectedAnecdoteForm = connect(mapStateToProps, mapDispatchToProps)(NewAnecdote)

export default ConnectedAnecdoteForm