const isPC = function () {
  if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
    return false
  } else {
    return true
  }
}
const getEnv = function () {
  const search = window.location.search
  let ua = ''

  try {
    ua = navigator.userAgent.toLowerCase()
  } catch (e) {
  }

  if (ua.match(/MicroMessenger/i) && ua.match(/MicroMessenger/i)[0] === 'micromessenger') {
    return 'wechat'
  } else if (ua.match(/AliApp/i) && ua.match(/AliApp/i)[0] === 'aliapp' && ua.match(/iPhone/i) && ua.match(/iPhone/i)[0] === 'iphone') {
    return 'aliapp-ios'
  } else if (ua.match(/AliApp/i) && ua.match(/AliApp/i)[0] === 'aliapp') {
    return 'aliapp'
  } else if (ua.match(/cmblife/i) && ua.match(/cmblife/i)[0] === 'cmblife') {
    return 'cmblife'
  } else if (ua.indexOf('hitour') >= 0 || search.match('channel=wantu_app') || ua.match(/[h|H]itourApp/g)) {
    return 'hitour'
  } else {
    return 'browser'
  }
}
const getWxJsApi = function (wx, vm, url, api_list) {
  return vm.$http.post('/flight/api/flight/getJsApi', { url: encodeURIComponent(url) }).then(res => {
    wx.config({
      debug: false,
      appId: res.data.data.appId,
      timestamp: res.data.data.timestamp,
      nonceStr: res.data.data.nonceStr,
      signature: res.data.data.signature,
      jsApiList: api_list
    })
  })
}

// 验证 token
const isTokenValid = (token, timestamp, valid_seconds) => {
  // 如果曾登录过
  if (token && timestamp) {
    const is_time_valid = parseInt(Date.now() / 1000 - timestamp) < valid_seconds
    return is_time_valid
  } else {
    return false
  }
}

// export const ENV = () => {
//   // 返回 ['mobile', 'ios||android||others'] || ['pad', 'ios||android||others'] || ['pc', 'normal'||'wide']
// }

export { isPC, getEnv, getWxJsApi, isTokenValid }
