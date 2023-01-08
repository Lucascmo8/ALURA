import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostarVideos.js";



async function buscarVideo(evento){
    console.log(evento)
    evento.preventDefault()
    console.log(evento)

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value
    const busca = await conectaApi.buscaVideo(dadosDePesquisa)

    const lista = document.querySelector('[data-lista]')

    // limpando a lista durante a busca
    while (lista.firstChild){
        lista.removeChild(lista.firstChild)
    }

    busca.forEach(elemento => { lista.appendChild(constroiCard(
        elemento.titulo, elemento.descricao, elemento.url, elemento.imagem))
    })
    if (busca.length == 0){
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existe vídeos com esse termo</h2>`
    }
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]")

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento))