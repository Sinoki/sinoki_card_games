<template>

    <span v-if="!isLoggedIn">
      <router-link to="/login">Login</router-link>
    </span>

    <span v-else>
      Bem vindo: <strong>{{ username }}</strong> |
      <span @click="logoutHandler">Logout</span>
    </span>

    <div class="header-balance">
      Balance: <strong>{{ balance }}</strong> |

      <router-link :to="{ name: 'Checkout' }">
        Cart: <strong>{{ cartCount }}</strong>
      </router-link>
    </div>

</template>

<script lang="ts">
import useAuth from '@/modules/auth';
import useMe from '@/modules/me';
import { computed, defineComponent } from 'vue';

export default defineComponent({
  components: {},
  setup() {
    const auth = useAuth();
    const me = useMe();
    const isLoggedIn = computed(() => auth.state.token);
    const username = computed(() => auth.state.username);
    const balance = computed(() => me.state.balance);
    const cartCount = computed(() => me.state.cart.length);
    const logoutHandler = () => {
      auth.actions.logout();
    };
    return {
      isLoggedIn,
      username,
      balance,
      cartCount,
      logoutHandler,
    };
  },
});
</script>

<style lang="scss" scoped>
.header {
  border: 1px solid black;
}
.header-balance {
  margin-left: 20px;
}
</style>
