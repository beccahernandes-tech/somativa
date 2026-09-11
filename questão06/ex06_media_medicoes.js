const entrada = require("readline-sync")
function calcularMedia(n1, n2, n3, n4, n5) {
    return (n1 + n2 + n3 + n4 + n5) / 5;
}

const numero1 = entrada.questionInt("Qual sua nota 1? ")
const numero2 = entrada.questionInt("Qual sua nota 2? ")
const numero3 = entrada.questionInt("Qual sua nota 2? ")
const numero4 = entrada.questionInt("Qual sua nota 2? ")
const numero5 = entrada.questionInt("Qual sua nota 2? ")

const resultado = calcularMedia(numero1, numero2, numero3, numero4, numero5)
console.log(`A  media calculada foi: ${resultado}`);