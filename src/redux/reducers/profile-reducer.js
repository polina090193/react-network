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
      const stateCopy = {
        ...state,
        posts: [...state.posts],
      }
      stateCopy.posts.push(newPost)
      stateCopy.newPostText = ''
      return stateCopy
    }
      
    case UPDATE_NEW_POST_TEXT: {
      const stateCopy = {...state}
      stateCopy.newPostText = action.newText
      return stateCopy
    }

    default:
      return state
  }
}

export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
})
export default profileReducer