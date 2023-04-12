//Exercicio 4
//Dada uma matriz mat de tamanho m x n, escreva um algoritmo que calcule a soma de todos os elementos da matriz.

function construindoLinha(nColunas) {
    var linha = [];
    for (i = nColunas; i > 0; i--) {
        var num = Math.floor(Math.random() * (1000 * 2 + 1)) - 1000;
        linha.push(num);
    }
    return linha;
  }
  
  function matriz(linha, coluna) {
    var matrizConstruida = [];
    for (var i = linha; i > 0; i--) {
        var linhaArray = construindoLinha(coluna);
        matrizConstruida.push(linhaArray);
    }
    return matrizConstruida;
  }
  
  var matrizGerada = matriz(1, 1);
  
  console.log(matrizGerada)
  
  function soma(){
    var resultado = 0;
    for (var i = 0; i < matrizGerada.length; i++){
        for(var j = 0; j < matrizGerada[i].length; j++){
            resultado = resultado + matrizGerada[i][j]
        }
    }
    return resultado;
}

var resultadoDaSoma = soma();
console.log(resultadoDaSoma);