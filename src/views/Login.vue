<template>
  <div class="login">
    <div>Username</div>
    <input
      v-model="username"
      ref="usernameEl"
      type="text"
      @keyup="usernameHandler"
    />

    <div>Password</div>
    <input
      v-model="password"
      ref="passwordEl"
      @keyup="passwordHandler"
      type="password"
    />

    <div>
      <button @click="login">Login</button>
    </div>

    <div>
      Não tem conta? <router-link to="/signup">Cadastre-se aqui</router-link>
    </div>
    <div class="footer">2021 ♥ Desenvolvimento: Sinoki Card Games ®.</div>
  </div>
</template>

<script lang="ts">
import useAuth from '@/modules/auth';
import {
  defineComponent, reactive, ref, toRefs,
} from 'vue';

export default defineComponent({
  components: {},
  setup() {
    const auth = useAuth();
    const usernameEl = ref();
    const passwordEl = ref();
    const state = reactive({
      username: '',
      password: '',
    });
    const login = async () => {
      console.log('vamos fazer o login', state.username, state.password);
      if (state.username && state.password) {
        const res = await auth.actions.login(state.username, state.password);
        if (res.status === 'WRONG_USER') {
          // seta uma msg de erro
        }
      }
    };
    const usernameHandler = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && state.username) {
        console.log('apertou enter, vai pro password', passwordEl.value);
        passwordEl.value.focus();
      }
    };
    const passwordHandler = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && state.username && state.password) {
        login();
      }
    };
    return {
      ...toRefs(state),
      login,
      usernameHandler,
      passwordHandler,
      usernameEl,
      passwordEl,
    };
  },
});
</script>

<style lang="scss" scoped>
.login {
   font-family: "Comic Sans MS";
   margin-top: 100px;
  background: grey;
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #444;
  color: white;
  text-align: center;
}
</style>
