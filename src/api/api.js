import axios from 'axios'

export const getUsers = () => {
  return axios.get('https://react-polina090193.free.beeceptor.com/network-users')
}

export const getProfile = (userId) => {
  return axios.get(`https://react-polina090193.free.beeceptor.com/network-users/${userId}`)
}