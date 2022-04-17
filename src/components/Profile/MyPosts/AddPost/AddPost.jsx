import React from "react"

const AddPost = (props) => {
  const newPostArea = React.createRef()

  const onAddPost = () => {
    props.addPost();
  }

  const onPostChange = () => {
    const text = newPostArea.current.value;
    props.updateNewPostText(text)
  }

  return (
    <div>
      <textarea onChange={onPostChange} ref={newPostArea} value={props.newPostText} />
      <button onClick={onAddPost}>Add Post</button>
    </div>
  )
}

export default AddPost