import jwt from 'jsonwebtoken'
import users from '../usersdb.js'
import { SECRET_KEY } from '../../config.js'

const doesExist = (username) => users.some((user) => user.username.toLowerCase() === username.toLowerCase())
const isRegistered = (username, password) => users.some(user => user.username === username && user.password === password)

export const postRegister = (req, res) => {
  const { password, username } = req.body
  if (username && password) {
    if (!doesExist(username)) {
      users.push({ username, password })
      res.status(200).json({ message: 'User successfully registered. Now you can login.' })
    } else {
      res.status(409).json({ message: 'User already exists!' })
    }
  } else {
    res.status(400).json({ message: 'Invalid input.' })
  }
}

export const postLogin = (req, res) => {
  const { username, password } = req.body

  if (isRegistered(username, password)) {
    const accessToken = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' })
    res.json({ accessToken })
  } else {
    res.status(401).json({ message: 'Invalid credentials.' })
  }
}
