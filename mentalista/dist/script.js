var numeroSecreto = parseInt(Math.random() * 11);

var tentativas = 0;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");

  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Woohooo!! Você acertou!!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML =
      "Número inválido. Digite um número entre 0 e 10";
  } else {
    if (chute < numeroSecreto) {
      elementoResultado.innerHTML =
        "Que pena. Você errou!! Tente um número mais alto";
    } else {
      elementoResultado.innerHTML =
        "Que pena. Você errou!! Tente um número mais baixo";
    }
    tentativas++;
    if (tentativas > 3) {
      elementoResultado.innerHTML =
        "Que pena, suas tentativas esgostaram. O número secreto era: " +
        numeroSecreto;
    }
  }
}