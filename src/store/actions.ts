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
  }
}