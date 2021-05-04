<template>
  <div class="title">Sinoki Card Games</div>
  <nav>
    <div class="menu-item"><router-link to="/">Home</router-link></div>
    <div class="menu-item"><router-link to="/about">About</router-link></div>
    <Dropdown title="Games" :items="games" />
    <div class="menu-item">
      <span v-if="!isLoggedIn">
        <router-link to="/login">Login</router-link>
      </span>

      <span v-else>
        Bem vindo: <strong>{{ username }}</strong> |
        <span @click="logoutHandler">Logout</span>
      </span>
    </div>
    <div class="menu-item">
      <router-link to="/contact">Contact</router-link>
    </div>
  </nav>
</template>

<script>
import useAuth from '@/modules/auth';
import useMe from '@/modules/me';
import { computed, defineComponent } from 'vue';
import Dropdown from './Dropdown.vue';

export default defineComponent({
  name: 'navbar',
  components: {
    Dropdown,
  },
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
      games: [
        {
          title: 'Pokemon',
          link: 'Games',
        },
        {
          title: 'One Punch man',
          link: 'Saitama',
        },
        {
          title: 'Yu Yu Hakusho',
          link: 'Hakusho',
        },
        {
          title: 'Naruto',
          link: 'Naruto',
        },
        {
          title: 'Death Note',
          link: 'DeathNote',
        },
        {
          title: 'Dragon Ball',
          link: 'Dragon',
        },
        {
          title: 'One Piece',
          link: 'OnePiece',
        },
        {
          title: 'Attack on Titan',
          link: 'AttackTitan',
        },
        {
          title: 'Hatsune Miku',
          link: 'Miku',
        },
      ],
    };
  },
});
</script>

    <style>
.title:hover {
  color: white;
}
.title {
  font-family: "Comic Sans MS";
  color: black;
  font-size: 30px;
  background: lightcoral;
  display: flex;
  justify-content: center;
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
}

nav .menu-item {
  color: #fff;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
  margin-top: 5px;
  font-weight: bold;
}

nav .menu-item.active,
nav .menu-item:hover {
  background-color: #444;
  border-bottom-color: #ff5858;
}

nav .menu-item a {
  color: inherit;
  text-decoration: none;
}
</style>
