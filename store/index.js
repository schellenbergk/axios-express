export const state = () => ({
  news: []
});

export const mutations = {
  SET_NEWS(state, news) {
    state.news = news;
  }
};

export const actions = {
  async fetchNews({ commit }) {
    try {
      const res = await this.$axios.$get("/news");
      commit("SET_NEWS", res);
    } catch(e) {
      console.log("action error: ",e);
    }
  }
};

export const getters = {
  getNews(state) {
    return state.news;
  }
};
