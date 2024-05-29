import GenerateAuthToken from "./src/Application/UseCases/AuthUseCases/GenerateAuthToken.js";
import VerifyAuthToken from "./src/Application/UseCases/AuthUseCases/VerifyAuthToken.js";
import JwtService from "./src/Infra/Adapters/JwtService.js";

const tokenService = new JwtService()
const gen = new GenerateAuthToken(tokenService)
const verify = new VerifyAuthToken(tokenService)
const input = new GenerateAuthToken.InputClass('ad8e5ce9-deb2-4dba-ab7a-10540785e72b')
const output = gen.execute(input)
console.log(output)
const input_ = new VerifyAuthToken.InputClass("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiYWQ4ZTVjZTktZGViMi00ZGJhLWFiN2EtMTA1NDA3ODVlNzJiIiwiaWF0IjoxNzE2OTQ2MjU5LCJleHAiOjE3MTY5NDYzMTl9.mB4r17kwjIWQAJfHQx2sj9f-o8CSrQdiMbxfrc6sxEM")
const output_ = await verify.execute(input_)
console.log(output_);

/* const repo = new PropertyMongo()
const output = new CreatePropertyUseCase(repo)
console.log(output.execute(new CreatePropertyUseCase.InputClass('Kawamotus', 'Pinto pequeno')));


const repoMysql = new UserMySql()
const bcryptService = new BcryptService()
const output_ = new CreateUserUseCase(repoMysql, bcryptService)
const input = new CreateUserUseCase.InputClass({
  name: "Kamamotu Silva",
  email: "kamamotu@kama.com",
  password: "Kawa153#11a"
})
console.log(await output_.execute(input)); */

/* const userController = new UserController() */