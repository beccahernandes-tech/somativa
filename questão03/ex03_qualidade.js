const entrada = require("readline-sync")

const peso = entrada.questionFloat("Qual e o peso da peca?");
  

if (peso >= 95 && peso <= 105) {
    console.log(`==PEÇA APROVADA ${peso} PESO DENTRO DOS PARAMETROS==`);
} else {
    console.log(`==PECA REPROVADA ${peso} PECA FORA DOS PARAMETROS==`)
}

