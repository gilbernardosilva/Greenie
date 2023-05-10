class MessageParser {
    
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(userMessage) {
    this.actionProvider.handleQuestion(userMessage);
  }
    
}
export default MessageParser;
