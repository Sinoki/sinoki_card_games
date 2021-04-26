<template>
  <Navbar />
  <router-view />
  <div id="carousel"></div>
</template>

<script>
import { defineComponent } from 'vue';

import Navbar from '@/components/Navbar.vue';

export default defineComponent({
  components: {
    Navbar,
  },
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Ink Free";
  background-color: black;
  text-align: center;
  font-size: 20px;
  color: #f9105a;
}

header {
  width: 100vw;
  background-color: #222;
  padding: 15px;
}
</style>
