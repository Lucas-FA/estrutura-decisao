//Exercício 7: Cálculo de desconto progressivo
//Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor 
//que ele pague. Faça um programa para loja, que solicite o valor total da compra 
//ao usuário e assim, aplique um desconto de acordo com o valor total da compra. 
//Siga a tabela:
//Valor total da compra até R$ 100,00: sem desconto.
//Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
//Valor total da compra acima de R$ 200,00: desconto de 20%.
//Exiba o valor final da compra com o desconto aplicado.

let totalCompra = parseFloat(prompt("Digite o valor total da compra: "));
let totalDesconto = 0;
let desconto = 0;

if(totalCompra >= 100.01 && totalCompra <= 200) {
    desconto = (10 / 100) * totalCompra;
}
else if(totalCompra > 200) {
    desconto = (20 / 100) * totalCompra;
}

totalDesconto = totalCompra - desconto;

console.log("O valor total da compra é: " + totalDesconto);
console.log("Você recebeu um desconto de: " + desconto);