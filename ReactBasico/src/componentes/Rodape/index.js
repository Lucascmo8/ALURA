import "./Rodape.css"

const Rodape = ()=>{
    return(
        <footer className="rodape">
            <div className="redesSocias">
                <a><img src="/imagens/fb.png" alt="Link Para o facebook"></img></a>
                <a><img src="/imagens/tw.png" alt="Link Para o Twitter"></img></a>
                <a><img src="/imagens/ig.png" alt="Link Para o instagram"></img></a>
            </div>
            <img className="logo" src="/imagens/logo.png"></img>
            <div className="recado"><p>Desenvolvido por Alura e Lucas</p></div>
        </footer>
    )
}

export default Rodape