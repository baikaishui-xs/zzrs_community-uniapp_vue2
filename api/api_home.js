import {
  request
} from '@/utils/request.js'

// 获取 热点列表
export function getHotspotList() {
  return request.get({
    url: '/v1/postclass/4/post/1',
  })
}

// 获取 列表类别
export function getListCategory() {
  return request.get({
    url: '/v1/postclass'
  })
}
