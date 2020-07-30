const notification = ''

export const setNotification = (notification, time) => {
    return async dispatch => {
        dispatch({
            type: 'NOTIFICATION',
            data: notification
        })
        setTimeout(() => {
            dispatch({
                type: 'NOTIFICATION',
                data: ''
            })
        }, time)
    }
}

const notificationReducer = (state = notification, action) => {
    switch (action.type) {
        case 'NOTIFICATION':
            return action.data
        default:
            return state
    }
}

export default notificationReducer