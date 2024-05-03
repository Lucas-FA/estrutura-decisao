//Exercício 5: Verificação de números em ordem crescente
//Escreva um programa que solicita três números ao usuário e verifica se 
//eles estão em ordem crescente. Exibindo uma mensagem indicando se os 
//números estão em ordem crescente ou não.

let num1 = parseFloat(prompt("Digite o 1º número: "));
let num2 = parseFloat(prompt("Digite o 2º número: "));
let num3 = parseFloat(prompt("Digite o 3º número: "));

if(num2 > num1 && num3 > num2) {
    console.log("Os números estão em ordem crescente");
}
else {
    console.log("Os números não estão em ordem crescente");
}