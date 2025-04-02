# 📝 To-do List API

Uma API simples de gerenciamento de tarefas desenvolvida com Node.js, Express e PostgreSQL. Este projeto foi criado com o objetivo de praticar conceitos fundamentais de desenvolvimento backend, incluindo autenticação com JWT, estruturação de CRUDs e uso de banco de dados relacional.

---

## 🎯 Objetivo

Construir uma aplicação backend realista, porém de complexidade acessível, com foco em:

- Prática de autenticação e autorização.
- Criação de endpoints RESTful com Express.
- Manipulação de banco de dados PostgreSQL via ORM.
- Organização de código seguindo boas práticas.
- Aprendizado incremental com funcionalidades básicas e úteis.

---

## 📌 Regras de Negócio

### Usuário
- Deve ser possível criar uma conta (sign up).
- O login (sign in) deve retornar um token JWT.
- O token deve ser enviado no header (`Authorization: Bearer token`) para acessar rotas protegidas.
- O e-mail do usuário deve ser único.
- A senha deve ser armazenada de forma segura (criptografada).

### Tarefas
- Cada usuário só pode acessar suas próprias tarefas.
- Cada tarefa deve ter:
  - **Título** (obrigatório)
  - **Descrição** (opcional)
  - **Status** (`pendente` ou `concluída`)
  - **Data de criação**
- O usuário pode:
  - Criar, editar, listar e deletar suas tarefas.
  - Marcar tarefas como concluídas ou pendentes.

---

## 👤 Dados do Usuário

```json
{
  "id": "UUID",
  "name": "string",
  "email": "string (único)",
  "password": "string (hash)"
}
```

---

## ✅ Dados da Tarefa

```json
{
  "id": "UUID",
  "title": "string",
  "description": "string (opcional)",
  "status": "pendente | concluída",
  "createdAt": "timestamp",
  "userId": "UUID"
}
```

---

## ⚙️ Requisitos Técnicos

- Node.js 
- TypeScript
- Express
- PostgreSQL
- Prisma ORM 
- JWT para autenticação
- Dotenv para variáveis de ambiente

---
