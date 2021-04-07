import api from '@/utils/request'
/* 
type:{ 
  "all", 
  "recommend", 
  "etc", 
  "company", 
  "product", 
  "activity", 
  "expo" } 
*/
export function getVideo(type, params) {
  return api({
    url: `/video/${type}`,
    method: 'GET',
    params
  })
}
// update: 2025-07-31T19:35:18.935561

// update: 2025-07-31T19:49:04.746927

// update: 2025-07-31T19:57:31.905427

// update: 2025-07-31T19:57:40.398279
