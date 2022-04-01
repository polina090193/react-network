import Post from "./Post/Post"

const MyPosts = () => {
  return (
    <div>
      <h2 className="subheader">My Posts</h2>
      <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Add post</button>
      </div>
      <div className="posts">
        <Post />
      </div>
    </div>
  )
}

export default MyPosts