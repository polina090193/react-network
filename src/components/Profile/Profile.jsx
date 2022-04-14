import MyPosts from "./MyPosts/MyPosts"

const Profile = (props) => {
  return (
    <main>
      <p className="item">The Profile</p>
      <MyPosts state={props.state} posts={props.state.profilePage.posts} />
    </main>
  )
}

export default Profile