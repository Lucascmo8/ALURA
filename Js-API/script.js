// metodo com .then()
// const consultaCEP = fetch("https://viacep.com.br/ws/01001000/json/")
//     .then(resposta => resposta.json())
//     .then(r => {
//         if (r.erro) {
//             throw Error('Esse CEP não existe ou não foi encontrado')
//         } else
//             console.log(r)
//     })
//     .catch(erro => console.log(erro))
//     .finally(mensagem => console.log('Processamento concluído'));


// console.log(consultaCEP)

async function buscaEndereco(cep) {
    // preparando para um possivel erro
    var mensagemErro = document.getElementById(`erro`);
    mensagemErro.innerHTML = ``;
    
    // vai tentar procurar o cep dentro da api
    try{
        // procurando o cep na api
    let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    // convertendo da api que vem em bytes para o json
    let consultaCEPCovertida = await consultaCEP.json()
    // se encontrar o erro ele ira lançar para o catch
    if (consultaCEPCovertida.erro){
        throw Error("CEP não exite")
    }
    // auto-completar os campos
    var cidade = document.getElementById("cidade")
    var logradouro = document.getElementById(`endereco`)
    var estado = document.getElementById(`estado`)
    var bairro = document.getElementById(`bairro`)

    cidade.value = consultaCEPCovertida.localidade;
    logradouro.value = consultaCEPCovertida.logradouro;
    estado.value = consultaCEPCovertida.uf;
    bairro.value = consultaCEPCovertida.bairro;

    // mostra o resultado que foi obtido na busca apos a conversão
    console.log(consultaCEPCovertida)
    return consultaCEPCovertida
    // pega o erro e desmonstra para o usuario
    } catch (erro){
        mensagemErro.innerHTML = `<p>O CEP ${cep} é inválido. Por favor tente novamente!</p>`
        console.log(erro)
    }
}

// evento que chama a função
let cep = document.getElementById('cep')
cep.addEventListener("focusout",() => buscaEndereco(cep.value))