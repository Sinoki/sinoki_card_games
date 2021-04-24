<template>
  <div class="title">Sinoki Card Games</div>
  <nav>
    <div class="menu-item"><router-link to="/">Home</router-link></div>
    <div class="menu-item"><router-link to="/about">About</router-link></div>
    <Dropdown title="Games" :items="games" />
    <div class="menu-item"><router-link to="/">Login</router-link></div>
    <div class="menu-item">
      <router-link to="/">Contact</router-link>
    </div>
  </nav>
</template>

<script>
import Dropdown from './Dropdown.vue';

export default {
  name: 'navbar',
  components: {
    Dropdown,
  },
  data() {
    return {
      games: [
        {
          title: 'Pokémon',
          link: '#',
        },
        {
          title: 'One Punch man',
          link: '#',
        },
        {
          title: 'Yu Yu Hakusho',
          link: '#',
        },
        {
          title: 'Naruto',
          link: '#',
        },
        {
          title: 'Death Note',
          link: '#',
        },
        {
          title: 'Dragon Ball Z',
          link: '#',
        },
        {
          title: 'One Piece',
          link: '#',
        },
        {
          title: 'Attack on Titan',
          link: '#',
        },
      ],
    };
  },
};
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
