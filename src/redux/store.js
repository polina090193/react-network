import { combineReducers, createStore } from "redux";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
})

const store = createStore(reducers)

export default store