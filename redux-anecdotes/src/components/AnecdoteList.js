import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAction } from '../reducers/anecdoteReducer'

const AnecdoteList = (props) => {
    const anecdotes = useSelector(state => state.sort(function (a, b) {
        return b.votes - a.votes
    }))
    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch(voteAction(id))
    }

    return (
        <>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default AnecdoteList