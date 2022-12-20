
<template>

  <div class="container-fluid">
    <FormLogin v-if="!token" />
    <div class="row" v-if="token">
      <div class="col-4">
        <NavBar />
      </div>
      <div class="col-8">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import { getToken } from '@/services/authServices'

import FormLogin from "@/views/FormLogin.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    FormLogin,
    NavBar
  },
  data() {

    return { token: getToken() }
  },

}
</script>

