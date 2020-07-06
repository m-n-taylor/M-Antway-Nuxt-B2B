import api from '@/utils/request'

export function getTransactionList(params) {
  return api({
    url: '/transaction',
    method: 'GET',
    params
  })
}



// update: 2025-07-31T19:44:48.186369
