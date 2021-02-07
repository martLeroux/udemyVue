<template>
<section>
  <base-card>
    <h2>Registration as a coach now!</h2>
    <coach-form @save-data="saveData" />
  </base-card>
</section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
  components: { CoachForm },
  methods: {
    saveData(data) {
      console.log(data);
      this.$store.dispatch('coaches/registerCoach', data);
      //semblable a $router.push
      this.$router.replace('/coaches');
    }
  }
};
</script>