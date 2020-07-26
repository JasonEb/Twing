export const parseMessage = (rawMessage) => {
    let parsedMessage = {
        message: '',
        tags: '',
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

  const followAgeListener = chatClient.onPrivmsg(async (channel: string, user: string, message: string, msg: TwitchPrivateMessage) => {
	if (message === '!followage') {
		const follow = await apiClient.kraken.users.getFollowedChannel(msg.userInfo.userId, msg.channelId);

		if (follow) {
			const currentTimestamp = Date.now();
			const followStartTimestamp = follow.followDate.getTime();
			chatClient.say(channel, `@${user} You have been following for ${secondsToDuration((currentTimestamp - followStartTimestamp) / 1000)}!`);
		} else {
			chatClient.say(channel, `@${user} You are not following!`);
		}
	}
});
