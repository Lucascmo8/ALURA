import fs from 'fs'
import chalk from 'chalk';

function extrairLinks(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm
    const capturas = [...texto.matchAll(regex)]
    const resultados = capturas.map(captura =>({
        [captura[1]]:captura[2]
    }))
    return resultados.length !==0 ? resultados : 'Não há links no arquivo'
}

function trataErro(erro){
    throw new Error(chalk.red(erro.code,'não foi encontrado um arquivo de possivel leitura'))
}

async function pegaArquivo(caminhoDoArquivo){
    try{
        const encoding = 'utf-8'
        const texto = await fs.promises.readFile(caminhoDoArquivo,encoding)
        return extrairLinks(texto)
    }catch(erro){
        trataErro(erro)
    }finally{
        console.log(chalk.bgBlueBright.white("Finalizou a procura"))
    }
}


export default pegaArquivo;