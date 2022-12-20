

<template>
  <div class="container">
    <h3>Dominios</h3>
    <div class="raw mb-1">
      <div class="col-3">
        <router-link class="btn btn-primary" to="/domain/create">Criar Domínios</router-link>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Dominio</th>
              <th scope="col">tld</th>
              <th scope="col">Ação</th>
            </tr>
          </thead>

          <tbody v-for="(domain, index) in domains" v-bind:key="index">
            <tr>
              <th scope="row">{{ index+1}}</th>
              <td>{{ domain.name }}</td>
              <td>{{ domain.tld }}</td>
              <td>
                <button v-on:click="edit(domain.id)" class="btn btn-primary">editar</button>
                <button v-on:click.prevent="removeDomain(domain.id)" class="btn btn-danger">delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { getDomain,deleteDomain } from '../services/Domain'

export default {
  data() {

    return { domains: null }
  },
  async mounted() {
    const { data } = (await getDomain()).data
    this.domains = data;
  },
  methods: {
    async removeDomain(id) {
      if (await deleteDomain(id)) {
        const { data } = (await getDomain()).data
        this.domains = data;
      }
    },
    edit(id) {
      this.$router.push({ name: 'editDomainView', params:{'id': id} })
      
    }
  }
}


</script>
<style>

</style>