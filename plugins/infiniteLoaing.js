import Vue from 'vue'
import InfiniteLoading from 'vue-infinite-loading'
Vue.use(InfiniteLoading, {
    slots:{
        noMore: '没有更多数据',
        noResults:'没有数据'       
    }
})
// update: 2025-07-31T19:36:44.094970
