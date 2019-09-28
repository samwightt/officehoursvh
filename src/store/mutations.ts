export default {
  setTree(state, treeToSet) {
    state.users = treeToSet.users
    state.conversations = treeToSet.conversations
    state.tags = treeToSet.tags
  },
  createUser(state, user) {
    state.users.push(user)
  }
}