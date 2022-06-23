import axios from 'axios'

const baseURL = 'https://react0901-users.free.beeceptor.com/'

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
    return axiosIns.get(`network-users/${userId}`)
  }
}
