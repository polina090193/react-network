import React from 'react'
import { connect } from "react-redux";
import { getProfile } from "@/redux/reducers/profile-reducer";
import withRouter from "@/helpers/withRouter";
import Profile from './Profile'
import Spinner from '@/components/Spinner/Spinner'

class ProfileContainer extends React.Component {
  userId = this.props.router.params.userId || 1
  
  componentDidMount() {
    this.props.getProfile(this.userId)
  }

  render() {
    return (<div>
      {this.props.isFetching ? <Spinner /> : <Profile {...this.props} />}
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
  }
}

const mapDispatchToProps = {
  getProfile,
}

const WithRouterProfile = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(WithRouterProfile);