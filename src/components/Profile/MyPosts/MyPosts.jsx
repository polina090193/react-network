import Post from "./Post/Post"
import AddPost from "./AddPost/AddPost"

const posts = [
  { id: 1, title: 'The first post' },
  { id: 2, title: 'The second post' },
]

const postsElements = posts.map(post => <Post key={post.id} id={post.id} title={post.title} />)

const MyPosts = () => {
  return (
    <div>
      <h2 className="subheader">My Posts</h2>
      <AddPost />      
      <div className="posts">
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts