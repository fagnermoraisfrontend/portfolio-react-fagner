# Portfólio React - Fagner Dias Morais

Projeto de portfólio pessoal desenvolvido em React com foco em componentização, renderização dinâmica de projetos e apresentação profissional para publicação no GitHub e na Vercel.

## Objetivo da atividade

Migrar um portfólio pessoal para React, aplicando:

- componentização;
- renderização dinâmica de dados;
- versionamento com GitHub;
- publicação com Vercel.

## Estrutura do projeto

```bash
portfolio-react-fagner/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── components/
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── ProjectsSection.jsx
    │   └── Footer.jsx
    └── data/
        └── projects.js
```

## Requisitos atendidos

### 1. Componentização
O projeto foi dividido em múltiplos componentes React, incluindo:

- `Hero`
- `About`
- `ProjectsSection`
- `Footer`

### 2. Renderização dinâmica
A seção de projetos usa um array de objetos no arquivo `src/data/projects.js`, renderizado com `map()` no componente `ProjectsSection.jsx`.

### 3. Repositório público no GitHub
Link  do meu repositório:

```text
https://github.com/fagnermoraisfrontend/portfolio-react-fagner
```

### 4. Publicação na Vercel
Link sugerido para publicação:

```text
https://portfolio-react-fagner.vercel.app
```

> Observação: o endereço final da Vercel pode variar conforme a disponibilidade do domínio e a configuração escolhida no momento do deploy.

## Como executar localmente

1. Abra a pasta do projeto no VS Code.
2. Abra o terminal na pasta do projeto.
3. Instale as dependências:

```bash
npm install
```

4. Rode o projeto:

```bash
npm run dev
```

5. Para gerar a versão de produção:

```bash
npm run build
```

## Passo a passo para publicar no GitHub

1. Acesse seu GitHub.
2. Clique em **New repository**.
3. Crie o repositório com o nome `portfolio-react-fagner`.
4. Envie todos os arquivos do projeto para esse repositório.
5. Verifique se o repositório está como **Public**.

## Passo a passo para publicar na Vercel

1. Acesse a Vercel.
2. Faça login com sua conta GitHub.
3. Clique em **Add New** > **Project**.
4. Importe o repositório `portfolio-react-fagner`.
5. Clique em **Deploy**.
6. Copie o link gerado pela Vercel.

## Autor

**Fagner Dias Morais**  
GitHub: https://github.com/fagnermoraisfrontend
