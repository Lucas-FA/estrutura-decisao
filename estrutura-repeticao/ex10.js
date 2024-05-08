//10. Faça um programa que receba um número do usuário e continue
//a pedir o número se o numero for diferente de 0.

let num = 0;

do {
    num = parseInt(prompt("Digite um número: \n(Ou digite 0 para sair)"));
}while(num != 0);