import { api } from '@/services/api'


export async function getDomain() {
    return await api.get('/api/domain')
}
export async function getOneDomain(id_domain) {
    return await api.get(`/api/domain/${id_domain}`)
}
export async function postDomain(domain) {
    delete domain.id;
    const resp = await api.post('/api/domain', domain)
    return resp;
}

export async function putDomain(id_domain, domain) {
    const resp = await api.put(`/api/domain/${id_domain}`, domain)
    return resp;
}
export async function deleteDomain(id_domain) {
    if (window.confirm('Deseja Realmente excluir Domínio?')) {
        const resp = (await api.delete(`/api/domain/${id_domain}`))
        return resp.status === 204
    }
    return
}