let messages= [];

class MessageParser {
    
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.satete = state;
    }

    parse(message) {
        messages.push(message);
        console.log(message);
        this.actionProvider.handleQuestion(message);
    }
    
}

export default MessageParser;
