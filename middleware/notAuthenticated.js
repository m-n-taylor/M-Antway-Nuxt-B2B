export default function ({store,redirect}) {
  // If the user is authenticated redirect to home page
  if (store.state.auth) {
    return redirect('/')
  }
}

// update: 2025-07-31T19:40:28.169790

// update: 2025-07-31T19:42:46.408540
