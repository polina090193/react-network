const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'
const SET_USERS = 'SET_USERS'

const initialState = {
  users: [],
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {

    case TOGGLE_FOLLOW: {
      if (action.userId) {
        const stateCopy = {
          ...state,
          users: [ ...state.users.map(user => {
            if (user.id === action.userId) user.followed = !user.followed
            return user
          }) ]
        }

        return stateCopy
      }
      break
    }

    case SET_USERS: {
      return { ...state, users: [ ...action.users ]}
    }

    default:
      return state
  }
}

export const toggleFollowCreator = (userId) => ({ type: TOGGLE_FOLLOW, userId })
export const setUsersCreator = (users) => ({ type: SET_USERS, users })

export default usersReducer