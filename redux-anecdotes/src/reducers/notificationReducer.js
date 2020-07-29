const notification = ''


export const voteNotification = (text) => {
    console.log('text', text)
    return {
        type: 'NOTIFICATION_VOTE',
        content: text
    }
}

export const anecdoteNotification = (text) => {
    return {
        type: 'NOTIFICATION_NEW_ANECDOTE',
        content: text
    }
}

const notificationReducer = (state = notification, action) => {
    switch (action.type) {
        case 'NOTIFICATION_VOTE':
            return `You voted '${action.content}'`
        case 'NOTIFICATION_NEW_ANECDOTE':
            return `You added '${action.content}'`
        default:
            return state
    }
}

export default notificationReducer