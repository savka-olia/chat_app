import React from 'react';
import classNames from 'classnames';

import "./Message.css"

const Message = ({isMyMessage, message}) => {
    let messageClass = classNames("message-row", {
        "you-message": isMyMessage,
        "other-message": !isMyMessage
    }),
        imageThumbNail = isMyMessage ? null : <img src={message.imageUrl} alt={message.imageAlt} />;

    return (
        <div className={messageClass}>
                <div className="message-content">
                    {imageThumbNail}
                    <div className="message-text">
                       {message.messageText}
                    </div>
                    <div className="message-time">{message.createdAt}</div>
                </div>
            </div>
    )
}

export default Message;

// Yeah I think it's best we do that. Otherwise things won't work well at all. 
// I'm adding more text here to test the sizing of the speech bubble and the 
// wrapping of it too.

//isMyMessage = true