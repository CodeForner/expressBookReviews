import { Router } from 'express'
import { authUser } from '../middleware/auth.middleware.js'
import { addReview, deleteReview, getReview, updateReview } from '../controllers/reviews.controller.js'

const router = Router()

router.get('/:ISBN', getReview)

router.use(authUser)

router.post('/', addReview)
router.put('/', updateReview)
router.delete('/', deleteReview)

export default router
