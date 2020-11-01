const app = Vue.createApp({
  data() {
    return {
      myName: 'Martin Leroux',
      myAge: 35,
      myImage: "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__340.jpg"
    };
  },
  methods: {
    generateRandomNumber() {
      return Math.random();
    }
  }
});

app.mount('#assignment');