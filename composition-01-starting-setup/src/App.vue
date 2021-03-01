<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.uAge }}</h3>
    <button @click="setNewData">Change age</button>
  </section>
</template>

<script>
import { reactive } from 'vue';
import { setTimeout } from 'timers';

export default {
  setup() {
    //const userName = ref('Maximilian');
    //const uAge = ref(31);

    const user = reactive({
      name: 'Maximilian',
      uAge: 31
    });

    function setNewData() {
      user.uAge = 38;
    }

    /*setTimeout(() => {
      userName.value = 'Martin';
      uAge.value = 35;
    }, 2000);
    return { userName, uAge };*/

    setTimeout(() => {
      user.name = 'Martin';
      user.uAge = 35;
    }, 2000);
    return { user, setNewData };
  }
  /*data() {
    return {
      userName: 'Maximilian',
      age: 31,
    };
  },
  methods: {
    setNewAge() {
      this.age = 35;
    }
  }
  */
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