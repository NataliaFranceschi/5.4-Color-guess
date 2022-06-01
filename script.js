const circulos = document.getElementsByTagName('div');
const corPricipal = document.getElementById('rgb-color');
const resultado = document.getElementById('answer');
const resetar = document.getElementById('reset-game');
const placar = document.getElementById('score');

function corAleatoria() {
  const r = parseInt(Math.random() * 255, 10);
  const g = parseInt(Math.random() * 255, 10);
  const b = parseInt(Math.random() * 255, 10);
  return `rgb(${r},${g},${b})`;
}

function corCirculos() {
  for (let circulo of circulos) {
    circulo.style.backgroundColor = corAleatoria();
    circulo.addEventListener('click', resultadoEscolha)
  }
}
corCirculos();

let soma = 0;
placar.innerHTML = `Pontos: ${soma}`;

function resultadoEscolha(event) {
  const corEscolhida = getComputedStyle(event.target);
  if (corEscolhida.backgroundColor.split('rgb')[1] === corPricipal.innerText) {
    resultado.innerHTML = 'Acertou!';
    soma += 3;
  } else {
    resultado.innerHTML = 'Errou! Tente novamente!';
  } placar.innerHTML = `Pontos: ${soma}`;
}

window.onload = corCentral;
function corCentral() {
  const circuloAleatorio = circulos[Math.floor(Math.random() * 6)];
  corPricipal.innerText = getComputedStyle(circuloAleatorio).backgroundColor.split('rgb')[1]
}

function reiniciarJogo() {
  corCirculos();
  corCentral();
  resultado.innerText = 'Escolha uma cor';
}

resetar.addEventListener('click', reiniciarJogo);
