import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAction } from '../reducers/anecdoteReducer'
import { voteNotification } from '../reducers/notificationReducer';
import { search } from '../reducers/filterReducer'
import Notification from './Notification';

const AnecdoteList = (props) => {
    const dispatch = useDispatch()

    let firstAnecdotes = useSelector(state => state.anecdotes.sort(function (a, b) {
        return b.votes - a.votes
    }))

console.log('anecdotes in list', firstAnecdotes)

    const searchState = useSelector(state => state.search)

    const searchAnecdotes = (event) => {
        event.preventDefault()
        const searchVal = event.target.searchFor.value
        dispatch(search(searchVal))
        event.target.searchFor.value = ''
    }

    const filtering = firstAnecdotes.filter((anecdote) => anecdote && anecdote.content.toLowerCase().includes(searchState.payload))

    const anecdotes = searchState.payload === undefined ? firstAnecdotes : filtering

    const [notif, setNotif] = useState(false)

    const onVote = (anecdote) => {
        dispatch(voteAction(anecdote.id))
        setNotif(true)
        dispatch(voteNotification(anecdote.content))
        setTimeout(() => {
            setNotif(false)
        }, 3000)
    }

    return (
        <>
            {notif && <Notification />}
            <br></br>
            <form onSubmit={searchAnecdotes}>
                <button type="submit">search</button>
                <input name="searchFor" />
            </form>
            {anecdotes && anecdotes.map(anecdote =>
                <div key={anecdote.id && anecdote.id}>
                    <br></br>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        {anecdote.votes} votes
                        <button onClick={() => onVote(anecdote)}>vote</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default AnecdoteList