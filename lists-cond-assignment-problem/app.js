const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTaskValue: '',
      listVisible: true
    };
  },
  computed: {
    buttonCaption() {
      return this.listVisible ? 'Hide List' : "Show List";
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTaskValue);
    },
    toggleListVisibility() {
      this.listVisible = !this.listVisible
    }
  },
});

app.mount('#assignment');
