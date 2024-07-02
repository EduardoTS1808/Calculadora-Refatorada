 import { somar, subtrair, multiplicar, dividir, adicionarNumero, adicionarOperador, calcular, limpar } from './Calculadora'

describe('Operações matemáticas', () => {
  test('Soma de 1 + 2 deve ser 3', () => {
    expect(somar(1, 2)).toBe(3);
  });

  test('Subtração de 2 - 1 deve ser 1', () => {
    expect(subtrair(2, 1)).toBe(1);
  });

  test('Multiplicação de 2 * 3 deve ser 6', () => {
    expect(multiplicar(2, 3)).toBe(6);
  });

  test('Divisão de 6 / 2 deve ser 3', () => {
    expect(dividir(6, 2)).toBe(3);
  });

  test('Divisão por zero deve lançar um erro', () => {
    expect(() => dividir(6, 0)).toThrow('Divisão por zero!');
  });
});

describe('Funções da calculadora', () => {
  let resultadoElemento;

  beforeEach(() => {
    document.body.innerHTML = `
      <input id="resultado" type="text" value="" />
    `;
    resultadoElemento = document.getElementById('resultado');
    // limpar();
  });

  test('Adicionar número ao campo de resultado', () => {
    adicionarNumero(5);
    expect(resultadoElemento.value).toBe('5');
  });


  test('Calcular soma', () => {
    resultadoElemento.value = '10';
    adicionarOperador('+');
    resultadoElemento.value = '5';
    calcular();
    expect(resultadoElemento.value).toBe('15');
  });

  test('Calcular subtração', () => {
    resultadoElemento.value = '10';
    adicionarOperador('-');
    resultadoElemento.value = '5';
    calcular();
    expect(resultadoElemento.value).toBe('5');
  });

  test('Calcular multiplicação', () => {
    resultadoElemento.value = '10';
    adicionarOperador('*');
    resultadoElemento.value = '5';
    calcular();
    expect(resultadoElemento.value).toBe('50');
  });

  test('Calcular divisão', () => {
    resultadoElemento.value = '10';
    adicionarOperador('/');
    resultadoElemento.value = '5';
    calcular();
    expect(resultadoElemento.value).toBe('2');
  });

  test('Calcular divisão por zero deve limpar campo de resultado', () => {
    resultadoElemento.value = '10';
    adicionarOperador('/');
    resultadoElemento.value = '0';
    calcular();
    expect(resultadoElemento.value).toBe('');
  });



});
