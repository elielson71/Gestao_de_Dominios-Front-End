import { api } from '@/services/api'


export async function signIn (user) {
    return await api.post('/api/auth/login', user)
}
export async function logout() {
    return await api.post(`api/auth/logout`)
}
