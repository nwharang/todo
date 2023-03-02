import authRouter from './authRoutes.js'
import teamRouter from './teamRoutes.js'
import todoRouter from './todoRoutes.js'

const routesInit = (app) => {
    app.use(authRouter)
    app.use(teamRouter)
    app.use(todoRouter)
}


export default routesInit