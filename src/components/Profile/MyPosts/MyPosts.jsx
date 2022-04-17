import Post from "./Post/Post"
import AddPost from "./AddPost/AddPost"
import { addPostCreator, updateNewPostTextCreator } from "@/redux/reducers/profile-reducer"
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
      newPostText: state.profilePage.newPostText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      updateNewPostText: (text) => {
          const action = updateNewPostTextCreator(text);
          dispatch(action);
      },
      addPost: () => {
        dispatch(addPostCreator());
      }
  }
}

const MyPosts = (props) => {
  const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost);
  const postsElements = props.posts.map(currentPost => <Post key={currentPost.id} id={currentPost.id} title={currentPost.title} />)
  
  return (
    <div>
      <h2 className="subheader">My Posts</h2>
      <AddPostContainer />      
      <div className="posts">
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts