//Exercício 3: Ímpar ou par
//Faça um programa que receba um número do usuário e informe se este número é par ou ímpar.

let num = parseInt(prompt("Digite um número: "));

if(num % 2 == 0) {
    console.log("O número " + num + " é par");
}
else {
    console.log("O número " + num + " é ímpar");
}