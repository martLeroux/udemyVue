<template>
<div>
  <h2>{{userName}}</h2>
  <h3>{{age}}</h3>
</div>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue';

export default {
  props: ['firstName', 'lastName'],
  setup(props, context) {
    const userName = computed(function() {
      return props.firstName + ' ' + props.lastName;
    });

    const age = inject('userAge');

    context.emit('save-data', 1); //this.$emit('save-data', 1);

    onBeforeMount(() => {
      console.log('before mount');
    });

    onMounted(() => {
      console.log('mounted');
    });

    onBeforeUpdate(() => {
      console.log('before updated');
    });

    onUpdated(() => {
      console.log('updated');
    });

    onBeforeUnmount(() => {
      console.log('before unmount');
    });

    onUnmounted(() => {
      console.log('unmounted');
    });

    return { userName, age };
  }
  /*computed: {
    userName() {
      return this.firstName + ' ' + this.lastName;
    }
  }*/
};
</script>