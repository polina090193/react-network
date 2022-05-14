import { usersAPI } from "../../api/api"

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'
const SET_USERS = 'SET_USERS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

const initialState = {
  users: [],
  isFetching: false,
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {

    case TOGGLE_FOLLOW: {
      if (action.userId) {
        const stateCopy = {
          ...state,
          users: [...state.users.map(user => {
            if (user.id === action.userId) user.followed = !user.followed
            return user
          })]
        }

        return stateCopy
      }
      break
    }

    case SET_USERS: {
      return { ...state, users: [...action.users] }
    }

    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }

    default:
      return state
  }
}

export const toggleFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const getUsersTC = () => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers().then(res => {
      dispatch(setUsers(res.data.data))
      dispatch(toggleIsFetching(false))
    })
  }
}

export default usersReducer