import express from 'express'

import { getBooks, getBooksIsbn, getBooksAuthor, getBooksGenre, getBooksTitle } from '../controllers/books.controller.js'

const router = express.Router()

router.get('/', getBooks)
router.get('/isbn/:ISBN', getBooksIsbn)
router.get('/author/:author', getBooksAuthor)
router.get('/genre/:genre', getBooksGenre)
router.get('/title/:title', getBooksTitle)
export default router
