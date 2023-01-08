async function listaVideos(){
        const conexao = await fetch("http://localhost:3000/videos")
        const conexaoConvertida = await conexao.json()
        return conexaoConvertida
}

async function criaVideo(titulo, descricao, url, imagem){
    const conexao = await fetch ("http://localhost:3000/videos", {
        method: "POST",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify({
            titulo:titulo,
            descricao:`${descricao} mil visualizações`,
            url:url,
            imagem:imagem
        })
    })

    if(!conexao.ok){
        throw new Error("Não foi possível enviar o video")
    }

    const conexaoConvertida = await conexao.json()

    return conexaoConvertida

}

async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json()

    return conexaoConvertida
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}