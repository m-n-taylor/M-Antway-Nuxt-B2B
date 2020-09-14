import VuexPersistence from 'vuex-persist'
export default ({store}) => {
  new VuexPersistence({
    key: 'mAntway_vuex',
    storage: window.localStorage,
    reducer: (state) => ({
      headline_tabs: state.article.tab_items
    })
  }).plugin(store)
}

// update: 2025-07-31T19:32:28.505597

// update: 2025-07-31T19:39:16.393837

// update: 2025-07-31T19:48:03.019188
