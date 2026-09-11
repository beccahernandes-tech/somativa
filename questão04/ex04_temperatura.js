const entrada = require("readline-sync")

const temperatura = entrada.questionFloat("Qual e a temperatura da maquina?");

if (temperatura <= 60) {
    console.log(`TEMPERATURA NORMAL ${temperatura}°C `);
} else if (temperatura >= 61 && temperatura <= 80) {
    console.log(`TEMPERATURA EM ESTADO DE ATENCAO ${temperatura}°C `);
} else if (temperatura >80) {
    console.log(`TEMPERATURA EM SITUACAO CRITICA  ${temperatura}°C`);
}
