import React from 'react'
import { useSelector } from 'react-redux'

export const search = (payload) => {
    return {
        type: 'FILTER',
        payload
    }
}

const initialState = {}
const filterReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'FILTER':
            const value = action.payload.value
            const filtered = state.anecdotes.filter(anecdote => {
                return anecdote.content.toLowerCase().includes(value)
            })
            return { ...state, anecdotes: filtered }
        default:
            return state
    }
}

export default filterReducer