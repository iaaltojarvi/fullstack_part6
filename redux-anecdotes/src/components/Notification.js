import React from 'react'
import { connect } from 'react-redux'


const Notification = (props) => {
  const notifications = props.notifications

  if (notifications.length) {
    return (
      <div style={style}>
        {notifications[notifications.length -1].notification}
      </div>
    )
  } else {
    return null
  }
}

const style = {
  border: 'solid',
  padding: 10,
  borderWidth: 1
}

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications,
  }
}
const ConnectedNotification = connect(mapStateToProps)(Notification)


export default ConnectedNotification