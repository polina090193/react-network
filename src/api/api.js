import axios from 'axios'

const baseURL = 'https://react-polina090193.free.beeceptor.com/'

const axiosIns = axios.create({
  baseURL,
})

export const usersAPI = {
  getUsers() {
    return axiosIns.get('network-users')
  }
}

export const profileAPI = {
  getProfile(userId) {
    console.log('profileAPI', userId);
    return axiosIns.get(`network-users/${userId}`)
  }
}
