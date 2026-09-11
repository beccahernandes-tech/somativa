const entrada = require("readline-sync")

const nome = entrada.question("Qual é o nome do material? ");
const quant = entrada.questionInt("Quanto foi a quantidade comprada desse material? ");
const preço = entrada.questionFloat("Qual é o preço unitario desse produto? ");

let precoFinal = quant * preço 
console.log(`O nome da matéria-prima é ${nome}, sendo comprada ${quant} unidades. Onde o preço de cada unidade é ${preço}. O total da compra foi de ${precoFinal}`);