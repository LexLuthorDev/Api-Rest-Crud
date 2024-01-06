# Criação de uma Api Rest com Express generator , sequelize-cli e controllergenerate Cli

## Instruções

1. Instalar o express-generator
2. Instalar o sequelize
3. Instalar o sequelize-cli
4. Instalar o controllergenerate

## Exemplo

```
npm install express-generator -g

```

## Iniciando um projeto express-generator

```
express --no-view api-rest
cd api-rest
```

```
npm install sequelize mysql2 nodemon
npm install --save-dev sequelize-cli
npm install -g controllergenerate
```

## Iniciando o sequelize-cli

```
npx sequelize-cli init

```

### Criar o model e migração

```
npx sequelize-cli model:create --name Usuario --attributes "name:string,email:string, senha:string"

```

```
npx sequelize-cli db:migrate
```

### Criar o controller

```
controllergenerate generate-controller usuarioController Usuario

```

### Criar a rota

```
$ controllergenerate generate-route usuario usuarioController

```

--- Observações ---

1. configurar o acesso ao mysql no arquivo `config/config.json`

```
{
    "development": {
    "username": "root",
    "password": "",
    "database": "api_rest",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}
```

2.  adicionar a rota no arquivo principal `app.js`

```

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
let usuarioRouter = require("./routes/usuario");

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/usuario", usuarioRouter);

```

Para executar o projeto, execute o comando `npm start`

```
npm start

```
