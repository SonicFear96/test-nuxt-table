export const state = () => ({
  comment: []
})

export const actions = {
  async getComment({commit}, id) {
    const comment = await this.$axios.$get(`https://jsonplaceholder.typicode.com/comments/${id}`)
    commit('SET_COMMENT', comment)
  }
}

export const mutations = {
  SET_COMMENT (state, value) {
    state.comment = value
  }
}

export const getters = {
  comment: state => state.comment
}
