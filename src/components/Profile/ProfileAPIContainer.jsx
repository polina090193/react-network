import React from 'react'
import axios from 'axios'
import Profile from './Profile'
import Spinner from '@/components/Spinner/Spinner'

class ProfileAPI extends React.Component {

  componentDidMount() {
    const userId = this.props.router.params.userId || 1

    this.props.toggleIsFetching(true)
    axios
      .get(`https://react-polina090193.free.beeceptor.com/network-users/${userId}`)
      .then(res => {
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