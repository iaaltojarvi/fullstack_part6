import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import NewAnecdote from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification'
import { initializeAnecdotes } from './reducers/anecdoteReducer';

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <AnecdoteList />
      <NewAnecdote />
    </div>
  )
}

export default App