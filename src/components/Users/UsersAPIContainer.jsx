import React from 'react'
import Users from './Users'
import Spinner from '@c/Spinner/Spinner'

class UsersAPI extends React.Component {

  componentDidMount() {
  if (!this.props.users.length) {
    this.props.getUsersTC()
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