export default function ({ store, redirect, route }) {
    // If the user is not authenticated
    // console.log("authenteded middleware", store.state.auth)
    if (store.state.auth.status_writer==0) {
      return redirect(`/my/article/writer?redirect=${route.path}`)
    }else if(store.state.auth.status_writer==1){
      return redirect(`/my/article`)
    }
  }
  
// update: 2025-07-31T19:32:17.019995

// update: 2025-07-31T19:36:34.769842

// update: 2025-07-31T19:38:09.994111

// update: 2025-07-31T19:47:44.491529

// update: 2025-07-31T19:50:33.116251
