export const allMessages = ({ messages }) => {
    return Object.keys(messages).map( (id) => { 
        return messages[id].message
    }  )
} 
