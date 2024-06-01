
// const tokenService = new JwtService()
// const gen = new GenerateAuthToken(tokenService)
// const verify = new VerifyAuthToken(tokenService)
// const input = new GenerateAuthToken.InputClass('ad8e5ce9-deb2-4dba-ab7a-10540785e72b')
// const output = gen.execute(input)
// const input_ = new VerifyAuthToken.InputClass("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiYWQ4ZTVjZTktZGViMi00ZGJhLWFiN2EtMTA1NDA3ODVlNzJiIiwiaWF0IjoxNzE2OTQ2OTcwLCJleHAiOjE3MTY5NDcwMzB9.REciNCBrQ-GRL5w5Xpcf9BtFdQPEXV6YxgOinh8Sv0g")
// const output_ = await verify.execute(input_)
import express from 'express'
import CreateUserUseCase from "./src/Application/UseCases/UserUseCases/CreateUserUseCase.js";
import DeleteUserUseCase from "./src/Application/UseCases/UserUseCases/DeleteUserUseCase.js";
import LoginUserUseCase from "./src/Application/UseCases/UserUseCases/LoginUserUseCase.js";
import UpdateUserUseCase from "./src/Application/UseCases/UserUseCases/UpdateUserUseCase.js";
import BcryptService from "./src/Infra/Adapters/BcryptService.js";
import UserRouter from "./src/Infra/Http/Api/Routers/UserRouter.js";
import UserController from "./src/Infra/Http/Controllers/User/UserController.js";
import UserMySql from "./src/Infra/Repository/User/UserMySql.js";



/* const repo = new PropertyMongo()
const output_ = new CreatePropertyUseCase(repo)
console.log(await output_.execute(new CreatePropertyUseCase.InputClass('Kawamotus', 'Pinto pequeno')))

const fieldRepo = new FieldMongo()
const createField = new CreateFieldUseCase(fieldRepo)
const input = new CreateFieldUseCase.InputClass('', 'abe7f1f8-5419-48d7-bf04-ea07a77e4dc2', 'Asher', 'assasa', 'Asher', 'ASsadsasaddsadsa', 'Bananão', 1.2,1.1,1.3,1.4)
console.log(await createField.execute(input)) */



/* const repoMysql = new UserMySql()
const bcryptService = new BcryptService()
const output_ = new CreateUserUseCase(repoMysql, bcryptService)
const input = new CreateUserUseCase.InputClass({
  name: "Kamamotu Silva",
  email: "asher@hotmail.coma.bar.net",
  password: "Kawa153#11a"
})
console.log(await output_.execute(input)) */
const userRepo = new UserMySql()
const bcrypt = new BcryptService()
const userCreate = new CreateUserUseCase(userRepo, bcrypt)
const userDelete = new DeleteUserUseCase(userRepo)
const userLogin = new LoginUserUseCase(userRepo, bcrypt)
const userUpdate = new UpdateUserUseCase(userRepo, bcrypt)
const userController = new UserController(userCreate, userDelete, userLogin, userUpdate)
const httpRequest = {
  body: {
    name: 'asher',
    email: 'asher@gmail.com',
    password: 'Asher#11201'
  },
  method: 'POST'
}

const u = new UserRouter(userController)

const app = express()

// Use o middleware para parsear o corpo das requisições como JSON
app.use(express.json())


app.use('/users', u.getRouter());

// Inicie o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/* const userController = new UserController() */