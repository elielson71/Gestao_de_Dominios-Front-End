<template>
  <main class="form-signin w-100 m-auto">
    <form @submit.prevent="submitUser">
      <h1 class="h3 mb-3 fw-normal">Login</h1>

      <div class="form-floating">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="user.email">
        <label for="floatingInput">Email</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="user.password">
        <label for="floatingPassword">Senha</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="submit">Entrar</button>
    </form>
  </main>
</template>

<script>
import {signIn} from '@/services/Auth'
import {loginToken} from '@/services/authServices'

export default {
  name: 'FormuserView',
  data() {
    return {
      user: { "email": '', 'password': '' }
    }
  },
  methods: {

    async submitUser() {
        const resp = (await signIn(this.user))
        if (resp.status === 200) {
          loginToken(resp.data.data.token)
          window.location = 'http://localhost:8080'

          this.$router.push({ name: 'domain' })
        } else {
          alert('Erro ao realizar login!')
        }
    },

  },

}

</script>
<style>




.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>