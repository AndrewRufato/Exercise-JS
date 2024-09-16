/*


*/
const nome = 'Andrew';
const sobrenome = 'Rufato';
const idade = 19;
const peso = 90;
const altura = 1.75;
let imc = peso/(altura * altura); // peso / (altura * altura)
let anoNascimento = 2022 - idade;

//template string

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg`);
console.log(`Tem ${altura} de altura e seu imc é de:${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);