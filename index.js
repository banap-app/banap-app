import express, { urlencoded } from 'express'
import UserRouterFactory from './src/Infra/Factory/User/UserRouterFactory.js'
import PropertyRouterFactory from './src/Infra/Factory/Property/PropertyRouterFactory.js'
import FieldRouterFactory from './src/Infra/Factory/Field/FieldRouterFactory.js'
import cors from 'cors'

const app = express()

// Cria uma instância de UserRouter usando a fábrica
const userRouter = UserRouterFactory.create()
const propertyRouter = PropertyRouterFactory.create()
const fieldRouter = FieldRouterFactory.create()

app.use(express.json())
app.use(cors('*'))
app.use(urlencoded({ extended: false }))

// Usa o método getRouter para obter o roteador Express e monta-o em um caminho específico
app.use('/user', userRouter.getRouter())
app.use('/property', propertyRouter.getRouter())
app.use('/field', fieldRouter.getRouter())

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
