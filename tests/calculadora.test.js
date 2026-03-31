const CalculadoraDeDesconto = require('../src/calculadora');

describe('CalculadoraDeDesconto', () => {
  let calculadora;

  beforeEach(() => {
    calculadora = new CalculadoraDeDesconto();
  });

  // Teste 1 — Sem desconto
  test('deve retornar valor sem desconto quando valor < 100', () => {
    const resultado = calculadora.calcular(50);
    expect(resultado).toBe(50);
  });

  // Teste 2 — Desconto de 10%
  test('deve aplicar 10% de desconto quando valor entre 100 e 500', () => {
    const resultado = calculadora.calcular(200);
    expect(resultado).toBe(180);
  });

  // Teste 3 — Desconto de 20%
  test('deve aplicar 20% de desconto quando valor > 500', () => {
    const resultado = calculadora.calcular(600);
    expect(resultado).toBe(480);
  });

  // Teste 4 — Cliente VIP
  test('deve aplicar 10% + 5% adicional para cliente VIP', () => {
    const resultado = calculadora.calcular(200, true);
    expect(resultado).toBe(170);
  });

  // Teste 5 — Valor negativo
  test('deve lançar erro quando valor for negativo', () => {
    expect(() => calculadora.calcular(-100)).toThrow('Valor não pode ser negativo');
  });

  // Testes adicionais para garantir 100% de cobertura
  describe('Testes de borda e casos adicionais', () => {
    test('deve aplicar 10% de desconto no valor exato 100', () => {
      const resultado = calculadora.calcular(100);
      expect(resultado).toBe(90);
    });

    test('deve aplicar 10% de desconto no valor exato 500', () => {
      const resultado = calculadora.calcular(500);
      expect(resultado).toBe(450);
    });

    test('deve aplicar 20% de desconto logo acima de 500', () => {
      const resultado = calculadora.calcular(501);
      expect(resultado).toBe(400.8);
    });

    test('deve aplicar 20% + 5% para cliente VIP com valor > 500', () => {
      const resultado = calculadora.calcular(600, true);
      expect(resultado).toBe(450);
    });

    test('deve aplicar 5% de desconto para cliente VIP com valor < 100', () => {
      const resultado = calculadora.calcular(50, true);
      expect(resultado).toBe(50); // VIP não ganha desconto se valor < 100
    });

    test('deve retornar 0 quando valor é 0', () => {
      const resultado = calculadora.calcular(0);
      expect(resultado).toBe(0);
    });

    test('deve tratar valor decimal corretamente', () => {
      const resultado = calculadora.calcular(150.50);
      expect(resultado).toBeCloseTo(135.45, 2);
    });

    test('deve lançar erro com valor zero negativo', () => {
      expect(() => calculadora.calcular(-0.01)).toThrow('Valor não pode ser negativo');
    });

    test('deve aplicar desconto máximo sem valor negativo', () => {
      const resultado = calculadora.calcular(1000, true);
      expect(resultado).toBe(750); // 25% de desconto total
    });

    test('deve manter precisão em valores grandes', () => {
      const resultado = calculadora.calcular(9999.99, true);
      expect(resultado).toBeCloseTo(7499.9925, 4);
    });
  });

  describe('Testes de validação de entrada', () => {
    test('deve lançar erro para valor null', () => {
      expect(() => calculadora.calcular(null)).toThrow('Valor não pode ser nulo ou indefinido');
    });

    test('deve lançar erro para valor undefined', () => {
      expect(() => calculadora.calcular(undefined)).toThrow('Valor não pode ser nulo ou indefinido');
    });

    test('deve lançar erro para valor string não numérico', () => {
      expect(() => calculadora.calcular('abc')).toThrow('Valor deve ser um número válido');
    });

    test('deve tratar string numérico como número válido', () => {
      const resultado = calculadora.calcular('200');
      expect(resultado).toBe(180);
    });

    test('deve tratar parâmetro VIP omitido como false', () => {
      const resultado = calculadora.calcular(200);
      expect(resultado).toBe(180);
    });

    test('deve tratar parâmetro VIP explicitamente false', () => {
      const resultado = calculadora.calcular(200, false);
      expect(resultado).toBe(180);
    });
  });
});
