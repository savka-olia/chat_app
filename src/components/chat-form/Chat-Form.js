import React, { useState } from 'react';

import './Chat-Form.css';

const ChatForm = ({ onMessageSubmitted }) => {
    const [textMessage, setTextMessage] = useState("");
    const handleChange = (e) => {
        setTextMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        onMessageSubmitted(textMessage);
        setTextMessage('');
    };

    return (
        <form id="chat-form" onSubmit={handleSubmit}>          
            <input 
                type="text" 
                placeholder="Type your message" 
                value={textMessage}
                onChange={handleChange}/>
            {/* <img src={require("../../images/icons/send-svgrepo-com.svg")} alt="Send" /> */}
            <button type="submit">Send</button>
        </form>
    );
}

export default ChatForm;    