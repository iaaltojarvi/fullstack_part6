import React from 'react'
import { useSelector } from 'react-redux';

const Notification = (props) => {
const notification = useSelector(state => state.notification)
console.log('notification state', notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification