import api from '@/utils/request'

export function getAlipay(subject, amount) {
  return api({
    url: '/alipay',
    method: 'POST',
    data:{
      subject, amount
    }
  })
}

// update: 2025-07-31T19:31:12.034213

// update: 2025-07-31T19:37:08.340013
