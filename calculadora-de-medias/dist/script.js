var nome = "Scarlet"

var notaDoPrimeiroBimestre = 9;
var notaDoSegundoBimestre = 4;
var notaDoTerceiroBimestre = 7;
var notaDoQuartoBimestre = 5;

var somaNotas = notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre
var notaFinal = (somaNotas / 4).toFixed(1)

console.log("Bem vinda, " + nome + ". Você está na Imersão Dev da Alura")

  if (notaFinal >= 6) {
  console.log("Parabéns, você foi aprovado. Sua nota final foi: " + notaFinal)
  } 
  else {
  console.log("Você foi reprovado. Sua nota final foi: " + notaFinal)
  }

//DESAFIO PAULO - console.log(((notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4).toFixed(1))