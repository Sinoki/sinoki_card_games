<template>
  <div class="login">
    <div class="username">Username</div>
    <input
      v-model="username"
      ref="usernameEl"
      type="text"
      @keyup="usernameHandler"
    />

    <div class="password">Password</div>
    <input
      v-model="password"
      ref="passwordEl"
      @keyup="passwordHandler"
      type="password"
    />

    <div>
      <button class="button" @click="login">Login</button>
    </div>

    <div class="conta">
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
  width: 100%;
  height: 550px;
  margin-top: 20px;
  padding: 150px;
  background: #444;
}
a {
  color: white;
}
.button {
  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: lightcoral;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}

.button:hover {
  background-color: #615757;
}

.button:active {
  background-color: #615757;
  box-shadow: 0 5px #444;
  transform: translateY(4px);
}

.username {
  margin-top: -70px;
}
.password {
  margin-top: 50px;
}
.button {
  margin-top: 50px;
  font-size: 20px;
}
.conta {
  margin-top: 70px;
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
