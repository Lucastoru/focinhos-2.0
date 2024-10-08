


*Focinhos** é uma aplicação mobile/Web de agendamento para Petshops, desenvolvida utilizando **React** e **Next.js**. A plataforma permite que usuários encontrem petshops, visualizem serviços disponíveis, façam reservas e gerenciem seus agendamentos diretamente do celular.
 

## 🚀 Funcionalidades <br/>
- 🔍 **Pesquisa de Barbearias**: Encontre rapidamente petshops próximoss. <br/>
- 🗓️ **Agendamento de Serviços**: Reserve serviços do petshop. <br/>
- 🔐 **Autenticação com Google**: Login seguro e rápido utilizando sua conta Google, integrado com **NextAuth**. <br/>
- 📅 **Gerenciamento de Agendamentos**: Visualize e cancele seus agendamentos diretamente na plataforma. <br/>
- 📱 **Interface Responsiva**: Design otimizado para dispositivos móveis, utilizando **Tailwind CSS**. <br/>
- 🛠️ **Sistema de Reservas**: Backend robusto com **Prisma** e **PostgreSQL** para gerenciar dados de usuários e reservas.

<br/>

## 🛠️ Tecnologias Utilizadas <br/>
- 💻 **Frontend**: React, Next.js, Tailwind CSS, TypeScript <br/>
- 🗄️ **Backend**: Node.js, Prisma, PostgreSQL <br/>
- 🔑 **Autenticação**: NextAuth <br/>
- 🛠️ **Bibliotecas Adicionais**: Lucide-react, Date-fns

<br/>

## 🔧 Configuração do Projeto <br/>
baixe o gitclone: https://github.com/Lucastoru/focinhos-2.0.git

## Instale as dependências:

npm install
Configure as variáveis de ambiente: <br/>
Crie um arquivo .env.local na raiz do projeto com as seguintes variáveis:
plaintext
Copiar código
DATABASE_URL=postgres://usuario:senha@localhost:5432/fsw-barber
NEXTAUTH_SECRET=sua_chave_secreta
GOOGLE_CLIENT_ID=seu_cliente_id
GOOGLE_CLIENT_SECRET=seu_cliente_secreto
Execute as migrações do banco de dados:

Copiar código

npx prisma migrate dev <br/>

npx prisma db seed <br/>

npm run dev       


Inicie o servidor de desenvolvimento:

</div>


