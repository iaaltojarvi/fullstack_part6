const getId = () => {
  return Math.floor(Math.random() * 10000)
}

export const newAnecdote = (anecdote) => {
  console.log('in reducer', anecdote)
  return {
    type: 'NEW_ANECDOTE',
    data: {
      content: anecdote,
      votes: 0
    }
  }
}

export const voteAction = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes
  }
}

const anecdoteReducer = (state = [], action, data) => {
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
      console.log('state', state, 'action data', action.data)
      const newList = [...state, action.data]
      return newList
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export default anecdoteReducer