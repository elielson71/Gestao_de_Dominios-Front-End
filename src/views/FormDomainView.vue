<template>
  <div class="container mt-5">
    <h3 align="center">Dominios</h3>
    <div class="card">
      <form class="card-body" @submit.prevent="submitDomain">
        <div class="row m-2">
          <div class="mb-3 col-8">
            <label for="name" class="form-label" >Dominio</label>
            <input type="text" autofocus name="name" class="form-control" v-model="domain.name" required>
          </div>
          <div class="mb-3 col-4">
            <label for="level" class="form-label">Nível</label>
            <input type="text" name="tld" class="form-control" v-model="domain.tld" required>
          </div>
          <div class="row g-2">
            <div class="p3">
              <router-link class="btn btn-primary" to="/domain">voltar</router-link>
              <button class="btn btn-success">Salvar</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { getOneDomain, postDomain, putDomain } from '../services/Domain'
export default {
  name: 'FormDomainView',
  data() {
    return {
      domain: { "id": '', "name": '', 'tld': '' }
    }
  },
  methods: {

    async submitDomain() {
      if (this.$route.params.id) {
        const resp = await putDomain(this.domain.id, this.domain)
        if (resp.status === 204) {
          alert('Dominio atualizado com Sucesso!');
          this.$router.push({ name: 'domain' })
        }  else if (resp.status === 422) {
          alert(resp.data.message);
        }  else if (resp.status === 400) {
          alert(resp.message);
        } else {
          alert('Erro atualizar!')
        }
      } else {

        const resp = await postDomain(this.domain)
        if (resp.status === 201) {
          alert('Dominio salvo com Sucesso!');
          this.$router.push({ name: 'domain' })
        }  else if (resp.status === 422) {
          alert(resp.data.message);
        } else if (resp.status === 400) {
          alert(resp.data.message);
        } else {
          alert('Erro Salvar!')
        }

      }
    },

  },

  async mounted() {
    if (this.$route.params.id) {
      const id_domain = this.$route.params.id;
      const { data } = (await getOneDomain(id_domain)).data
      this.domain = data;
    }
  },
}

</script>
<style>

</style>