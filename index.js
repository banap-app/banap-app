import EncryptionService from "./src/Application/Adapters/EncryptionService.js"
import CreateUserUseCase from "./src/Application/UseCases/UserUseCases/CreateUserUseCase.js"
import DeleteUserUseCase from "./src/Application/UseCases/UserUseCases/DeleteUserUseCase.js"
import User from "./src/Domain/Entities/User.js"
import BcryptService from "./src/Infra/Adapters/BcryptService.js"
import UserController from "./src/Infra/Http/Controllers/User/UserController.js"
import { UserMySql } from "./src/Infra/Repository/User/UserMySql.js"
import mysql from "mysql2/promise"


/* const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
})
 */


const postgreUser = new UserMySql()
const encryptionService = new BcryptService()
const useCaseUserCreate = new CreateUserUseCase(postgreUser,encryptionService)
const useCaseUserDelete = new DeleteUserUseCase(postgreUser)
const inputUseCaseCreate = new CreateUserUseCase.InputClass({
  name: 'Matheus Moura',
  email: 'matheus@gmail.com',
  password: 'Matheus1@'
})

const result = await useCaseUserCreate.execute(inputUseCaseCreate)
console.log(result)

/* const userController = new UserController() */