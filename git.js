window.github = (message) =>
  window.__core.sendBroadcast({
    type: 'chat',
    room,
    author,
    message: (Array.isArray(message) ? message[0] : message).replace('git:', 'https://github.com/'),
    timestamp: Date.now()
  })

window.gitlab = (message) =>
  window.__core.sendBroadcast({
    type: 'chat',
    room,
    author,
    message: (Array.isArray(message) ? message[0] : message).replace('git:', 'https://gitlab.com/'),
    timestamp: Date.now()
  })
