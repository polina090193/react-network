import Paper from "@mui/material/Paper"
import userCss from './User.module.css'
import styled from "@emotion/styled";
import styleConsts from "@/styles/styleConsts";
import MenuButton from '@c/MenuButton/MenuButton'

const UserPaper = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: ${styleConsts.mainMinWidth};
  padding: ${styleConsts.defaultPadding};
  margin: ${styleConsts.defaultMargin};
`;

const User = (props) => {
  const user = props.userData

  const onToggleFollow = () => {
    props.toggleFollow(user.id)
  }

  return (
    <UserPaper>
      <img src={user.avatar ? user.avatar : '/react.svg'} alt={user.name} className={userCss.avatar} />
      <div>
        <MenuButton link={`/users/${user.id}`} title={`${user.name} (${user.city}, ${user.country})`} />
        <p>{user.status}</p>
      </div>
      <button onClick={onToggleFollow}>{ user.followed ? 'Unfollow' : 'Follow' }</button>
    </UserPaper>
  )
}

export default User