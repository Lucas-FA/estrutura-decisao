//5. Imprimir os primeiros 10 números da sequência de Fibonacci.

let num1 = 1, num2 = 1, res = 0;

for(let i = 0; i < 10; i++) {
    if(i < 2) {
        console.log(num1);
    }
    else {
        res = num1 + num2;
        console.log(res);
        num1 = num2;
        num2 = res;
    }
}