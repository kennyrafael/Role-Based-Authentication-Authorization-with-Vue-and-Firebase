const state = () => {
  return {
    user: {
      loggedIn: false,
      data: null
    }
  };
};

const getters = {
  user: (state: any) => {
    return state.user;
  }
};

const mutations = {
  SET_LOGGED_IN: (state: any, value: any) => {
    state.user.loggedIn = value;
  },
  SET_USER(state: any, data: any) {
    state.user.data = data;
  }
};

const actions = {
  fetchUser: ({ commit }: any, user: any) => {
    commit('SET_LOGGED_IN', user !== null);
    if (user) {
      commit('SET_USER', {
        displayName: user.displayName,
        email: user.email
      });
    } else {
      commit('SET_USER', null);
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
