//Exercicio 3
//Dado um número inteiro positivo n, escreva um algoritmo que desenhe uma pirâmide (pyramid) com n andares usando o caractere '#' (jogo da velha).

function piramide(p) {
    var numeroDeTralha = 1
    for (i=p; i>0; i--) {
        var espacos = " ".repeat(i + 1);
        var tralha = "#".repeat (numeroDeTralha);
        var calculo = espacos + tralha + espacos; 
        console.log(calculo);
        numeroDeTralha = numeroDeTralha + 2
    }

}
piramide(7)