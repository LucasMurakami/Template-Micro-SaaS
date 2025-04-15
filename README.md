# Micro-SaaS Template

Este projeto é um template para criação de aplicações **Micro-SaaS** utilizando tecnologias modernas como **Next.js**, **Firebase** e **Tailwind CSS**. Ele foi projetado para acelerar o desenvolvimento de aplicações SaaS, fornecendo uma base sólida com autenticação, banco de dados e estrutura modular.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização no lado do servidor e geração de sites estáticos.
- **Firebase**: Utilizado para autenticação, Firestore (banco de dados NoSQL) e armazenamento.
- **Tailwind CSS**: Framework de utilitários CSS para estilização rápida e responsiva.
- **NextAuth.js**: Gerenciamento de autenticação com suporte a provedores como Google, GitHub, entre outros.

## Configuração

### Pré-requisitos

- Node.js (v18 ou superior)
- Firebase configurado com um projeto ativo
- Conta no Google Cloud para gerar credenciais de serviço

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto e configure as seguintes variáveis (Confira o arquivo env.example):

```env
AUTH_SECRET="" # Added by `npx auth`. Read more: https://cli.authjs.dev
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY_BASE64=
```

Clone o projeto:

```bash
git clone https://github.com/seu-usuario/micro-saas-template.git
cd micro-saas-template
```

Baixe as dependências e libs:

```bash
npm run dev
```

Rode o projeto:

```bash
npm run dev
```
