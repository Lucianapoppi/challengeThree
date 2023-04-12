//Exercicio 5
//Escreva um algoritmo que imprima os números de 1 a n, onde n é um número inteiro positivo fornecido como entrada. No entanto, para múltiplos de 3, imprima "Fizz" em vez do número e, para múltiplos de 5, imprima "Buzz". Para números que são múltiplos tanto de 3 quanto de 5, imprima "FizzBuzz".

function fizzBuzz (n){
    for (i = 1; i <=n; i++ ) {
        if (i%3==0 && i%5!=0) {
            console.log("Fizz")
        }
        else if (i%5==0 && i%3!=0) {
            console.log("Buzz")
        }
        else if (i%3==0 && i%5==0 ) {
            console.log("FizzBuzz")
        }
        else {
            console.log(i)
        }
    }
}

fizzBuzz(20)