import Post from "./Post/Post"
import AddPost from "./AddPost/AddPost"

const posts = [
  { id: 1, title: 'The first post' },
  { id: 2, title: 'The second post' },
]

const MyPosts = () => {
  return (
    <div>
      <h2 className="subheader">My Posts</h2>
      <AddPost />      
      <div className="posts">
        <Post id="1" title="The first post" />
        <Post id="2" title="The second post" />
      </div>
    </div>
  )
}

export default MyPosts