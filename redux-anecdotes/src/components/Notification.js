import React from 'react'
import { connect } from 'react-redux'


const Notification = (props) => {
  const notifications = props.notifications
  console.log('props in notif', notifications)

  if (notifications !== null && notifications.length) {
    let notificationsList

    notificationsList = notifications.map((notif) => {
      return (
        <div style={style} key={notif.id}>
          {notif.notification}
        </div>
      )
    })
    console.log('notificationlist', notificationsList)
    return notificationsList
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