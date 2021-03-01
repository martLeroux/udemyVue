<template>
  <section class="container">
    <user-data :first-name="firstName" :last-name="lastName" ></user-data>
    <button @click="setNewData">Change age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set LastName</button>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch, provide } from 'vue';
import UserData from './components/UserData.vue';
//import { reactive } from 'vue';

export default {
  components: {
    UserData
  },
  setup() {
    //const userName = ref('Maximilian');
    const firstName = ref('');
    const lastName = ref('');
    const uAge = ref(31);
    const lastNameInput = ref(null);

    /*const user = reactive({
      name: 'Maximilian',
      uAge: 31
    });*/

    const userName = computed(() => {
      return firstName.value + ' ' + lastName.value;
    });

    provide('userAge', uAge);

    watch([uAge, userName], (newValues, oldValues) => {
      console.log('Old age: ' + oldValues[0]);
      console.log('New age: ' + newValues[0]);
      console.log('New name: ' + newValues[1]);
    });

    function setNewData() {
      uAge.value = 38;
    }

    function setLastName() {
      //un peu étrange mais .value pour avoir accès au ref de lastNameInput et un autre .value pour avoir la value de l'input
      lastName.value = lastNameInput.value.value;
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
      lastNameInput,
      uAge,
      setNewData,
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
  },
  provide() {
    return { age: this.age}
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