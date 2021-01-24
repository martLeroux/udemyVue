<template>
  <button @click="increase({value: 2})">Increase 2 * 2</button>
  <button @click="increment">Increment 1 * 2</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    /*addTwo() {
      this.$store.dispatch('increase', { value: 2 });
    }*/
    ...mapActions(['increase', 'increment'])
    /*...mapActions({
      inc: 'increment',
      increase: 'increase'
    })*/
  }
};
</script>