import React from "react"

const AddPost = (props) => {
  console.log('AddPost', props)

  const addPostTextarea = React.createRef()

  const onAddPostClick = () => {
    props.addPost()
    props.updateNewPostText('')
  }

  const onPostChange = () => {
    const newText = addPostTextarea.current.value
    props.updateNewPostText(newText)
  }

  return (
    <div>
      <textarea onChange={onPostChange} ref={addPostTextarea} value={props.newPostText} name="" id="" cols="30" rows="10" />
      <button onClick={onAddPostClick}>Add Post</button>
    </div>
  )
}

export default AddPost