import axios from 'axios'

const baseURL = process.env.BASE_URL

// 拦截器
axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  return Promise.reject(error)
})

axios.interceptors.request.use((config) => {
  console.log(config)
  config.headers['Authorization'] = `Bearer ${process.env.ACCESS_TOKEN}`
  config.baseURL = baseURL
  config.timeout = 10000
  return config;
}, (error) => {
  return Promise.reject(error)
})

export function getAxios(
  url,
  params = {}
  ) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params,
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

export function postAxios(
  url,
  data
) {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: 'post',
      data
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

