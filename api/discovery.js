import request from '@/utils/request'

export function add(data) {
  return request({
    url: '/discover',
    method: 'POST',
    data
  })
}

export function getList(data) {
  return request({
    url: `/discover/list`,
    method: 'POST',
    data:{
      tag: 'discover',
      ...data
    }
  })
}

export function getDetail(id) {
  return request({
    url: '/guest/discover/'+id,
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

// action_type = singnup, like, comment, collect
export function action(action_type, id, data={}) {
  return request({
    url: `/discover/${id}/${action_type}`,
    method: 'POST',
    data 
  })
}
// discover for guest on home page
// export function getListGuest(data={page:1, limit:4}) {
//   return request({
//     url: `/guest/discover/list`,
//     method: 'POST',
//     data:{
//       tag: 'discover',
//       ...data
//     }
//   })
// }

// update: 2025-07-31T19:30:21.157328

// update: 2025-07-31T19:40:45.121002

// update: 2025-07-31T19:41:33.966361

// update: 2025-07-31T19:46:11.511538

// update: 2025-07-31T19:55:53.203431
