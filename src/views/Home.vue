<template>
  <div class="home">
    <div class="welcome">
      Bom dia, boa tarde, boa noite, depende de onde você está 😃 seja bem vindo
      ao marketplace Sinoki Card Games 🚀
    </div>

    <div ref="car" style="width: 600px"></div>

    <div class="footer">2021 ♥ Desenvolvimento: Sinoki Card Games ®.</div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue';
import Carousel from '@/util/carousel';
import '@/util/carousel/css.css';

export default defineComponent({
  setup() {
    const car = ref();

    onMounted(() => {
      const options = {
        el: car.value,
        images: [
          'https://i.ibb.co/k44tdZt/pokemon.jpg',
          'https://i.ibb.co/ZHF7SyQ/batalha.jpg',
          'https://i.ibb.co/84JLDKQ/Ashe-Pikachu.jpg',
        ],
      };
      const carousel = new Carousel(options);
    });

    return {
      car,
    };
  },
});
</script>

<style lang="scss" scoped>
.welcome {
  margin-top: 20px;
  font-family: "Ink Free";
  font-size: 27px;
  color: #f9105a;
}

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
