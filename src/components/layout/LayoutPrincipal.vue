<template>
    <div class="row" v-if="getToken().length > 0">
      <div class="col-4">
        <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style="width: 280px;">
          <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span class="fs-4">Gestão de Domínios</span>
          </a>
          <hr>
          <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
              <a href="#" class="nav-link" aria-current="page">
                <router-link to="/">Home</router-link>
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <router-link to="/domain">Domínios</router-link>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-8">
        <router-view />
      </div>
    </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
