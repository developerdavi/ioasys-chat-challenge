# Sobre

Você terá que desenvolver um serviço para ser incorporado a um sistema e esse serviço será responsável pelo chat entre usuários e as conversas são em **tempo real**

# 🏗 O que fazer?

- Você deve realizar um fork deste repositório e, ao finalizar, enviar o link do seu repositório para a nossa equipe. Lembre-se, NÃO é necessário criar um Pull Request para isso, nós iremos avaliar e retornar por email o resultado do seu teste.

# 🚨 Requisitos

- A API deverá ser construída em **NodeJS**
- Implementar autenticação e deverá seguir o padrão **JWT**, lembrando que o token a ser recebido deverá ser no formato **Bearer**
- Seu projeto terá que ser implementado em **ExpressJS** ou **SailsJS**
- Para a comunicação com o banco de dados utilize algum **ORM**/**ODM**
- **Bancos relacionais permitidos**:
  - MySQL
  - MariaDB
  - Postgre
- **Bancos não relacionais permitidos**:
  - MongoDB
- Sua API deverá seguir os padrões Rest na construção das rotas e retornos
- Sua API deverá conter a collection/variáveis do postman ou algum endpoint da documentação em openapi para a realização do teste
- Você deverá implementar microsserviço
- Utilizar docker para a separação das APIs
- Utilizar Docker Compose para a orquestração dos serviços
- Suas APIs deverão ser independentes, porém elas poderão se comunicar
- Instruções para execução do projeto
- Migrations para a criação das tabelas do banco relacional

# 🎁 Extra

Esses itens não são obrigatórios, porém desejados.

- Testes unitários
- Linter
- Code Formater

# 🖥 O que desenvolver?

- Você deverá desenvolver serviços que serão responsáveis por um chat em tempo real entre usuários, esses só serão permitidos utilizar o chat caso estejam autenticados
- O chat será separado por salas, ou seja, cada sala será um canal de comunicação entre usuários.
- Um usuário pode estar em mais de uma sala ao mesmo tempo
- A sala possuirá um moderador, que será o usuário quem a criou
- O moderador poderá remover outros usuários a qualquer momento
- Não há necessidade de criar interfaces

# 🕵🏻‍♂️ Itens a serem avaliados

- Se o projeto entregue atendeu a todos os [requisitos](#--🚨-requisitos) e o que for exigido na seção [O que desenvolver?](#--🖥-o-que-desenvolver-?)
- Estrutura de pastas das APIs
- Funcionamento das APIs
- Segurança da API, como autenticação, senhas salvas no banco, SQL Injection e outros
- Boas práticas da Linguagem/Framework

# ⚠️ Observações

Lembre-se de se atentar aos detalhes em relação a documentação e migration para garantir a boa execução do projeto

# 🔗 Links

- Documentação JWT https://jwt.io/
- Frameworks NodeJS:
  1. https://expressjs.com/pt-br/
  2. https://sailsjs.com/
