import profileCss from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  const userProfile = props.profile

  return (
    <div>
      <img
        src={userProfile.avatar ? userProfile.avatar : '/react.svg'}
        alt={userProfile.name}
        className={profileCss.avatar}
      />
      <p>{userProfile.name}</p>
      <p>{userProfile.city}</p>
      <p>{userProfile.country}</p>
      <p>{userProfile.status}</p>
    </div>
  )
}

export default ProfileInfo