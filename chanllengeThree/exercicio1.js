//Exercicio 1
//Dado um número inteiro positivo n, escreva um algoritmo que desenhe uma escada (staircase) com n degraus usando o caractere '#' (jogo da velha).



function imprimindoEscada (numero){
    var numeroDeTralha = 1
    for (i=numero; i>0; i--) {
        var espacos = " ".repeat(i - 1);
        var tralha = "#".repeat (numeroDeTralha);
        var calculo = espacos + tralha;
        console.log(calculo);
        numeroDeTralha ++
    }
}
imprimindoEscada(4)