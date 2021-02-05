import request from '@/utils/request'

export function addDiscover(data) {
  return request({
    url: '/discover',
    method: 'POST',
    data
  })
}

export function getMyEvents(params) {
  return request({
    url: '/discover/activity/mylist',
    method: 'GET',
    params
  })
}
export function getList(da) {
  return request({
    url: '/discover/list',
    method: 'POST',
    data:{
      tag: 'activity',
      ...da
    }
  })
}

export function getDetail(id) {
  return request({
    url: '/discover/'+id,
    method: 'GET'
  })
}

export function del(ids) {
  return request({
    url: '/discover',
    method: 'DELETE',
    data: {ids}
  })
}

// action_type = like, comment, collect
export function actionArticle(action_type, id) {
  return request({
    url: `/discover/${id}/${action_type}`,
    method: 'POST'  
  })
}

// update: 2025-07-31T19:32:48.373511

// update: 2025-07-31T19:34:18.728310

// update: 2025-07-31T19:36:26.001400

// update: 2025-07-31T19:37:04.950218

// update: 2025-07-31T19:38:33.301552

// update: 2025-07-31T19:41:40.777678

// update: 2025-07-31T19:44:12.974352

// update: 2025-07-31T19:55:02.592163
