<template>
  <div class="marc">
    <div class="title">Sinoki Card Games</div>
  </div>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/games">Games</router-link> |
    <router-link to="/login">Login</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
.marc {
  background: lightcoral;
}
.title:hover {
  color: white;
}
.title {
  font-family: "Comic Sans MS";
  font-style: italic;
  border-radius: 10px;
  cursor: pointer;
  font-size: 30px;
  color: black;
}
#app {
  font-family: 'Courier New', Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: lightgreen;
}

#nav {
  padding: 30px;
  font-size: 25px;

  a {
    font-weight: bold;
    color: grey;

    &.router-link-exact-active {
      color: seagreen;
    }
  }
}

.flex {
  display: flex;
}

.flex-wrap {
  flex-wrap: wrap;
}
</style>
