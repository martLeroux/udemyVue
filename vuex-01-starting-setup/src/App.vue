<template>
  <base-container title="Vuex" v-if="isLoggedIn">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="addTen">Add 10 * 2</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
  {{isLoggedInTest}}
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    addTen() {
      this.$store.dispatch('increase', { value: 10 });
      /* or
      this.$store.commit({
        type: 'increase', 
        value: 10
      });*/
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>