export default function ({ store, redirect, route }) {
    // If the user is not authenticated
    if (![3, 4, 5].includes(store.getters.userLevel)) {
      return redirect(`/pricing?lev=3&redirect=${route.path}`)
    }
  }
  
// update: 2025-07-31T19:37:02.712414

// update: 2025-07-31T19:37:03.821684

// update: 2025-07-31T19:58:20.611288

// update: 2025-07-31T19:58:42.853864
