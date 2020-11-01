const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname: '',
      lastName: ''
    };
  },
  watch: {
    name(value) {
      if (value === '') {
        this.fullname = '';
      } else {
        this.fullname = value + ' ' + 'Leroux'
      }

    }
  },
  computed: {
    /*fullname() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Leroux';
    }*/
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    }
  }
});

app.mount('#events');
