const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_PROFILE = 'SET_PROFILE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

const initialState = {
  profile: {},
  posts: [
    { id: 1, title: 'The first post' },
    { id: 2, title: 'The second post' },
  ],
  newPostText: '',
  isFetching: false,
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_POST: {
      const newPost = {
        id: 8,
        title: state.newPostText,
      }
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, newPost]
      }
    }

    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      }
    }

    case SET_PROFILE: {
      return { ...state, profile: { ...action.profile }}
    }

    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }

    default:
      return state
  }
}

export const setProfile = (profile) => ({ type: SET_PROFILE, profile })
export const addPostCreator = () => ({ type: ADD_POST })
export const updateNewPostTextCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
})
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export default profileReducer