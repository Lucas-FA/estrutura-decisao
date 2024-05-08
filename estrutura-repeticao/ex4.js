//4. Faça um programa que imprima na tela a tabuada de um número
//qualquer escolhido pelo usuário até o 10.

let num = parseInt(prompt("Digite um número para a tabuada: "));
let res = 0;

for(let i = 1; i <= 10; i++) {
    res = num * i;
    console.log(num + " * " + i + " = " + res);
}