const app = Vue.createApp({
  data() {
    return {
      output: 'OUTPUT',
      outputEnter: 'OUTPUT',
    };
  },
  methods: {
    showAlert() {
      alert("Yeah!");
    },
    changeOutput(event) {
      this.output = event.target.value;
    },
    changeOutputEnter(event) {
      this.outputEnter = event.target.value;
    }
  }
});

app.mount('#assignment');
