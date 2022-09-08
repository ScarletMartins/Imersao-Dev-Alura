function ConverterEmDolar() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmReal = parseFloat(valor);

  var valorEmDolar = valorEmReal * 5.25;
  console.log(valorEmDolar);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em dolar é R$ " + valorEmDolar;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEmEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmReal = parseFloat(valor);

  var valorEmEuro = valorEmReal * 5.25;
  console.log(valorEmEuro);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em euro é R$ " + valorEmEuro;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEmLibra() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmReal = parseFloat(valor);

  var valorEmLibra = valorEmReal * 6.05;
  console.log(valorEmLibra);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em libra é R$ " + valorEmLibra;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEmBitcoin() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmReal = parseFloat(valor);

  var valorEmBitcoin = valorEmReal * 0.0000099;
  console.log(valorEmBitcoin);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em bitcoins é R$ " + valorEmBitcoin;
  elementoValorConvertido.innerHTML = valorConvertido;
}