import MyPosts from "./MyPosts/MyPosts"

const Profile = (props) => {
  return (
    <main>
      <p className="item">The Profile</p>
      <MyPosts state={props.state} posts={props.state.profilePage.posts} addPost={props.state.addPost} updateNewPostText={props.state.updateNewPostText} />
    </main>
  )
}

export default Profile