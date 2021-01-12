export default function ({ store, redirect, route }) {
    if (store.getters.userLevel != 5) {
      return redirect(`/pricing?lev=5&redirect=${route.path}`)
    }
  }
  
// update: 2025-07-31T19:37:00.495612

// update: 2025-07-31T19:53:22.791238
