const initialState = {
    conversations: [
        { 
            id: "1",
            imageUrl: require("../images/profiles/chika.png"),
            imageAlt: "Chika",
            title: "Chika",
            createdAt: "3:06 pm",
            latestMessageText: "Ok then. See u later. Have a nice evening xoxo",
            messages: [
                {
                    imageUrl: null,
                    imageAlt: null,
                    messageText: "Ok then. See u later. Have a nice evening xoxo",
                    createdAt: "3:06 pm",
                    isMyMessage: true
                },
                {
                    imageUrl: require("../images/profiles/chika.png"),
                    imageAlt: "Chika",
                    messageText: "Well, see you again after school.",
                    createdAt: "3:04 pm",
                    isMyMessage: false
                },
                {
                    imageUrl: null,
                    imageAlt: null,
                    messageText: "np. tomorrow will be ok?",
                    createdAt: "3:02 pm",
                    isMyMessage: true
                },
                {
                    imageUrl: require("../images/profiles/chika.png"),
                    imageAlt: "Chika",
                    messageText: "go see some movie together",
                    createdAt: "2:55 pm",
                    isMyMessage: false
                },
                {
                    imageUrl: null,
                    imageAlt: null,
                    messageText: "Thats good",
                    createdAt:"2:52 pm",
                    isMyMessage: true
                },
                {
                    imageUrl: require("../images/profiles/chika.png"),
                    imageAlt: "Chika",
                    messageText:"Nice! They're cute and yummy. Nothing could be better!",
                    createdAt: "2:50 pm",
                    isMyMessage: false
                },
                {
                    imageUrl: null,
                    imageAlt: null,
                    messageText: "How\"s it going?",
                    createdAt: "2:48 pm",
                    isMyMessage: true
                },
                {
                    imageUrl: require("../images/profiles/chika.png"),
                    imageAlt: "Chika",
                    messageText: "Um, is something wrong?",
                    createdAt: "2:45 pm",
                    isMyMessage: false
                },
                {
                    imageUrl: null,
                    imageAlt: null,
                    messageText: "Hey Chika?",
                    createdAt: "2:40 pm",
                    isMyMessage: true
                }
            ]
        },
        {
            id: "2", 
            imageUrl: require("../images/profiles/umaru_chan.jpg"),
            imageAlt: "Umaru Chan",
            title: "Umaru Chan",
            createdAt: "Oct 03",
            latestMessageText: "Well good talking to you.",
            messages: [
                {
                    imageUrl: null,
                    imageAlt: null,
                    messageText: "Well good talking to you.",
                    createdAt: "03/11/21 6:35 pm",
                    isMyMessage: true
                },
                {
                    imageUrl: require("../images/profiles/umaru_chan.jpg"),
                    imageAlt: "Umaru Chan",
                    messageText:"Oh, really? Thank goodness. I was really scared -_-",
                    createdAt: "03/11/21 6:34 pm",
                    isMyMessage: false
                },
                {
                    imageUrl: null,
                    imageAlt: null,
                    messageText: "They're just trying to scare you.",
                    createdAt: "03/11/21 6:34 pm",
                    isMyMessage: true
                },
                {
                    imageUrl: require("../images/profiles/umaru_chan.jpg"),
                    imageAlt: "Umaru Chan",
                    messageText:"I heard that she doesn't let anyone laugh. The older kids told me that.",
                    createdAt: "03/11/21 6:33 pm",
                    isMyMessage: false
                },
                {
                    imageUrl: null,
                    imageAlt: null,
                    messageText:"What bad things?",
                    createdAt: "03/11/21 6:30 pm",
                    isMyMessage: true
                },
                {
                    imageUrl: require("../images/profiles/umaru_chan.jpg"),
                    imageAlt: "Umaru Chan",
                    messageText: "I am afraid of the teacher. I have heard bad things about her.",
                    createdAt: "03/11/21 6:28 pm",
                    isMyMessage: false
                },
                {
                    imageUrl: null,
                    imageAlt: null,
                    messageText: "What is to be afraid about?",
                    createdAt: "03/11/21 6:27 pm",
                    isMyMessage: true
                },
                {
                    imageUrl: require("../images/profiles/umaru_chan.jpg"),
                    imageAlt: "Umaru Chan",
                    messageText: "Hey!!!! Have not spoken to you for a while c: No. I am very afraid.",
                    createdAt: "03/11/21 6:23 pm",
                    isMyMessage: false
                },
                {
                    imageUrl: null,
                    imageAlt: null,
                    messageText: "Hi Umaru. Are you excited for the first month of school?",
                    createdAt: "03/11/21 6:18 pm",
                    isMyMessage: true
                }
            ]
        },
        {
            id: "3", 
            imageUrl: require("../images/profiles/jotaro.jpg"),
            imageAlt: "Jotaro Kujo",
            title: "Jotaro Kujo",
            createdAt: "28 Sep",
            latestMessageText: "Yes",
            messages: [
                {
                    imageUrl: null,
                    imageAlt: null,
                    messageText: "Hi",
                    createdAt: "1 week ago",
                    isMyMessage: true
                }
            ]
        },
        { 
            id: "4",
            imageUrl: require("../images/profiles/dio.jpg"),
            imageAlt: "Dio Brando",
            title: "Dio Brando",
            createdAt: "2:49 PM",
            latestMessageText: "Yeah",
            messages: [
                {
                    imageUrl: null,
                    imageAlt: null,
                    messageText: "Hi",
                    createdAt: "2:49",
                    isMyMessage: true
                }
            ]
        }
    ],
    selectedConversation: {}
};

initialState.selectedConversation = initialState.conversations[1];

const conversationsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SELECTED_CONVERSATION_CHANGED": {
        const newState = { ...state };
        newState.selectedConversation = 
            newState.conversations.find(
                conversation => conversation.id === action.conversationId
            );

        return newState;
      }
      default:
        return state;
    }
  }
  
export default conversationsReducer;