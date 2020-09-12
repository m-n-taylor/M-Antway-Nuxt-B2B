export default function ({ store, redirect, route }) {
    if (![3, 4].includes(store.getters.userLevel)) {
      return redirect(`/pricing?lev=4&redirect=${route.path}`)
    }  
}
  
// update: 2025-07-31T19:37:18.975534

// update: 2025-07-31T19:47:59.325115
