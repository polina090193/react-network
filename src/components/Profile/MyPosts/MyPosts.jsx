import Post from "./Post/Post"
import AddPost from "./AddPost/AddPost"


const MyPosts = (props) => {
  console.log('MyPosts', props)

  const postsElements = props.posts.map(post => <Post key={post.id} id={post.id} title={post.title} />)
  
  return (
    <div>
      <h2 className="subheader">My Posts</h2>
      <AddPost addPost={props.addPost} updateNewPostText={props.updateNewPostText} />      
      <div className="posts">
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts