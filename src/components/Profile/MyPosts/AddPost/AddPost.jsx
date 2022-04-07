import React from "react"
import { addPost, updateNewPostText } from "@/redux/state"

const AddPost = (props) => {

  const addPostTextarea = React.createRef()

  const onAddPostClick = () => addPost(addPostTextarea.current.value)

  const onPostChange = () => {
    const newText = addPostTextarea.current.value
    updateNewPostText(newText)
  }

  return (
    <div>
      <textarea onChange={onPostChange} ref={addPostTextarea} value={props.newPostText} name="" id="" cols="30" rows="10" />
      <button onClick={onAddPostClick}>Add Post</button>
    </div>
  )
}

export default AddPost