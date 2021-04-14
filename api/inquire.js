import api from '@/utils/request'

export function getList(type, data) {
  return api({
    url: '/trade/inquery/'+type,
    method: 'POST',
    data
  })
}

export function getDetail(id) {
  return api.get('/trade/inquery/'+id) 
}

export function add(data) {
  return api({
    url: '/inquery',
    method: 'POST',
    data
  })
}
export function reply(data) {
  return api({
    url: '/inquery/thread',
    method: 'POST',
    data
  })
}
export function toggleStar(id) {
  return api.get('/inquery/star/'+id) 
}

// export function update(id) {
//   return api.post('/product/'+id) 
// }

export function del(ids) {
  return api({
    url: '/inquery',
    method: 'DELETE',
    data:{ids}
  })
}

// To Recommemded Goods
export function toRecom(id) {
  return api.post('/product/toRecom/' + id)
}
// update top order of selected product
export function toTop(data) {
  return api({
    url: '/product/toTop',
    method: 'POST',
    data
  })
}


export function pindan(data) {
  return api({
    url: '/product/pindan',
    method: 'POST',
    data
  })
}


// __________ custom product category ____________

export function myCate() {
  return api.get('/product/custom')
}

export function myCateAdd(data) {
  return api({
    url: '/product/custom/add',
    method: 'POST',
    data
  })
}
export function myCateUpdate(data) {
  return api({
    url: '/product/custom/update',
    method: 'POST',
    data
  })
}
export function myCateDel(id) {
  return api.get('/product/custom/delete/'+id)
}


// update: 2025-07-31T19:36:37.987620

// update: 2025-07-31T19:39:38.891972

// update: 2025-07-31T19:41:04.297345

// update: 2025-07-31T19:46:54.828123

// update: 2025-07-31T19:51:49.481504

// update: 2025-07-31T19:52:04.517684

// update: 2025-07-31T19:58:05.894678
