function ConverterEmFahrenheit() {
  var valorElemento = document.getElementById("temp");
  var temp = valorElemento.value;
  var valorEmCelcius = parseFloat(temp);

  var valorEmFahrenheit = (valorEmCelcius * 9/5) + 32;
  console.log(valorEmFahrenheit);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "Esta temperatura em Fahrenheit é " + valorEmFahrenheit;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEmKelvin() {
  var valorElemento = document.getElementById("temp");
  var temp = valorElemento.value;
  var valorEmCelcius = parseFloat(temp);

  var valorEmKelvin = valorEmCelcius + 273.15;
  console.log(valorEmKelvin);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "Esta temperatura em Kelvin é " + valorEmKelvin;
  elementoValorConvertido.innerHTML = valorConvertido;
}