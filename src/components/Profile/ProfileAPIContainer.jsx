import React from 'react'
import Profile from './Profile'
import Spinner from '@/components/Spinner/Spinner'
import { profileAPI } from '@/api/api'

class ProfileAPI extends React.Component {

  componentDidMount() {
    const userId = this.props.router.params.userId || 1

    this.props.toggleIsFetching(true)
    profileAPI.getProfile(userId).then(res => {
        this.props.setProfile(res.data.data)
        this.props.toggleIsFetching(false)
      })
  }

  render() {
    return (<div>
      {this.props.isFetching ? <Spinner /> : <Profile {...this.props} />}
    </div>
    )
  }
}

export default ProfileAPI