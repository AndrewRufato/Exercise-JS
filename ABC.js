//Quero alterar a ordem das variáveis sem as redefinir.

let = varA = 'A'; // B
let = varB = 'B'; // C
let = varC = 'C'; // A

/*
Exemplo

let = varA = 'B';
let = varB = 'C'; 
let = varC = 'A';
*/

let = guardar = varA;
varA = varB;
varB = varC;
varC = guardar;

console.log(varA, varB, varC);

//Tem essa forma de alterar a ordem, de forma mais moderna.

[varA, varB, varC] = [varC, varA, varB];

console.log(varA, varB, varC);