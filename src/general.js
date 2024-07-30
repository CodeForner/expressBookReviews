import axios from 'axios'

const getBooks = () => {
  axios.get('http://localhost:3333/books')
    .then((response) => {
      console.log(response.data)
    }).catch((error) => {
      console.log(error)
    })
}
const getBookByISBNUsingPromise = (ISBN) => {
  axios.get(`http://localhost:3333/books/isbn/${ISBN}`)
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.error(error)
    })
}

const getBooksByAuthorUsingPromise = (author) => {
  axios.get(`http://localhost:3333/books/author/${author}`)
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.error(error)
    })
}
const getBooksByTitleUsingPromise = (title) => {
  axios.get(`http://localhost:3333/books/title/${title}`)
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.error(error)
    })
}

// Export the function if you want to use it in other files
export { getBooks, getBookByISBNUsingPromise, getBooksByTitleUsingPromise, getBooksByAuthorUsingPromise }

/*
 // Fetch book by ISBN
getBooks() // Fetch all books
getBookByISBNUsingPromise('9780061120084')
getBooksByAuthorUsingPromise('Harper Lee') // Fetch books by author

*/

getBooksByTitleUsingPromise('To Kill a Mockingbird') // Fetch book by title
