import MyPostsContainer from "./MyPosts/MyPostsContainer"
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profile = (props) => {
  return (
    <main>
      <ProfileInfo {...props} />
      <MyPostsContainer />
    </main>
  )
}

export default Profile