<template>
  <div class="header">Olá, seja bem vindo a super loja de cards Pokemon</div>

  <div class="balance">
    <img src="@/assets/balance.svg"/> Balance: <strong>{{ balance }}</strong>
  </div>

  <div class="cart">
    <router-link :to="{ name: 'Checkout' }">
     <img src="@/assets/cart.svg"/> Cart: <strong>{{ cartCount }}</strong>
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

  <div id="app">
    <div class="column is-half is-offset-one-quarter">
      <input
        type="text"
        placeholder="Buscar pokemon pelo nome"
        v-model="busca"
      />
      <button class="buscaBtn" @click="buscar">Buscar</button>
      <div style="margin-top: 30px">
        <div>lista dos pokemons</div>
        <div class="header-card-container flex flex-wrap">
          <div v-for="card in list" :key="card.id">
            <card-component :card="card" @on-buy="buyHandler(card)" />
          </div>
        </div>
      </div>
    </div>
  </div>
<div class="btnCarregar">
  <btn @click="loadMoreHandler">Carregar mais</btn>
  </div>
</template>

<script lang="ts">
import useCards, { Card } from '@/modules/cards';
import { ref, computed, defineComponent } from 'vue';
import Btn from '@/components/atoms/Btn.vue';
import useMe from '@/modules/me';
import CardComponent from '@/components/molecules/Card.vue';

export default defineComponent({
  components: { Btn, CardComponent },
  setup() {
    const cards = useCards();
    const me = useMe();
    const busca = ref('');
    const balance = computed(() => me.state.balance);
    const cartCount = computed(() => me.state.cart.length);
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

    // Faz o filtro da lista sempre que digitar no input
    const list = computed(() => {
      // Pega a list acompleta ordernada
      const sortedList = cards.getters.sortedList().value;

      // Se tiver algum valor dentro do busca, faz o filtro
      if (busca.value) {
        return sortedList.filter(
          (p) => p.name.toLowerCase().search(busca.value.toLowerCase()) > -1,
        );
      }

      // retorna a lista filtrada
      return sortedList;
    });

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
      busca,
    };
  },
});
</script>

<style lang="scss" scoped>
.btnCarregar {
  margin-bottom: 50px;
}
.header-card-container {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  max-height: 50vh;
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
