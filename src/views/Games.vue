<template>
  <div class="header">Olá, seja bem vindo a super loja de cards Pokemon</div>
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
    <div id="app">
      <div class="column is-half is-offset-one-quarter">
        <input
          type="text"
          placeholder="Buscar pokemon pelo nome"
          v-model="busca"
        />
        <button class="buscaBtn" @click="buscar">Buscar</button>
      </div>
    </div>
  </div>
  <div class="header-card-container flex flex-wrap">
    <div v-for="card in list" :key="card.id">
      <card-component :card="card" @on-buy="buyHandler(card)" />
    </div>
  </div>
  <btn @click="loadMoreHandler">Carregar mais</btn>
</template>

<script lang="ts">
import useCards, { Card } from '@/modules/cards';
import { computed, defineComponent } from 'vue';
import Btn from '@/components/atoms/Btn.vue';
import useMe from '@/modules/me';
import CardComponent from '@/components/molecules/Card.vue';
import axios from 'axios';
import Pokemon from '@/components/Pokemon.vue';

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
    const searchHandler = (card: Card) => {
      me.mutations.addCardToCart(card);
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
      searchHandler,
    };
  },
  data() {
    return {
      pokemons: [],
      filteredPokemons: [],
      busca: '',
    };
  },
  created() {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=250&offset=0')
      .then((res) => {
        console.log('Pegou a lista de pokemons');
        this.pokemons = res.data.results;
        this.filteredPokemons = res.data.results;
      });
  },
});
</script>

<style lang="scss" scoped>
.header-card-container {
  border: 1px solid yellow;
  display: flex;
  justify-content: center;
  max-height: 40vh;
  overflow-y: auto;
}
.balance {
  color: white;
  margin-top: 20px;
}
.cart {
  font-family: "Comic Sans MS";
  display: flex;
  justify-content: center;
}
a {
  color: white;
}
input[type="text"] {
  margin-top: 10px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  border: 3px solid #2d9fd9;
  color: #a0d18c;
  width: 250px;
  height: 30px;
  padding-left: 10px;
}

input[type="text"]:focus {
  outline: none;
  border: 3px solid #a0d18c;
  color: #2d9fd9;
}

.buscaBtn {
  border: none;
  font-size: 16px;
  margin: 4px 2px;
  transition: 0.3s;
  padding: 2px 10px;
  text-align: center;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 30px;
  margin-top: 30px;
  font-family: "Comic Sans MS";
  background-color: greenyellow;
}
.buscaBtn:hover {
  background-color: #2d9fd9;
}
</style>
