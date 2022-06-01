const circulos = document.getElementsByTagName('div');
const corPricipal = document.getElementById('rgb-color');
const resultado = document.getElementById('answer');

function corAleatoria() {
  const r = parseInt(Math.random() * 255, 10);
  const g = parseInt(Math.random() * 255, 10);
  const b = parseInt(Math.random() * 255, 10);
  return `rgb(${r},${g},${b})`;
}

for (let circulo of circulos) {
  circulo.style.backgroundColor = corAleatoria();
  circulo.addEventListener('click', resultadoEscolha)
}

function resultadoEscolha(event) {
  const corEscolhida = getComputedStyle(event.target);
  if (corEscolhida.backgroundColor.split('rgb')[1] === corPricipal.innerText) {
    resultado.innerHTML = 'Acertou!';
  } else {
    resultado.innerHTML = 'Errou! Tente novamente!';
  }
}

window.onload = corCentral;
function corCentral() {
  const circuloAleatorio = circulos[Math.floor(Math.random() * 6)];
  corPricipal.innerText = getComputedStyle(circuloAleatorio).backgroundColor.split('rgb')[1]
}
