let id = Math.floor(Math.random() * 1000);

export const setNotification = (notification) => {
    return async dispatch => {
        await dispatch({
            type: 'NOTIFICATION',
            data: {
                notification: notification,
                id: id
            }
        })
        setTimeout(() => {
            await dispatch({
                type: 'CLEAR_NOTIFICATION',
                data: {
                    notification: '',
                    id: id
                }
            })
        }, 5000)
    }
}

const notificationReducer = (state = [], action) => {
    switch (action.type) {
        case 'NOTIFICATION':
            return [...state, action.data]
        case 'CLEAR_NOTIFICATION':
            return state.filter(toast => toast.id !== action.data.id)
        default:
            return state
    }
}

export default notificationReducer