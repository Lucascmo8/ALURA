import { useState } from "react"
import "./CampoTexto.css"
const CampoTexto = (props) => {

    // let valor = "Lucas"


    const aoDigitado =(evento)=>{
        props.aoAlterado(evento.target.value)
        
    }

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value ={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={`${props.placeholder}...`} />
        </div>
    )
}

export default CampoTexto