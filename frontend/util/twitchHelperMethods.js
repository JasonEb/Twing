export const parseMessage = (rawMessage) => {
    let parsedMessage = {
        message: '',
        tags: {},
        command: '',
        original: rawMessage,
        channel: '',
        username: '',
    };
  
    if (rawMessage[0] === '@') {
        let tagIndex = rawMessage.indexOf(' '),
            userIndex = rawMessage.indexOf(' ', tagIndex + 1),
            commandIndex = rawMessage.indexOf(' ', userIndex + 1),
            channelIndex = rawMessage.indexOf(' ', commandIndex + 1),
            messageIndex = rawMessage.indexOf(':', channelIndex + 1);
  
        parsedMessage.tags = rawMessage.slice(0, tagIndex);
        parsedMessage.username = rawMessage.slice(tagIndex + 2, rawMessage.indexOf('!'));
        parsedMessage.command = rawMessage.slice(userIndex + 1, commandIndex);
        parsedMessage.channel = rawMessage.slice(commandIndex + 1, channelIndex);
        parsedMessage.message = rawMessage.slice(messageIndex + 1);
    } else if (rawMessage.startsWith("PING")) {
        parsedMessage.command = "PING";
        parsedMessage.message = rawMessage.split(":")[1];
    }
    
    return parsedMessage;
}

export const parseTags = (str) => {
    let tags = {
            badgeInfo: '',
            badges: [],
            color: '',
            dispayName: '',
            emoteSets: [0],
            userId: '',
            message: 'Message 1',
            original: ''}
    
}