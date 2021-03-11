module.exports = {
    apps: [
      {
        name: 'm.antway',
        exec_mode: 'cluster',
        port: 9001,
        instances: 'max', 
        script: './node_modules/nuxt/bin/nuxt.js',
        args: 'start'
      }
    ]
  }
// update: 2025-07-31T19:46:28.350560

// update: 2025-07-31T19:48:45.891824

// update: 2025-07-31T19:49:26.505421

// update: 2025-07-31T19:55:37.502152

// update: 2025-07-31T19:56:56.145237
