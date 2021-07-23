<template>
  <div>
    <header>
       <button class="products"><router-link to="products">View cards</router-link></button>
       <button class="cart"><router-link to="cart">View cart</router-link></button>
    </header>
    <h1>Your Cart</h1>
    <div class="cards">
      <div v-for="(card, index) in cart" :key="index">
        <h3>{{card.name}}</h3>
        <img :src="card.image" />
        <div>{{card.price}}</div>
        <button @click="removeItemFromCart(card)">Remove from cart</button>
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

    const cart = computed(() => saitama.state.cart);

    const removeItemFromCart = (card) => {
      console.log('remover card', card);
    };

    return {
      cart,
      removeItemFromCart,
    };
  },
});
</script>

<style scoped>
header {
  height: 60px;
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
button .cards {
  margin-right: 10px;
}
.cards {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border: 2px solid white;
}
</style>
