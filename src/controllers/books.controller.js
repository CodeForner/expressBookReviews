import books from '../booksdb.js'

export const getBooks = (req, res) => res.send(books)

// Complete the function definition and export
export const getBooksIsbn = (req, res) => {
  const ISBN = req.params.ISBN
  const bookIsbn = books.find(book => book.ISBN === ISBN)
  res.send(bookIsbn)
}

export const getBooksTitle = (req, res) => {
  const title = req.params.title.toLowerCase()
  const bookTitle = books.find(book => book.title.toLowerCase() === title)
  res.send(bookTitle)
}

export const getBooksAuthor = (req, res) => {
  const author = req.params.author.toLowerCase()
  const booksAuthor = books.filter(book => book.author.toLowerCase() === author)
  res.send(booksAuthor)
}

export const getBooksGenre = (req, res) => {
  const genre = req.params.genre.toLowerCase()
  const booksGenre = books.filter(book => book.genre.toLowerCase() === genre)
  res.send(booksGenre)
}
