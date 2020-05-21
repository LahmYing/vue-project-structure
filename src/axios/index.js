import axios from 'axios'

const axios_instance = axios.create()
// 添加请求拦截器
axios_instance.interceptors.request.use(config => {
  if (localStorage.token_is_valid === 'true') {
    // 请求头添加 Authorization
    const AUTH_TOKEN = localStorage.token
    config.headers['Authorization'] = 'Bearer ' + AUTH_TOKEN
  }
  return config
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

export default axios_instance
