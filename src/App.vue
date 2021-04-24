<template>
  <Navbar />
  <router-view />
</template>

<script>
import { defineComponent } from 'vue';

import Navbar from '@/components/Navbar.vue';

export default defineComponent({
  components: { Navbar },
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Comic Sans MS";
  background-color: black;
  color: silver;
}

header {
  width: 100vw;
  background-color: #222;
  padding: 15px;
}
</style>
