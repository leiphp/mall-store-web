import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import { getToken } from '@/utils/auth'
import md5 from 'crypto-js/md5';

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  baseURL: "https://www.100txy.com/api",
  timeout: 15000 // 请求超时时间
})

const guid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
  // eslint-disable-next-line
  const r = Math.random() * 16 | 0;
  // eslint-disable-next-line
  const v = c === 'x' ? r : (r & 0x3 | 0x8);
  return v.toString(16);
});

// request拦截器
service.interceptors.request.use(config => {
  
  const nonce = guid();
  const timestamp = Date.now();

  if (store.getters.getUser) {
    // config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    config.headers=Object.assign(config.headers,{
      Authorization:getToken(), // 让每个请求携带自定义token 请根据实际情况自行修改
      nonce,
      timestamp,
      sign: String(md5(timestamp + nonce))
    })
  }
  return config
}, error => {
  // Do something with request error
  //console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
  /**
  * code为非200是抛错 可结合自己业务进行修改
  */
    const res = response.data
    if (res.code !== 200) {
      Message({
        message: res.message,
        type: 'error',
        duration: 3 * 1000
      })

      // 401:未登录;
      if (res.code === 401) {
        MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('FedLogOut').then(() => {
            location.reload()// 为了重新实例化vue-router对象 避免bug
          })
        })
      }
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    //console.log('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
