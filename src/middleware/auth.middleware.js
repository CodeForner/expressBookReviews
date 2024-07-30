import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '../../config.js'

export const authUser = (req, res, next) => {
  // Comprueba a ver si la req tiene la autorización (ya que se encuentra
  // después del middleware the auth, el cual genera el token asociado a un user,password)
  const token = req.headers.authorization

  if (token) {
    // Como solo tenemos como payload(cosas a codificar) el usuario, cuando verificamos
    // nos devuelve el usuario.
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        res.status(403)// forbidden
      }
      req.user = decoded
      next()
    })
  } else {
    // If no token is provided in the 'Authorization' header
    res.sendStatus(401) // Unauthorized
  }
}
