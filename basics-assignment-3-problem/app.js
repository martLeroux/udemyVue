const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  watch: {
    counter() {
      that = this;
      setTimeout(() => {
        that.counter = 0;
      }, 5000);
    }
  },
  computed: {
    message() {
      console.log(this.counter);
      if (this.counter < 37) {
        return 'Not there yet';
      } else if (this.counter === 37) {
        return this.counter;
      } else {
        return 'Too much';
      }
    }
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
  }
});

app.mount('#assignment');
