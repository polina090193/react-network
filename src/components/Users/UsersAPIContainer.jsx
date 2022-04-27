import React from 'react'
import axios from 'axios'
import Users from './Users'

class UsersAPI extends React.Component {

  componentDidMount() {
    axios
      .get('https://react-polina090193.free.beeceptor.com/network-users')
      .then(res => {
        this.props.setUsers(res.data.data)
      })
  }

  render() {
    return <Users users={this.props.users} />
  }
}

export default UsersAPI