import React from 'react'
import User from './User/User'
import { connect } from 'react-redux'
import { toggleFollow } from '@/redux/reducers/users-reducer'


const Users = (props) => {
  
  const mapDispatchToProps = {
    toggleFollow,
  }

  const UserContainer = connect(null, mapDispatchToProps)(User);

  return (
    <nav>
      {props.users.map(user => <UserContainer key={user.id} userData={user} />)}
    </nav>
  )
}

export default Users