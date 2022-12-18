let livros = []

const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscarLivrosDaApi()

const seçãoDosLivros = document.querySelector("#livros")


// main
async function getBuscarLivrosDaApi() {
  const res = await fetch(endpointDaAPI)
  livros = await res.json()
  livros = aplicarDesconto(livros)
  exibirLivros(livrosComDesconto)
}

// forEach()
const sectionValorTotal = document.getElementById("valor_total_livros_disponiveis")
function exibirLivros(listaDeLivros) {
  sectionValorTotal.innerHTML = ``
  seçãoDosLivros.innerHTML = ``
  listaDeLivros.forEach(livro => {
    let TemNoEstoque = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
    seçãoDosLivros.innerHTML += `<div class="livro">
        <img class="${TemNoEstoque}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>`
  })
}

// metodo map
function aplicarDesconto(livros) {
  const desconto = 0.3
  livrosComDesconto = livros.map(livro => {
    return {
      ...livro,
      preço: livro.preco - (livro.preco * desconto)
    }
  })

  return livrosComDesconto
}

function aplicarDesconto(livros) {
  const desconto = 0.3
  livrosComDesconto = livros.map(livro => {
    return {
      ...livro,
      preco: livro.preco - (livro.preco * desconto)
    }
  })
  return livrosComDesconto
}

// metodo filter
const filtros = document.querySelectorAll(".btn")

filtros.forEach(filtro => filtro.addEventListener("click", filtrarLivros))

function filtrarLivros() {
  const elementoBtn = document.getElementById(this.id)
  const categoria = elementoBtn.value
  let livrosFiltrados = categoria == 'disponivel' ? filtraDisponiveis(): filtraPorCategoria(categoria)
  exibirLivros(livrosFiltrados)
  if(categoria == "disponivel"){
    const valorTotal = CalcularValorTotal(livrosFiltrados)
  exibirSectionValorTotal(valorTotal)
  }
}

function filtraPorCategoria(categoria) {
  return livros.filter(livro => livro.categoria == categoria)
}

function filtraDisponiveis() {
  return livros.filter(livro => livro.quantidade > 0)
}

function exibirSectionValorTotal(valorTotal){
  sectionValorTotal.innerHTML = `
  <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
  `
}

// metodo sort()

let btnOrdenarPorPreco = document.getElementById("btnOrdenarPorPreco")
btnOrdenarPorPreco.addEventListener("click", ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
  let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
  exibirLivros(livrosOrdenados)
}

// metodo reduce

function CalcularValorTotal(livros){
  return livros.reduce((acc,livro)=> acc+livro.preco,0).toFixed(2)
}