<template>
  <button @click="loginOrLogOut({isLoggedIn: true})" v-if="!isLoggedIn">Login</button>
  <button @click="loginOrLogOut({isLoggedIn: false})" v-else>Logout</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    ...mapActions(['loginOrLogOut'])
  }
};
</script>