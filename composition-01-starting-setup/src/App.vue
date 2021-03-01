<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.uAge }}</h3>
  </section>
</template>

<script>
import { ref } from 'vue';
import { setTimeout } from 'timers';

export default {
  setup() {
    //const userName = ref('Maximilian');
    //const uAge = ref(31);

    const user = ref({
      name: 'Maximilian',
      uAge: 31
    });

    /*setTimeout(() => {
      userName.value = 'Martin';
      uAge.value = 35;
    }, 2000);
    return { userName, uAge };*/

    setTimeout(() => {
      user.value.name = 'Martin';
      user.value.uAge = 35;
    }, 2000);
    return { user };
  }
  /*data() {
    return {
      userName: 'Maximilian',
    };
  },*/
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>