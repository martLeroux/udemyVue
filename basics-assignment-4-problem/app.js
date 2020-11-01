const app = Vue.createApp({

  data() {
    return {
      userInput1: "",
      visibility: true,
      bgColor: ''
    }
  },
  computed: {
    boxAClasses() {
      return { active: this.boxASelected }
    }
  },
  methods: {
    toggleVisibility() {
      this.visibility = !this.visibility;
    }
  }
});

app.mount("#assignment");