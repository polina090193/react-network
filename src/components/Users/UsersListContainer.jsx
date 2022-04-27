import UsersAPIContainer from "./UsersAPIContainer";
import { connect } from "react-redux";
import { setUsersCreator, toggleIsFetchingCreator } from "@/redux/reducers/users-reducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    isFetching: state.usersPage.isFetching,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (users) => {
      const action = setUsersCreator(users);
      dispatch(action);
    },
    toggleIsFetching: (isFetching) => {
      const action = toggleIsFetchingCreator(isFetching);
      dispatch(action);
    },
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);

export default UsersContainer