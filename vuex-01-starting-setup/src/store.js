
/*Façon plus simple d'organiser le store voir chapitre 221

import { createStore } from 'vuex';

const counterModule = {
  //namespaced: true, //si on veut utiliser les mêmes noms de state ou d'action dans plusieurs modules, implique d'appeller les actions/getters etc différement voir chapitre 220
  state() {
    return {
      counter: 0,
    }
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 1;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit('increment');
      }, 2000);

    },
    increase(context, payload) {
      setTimeout(() => {
        context.commit('increase', payload);
      }, 2000);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0
      } else if (finalCounter > 100) {
        return 100;
      } else {
        return finalCounter;
      }
    },
  }
}

const store = createStore({
  modules: {
    counter: counterModule
  },
  state() {
    return {
      isLoggedIn: false
    };
  },
  mutations: {
    loginOrLogOut(state, payload) {
      state.isLoggedIn = payload.isLoggedIn;
      console.log(state.isLoggedIn);
    }
  },
  actions: {
    loginOrLogOut(context, payload) {
      console.log('loginOrLogOut action');
      context.commit('loginOrLogOut', payload);
    }
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    }
  }
});

export default store;/*