import React from 'react'
import { connect } from "react-redux";
import { setUsers, toggleIsFetching, getUsersTC } from "@/redux/reducers/users-reducer";
import Users from './Users'
import Spinner from '@c/Spinner/Spinner'

class UsersContainer extends React.Component {

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

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    isFetching: state.usersPage.isFetching,
  }
}

const mapDispatchToProps = {
  setUsers,
  toggleIsFetching,
  getUsersTC,
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
