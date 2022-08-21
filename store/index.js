export const state = () => ({
  comments: [],
  comment: []
})

export const actions = {
  async getComments({commit}) {
    const comments = await this.$axios.$get('https://jsonplaceholder.typicode.com/comments?_limit=10')
    commit('SET_COMMENTS', comments)
  },
  async getComment({commit}, id) {
    const comment = await this.$axios.$get(`https://jsonplaceholder.typicode.com/comments/${id}`)
    commit('SET_COMMENT', comment)
  }
}

export const mutations = {
  SET_COMMENTS (state, value) {
    state.comments = value
  },
  SET_COMMENT (state, value) {
    state.comment = value
  }
}

export const getters = {
  comments: state => state.comments,
  comment: state => state.comment
}
