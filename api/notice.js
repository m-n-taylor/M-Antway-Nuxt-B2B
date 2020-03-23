import api from '@/utils/request'

export function getList(params) {
  return api({
    url: '/notice',
    method: 'GET',
    params
  })
}

export function getDetail(id) {
  return api.get('/notice/'+id) 
}

// update top order of selected product
export function del(ids) {
  return api({
    url: '/notice',
    method: 'DELETE',
    data:{
      ids
    }
  })
}


// update: 2025-07-31T19:30:38.145959

// update: 2025-07-31T19:37:45.650208
