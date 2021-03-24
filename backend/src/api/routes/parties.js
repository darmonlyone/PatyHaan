import Router from 'express-promise-router'
import * as Controller from '../controllers/parties';

const router = Router()

router.get('/', Controller.getAllWithStatus)
router.post('/', Controller.create)
router.put('/join/:id', Controller.joinParty)
router.put('/unjoin/:id', Controller.unJoinParty)
router.delete('/:id', Controller.deletes)

router.get('/own', Controller.getByOwnerId)
router.put('/:id', Controller.edit)

export default router