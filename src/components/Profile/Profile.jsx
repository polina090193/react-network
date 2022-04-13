import MyPosts from "./MyPosts/MyPosts"

const Profile = (props) => {
  console.log('Profile', props)

  return (
    <main>
      <p className="item">The Profile</p>
      <MyPosts posts={props.state.profilePage.posts} addPost={props.state.addPost} updateNewPostText={props.state.updateNewPostText} />
    </main>
  )
}

export default Profile