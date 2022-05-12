import React from 'react'
import axios from 'axios'
import Users from './Users'
import Spinner from '@/components/Spinner/Spinner'

class UsersAPI extends React.Component {

  componentDidMount() {
    if (!this.props.users.length) {
      this.props.toggleIsFetching(true)
      axios
        .get('https://react-polina090193.free.beeceptor.com/network-users')
        .then(res => {
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