import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";


const config = {
  initialMessages: [createChatBotMessage(`Hello user `)],
};

export default config;
