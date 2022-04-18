import User from '../User/User'
import { connect } from 'react-redux'
import { toggleFollowCreator } from '@/redux/reducers/users-reducer'
import axios from 'axios'

const Users = (props) => {
  if (props.users.length === 0) {
    axios
      .get('https://react-polina090193.free.beeceptor.com/network-users')
      .then(res => props.setUsers(res.data.data))
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      toggleFollow: (userId) => {
        const action = toggleFollowCreator(userId);
        dispatch(action);
      },
    }
  }

  const UserContainer = connect(null, mapDispatchToProps)(User);

  const usersElements = props.users.map(user => <UserContainer key={user.id} userData={user} />)

  return (
    <nav>
      {usersElements}
    </nav>
  )
}

export default Users