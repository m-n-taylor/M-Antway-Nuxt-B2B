import api from '@/utils/request'

/* 
type: {'about_us' | 'contact_us' | 'join_us' | 'terms' | privacy_policy' | 'help'}

*/
export function getList(type) {
  return api({
    url: `/sitecontent/${type}`,
    method: 'GET'
  })
}
// update: 2025-07-31T19:46:32.087849

// update: 2025-07-31T19:47:29.354943
