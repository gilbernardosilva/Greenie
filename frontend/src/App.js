import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import FloatingButton from "./FloatingButton";
import config from "./chatbot/config";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";
import 'react-chatbot-kit/build/main.css'
import "./App.css";


function App() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    const saveMessages = (messages) => {
        localStorage.setItem("chatbotMessages", JSON.stringify(messages));
    };

    const loadMessages = () => {
        const messages = JSON.parse(localStorage.getItem("chatbotMessages"));
        return messages;
    };
    
    return (
        <div className="App">
            <FloatingButton isOpen={isOpen} handleClick={handleToggleChatbot} />
            {isOpen && (
                <div className="chatbot-container">
                    <Chatbot
                        config={config}
                        actionProvider={ActionProvider}
                        messageHistory={loadMessages()}
                        messageParser={MessageParser}
                        saveMessages={saveMessages}
                    />
                </div>
            )}
        </div>
    );
    
}

export default App;
