class ActionProvider {
    
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }
    
  greet() {
      const message = this.createChatBotMessage("Hello there");
      this.addMessageToState(message);
  }

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
    
}

export default ActionProvider;
