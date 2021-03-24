import Router from 'express-promise-router'
import * as Controller from '../controllers/users';

const router = Router()

router.get('/', Controller.getAll)
router.post('/', Controller.create)

export default router