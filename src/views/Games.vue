<template>
  <div class="header">
    Olá, seja bem vindo a super loja de cards Pokemon

    <div class="balance">
      Balance: <strong>{{ balance }}</strong>
      </div>
      <div class="cart">
        <router-link :to="{ name: 'Checkout' }">
          Cart: <strong>{{ cartCount }}</strong>
        </router-link>
      </div>

    <div style="margin-top: 30px">
      <div>lista dos seus pokemons</div>
      <div class="header-card-container flex flex-wrap">
        <div v-for="card in myList" :key="card.id">
          <card-component :card="card" @on-sell="sellHandler(card)" isMine />
        </div>
      </div>
    </div>

    <div style="margin-top: 30px">
      <div>lista dos pokemons</div>

      <div class="header-card-container flex flex-wrap">
        <div v-for="card in list" :key="card.id">
          <card-component :card="card" @on-buy="buyHandler(card)" />
        </div>
      </div>

      <btn @click="loadMoreHandler">Carregar mais</btn>
    </div>
  </div>
</template>

<script lang="ts">
import useCards, { Card } from '@/modules/cards';
import { computed, defineComponent } from 'vue';
import Btn from '@/components/atoms/Btn.vue';
import useMe from '@/modules/me';
import CardComponent from '@/components/molecules/Card.vue';

export default defineComponent({
  components: { Btn, CardComponent },
  setup() {
    const cards = useCards();
    const me = useMe();
    const balance = computed(() => me.state.balance);
    const cartCount = computed(() => me.state.cart.length);
    const list = cards.getters.sortedList();
    const myList = me.getters.sortedList();
    const loadMoreHandler = () => {
      cards.actions.loadMore();
    };
    const buyHandler = (card: Card) => {
      me.mutations.addCardToCart(card);
    };
    const sellHandler = (card: Card) => {
      console.log('sell', card);
      me.actions.sell(card);
    };
    cards.actions.loadCards();
    return {
      list,
      myList,
      loadMoreHandler,
      buyHandler,
      sellHandler,
      balance,
      cartCount,
    };
  },
});
</script>

<style lang="scss" scoped>
.header-card-container {
  border: 1px solid black;
  display: flex;
  justify-content: center;
  max-height: 40vh;
  overflow-y: auto;
}
.balance {
  color: white;
}
.cart {
  font-family: "Comic Sans MS";
  background: grey;
  display: flex;
  justify-content: center;
}
</style>
