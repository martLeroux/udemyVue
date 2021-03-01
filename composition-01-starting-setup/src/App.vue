<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ uAge }}</h3>
    <button @click="setNewData">Change age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" v-model="lastName" />
    </div>
  </section>
</template>

<script>
import { ref, computed, watch } from 'vue';
//import { reactive } from 'vue';

export default {
  setup() {
    //const userName = ref('Maximilian');
    const firstName = ref('');
    const lastName = ref('');
    const uAge = ref(31);

    /*const user = reactive({
      name: 'Maximilian',
      uAge: 31
    });*/

    const userName = computed(() => {
      return firstName.value + ' ' + lastName.value;
    });

    watch([uAge, userName], (newValues, oldValues) => {
      console.log('Old age: ' + oldValues[0]);
      console.log('New age: ' + newValues[0]);
      console.log('New name: ' + newValues[1]);
    });

    function setNewData() {
      uAge.value = 38;
    }

    /*setTimeout(() => {
      userName.value = 'Martin';
      uAge.value = 35;
    }, 2000);
    return { userName, uAge };*/

    return {
      userName,
      firstName,
      lastName,
      uAge,
      setNewData
    };
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