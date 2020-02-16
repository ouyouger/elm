import axios from '@/utlis/axios.js'
export const login = (data) => {
  return axios({
    method: 'post',
    url: '/admin/login',
    data
  })
}
export const getPostList = (params) => {
  return axios({
    url: '/post',
    params
  })
}
export const getAdminInfo = () => {
  return axios({
    url: '/admin/info'
  })
}
export const getUserList = (params) => {
  return axios({
    url: '/v1/users/list',
    params
  })
}
export const getUserCount = (data) => {
  return axios({
    url: '/v1/users/count',
    data
  })
}
export const getUserCity = () => {
  return axios({
    url: '/v1/user/city/count'
  })
}
export const hotcity = (params) => {
  return axios({
    url: '/v1/cities',
    params
  })
}
