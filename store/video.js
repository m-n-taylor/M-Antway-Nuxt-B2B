
import { getVideo } from '@/api/video'
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
  recommend_video: [],
})

export const mutations = {
  SET_DA: (state, da) => {
    state.recommend_video = da   
  },    
}

export const actions = {
  // get Total roles for admin add role   
  async getVideoRecom({ commit }, param={page:1, limit:4}) {     
    const resp = await getVideo('recommend', param)
    if (resp.items){
      commit('SET_DA', resp.items)
    }
  },  
}
// update: 2025-07-31T19:34:30.170687
