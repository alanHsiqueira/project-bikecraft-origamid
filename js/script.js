
// hover header menu ativo
const links = document.querySelectorAll('.header-menu a'); 

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add('ativo');
  }
}

links.forEach(ativarLink);

// ativar itens orçamento

const parametros = new URLSearchParams(location.search);  

function ativarProduto(parametro){
  const elemento = document.getElementById(parametro);
  if(elemento){
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

//perguntas frequentes

const perguntas = document.querySelectorAll('.perguntas button');

function ativaPergunta(event){
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute('aria-controls');
  const resposta = document.getElementById(controls);
  resposta.classList.toggle('ativa');
  const ativa = resposta.classList.contains('ativa');
  pergunta.setAttribute('aria-expanded', ativa);
}
function eventoPergunta(pergunta){
  pergunta.addEventListener('click', ativaPergunta);
}

perguntas.forEach(eventoPergunta); 

// Galeria de Bicicletas

const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens');

function trocarImagem(event){
  const img = event.currentTarget;
  const media = matchMedia('(max-width:800px)').matches; 
  if(media){
    galeriaContainer.prepend(img); 
  }
}

function eventosGaleria(img){
  img.addEventListener('click', trocarimagem);
}
galeria.forEach(eventosGaleria);

// Simple Anime
if(window.SimpleAnime){
  new SimpleAnime();
} 