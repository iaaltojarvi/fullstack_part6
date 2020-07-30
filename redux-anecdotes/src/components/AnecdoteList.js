import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAction } from '../reducers/anecdoteReducer'
import { voteNotification } from '../reducers/notificationReducer';
import { search } from '../reducers/filterReducer'
import Notification from './Notification';
import Filter from './Filter'

const AnecdoteList = (props) => {
    const dispatch = useDispatch()

    const searchAnecdotes = (event) => {
        event.preventDefault()
        const searchVal = event.target.searchFor.value
        event.target.searchFor.value = ''
        dispatch(search(searchVal))
    }

    let firstAnecdotes = useSelector(state => state.anecdotes.sort(function (a, b) {
        return b.votes - a.votes
    }))
    const searchState = useSelector(state => state.search)
    const filtering = firstAnecdotes.filter((anecdote) => anecdote.content.toLowerCase().includes(searchState.payload))
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
            <form onSubmit={searchAnecdotes}>
                <input name="searchFor" />
                <button type="submit">search</button>
            </form>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        {anecdote.votes} votes
                    <br></br>
                        <button onClick={() => onVote(anecdote)}>vote</button>
                    </div>
                    <br></br>
                </div>
            )}
        </>
    )
}

export default AnecdoteList