export default {
  state: {
    screenWidth: 0,
    loaderLayout: false,
    snackbar: {
      model: false,
      timeout: 3000,
      bgColor: '#2047E0',
      fontColor: '#047C00',
      text: 'Processo efetuado com sucesso!',
    },
    header: {
      title: 'Cabeçalho',
      img: null,
      items: null,
    },
  },

  mutations: {
    generalChangeState(state, param) {
      state[param.key] = param.payload;
    },
  },

  actions: {
    generalChangeState(context, param) {
      context.commit('generalChangeState', param);
    },
  },

  getters: {
    screenWidth: (state) => state.screenWidth,
    loaderLayout: (state) => state.loaderLayout,
    snackbar: (state) => state.snackbar,
    header: (state) => state.header,
  },
};
