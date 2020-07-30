import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import search from '../reducers/filterReducer'

const Filter = ({ anecdotes }) => {
    const dispatch = useDispatch
    const style = {
        marginBottom: 30
    }

    const onFilter = (event) => {
        let input = event.target.value
        dispatch(search({ value: input }))
    }

    return (
        <div style={style}>
            filter <input value={searchTerm} onChange={event => onFilter(event)} />
        </div>
    )
}

export default Filter