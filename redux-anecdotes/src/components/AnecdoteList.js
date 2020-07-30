import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAction } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer';
import { search } from '../reducers/filterReducer'
import Notification from './Notification';

const AnecdoteList = (props) => {
    const dispatch = useDispatch()

    let firstAnecdotes = useSelector(state => state.anecdotes.sort(function (a, b) {
        return b.votes - a.votes
    }))

    const notifState = useSelector(state => state.notification)

    const searchState = useSelector(state => state.search)

    const searchAnecdotes = (event) => {
        event.preventDefault()
        const searchVal = event.target.searchFor.value
        dispatch(search(searchVal))
        event.target.searchFor.value = ''
    }

    const filtering = firstAnecdotes.filter((anecdote) => anecdote && anecdote.content.toLowerCase().includes(searchState.payload))

    const anecdotes = searchState.payload === undefined ? firstAnecdotes : filtering

    const onVote = (anecdote) => {
        dispatch(voteAction(anecdote.id, anecdote.content, anecdote.votes))
        dispatch(setNotification(`You voted '${anecdote.content}'`, 3500))
    }

    return (
        <>
            {notifState !== '' && notifState.includes('added') ? <Notification /> : null}
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