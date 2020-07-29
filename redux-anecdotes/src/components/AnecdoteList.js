import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAction } from '../reducers/anecdoteReducer'
import { voteNotification } from '../reducers/notificationReducer';
import Notification from './Notification';

const AnecdoteList = (props) => {
    const anecdotes = useSelector(state => state.anecdotes.sort(function (a, b) {
        return b.votes - a.votes
    })
    )
    const [notif, setNotif] = useState(false)
    const dispatch = useDispatch()

    const onVote = (anecdote) => {
        // notifTimer(anecdote)
        dispatch(voteAction(anecdote.id))
    }

    // const notifTimer = (anecdote) => {
    //     setNotif(true)
    //     dispatch(voteNotification(anecdote.content))
    //     setTimeout(() => {
    //         setNotif(false)
    //     }, 3000)
    // }

    return (
        <>
            {notif && <Notification />}
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