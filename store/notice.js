
import { getList } from '@/api/notice'
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
export const state =()=>({ 
  notice2: [],
})

export const mutations = {
  SET_DA: (state, da) => {
    state.notice2 = da   
  },    
}

export const actions = {
  // get Total roles for admin add role   
  async getNotice2({ commit }){     
    const resp = await getList({ page:1, limit:2 })
    if (resp.items){
      commit('SET_DA', resp.items)
    }
  },  
}
// update: 2025-07-31T19:40:19.817830

// update: 2025-07-31T19:45:40.428563

// update: 2025-07-31T19:48:06.617140
