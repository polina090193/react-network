import MyPosts from "./MyPosts/MyPosts"

const Profile = (props) => {
  return (
    <main>
      <p className="item">The Profile</p>
      <MyPosts posts={props.state.posts} />
    </main>
  )
}

export default Profile