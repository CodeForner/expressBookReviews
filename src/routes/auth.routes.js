import { Router } from 'express'
import { postLogin, postRegister } from '../controllers/auth.controllers.js'

const router = Router()

router.post('/register', postRegister)

// Debemos crear la ruta de login: una vez registrado se debe comprobar que el user está en en users
// Y si está, entonces se genera un token JWT asociado a ese usuario que durará 1 h

router.post('/login', postLogin)

export default router
