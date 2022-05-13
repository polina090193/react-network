import axios from 'axios'

const baseURL = 'https://react-polina090193.free.beeceptor.com/'

const axiosIns = axios.create({
  baseURL,
})

export const getUsers = () => {
  return axiosIns.get('network-users')
}

export const getProfile = (userId) => {
  return axiosIns.get(`network-users/${userId}`)
}