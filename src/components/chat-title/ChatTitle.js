import React from 'react';

import './ChatTitle.css';

const ChatTitle = ({ selectedConversation }) => {
    return (
        <div id="chat-title">
            <img src={selectedConversation.imageUrl} alt={selectedConversation.imageAlt} />
            <span>{selectedConversation.title}</span>
        </div>
    );
}

export default ChatTitle;