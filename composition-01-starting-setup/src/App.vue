<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ uAge }}</h3>
    <button @click="setNewData">Change age</button>
    <div>
      <input type="text" placeholder="First Name" @input="setFirstName" />
      <input type="text" placeholder="Last Name" @input="setLastName" />
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue';
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

    function setNewData() {
      uAge.value = 38;
    }

    function setFirstName(event) {
      firstName.value = event.target.value;
    }

    function setLastName(event) {
      lastName.value = event.target.value;
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
      setNewData,
      setFirstName,
      setLastName
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