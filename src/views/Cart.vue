<template>
  <div>
    <header>
       <button class="products"><router-link to="products">View cards</router-link></button>
       <button class="cart"><router-link to="cart">View cart</router-link></button>
    </header>
    <h1>Your Cart</h1>
    <div class="products">
      <div v-for="(product, index) in cart" :key="index">
        <h3>{{product.name}}</h3>
        <img :src="product.image" />
        <div>{{product.cost}}</div>
        <button v-on:click="removeItemFromCart(product)">Remove from cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cart'],
  methods: {
    removeItemFromCart(product) {
      this.$emit('removeItemFromCart', product);
    },
  },
};
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
button .products {
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
