/*let titulo = document.querySelector('h1')
titulo.innerHTML = 'Jogo do numero secreto';

let paragrafo = document.querySelector('p')
paragrafo.innerHTML ='Escolha um numero entre 1 a 10'

NÃO ESTA ERRADO MAS PARA NÃO FICAR REPETINDO CODIGO CRIAMOS ABAIXO UMA FUNÇÃO
*/

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;



function ExibirTextoNaTela(tag, texto) {
  let Campo = document.querySelector(tag);
  Campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1})
}

function mensagemInicial(){
ExibirTextoNaTela('h1', 'Jogo do número secreto');
ExibirTextoNaTela('p', 'Escolha um número de 1 a 10');
}

mensagemInicial();

function verificarChute() {
  let chute = document.querySelector('input').value;
  console.log(numeroSecreto);

  if (chute == numeroSecreto) {
    ExibirTextoNaTela('h1', 'Parabens!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
    ExibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');

  } else if (chute > numeroSecreto) {
    ExibirTextoNaTela('p', 'O numero secreto é menor');
  } else {
    ExibirTextoNaTela('p', 'O numero secreto é maior');
  }
  tentativas++;
 limparCampo()
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}
function limparCampo(){
  chute = document.querySelector('input');
  chute.value = '';
}
function reiniciarJogo(){
numeroSecreto = gerarNumeroAleatorio();
limparCampo();
tentativas = 1;
mensagemInicial();
}