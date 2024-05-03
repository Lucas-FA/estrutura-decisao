//Exercício 2: Verificação de dia da semana
//Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da 
//semana e exibe o nome correspondente a esse dia. 
//Considere que 1 representa segunda-feira, 2 representa terça-feira e assim por diante.

let diaSemana = parseInt(prompt("Digite um número de 1 a 7: "));

switch(diaSemana) {
    case 1:
        console.log("O número digitado corresponde a: Segunda-feira");
        break;
    case 2:
        console.log("O número digitado corresponde a: Terça-feira");
        break;
    case 3:
        console.log("O número digitado corresponde a: Quarta-feira");
        break;
    case 4:
        console.log("O número digitado corresponde a: Quinta-feira");
        break;
    case 5:
        console.log("O número digitado corresponde a: Sexta-feira");
        break;
    case 6:
        console.log("O número digitado corresponde a: Sábado");
        break;
    case 7:
        console.log("O número digitado corresponde a: Domingo");
        break;
    default:
        console.log("O número digitado não corresponde a nenhum dos dias da semana.");
}