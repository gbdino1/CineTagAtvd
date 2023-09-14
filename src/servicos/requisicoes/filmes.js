import api from "../api"

export async function buscaFilmes(){
    try {
        const resultado = await api.get(`/filmes`);
        return resultado.data[0]
    }
    catch (error){
        console.log(error)
        return {}
    }
}