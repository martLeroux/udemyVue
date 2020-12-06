<template>
<section>
  <active-user v-for="user in users" :key="user.id" :id="user.id" :username="user.username" :age="user.age" ></active-user>
  <user-data @update-username="updateUsername"></user-data>

</section>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: "tintin_151",
          username: "tintin_151",
          age: 35
        }
      ]
    };
  },
  methods: {
    updateUsername(username, age) {
      this.users[0].username = username;
      this.users[0].age = +age;
    }
  }
};
</script>