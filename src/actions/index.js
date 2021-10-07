//selected conversation state was added to the store (allows to basically click to see different conversations) 

export const conversationChanged = conversationId => ({
    type: "SELECTED_CONVERSATION_CHANGED",
    conversationId
});

export const newMessageAdded = textMessage => ({
    type:"NEW_MESSAGE_ADDED",
    textMessage
});