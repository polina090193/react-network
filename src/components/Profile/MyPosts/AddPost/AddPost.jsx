import React from "react"
import { addPost } from "@/redux/state"

const AddPost = (props) => {

  const addPostTextarea = React.createRef()

  const onAddPostClick = () => addPost(addPostTextarea.current.value)

  return (
    <div>
      <textarea ref={addPostTextarea} name="" id="" cols="30" rows="10"></textarea>
      <button onClick={onAddPostClick}>Add Post</button>
    </div>
  )
}

export default AddPost