<template>
  <Navbar />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/Navbar.vue';
import useAuth from './modules/auth';
import useMe from './modules/me';
import Games from './views/Games.vue';

export default defineComponent({
  components: { Navbar },

  setup() {
    const auth = useAuth();
    const me = useMe();

    auth.actions.loadUserData();

    if (auth.state.token) {
      me.actions.getMe().then((res) => {
        console.log('App.vue', res);
        if (!res) {
          auth.actions.logout();
        }
      });
    }

    return {};
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
  color: white;
}

.flex {
  display: flex;
}

.flex-wrap {
  flex-wrap: wrap;
}
</style>
