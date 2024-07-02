let operador = '';
let numero1 = 0;
let numero2 = 0;

function adicionarNumero(numero) {
  const resultadoElemento = document.getElementById('resultado');
  resultadoElemento.value += numero;
}

function adicionarOperador(op) {
  operador = op;
  const resultadoElemento = document.getElementById('resultado');
  numero1 = parseInt(resultadoElemento.value);
  resultadoElemento.value = '';
}

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    throw new Error('Divisão por zero!');
  }
  return a / b;
}

function calcular() {
  const resultadoElemento = document.getElementById('resultado');
  numero2 = parseInt(resultadoElemento.value);
  let resultado = 0;

  try {
    if (operador === '+') {
      resultado = somar(numero1, numero2);
    } else if (operador === '-') {
      resultado = subtrair(numero1, numero2);
    } else if (operador === '*') {
      resultado = multiplicar(numero1, numero2);
    } else if (operador === '/') {
      resultado = dividir(numero1, numero2);
    }
    resultadoElemento.value = resultado;
  } catch (error) {
    alert(error.message);
    limpar();
  }
}

function limpar() {
  document.getElementById('resultado').value = '';
  operador = '';
  numero1 = 0;
  numero2 = 0;
}

module.exports = { somar, subtrair, multiplicar, dividir, adicionarNumero, adicionarOperador, calcular, limpar };
