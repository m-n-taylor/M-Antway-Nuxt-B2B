export default function ({ store, redirect, route }) {
    // If the user is not authenticated
    if (!store.state.auth.company_id) {
      return redirect(`/my/sell/company_info?redirect=${route.path}`)
    }
  }
  
// update: 2025-07-31T19:30:32.180972

// update: 2025-07-31T19:48:43.639546
