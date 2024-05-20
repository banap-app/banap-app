import EncryptionService from "./src/Application/Adapters/EncryptionService.js";
import CreateUserUseCase from "./src/Application/UseCases/UserUseCases/CreateUserUseCase.js";
import DeleteUserUseCase from "./src/Application/UseCases/UserUseCases/DeleteUserUseCase.js";
import BcryptService from "./src/Infra/Adapters/BcryptService.js";
import UserController from "./src/Infra/Http/Controllers/User/UserController.js";
import UserPostgre from "./src/Infra/Repository/User/UserPostgre.js";


const postgreUser = new UserPostgre()
const encryptionService = new BcryptService()
const useCaseUserCreate = new CreateUserUseCase(postgreUser,encryptionService)
const useCaseUserDelete = new DeleteUserUseCase(postgreUser)
const inputUseCaseCreate = new CreateUserUseCase.InputClass({
    name: 'teste',
    email: 'teste@gmail.com',
    password: 'AshernA@123'
})
await useCaseUserCreate.execute(inputUseCaseCreate)

/* const userController = new UserController() */