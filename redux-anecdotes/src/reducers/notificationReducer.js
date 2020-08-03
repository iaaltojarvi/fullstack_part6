const notification = ''
var timeoutID

export const setNotification = (notification, time) => {
    return async dispatch => {
        timeoutID = 
            dispatch({
                type: 'NOTIFICATION',
                data: notification,

            })
        }
    }


// const clearNotification = () => {
//     return async dispatch => {
//          {
//             dispatch({
//                 type: 'CLEAR_NOTIFICATION',
//                 data: {
//                     notification: '',
//                 }
//             })
//         })
//     }
// }

// clearNotification()

const notificationReducer = (state = notification, action) => {
    console.log('action in reduc', action)
    switch (action.type) {
        case 'NOTIFICATION':
            return action.data
        // case 'CLEAR_NOTIFICATION':
        //     return action.data
        default:
            return state
    }
}

export default notificationReducer