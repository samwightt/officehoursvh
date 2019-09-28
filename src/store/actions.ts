let queue: string[] = []

let websocketSendFunction: ((message: string) => any) | null = null

let sendFunction = (message: string) => {
  if (websocketSendFunction) websocketSendFunction(message)
  else queue.push(message)
}

export default {
  establishConnection({ commit, state }) {
    let socket = new WebSocket('ws://localhost:8090')

    socket.onmessage = (m) => {
      commit('setTree', JSON.parse(m.data))
    }

    socket.onopen = () => {
      if (queue.length > 0) {
        queue.forEach(item => socket.send(item))
        queue = []
      }
      websocketSendFunction = (message: string) => {
        socket.send(message)
      }
      socket.send('__load__')
    }
  },
  sendMessage({ commit }, message: { [key: string]: any }) {
    sendFunction(JSON.stringify(message))
  },
  signUpUser({ commit, state, dispatch }, user: {
    name: string,
    email: string,
    school: string
  }) {
    if (state.users.length === 0 || !state.users.find(item => item.email === user.email)) {
      commit('createUser', user, dispatch)
      dispatch('sendMessage', state)
    }
  }
}