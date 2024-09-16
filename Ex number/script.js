const num = Number(prompt('Digite um número:'));
const nTitulo = document.getElementById('nTitulo');
const texto = document.getElementById('Texto');

nTitulo.innerHTML = num;
texto.innerHTML += `A raiz quadrada de seu número é: ${num ** 0.5}<br />`
texto.innerHTML += `${num} é um número inteiro: ${Number.isInteger(num)}<br />`
texto.innerHTML += `É NaN: ${isNaN(num)}<br />`
texto.innerHTML += `Arredondando para baixo: ${Math.floor(num)}<br />`
texto.innerHTML += `Arredondado para cima: ${Math.ceil(num)}<br />`
texto.innerHTML += `Com duas casas decimais ${num.toFixed(2)}<br />`
