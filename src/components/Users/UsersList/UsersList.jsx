import User from '../User/User'
import { connect } from 'react-redux'
import { toggleFollowCreator } from '@/redux/reducers/users-reducer'

const Users = (props) => {
  const mapDispatchToProps = (dispatch) => {
    return {
      toggleFollow: (userId) => {
        const action = toggleFollowCreator(userId);
        dispatch(action);
      },
    }
  }

  const UserMessageContainer = connect(null, mapDispatchToProps)(User);
  
  const usersElements = props.users.map(user => <UserMessageContainer key={user.id} userData={user} />)

  return (
    <nav>
      {usersElements}
    </nav>
  )
}

export default Users