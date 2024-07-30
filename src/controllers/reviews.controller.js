import books from '../booksdb.js'

export const getReview = (req, res) => {
  const ISBN = req.params.ISBN

  // Find the book by ISBN
  const book = books.find(book => book.ISBN === ISBN)

  // Check if the book exists
  if (!book) {
    return res.status(404).json({ message: 'Book not found.' })
  }

  // Check if the book has reviews
  if (!book.reviews || book.reviews.length === 0) {
    return res.status(404).json({ message: 'No reviews found for this book.' })
  }

  // Send the reviews for the book
  res.status(200).json(book.reviews)
}

// Add a review to a book

export const addReview = (req, res) => {
  const { ISBN, review } = req.body
  const username = req.user.username

  if (!ISBN || !review) {
    return res.status(400).json({ message: 'Invalid review data.' })
  }

  const book = books.find(book => book.ISBN === ISBN)

  if (!book) {
    return res.status(404).json({ message: 'Book not found.' })
  }

  const newReview = { username, review }
  if (!book.reviews) {
    book.reviews = []
  }
  book.reviews.push(newReview)

  res.status(201).json(newReview)
}

// Update a review for a book
export const updateReview = (req, res) => {
  const { ISBN, review } = req.body
  const username = req.user.username

  if (!ISBN || !review) {
    return res.status(400).json({ message: 'Invalid review data.' })
  }

  const book = books.find(book => book.ISBN === ISBN)

  if (!book) {
    return res.status(404).json({ message: 'Book not found.' })
  }

  const existingReview = book.reviews.find(r => r.username === username)

  if (!existingReview) {
    return res.status(404).json({ message: 'Review not found.' })
  }

  existingReview.review = review

  res.status(200).json(existingReview)
}

// Delete a review for a book
export const deleteReview = (req, res) => {
  const { ISBN } = req.body
  const username = req.user.username

  if (!ISBN) {
    return res.status(400).json({ message: 'Invalid request data.' })
  }

  const book = books.find(book => book.ISBN === ISBN)

  if (!book) {
    return res.status(404).json({ message: 'Book not found.' })
  }

  const reviewIndex = book.reviews.findIndex(r => r.username === username)

  if (reviewIndex === -1) {
    return res.status(404).json({ message: 'Review not found.' })
  }

  book.reviews.splice(reviewIndex, 1)

  res.status(200).json({ message: 'Review deleted successfully.' })
}
