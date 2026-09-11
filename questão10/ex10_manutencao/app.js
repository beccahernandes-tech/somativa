const entrada = require('readline-sync');
const maquina = require('./funcoesManutencao'); 

const nome = entrada.question("Digite o nome da maquina");
const valor = entrada.questionInt("Qual e o valor das pecas?");
const horasServico = entrada.questionInt("Digite quantas horas de servico ");
const meses = entrada.questionInt("Quantos meses passsaram desde a ultima manutenção ");

