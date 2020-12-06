<template>
<form @submit.prevent="submitData">
  <div>
    <label for="name">Name</label>
    <input type="text" id="name" name="name" v-model="enteredUsername"/>
  </div>
  <div>
    <label for="age">Age</label>
    <input type="text" id="age" name="age" v-model="enteredAge"/>
  </div>
  <div>
    <button>Update username</button>
  </div>
</form>
</template>

<script>
export default {
  emits: ["update-username"],
  data() {
    return {
      enteredUsername: "",
      enteredAge: null
    };
  },
  methods: {
    submitData() {
      this.$emit("update-username", this.enteredUsername, this.enteredAge);
    }
  }
};
</script>