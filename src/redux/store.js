import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './reducers/profile-reducer'
import messagesReducer from './reducers/messages-reducer'
import usersReducer from "./reducers/users-reducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
})

const store = createStore(reducers, applyMiddleware())

export default store