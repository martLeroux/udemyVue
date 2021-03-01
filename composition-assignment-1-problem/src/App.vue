<template>
<div>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="goalObject.visibility">{{goalObject.goal}}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleVisibility">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</div>
</template>

<script>
import { ref } from 'vue';
//import { reactive, toRefs } from 'vue';

export default {
  /* TASK 3 - With ref*/
  /*setup() {
    const goal = ref('Learn vue.js');
    const visibility = ref(true);

    const toggleVisibility = () => {
      visibility.value = !visibility.value;
    };

    return { goal, visibility, toggleVisibility };
  }*/

  /* TASK 3 - With ref*/
  setup() {
    const goalObject = ref({
      goal: 'Learn vue.js',
      visibility: true
    });

    const toggleVisibility = () => {
      goalObject.value.visibility = !goalObject.value.visibility;
    };

    return { goalObject, toggleVisibility };
  }

  /* TASK 3 - With reactive object*/
  /*setup() {
    const goalObject = reactive({
      goal: 'Learn vue.js',
      visibility: true
    });

    const goalRefs = toRefs(goalObject);

    const toggleVisibility = () => {
      goalRefs.visibility.value = !goalRefs.visibility.value;
    };

    return {
      goal: goalRefs.goal,
      visibility: goalRefs.visibility,
      toggleVisibility
    };
  }

  /*
  TASK 4
  data() {
    return {
      goal: 'Learn vue.js',
      visibility: true
    };
  },
  methods: {
    toggleVisibility() {
      this.visibility = !this.visibility;
    }
  }*/
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>