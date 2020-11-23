const app = Vue.createApp({
  data() {
    return {
      friends: [

        { id: 'julie', name: 'Julie Jones', phone: '514 929-1029', email: 'julie@localhost.com' }
      ]
    }

  }
});

app.component('friend-contact', {
  template: `<li>
  <h2>{{ friend.name }}</h2>
  <button @click="toggleDetails()">
  {{detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
  <ul v-if="detailsAreVisible">
    <li>
      <strong>Phone:</strong> {{ friend.name }}</li>
    <li>
      <strong>Email:</strong> {{ friend.email }}</li>
  </ul>
</li>`,
  data() {
    return {
      detailsAreVisible: false,
      friend: { id: 'manuel', name: 'Manuel Lorenz', phone: '514 764-9292', email: 'manuel@localhost.com' },
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
});

app.mount("#app");
