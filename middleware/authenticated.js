export default function ({ store, redirect, route }) {
    // If the user is not authenticated
    if (!store.state.auth) {      
      return redirect(`/login?redirect=${route.path}`)
    }
  }
  
// update: 2025-07-31T19:34:52.093103

// update: 2025-07-31T19:44:37.935601

// update: 2025-07-31T19:45:05.783480
