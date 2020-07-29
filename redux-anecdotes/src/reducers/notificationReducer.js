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
        data: {
            content: text.content
        }
    }
}

const notificationReducer = (state = notification, action) => {
    switch (action.type) {
        case 'NOTIFICATION_VOTE':
            state = `You voted '${action.content}'`
            return state
        case 'NOTIFICATION_NEW_ANECDOTE':
            state = `You added anecdote: ${action.data.content}`
            return state
        default:
            return state
    }
}

export default notificationReducer