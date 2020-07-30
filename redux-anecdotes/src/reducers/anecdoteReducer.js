import anecdoteService from '../services/anecdotes'

export const newAnecdote = (anecdote) => {
  return async dispatch => {
    const newAne = await anecdoteService.createNew(anecdote)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAne
    })
  }
}

export const voteAction = (id, content, votes) => {
  return async dispatch => {
    const voted = await anecdoteService.update(id, content, votes)
    dispatch({
      type: 'VOTE',
      data: voted
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      const anecdoteToUpdate = state.find(anecdote => anecdote.id === id)
      const changedAnecdote = { ...anecdoteToUpdate, votes: anecdoteToUpdate.votes + 1 }
      let newArr = [...state]
      if (anecdoteToUpdate) {
        newArr[state.indexOf(anecdoteToUpdate)] = changedAnecdote
        return newArr
      }
    case 'NEW_ANECDOTE':
      const newList = [...state, action.data]
      return newList
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export default anecdoteReducer