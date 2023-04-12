//Exercicio 2
//Dado um número inteiro positivo n, escreva um algoritmo que determine a soma de todos os números inteiros positivos menores ou iguais a n.

function soma(s){
    var resultado = 0;
    for (i=s; i>0; i--){
        resultado = resultado + i;

    }
    console.log(resultado)

}
soma(5)