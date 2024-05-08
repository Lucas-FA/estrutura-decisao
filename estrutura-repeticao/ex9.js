//9. Faça um programa que receba um número do usuário e mostre
//no console a contagem regressiva até 0.

let num = parseInt(prompt("Digite um número para iniciar a contagem: "));

while(num >= 0) {
    console.log(num);
    num--;
}