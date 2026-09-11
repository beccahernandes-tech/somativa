const entrada = require("readline-sync");
const quantidade = require(`./ex05_ciclos`);


const ciclos = entrada.questionInt("Quantas pecas a maquina faz por ciclo? ");


console.log(ciclos.calcularPecas(quantidade));