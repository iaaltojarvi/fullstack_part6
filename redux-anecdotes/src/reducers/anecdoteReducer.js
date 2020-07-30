const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

export const newAnecdote = (anecdote) => {
  return {
    type: 'NEW_ANECDOTE',
    data: {
      content: anecdote,
      id: getId(),
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

const initialState = anecdotesAtStart.map(asObject)
const anecdoteReducer = (state = initialState, action) => {
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
    default:
      return state
  }
}

export default anecdoteReducer