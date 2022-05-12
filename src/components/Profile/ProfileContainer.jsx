import ProfileAPIContainer from "./ProfileAPIContainer";
import { connect } from "react-redux";
import { setProfile, addPostCreator, updateNewPostTextCreator, toggleIsFetching } from "@/redux/reducers/profile-reducer";
import withRouter from "@/helpers/withRouter";

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
  }
}

const mapDispatchToProps = {
  setProfile,
  addPostCreator,
  updateNewPostTextCreator,
  toggleIsFetching,
}

const WithRouterProfile = withRouter(ProfileAPIContainer)

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(WithRouterProfile);

export default ProfileContainer