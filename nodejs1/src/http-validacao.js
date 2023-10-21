import chalk from "chalk"

function extrairLinks(arrLinks){
    return arrLinks.map((link)=> Object.values(link))
}

async function checaStatus (listaUrls){
    const arrStatus = await Promise.all(
        listaUrls.map(async (url) => {
            try{
                const response = await fetch(url)
                return `${response.status} - ${response.statusText}`
            }catch(erro){
                return manejaErros(erro)
            }
        })
    )
    return arrStatus
}

function manejaErros (erro){
    if(erro.cause.code === 'ENOTFOUND'){
        return 'esse link não existe'
    }else{
        return 'ocorreu algum erro'
    }
}

export default async function listaValidada(listaDeLinks){
    if(typeof(listaDeLinks) === "string"){
        return listaDeLinks
    }

    const links = extrairLinks(listaDeLinks)
    const status = await checaStatus(links)
    return  listaDeLinks.map((objeto,indice)=>({
        ...objeto,
        status:status[indice]
    }))
}