let idade = prompt('Digite sua idade: ');
let num1 = prompt('Digite um número: ');
let num2 = prompt('Digite outro número: ');


idade = Number(idade);
num1 = Number(num1);
num2 = Number(num2);

const resultado = num1 + num2;
//Usando o Template String
alert(`O resultado da sua conta foi: ${resultado}`);
alert(`Sua idade é ${idade}`);
alert(`O em que você nasceu é ${2022 - idade}`);