import config from '../config.js'
// post请求
const ajax = ({ url, data={}, header=false, method='POST', isLoading=true, success, error }) => {
  // 配置入参
  let obj = {
    appFlagWeb:'2',
    sysId : config['SYSID'],
    reqData:data
  }
  let params = {
    method,
    data: obj
  }
  // 头参数
  if(header) {
    params.header = {
      'ssoToken': wx.getStorageSync('token') || '',
    }
  }
  // api地址
  let baseURL = config[url.split('@')[0]]
  params.url = baseURL + url.split('@')[1]

  // 是否显示蒙层
  if(isLoading) {
    wx.showLoading({
      title: '',
      mask: true
    })
  }
   new Promise((resolve,reject) => {
    wx.request({
      ...params,
      success:resolve,
      fail:reject
    })
  })
  .then(res => {
    // 关闭蒙层
    if (isLoading) wx.hideLoading()
    let _result = res.data
    success && success(_result)
  })
  .catch(res => {
    // 关闭蒙层
    if (isLoading) wx.hideLoading()
    let _result = res.data
    error && error(_result)
  })
}
// 图片上传
const upload = ({ url, data = {}, name ='multiFile', header=true, filePath, success, error }) => {
  // 配置入参
  let params = {
    filePath,
    name
  }
  // 头参数
  if (header) {
    params.header = {
      'Content-Type': 'multipart/form-data',
      'ssoToken': wx.getStorageSync('token'),
      'appWebFlag': '2',
      'sysId': config['SYSID']
    }
  }
  // api地址
  let baseURL = config[url.split('@')[0]]
  params.url = baseURL + url.split('@')[1]

  new Promise((resolve,reject) => {
    wx.uploadFile({
      ...params,
      formData: data,
      success: resolve,
      fail: reject
    })
  })
  .then(res => {
    let _result = res.data
    success && success(_result)
  })
  .catch(res => {
    let _result = res.data
    error && error(_result)
  })
}

export { ajax, upload } 