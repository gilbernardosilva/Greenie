import React, { Component } from 'react';

class App extends Component {
  state = {
    day: null
  };
    
    componentDidMount() {
    fetch('/api/day')
      .then(response => response.json())
      .then(data => this.setState({ day: data }));
    }
    
  render() {
    const { day } = this.state;
    return (
      <div>
          <p>Today is {day}</p>
      </div>
    );
  }
}

export default App;


// import React, { useState } from "react";
// import Chatbot from "react-chatbot-kit";
// import FloatingButton from "./FloatingButton";
// import config from "./chatbot/config";
// import ActionProvider from "./chatbot/ActionProvider";
// import MessageParser from "./chatbot/MessageParser";


// function App() {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggleChatbot = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="App">
//       <FloatingButton isOpen={isOpen} handleClick={handleToggleChatbot} />
//       {isOpen && (
//         <div className="chatbot-container">
//           <Chatbot
//             config={config}
//             actionProvider={ActionProvider}
//             messageParser={MessageParser}
//           />
//         </div>
//       )}
//     </div>
//   );
    
// }

// export default App;
