<template>
  <div class="saitama">
    <div ref="car" style="width: 700px"></div>

    <div class="footer">2021 ♥ Desenvolvimento: Sinoki Card Games ®.</div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue';
import Saitama from '@/util/saitama';
import '@/util/saitama/css.css';

export default defineComponent({
  setup() {
    const car = ref();

    onMounted(() => {
      const options = {
        el: car.value,
        images: [
          'https://i.ibb.co/HXmS4HL/Saitama-e-Mosquito.jpg',
          'https://i.ibb.co/bJYJ10s/onepunchman.jpg',
          'https://i.ibb.co/jbfVTMC/saitama.jpg',
          'https://i.ibb.co/c84nQzT/saitama.png',
        ],
      };
      const saitama = new Saitama(options);
    });

    return {
      car,
    };
  },
});
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #444;
  color: white;
  text-align: center;
}
</style>
