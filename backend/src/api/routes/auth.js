import Router from 'express-promise-router'
import * as Controller from '../controllers/auth'
import * as authMiddlewares from "../middlewares/auth";

const router = Router()

router.post('/login', Controller.login)
router.post('/logout', authMiddlewares.validateToken, Controller.logout)

export default router
