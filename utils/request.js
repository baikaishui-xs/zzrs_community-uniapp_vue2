class ClAxios {
  constructor(config) {
    uni.addInterceptor('request', {
      invoke(args) { // 请求拦截器
        args.url = config.baseURL + args.url
      },
      success(args) { // 响应拦截器
      },
      fail(err) { // 请求失败回调
        console.log('interceptor-fail', err)
      },
    })
  }
  requestConfig(config) {
    return new Promise((resolve, reject) => {
      uni.request({
        url: config.url,
        method: config.method,
        // data: {
        //   text: 'uni.request' 
        // },
        // header: {
        //   'custom-header': 'hello' //自定义请求头信息
        // },
        success: (res) => {
          resolve(res.data.data)
        }
      });
    })
  }
  get(config) {
    return this.requestConfig({
      ...config,
      method: 'get'
    })
  }
  post(config) {
    return this.requestConfig({
      ...config,
      method: 'post'
    })
  }
  delete(config) {
    return this.requestConfig({
      ...config,
      method: 'delete'
    })
  }
  patch(config) {
    return this.requestConfig({
      ...config,
      method: 'patch'
    })
  }
}

export const request = new ClAxios({
  baseURL: 'http://ceshi2.dishait.cn/api'
})

// export const request1 = new ClAxios({
//   baseURL: 'http://123.207.32.32:8000/'
// })
