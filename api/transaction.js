import api from '@/utils/request'

export function getTransactionList(params) {
  return api({
    url: '/transaction',
    method: 'GET',
    params
  })
}



// update: 2025-07-31T19:44:48.186369

// update: 2025-07-31T19:45:30.968484

// update: 2025-07-31T19:58:23.880644
