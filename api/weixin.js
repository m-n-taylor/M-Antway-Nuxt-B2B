import request from '@/utils/request'

export function getWeiXin() {
  return request({
    url: '/weixin',
    method: 'GET'
  })
}

export function sendCodeWeiXin(data) {
  return request({
    url: `/weixin/callback`,
    method: 'POST',
    data
  })
}
export function register(data) {
  return request({
    url: `/weixin/signup`,
    method: 'POST',
    data
  })
}
export function registerByCode(data) {
  return request({
    url: `/weixin/callback`,
    method: 'POST',
    data
  })
}


// update: 2025-07-31T19:37:23.060864
