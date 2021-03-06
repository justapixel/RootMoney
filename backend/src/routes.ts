import express from 'express'
import UserController from './controllers/UserController'
import ProfileController from './controllers/ProfileController'
import SessionController from './controllers/SessionController'
import BalanceController from './controllers/BalanceController'

import sessionMiddleware from './middlewares/session'
import HistoryController from './controllers/HistoryController'

const routes = express.Router()

const usercontroller = new UserController()
const profilecontroller = new ProfileController()
const balancecontroller = new BalanceController()
const sessioncontroller = new SessionController()
const historycontrolller = new HistoryController()

routes.post('/api42/user', usercontroller.store)
routes.post('/api42/session', sessioncontroller.store)

routes.use(sessionMiddleware)

routes.put('/api42/user', usercontroller.update)
routes.get('/api42/profile', profilecontroller.index)
routes.put('/api42/profile', profilecontroller.update)

routes.get('/api42/balance', balancecontroller.index)
routes.put('/api42/balance', balancecontroller.update)

routes.get('/api42/history', historycontrolller.index)
routes.post('/api42/history', historycontrolller.store)
routes.put('/api42/history', historycontrolller.update)

export default routes
