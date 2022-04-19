import Users from "./UsersListClassComp";
import { connect } from "react-redux";
import { setUsersCreator } from "@/redux/reducers/users-reducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (users) => {
      const action = setUsersCreator(users);
      dispatch(action);
    },
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer