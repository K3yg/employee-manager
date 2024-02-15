# 🇧🇷 Employee Manager 

> **Note:** English version at the end

O Employee Manager é um projeto de gerenciamento de funcionários que utiliza tecnologias sólidas tanto no frontend quanto no backend para proporcionar uma experiência eficiente e agradável aos usuários. O objetivo principal do projeto é servir de estudo das tecnologias além da capacidade de criar uma boa UI/UX. 

![enter image description here](https://s9.gifyu.com/images/SCJps.gif)

## Resumo
Dentro da plataforma (por enquanto) é possível criar um colaborador e filtrá-lo pela informação desejada. Existe a possibilidade de deletar todos os registros, mas isso acontece apenas através da API, que por sua vez possui documentação dos endpoints e também dos schemas que o servidor possui.

## Stack utilizada

### Frontend
- TypeScript
- React
- Vite
- Tailwind
- shadcn/ui

### Backend
- Python
- FastAPI
- PyMongo

## Funcionamento

O Employee Manager é dividido em duas partes principais: o frontend e o backend.

### Frontend
O frontend é construído com React e utiliza TypeScript para garantir um código mais seguro e legível. O Vite é usado como o bundler, proporcionando uma experiência de desenvolvimento rápida e eficiente. O shadcn/ui é utilizado para a interface do usuário, fornecendo componentes estilizados e responsivos, com ótimas funcionalidades, como notificações e possibilidade de selecionar o modo escuro ou claro.

### Backend
O backend é desenvolvido em Python usando o framework FastAPI, que é rápido, fácil de usar e oferece suporte nativo para a especificação OpenAPI. O banco de dados utilizado é o MongoDB, um banco de dados NoSQL altamente escalável e flexível. O acesso ao MongoDB é facilitado pelo PyMongo, uma biblioteca Python para interagir com o MongoDB.

## Containers e Setup

O Employee Manager utiliza Docker para facilitar o desenvolvimento e a implantação. Com o Docker, é possível encapsular o ambiente de desenvolvimento e garantir a consistência entre diferentes ambientes. O projeto possui um arquivo `docker-compose.yml` que define os serviços necessários para executar o frontend, o backend e o banco de dados.

Para configurar o ambiente de desenvolvimento, basta ter o Docker instalado e executar os comandos do Makefile na pasta raiz do projeto:

- `make run`: Inicia todos os containers necessários em segundo plano.
- `make stop`: Para todos os containers.
- `make build`: Constrói as imagens Docker.
- `make rebuild`: Constrói as imagens Docker sem utilizar o cache.
- `make restart`: Reinicia todos os containers.
- `make logs`: Exibe os logs de todos os containers em tempo real.

Com essas configurações simples, o projeto Employee Manager pode ser facilmente executado e desenvolvido em qualquer ambiente compatível com Docker.

## Uso

Para começar a usar a plataforma, é só seguir os passos da seção de Setup acima e ir no seu navegador favorito e acessar o endereço ``` http://localhost:5173/ ```

Já o funcionamento da API se dá pelo endpoit ``` http://localhost:8000/ ``` e caso deseje saber quais são os endpoints criados até o momento, é só ir para ``` http://localhost:8000/docs ``` que terá a documentação completa.



# 🇺🇸 Employee Manager

The Employee Manager is an employee management project that utilizes robust technologies in both the frontend and backend to provide an efficient and pleasant user experience. The main goal of the project is to serve as a study of these technologies while also being capable of creating a good UI/UX.

![enter image description here](https://s9.gifyu.com/images/SCJps.gif)


## Summary

Within the platform (for now), it's possible to create an employee and filter them by desired information. There is also the possibility to delete all records, but this can only be done through the API, which, in turn, has documentation of the endpoints and also the schemas that the server possesses.

## Technology Stack

### Frontend
- TypeScript
- React
- Vite
- Tailwind
- shadcn/ui

### Backend
- Python
- FastAPI
- PyMongo

## Functionality

The Employee Manager is divided into two main parts: the frontend and the backend.

### Frontend

The frontend is built with React and utilizes TypeScript to ensure safer and more readable code. Vite is used as the bundler, providing a fast and efficient development experience. The shadcn/ui library is used for the user interface, providing stylized and responsive components, with great features such as notifications and the ability to select dark or light mode.

### Backend

The backend is developed in Python using the FastAPI framework, which is fast, easy to use, and natively supports the OpenAPI specification. The database used is MongoDB, a highly scalable and flexible NoSQL database. Access to MongoDB is facilitated by PyMongo, a Python library for interacting with MongoDB.

## Containers and Setup

The Employee Manager uses Docker to facilitate development and deployment. With Docker, it's possible to encapsulate the development environment and ensure consistency across different environments. The project has a `docker-compose.yml` file that defines the necessary services to run the frontend, backend, and database.

To set up the development environment, simply have Docker installed and run the commands from the Makefile in the project's root directory:

- `make run`: Starts all necessary containers in the background.
- `make stop`: Stops all containers.
- `make build`: Builds Docker images.
- `make rebuild`: Builds Docker images without using cache.
- `make restart`: Restarts all containers.
- `make logs`: Displays logs from all containers in real-time.

With these simple configurations, the Employee Manager project can be easily run and developed in any Docker-compatible environment.

## Usage

To start using the platform, just follow the steps in the Setup section above and go to your favorite browser and access the address `http://localhost:5173/`

As for the API functionality, it can be accessed via the endpoint `http://localhost:8000/`, and if you wish to know which endpoints have been created so far, just go to: `http://localhost:8000/docs`, where you'll find the complete documentation.
