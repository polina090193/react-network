const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

const initialState = {
  posts: [
    { id: 1, title: 'The first post' },
    { id: 2, title: 'The second post' },
  ],
  newPostText: '',
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

    default:
      return state
  }
}

export const addPostCreator = () => ({ type: ADD_POST })
export const updateNewPostTextCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
})
export default profileReducer