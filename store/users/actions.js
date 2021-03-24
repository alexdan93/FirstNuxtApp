export default {
  async setUsers({ commit }) {
    const response = await this.$axios.$get('https://jsonplaceholder.typicode.com/users');
    commit('setUsers', response);
    return response;
  },
};
