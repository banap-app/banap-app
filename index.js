import express, { urlencoded } from 'express'
import UserRouterFactory from './src/Infra/Factory/User/UserRouterFactory.js'
import PropertyRouterFactory from './src/Infra/Factory/Property/PropertyRouterFactory.js'


const app = express()

// Cria uma instância de UserRouter usando a fábrica
const userRouter = UserRouterFactory.create()
const propertyRouter = PropertyRouterFactory.create()

app.use(express.json())
app.use(urlencoded({ extended: false }))

// Usa o método getRouter para obter o roteador Express e monta-o em um caminho específico
app.use('/user', userRouter.getRouter())
app.use('/property', propertyRouter.getRouter())

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
