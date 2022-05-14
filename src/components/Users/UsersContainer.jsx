import UsersAPIContainer from "./UsersAPIContainer";
import { connect } from "react-redux";
import { setUsers, toggleIsFetching, getUsersTC } from "@/redux/reducers/users-reducer";

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);

export default UsersContainer