import React from 'react';

import './Chat-Form.css';

function ChatForm() {
    return (
        <div id="chat-form">
            
            <input type="text" placeholder="Type your message" />
            <img src={require("../../images/icons/send-svgrepo-com.svg")} alt="Send" />
        </div>
    );
}

export default ChatForm;