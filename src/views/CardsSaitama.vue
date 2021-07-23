<template>
  <div>
    <header>
      <button class="products">
        <router-link to="products">View cards</router-link>
      </button>
      <button class="cart">
        <router-link to="cart">View cart</router-link>
      </button>
    </header>
    <h1>Cards</h1>

    <div class="footer">2021 ♥ Desenvolvimento: Sinoki Card Games ®.</div>
    <div class="cards">
      <div v-for="(card, index) in cards" :key="index">
        <div class="name">{{card.name}}</div>
        <img :src="card.image" />
        <div class="price">{{card.price}}</div>
        <div class="btn"><button @click="addItemToCart(card)">Add to cart</button></div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import useSaitama from '@/modules/saitama';

export default defineComponent({
  setup() {
    const saitama = useSaitama();

    const cards = computed(() => saitama.state.cards);

    const addItemToCart = (card) => {
      saitama.actions.addItemToCart(card);
    };

    return {
      cards,
      addItemToCart,
    };
  },

});
</script>

<style scoped>
header {
  height: 80px;
  background-color: #fecc49;
  text-align: right;
  font-size: 30px;
  padding-top: 20px;
}
header button {
  padding: 10px;
  margin: 3px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: #282c2f;
}
button a {
  color: white;
}
a:link {
  text-decoration: none;
}
button:hover {

  border: 3px solid white;
}
.btn button {
  background-color: #282c2f;
  color: white;
  border-radius: 10px;
  width: 80px;
  height: 25px;
}
.btn button:hover{
  border: 2px solid white;
}
.cards {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border: 2px solid white;
  padding: 50px;
}
.name {
  width: 150px;
  margin: 10px 50px;
}
</style>
