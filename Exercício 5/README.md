# 🚗 Cadastro de Veículos API

API RESTful desenvolvida em **Node.js** com **MongoDB** para realizar o gerenciamento de veículos com funcionalidades completas de CRUD, estatísticas e filtros personalizados.

---

## 📋 Funcionalidades

- ✅ Cadastro de veículos (`POST /veiculos`)
- ✏️ Atualização total ou parcial de dados (`PUT`, `PATCH`)
- 🗑️ Remoção de veículos (`DELETE`)
- 📄 Listagem e filtros combinados (`GET /veiculos`, `/veiculos?marca=...`)
- 📊 Relatórios:
  - Veículos não vendidos
  - Distribuição por década de fabricação
  - Distribuição por fabricante
  - Veículos cadastrados na última semana
- ✅ Validação de marcas pré-definidas (evita erros como `Forde`, `Xevrolé`, etc.)

---

🚀 Tecnologias Utilizadas
Node.js + Express

MongoDB com Mongoose

Zod para validações

Jest + Supertest para testes

Dotenv para variáveis de ambiente

🔧 Instalação

1. Clone o projeto:
   
git clone https://github.com/seu-usuario/cadastro-veiculos-api.git
cd cadastro-veiculos-api/backend

2. Instale as dependências:

npm install

3. Configure o arquivo .env:

PORT=3000
MONGO_URI=mongodb://localhost:27017/veiculos

4. Execute o servidor:

npm run dev

📌 Validação de Marcas

O campo marca aceita apenas valores válidos definidos internamente. Exemplo:

"Ford", "Chevrolet", "Volkswagen", "Fiat", "Honda", "Toyota"

Entradas como "Forde" ou "Xevrolé" serão rejeitadas.

👩‍💻 Autor
Desenvolvido por Luis Gustavo Ferreira Leite






