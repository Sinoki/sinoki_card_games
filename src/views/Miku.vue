<template>
  <div class="miku">
    <div ref="car" style="width: 700px"></div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue';
import Miku from '@/util/miku';
import '@/util/miku/css.css';

export default defineComponent({
  setup() {
    const car = ref();
    onMounted(() => {
      const options = {
        el: car.value,
        images: [
          'https://i.ibb.co/tbBDv1Q/hatsune-miku.jpg',
          'https://i.ibb.co/mGzhqTq/miku-hatsune.png',
          'https://i.ibb.co/DKLdBrX/hatsune.jpg',
        ],
      };
      const miku = new Miku(options);
    });
    return {
      car,
    };
  },
});
</script>
