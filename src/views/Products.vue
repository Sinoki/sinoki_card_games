<template>
  <div>
    <h1>Products</h1>

        <button class="add" v-on:click="addItemToCart(cardsSaitama)">Add to cart</button>
      </div>

</template>

<script>
export default {
  methods: {
    addItemToCart(product) {
      this.$emit('addItemToCart', product);
    },
  },
};
</script>

<style>
.button .add {
  padding: 10px;
  margin: 3px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: #282c2f;
}
</style>
