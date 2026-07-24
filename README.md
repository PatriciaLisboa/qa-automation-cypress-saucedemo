# QA Automation - Sauce Demo

## Sobre o projeto

Projeto de automação de testes E2E da aplicação Sauce Demo utilizando Cypress e JavaScript, desenvolvido com o objetivo de demonstrar conhecimentos em QA Automation, boas práticas de automação de testes e organização de projetos.

---

## Objetivos

* Automatizar os principais fluxos da aplicação Sauce Demo;
* Aplicar boas práticas utilizando Cypress;
* Demonstrar conhecimentos em testes E2E;
* Desenvolver um projeto de portfólio voltado para QA Automation.

---

## Tecnologias utilizadas

* JavaScript;
* Cypress;
* Node.js;
* Git;
* GitHub.

---

## Por que este projeto?

Este projeto foi desenvolvido com o objetivo de demonstrar conhecimentos em automação de testes utilizando Cypress e JavaScript, simulando um projeto real de QA Automation.

Os cenários automatizados foram definidos com base nos principais fluxos da aplicação Sauce Demo, contemplando testes positivos e negativos, boas práticas de organização do código e utilização do padrão Page Object Model (POM).

Este projeto complementa meu portfólio de testes manuais, evidenciando minha evolução contínua na área de Quality Assurance.

---

## Aplicação testada

* Sauce Demo
* URL: https://www.saucedemo.com/

---

## Fluxos automatizados

### Fluxos implementados

* Login;
* Produtos.

### Fluxos planejados

* Carrinho;
* Checkout;
* Logout;
* Filtros dos produtos;
* Testes com os demais usuários disponibilizados pelo Sauce Demo.

---

## Estrutura do projeto

```text
qa-automation-cypress-saucedemo/

├── cypress
│   ├── e2e
│   ├── fixtures
│   ├── pages
│   ├── screenshots
│   └── support
│
├── cypress.config.js
├── package.json
├── test-plan.md
└── README.md
```

---

## Boas práticas utilizadas

* Page Object Model (POM);
* Fixtures para gerenciamento dos dados de teste;
* Assertions utilizando Cypress;
* Organização modular dos testes automatizados;
* Separação dos fluxos testados em arquivos independentes;
* Reutilização de código.

---

## Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/PatriciaLisboa/qa-automation-cypress-saucedemo.git
```

### 2. Entrar no diretório do projeto

```bash
cd qa-automation-cypress-saucedemo
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar os testes em modo visual

```bash
npx cypress open
```

### 5. Executar os testes pelo terminal

```bash
npx cypress run
```

---

## Estrutura dos testes automatizados

O projeto está organizado seguindo boas práticas de automação de testes:

* `cypress/e2e` → cenários de testes automatizados;
* `cypress/pages` → implementação do padrão Page Object Model;
* `cypress/fixtures` → dados utilizados durante a execução dos testes;
* `cypress/support` → configurações e arquivos de suporte do Cypress;
* `cypress/screenshots` → capturas de tela geradas automaticamente em caso de falhas.

---

## Usuários disponibilizados pelo Sauce Demo

Os seguintes usuários estão configurados no arquivo `users.json` para utilização nos testes automatizados:

* standard_user;
* locked_out_user;
* problem_user;
* performance_glitch_user;
* error_user;
* visual_user.

Todos utilizam a senha:

```text
secret_sauce
```

---

## Plano de testes

O plano de testes automatizados está documentado no arquivo:

```text
test-plan.md
```

Nesse documento são apresentados:

* Objetivo da automação;
* Funcionalidades automatizadas;
* Estratégia dos testes;
* Critérios de aprovação;
* Critérios de encerramento.

---

## Próximos passos

* Implementar os cenários do carrinho de compras;
* Implementar os cenários do checkout;
* Automatizar o fluxo de logout;
* Implementar testes utilizando os usuários problem_user, error_user, visual_user e performance_glitch_user;
* Adicionar validações negativas dos fluxos automatizados;
* Expandir a cobertura dos testes E2E.

---
