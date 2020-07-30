import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import anecdoteService from './services/anecdotes'
import NewAnecdote from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import { initializeAnecdotes } from './reducers/anecdoteReducer';

const App = () => {

const dispatch = useDispatch()

useEffect(() => {
anecdoteService
.getAll().then(anecdotes => dispatch(initializeAnecdotes(anecdotes)))
}, [dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <NewAnecdote />
    </div>
  )
}

export default App