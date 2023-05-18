// import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes>{

    template(model:Negociacoes):string{
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <th>Data</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                </thead>
                <tbody>
                    ${model.lista().map(negociacao=>{
                        return `
                            <tr>
                                <td>${this.formatar(negociacao.data)}</td>
                                <td>${negociacao._quantidade}</td>
                                <td>${negociacao._valor}</td>
                            </tr>
                        `
                    }).join('')}
                </tbody>
            </table>
        `
    }

    private formatar(data:Date):string{
        return new Intl.DateTimeFormat().format(data)
    }
}