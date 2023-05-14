export class Negociacao  {
    private _data;
    private _quantidade;
    private _valor;

    constructor(data:Date,quantidade:number,valor:number){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
}