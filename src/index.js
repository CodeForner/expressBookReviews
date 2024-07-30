import express from 'express'
import booksRoutes from './routes/books.routes.js'
import reviewsRoutes from './routes/reviews.routes.js'
import authRoutes from './routes/auth.routes.js'

const app = express()

app.use(express.json())

app.use('/auth', authRoutes)
app.use('/books', booksRoutes)
app.use('/reviews', reviewsRoutes)

app.listen(3333,
  console.log('server is listening at: http://localhost:3333')
)
