/**
 * Classe responsável por calcular o valor final de um pedido com base em regras de desconto
 */
class CalculadoraDeDesconto {
  /**
   * Calcula o valor final com desconto
   * @param {number} valor - Valor original do pedido
   * @param {boolean} isVIP - Se o cliente é VIP (default: false)
   * @returns {number} Valor final com desconto aplicado
   * @throws {Error} Se o valor for negativo
   */
  calcular(valor, isVIP = false) {
    // Validação de entrada
    if (valor === null || valor === undefined) {
      throw new Error('Valor não pode ser nulo ou indefinido');
    }
    
    // Converter para número se for string numérica
    const valorNumerico = typeof valor === 'string' ? Number(valor) : valor;
    
    // Verificar se é um número válido após conversão
    if (isNaN(valorNumerico)) {
      throw new Error('Valor deve ser um número válido');
    }
    
    // Regra: Valor nunca pode ser negativo
    if (valorNumerico < 0) {
      throw new Error('Valor não pode ser negativo');
    }

    // Regra: Se valor < 100 → sem desconto
    if (valorNumerico < 100) {
      return valorNumerico;
    }

    let desconto = 0;

    // Regra: Se valor entre 100 e 500 → 10% de desconto
    if (valorNumerico >= 100 && valorNumerico <= 500) {
      desconto = 0.10;
    }

    // Regra: Se valor > 500 → 20% de desconto
    if (valorNumerico > 500) {
      desconto = 0.20;
    }

    // Regra: Se cliente for VIP → +5% adicional
    if (isVIP) {
      desconto += 0.05;
    }

    const valorComDesconto = valorNumerico * (1 - desconto);
    
    // Garantir que o valor não seja negativo após o desconto
    return Math.max(0, valorComDesconto);
  }
}

module.exports = CalculadoraDeDesconto;
