import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
      isLoggedIn: false
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 1;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
    loginOrLogOut(state, payload) {

      state.isLoggedIn = payload.isLoggedIn;
      console.log(state.isLoggedIn);
    }
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
    loginOrLogOut(context, payload) {
      console.log('loginOrLogOut action');
      context.commit('loginOrLogOut', payload);
    }
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
    isLoggedIn(state) {
      return state.isLoggedIn;
    }
  }
})

const app = createApp(App);

app.use(store);
app.mount('#app');
