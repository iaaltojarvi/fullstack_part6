import React, { useState } from 'react'
import { useDispatch, useSelector, connect } from 'react-redux'
import { voteAction } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer';
import { search } from '../reducers/filterReducer'

const AnecdoteList = (props) => {
    const dispatch = useDispatch()

    let firstAnecdotes = props.anecdotes.sort(function (a, b) {
        return b.votes - a.votes
    })

    const searchState = useSelector(state => state.search)

    const searchAnecdotes = (event) => {
        event.preventDefault()
        const searchVal = event.target.searching.value
        dispatch(search(searchVal))
        event.target.searching.value = ''
    }

    const filtering = firstAnecdotes.filter((anecdote) => anecdote && anecdote.content.toLowerCase().includes(searchState.payload))

    const anecdotes = searchState.payload === undefined ? firstAnecdotes : filtering

    const onVote = (anecdote) => {
        dispatch(voteAction(anecdote.id, anecdote.content, anecdote.votes))
        props.setNotification(`You voted '${anecdote.content}'`, 3500)
    }

    return (
        <>
            <br></br>
            <form onSubmit={searchAnecdotes}>
                <button type="submit">search</button>
                <input name="searching" />
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

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes,
        notification: state.notification
    }
}

const mapDispatchToProps = {
    setNotification
}

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)

export default ConnectedAnecdoteList