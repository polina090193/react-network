const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'

const initialState = {
  contacts: [
    { id: '44', name: 'John' },
    { id: '88', name: 'Linda' },
  ],
  messages: [
    { id: '1', from: 'John', time: '12:00', message: 'Hello world' },
    { id: '2', from: 'You', time: '12:01', message: 'Hi' },
    { id: '3', from: 'John', time: '12:02', message: 'How are you?' },
  ],
  newMessageBody: ''
}

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {

    case SEND_MESSAGE: {
      const body = state.newMessageBody
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: 8, from: 'You', time: '00:00', message: body }]
      };
    }

    case UPDATE_NEW_MESSAGE_BODY: {
      return {
        ...state,
        newMessageBody: action.body
      };
    }

    default:
      return state
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: text
})

export default messagesReducer