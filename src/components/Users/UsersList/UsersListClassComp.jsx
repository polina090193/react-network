import React from 'react'
import User from '../User/User'
import { connect } from 'react-redux'
import { toggleFollowCreator } from '@/redux/reducers/users-reducer'
import axios from 'axios'

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFollow: (userId) => {
      const action = toggleFollowCreator(userId);
      dispatch(action);
    },
  }
}

const UserContainer = connect(null, mapDispatchToProps)(User);

class Users extends React.Component {

  componentDidMount() {
    axios
      .get('https://react-polina090193.free.beeceptor.com/network-users')
      .then(res => this.props.setUsers(res.data.data))
  }

  render() {
    return (
      <nav>
        {this.props.users.map(user => <UserContainer key={user.id} userData={user} />)}
      </nav>
    )
  }
}

export default Users