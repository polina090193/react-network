import { combineReducers, createStore } from "redux";
import profileReducer from './reducers/profile-reducer'
import messagesReducer from './reducers/messages-reducer'

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  // sidebar: sidebarReducer,
})

const store = createStore(reducers)

export default store