import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './reducers/profile-reducer'
import messagesReducer from './reducers/messages-reducer'
import usersReducer from "./reducers/users-reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store