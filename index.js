import express, { urlencoded } from 'express'
import UserRouterFactory from './src/Infra/Factory/User/UserRouterFactory.js'
import PropertyRouterFactory from './src/Infra/Factory/Property/PropertyRouterFactory.js'
import FieldRouterFactory from './src/Infra/Factory/Field/FieldRouterFactory.js'
import cors from 'cors'
import ora from 'ora'
import chalk from 'chalk'
import figlet from 'figlet'
import AnalysisRouterFactory from './src/Infra/Factory/Analysis/AnalysisRouterFactory.js'

const app = express()
const PORT = process.env.PORT_APP || 55054

// Cria uma instância de UserRouter usando a fábrica
const userRouter = UserRouterFactory.create()
const propertyRouter = PropertyRouterFactory.create()
const fieldRouter = FieldRouterFactory.create()
const analysisRouter = AnalysisRouterFactory.create()

app.use(express.json())
app.use(cors('*'))
app.use(urlencoded({ extended: false }))

// Usa o método getRouter para obter o roteador Express e monta-o em um caminho específico
app.use('/user', userRouter.getRouter())
app.use('/property', propertyRouter.getRouter())
app.use('/field', fieldRouter.getRouter())
app.use('/analysis', analysisRouter.getRouter())

const spinner = ora({
  text: 'Iniciando o servidor...',
  color: 'magenta',
  spinner: 'dots8Bit'
})
spinner.start()


// Adiciona um atraso de 3 segundos (3000 milissegundos)
setTimeout(() => {
  app.listen(PORT, () => {
    spinner.stop()
    console.log(chalk.green(figlet.textSync(`Servidor rodando na porta ${PORT}`, { font: 'Small' })))
  })
}, 3000)
