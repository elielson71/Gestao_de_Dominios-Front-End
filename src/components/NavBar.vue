<template>
    <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style="width: 280px;">
        <a class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span class="fs-4">Gestão de Domínios</span>
        </a>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
                <a class="nav-link" aria-current="page">
                    <router-link to="/home">Home</router-link>
                </a>
            </li>
            <li>
                <a class="nav-link text-white">
                    <router-link to="/domain">Domínios</router-link>
                </a>
            </li>
            <li>
                <a v-on:click="exit" class="nav-link text-white">
                    Sair
                </a>
            </li>
        </ul>
    </div>

</template>

<script>
import { logout as sessionStorage } from '@/services/authServices'
import { logout } from '@/services/Auth/index'

export default {
    methods: {
        async exit() {
            if (confirm('Deseja sair do sistema?')) {
                const resp = await logout();
                if (resp.status == 204) {
                    sessionStorage();
                    window.location = 'http://localhost:8080'
                }
            }

        }
    }

}
</script>
