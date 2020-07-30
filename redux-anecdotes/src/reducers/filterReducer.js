import React from 'react'
import { useSelector } from 'react-redux'

export const search = (payload) => {
    return {
        type: 'FILTER',
        payload
    }
}

const filterReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case 'FILTER':
            return {...state, payload}
        default:
            return state
    }
}

export default filterReducer