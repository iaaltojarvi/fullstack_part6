import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import search from '../reducers/filterReducer'

const Filter = ({ anecdotes }) => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const style = {
        marginBottom: 30
    }

    const onFilter = (event) => {
        setInput(event.target.value)
        // dispatch(search(input))
    }

    return (
        <div style={style}>
            filter <input value={input} onChange={event => onFilter(event)} />
        </div>
    )
}

export default Filter