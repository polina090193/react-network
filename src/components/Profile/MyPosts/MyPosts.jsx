import Post from "./Post/Post"
import AddPost from "./AddPost/AddPost"

const MyPosts = (props) => {
  const postsElements = props.posts.map(post => <Post key={post.id} id={post.id} title={post.title} />)
  
  return (
    <div>
      <h2 className="subheader">My Posts</h2>
      <AddPost state={props.state} newPostText={props.state.profilePage.newPostText} />      
      <div className="posts">
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts