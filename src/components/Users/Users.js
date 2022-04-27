import React from 'react'
import User from './User/User'
import { connect } from 'react-redux'
import { toggleFollowCreator } from '@/redux/reducers/users-reducer'

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFollow: (userId) => {
      const action = toggleFollowCreator(userId);
      dispatch(action);
    },
  }
}

const UserContainer = connect(null, mapDispatchToProps)(User);

const Users = (props) => {
  return (
    <nav>
      {props.users.map(user => <UserContainer key={user.id} userData={user} />)}
    </nav>
  )
}

export default Users