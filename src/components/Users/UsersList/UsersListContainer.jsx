import Users from "./UsersList";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  }
}

const UsersContainer = connect(mapStateToProps)(Users);

export default UsersContainer