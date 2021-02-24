export default function ({ store, redirect, route }) {
    // If the user is not authenticated
    // console.log("authenteded middleware", store.state.auth)
    if (!store.state.auth.vip_id) {
      return redirect(`/pricing?redirect=${route.path}`)
    }
  }
  
// update: 2025-07-31T19:34:11.048497

// update: 2025-07-31T19:42:23.587295

// update: 2025-07-31T19:56:05.494272
