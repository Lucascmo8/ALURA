import { NegociacaoController } from "./controllers/negociacao-controllers.js";

const controller = new NegociacaoController()

const form = document.querySelector('.form')
if(form){
    form.addEventListener('submit', event =>{
        event.preventDefault()
        controller.adiciona()  
    })
}else{
    throw Error("Não foi possível iniciar a aplicação. Verifique se o form existe.")
}
