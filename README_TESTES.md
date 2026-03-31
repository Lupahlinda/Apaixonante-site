# 🧪 Laboratório: Teste Unitários - Calculadora de Desconto

Projeto implementado para demonstrar testes unitários com 100% de cobertura utilizando Jest.

## 📋 Objetivo

Implementar e testar regras de negócio utilizando testes unitários, aplicando boas práticas de desenvolvimento de software.

## 🏗️ Estrutura do Projeto

```
calculadora-desconto/
├── src/
│   └── calculadora.js          # Classe principal com regras de negócio
├── tests/
│   └── calculadora.test.js    # Suite de testes completa
├── coverage/                  # Relatórios de cobertura (gerado automaticamente)
├── package.json              # Dependências e scripts
├── jest.config.js            # Configuração do Jest
└── README.md                 # Este arquivo
```

## 🎯 Regra de Negócio

A `CalculadoraDeDesconto` implementa as seguintes regras:

- **Se valor < 100** → sem desconto
- **Se valor entre 100 e 500** → 10% de desconto
- **Se valor > 500** → 20% de desconto
- **Se cliente for VIP** → +5% adicional
- **Valor nunca pode ser negativo** (lança exceção)

## ✅ Testes Implementados

### Testes Obrigatórios (5)

1. **Sem desconto** - Entrada: 50 → Saída: 50
2. **Desconto de 10%** - Entrada: 200 → Saída: 180
3. **Desconto de 20%** - Entrada: 600 → Saída: 480
4. **Cliente VIP** - Entrada: 200 (VIP) → Saída: 170
5. **Valor negativo** - Entrada: -100 → Esperado: erro

### Testes Adicionais (100% de cobertura)

- Testes de valores de borda (100, 500, 501)
- Testes com cliente VIP em diferentes faixas
- Testes com valores decimais
- Testes de validação de entrada (null, undefined, strings)
- Testes de precisão em valores grandes
- Testes de parâmetros opcionais

## 🚀 Como Executar

### Instalação
```bash
npm install
```

### Executar todos os testes
```bash
npm test
```

### Executar com cobertura
```bash
npm run test:coverage
```

### Executar em modo watch
```bash
npm run test:watch
```

## 📊 Cobertura de Testes

O projeto alcança **100% de cobertura** em:
- ✅ Linhas (Lines)
- ✅ Funções (Functions) 
- ✅ Ramos (Branches)
- ✅ Declarações (Statements)

## 🛠️ Tecnologias Utilizadas

- **JavaScript (ES6+)** - Linguagem principal
- **Jest** - Framework de testes
- **Node.js** - Ambiente de execução

## 📈 Relatório de Cobertura

Após executar `npm run test:coverage`, um relatório detalhado será gerado na pasta `coverage/`:
- Abra `coverage/lcov-report/index.html` no navegador para visualização interativa

## 🎓 Conceitos Demonstrados

1. **Test-Driven Development (TDD)** - Testes antes da implementação
2. **Cobertura de Testes** - Métricas de 100%
3. **Testes de Unidade** - Isolamento de funcionalidades
4. **Testes de Borda** - Valores limites e exceções
5. **Validação de Entrada** - Tratamento de dados inválidos
6. **Boas Práticas** - Código limpo e documentado

## 🔧 Extensões Possíveis

- Adicionar novas regras de desconto
- Implementar diferentes categorias de clientes
- Adicionar cálculo de impostos
- Criar API REST para a calculadora

## 👨‍💻 Autor

**Luis Henrique Costa Pereira**
- Estudante de tecnologia na IESB
- Desenvolvedor JavaScript

---

*"O importante não é a linguagem, é o conceito."*
