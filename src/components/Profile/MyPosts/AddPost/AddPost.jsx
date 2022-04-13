import React from "react"
import { addPostCreator, updateNewPostTextCreator } from "@/redux/reducers/profile-reducer"
import store from "@/redux/store";

const AddPost = (props) => {
  const newPost = React.createRef()

  const addPost = () => {
    store.dispatch(addPostCreator())
  }

  const onPostChange = () => {
    const text = newPost.current.value;
    store.dispatch(updateNewPostTextCreator(text))
  }

  return (
    <div>
      <textarea onChange={onPostChange} ref={newPost} value={props.newPostText} />
      <button onClick={addPost}>Add Post</button>
    </div>
  )
}

export default AddPost