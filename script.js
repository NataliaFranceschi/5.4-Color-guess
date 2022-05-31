const circulos = document.getElementsByTagName('div');

function corAleatoria() {
  const r = parseInt(Math.random() * 255, 10);
  const g = parseInt(Math.random() * 255, 10);
  const b = parseInt(Math.random() * 255, 10);
  return `rgb(${r},${g},${b})`;
}

for (let circulo of circulos) {
  circulo.style.backgroundColor = corAleatoria();
}