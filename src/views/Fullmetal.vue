<template>
  <div class="Fullmetal">
    <div ref="car" style="width: 700px"></div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue';
import Fullmetal from '@/util/fullmetal';
import '@/util/fullmetal/css.css';

export default defineComponent({
  setup() {
    const car = ref();
    onMounted(() => {
      const options = {
        el: car.value,
        images: [
          'https://i.ibb.co/DgzTz5z/Full-Metal-Alchemist.png',
          'https://i.ibb.co/DgBSskN/fullmetal.png',
          'https://i.ibb.co/q7cZG0n/fullmetal-alchemist.jpg',
        ],
      };
      const fullmetal = new Fullmetal(options);
    });
    return {
      car,
    };
  },
});
</script>
