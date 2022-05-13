import React from 'react'
import Users from './Users'
import Spinner from '@c/Spinner/Spinner'
import { getUsers } from '@/api/api'

class UsersAPI extends React.Component {

  componentDidMount() {
    if (!this.props.users.length) {
      this.props.toggleIsFetching(true)
      getUsers().then(res => {
        this.props.setUsers(res.data.data)
        this.props.toggleIsFetching(false)
      })
    }
  }

  render() {
    return (<div>
      {this.props.isFetching ? <Spinner /> : <Users users={this.props.users} />}
    </div>
    )
  }
}

export default UsersAPI