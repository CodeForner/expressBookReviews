const books = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    publicationDate: '1960-07-11',
    ISBN: '9780061120084',
    genre: 'Fiction',
    reviews: []
  },
  {
    title: '1984',
    author: 'George Orwell',
    publicationDate: '1949-06-08',
    ISBN: '9780451524935',
    genre: 'Dystopian',
    reviews: []
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publicationDate: '1925-04-10',
    ISBN: '9780743273565',
    genre: 'Fiction',
    reviews: []
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    publicationDate: '1951-07-16',
    ISBN: '9780316769488',
    genre: 'Fiction',
    reviews: []
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    publicationDate: '1813-01-28',
    ISBN: '9781503290563',
    genre: 'Romance',
    reviews: []
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    publicationDate: '1954-07-29',
    ISBN: '9780618640157',
    genre: 'Fantasy',
    reviews: []
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    publicationDate: '1937-09-21',
    ISBN: '9780547928227',
    genre: 'Fantasy',
    reviews: [
      {
        username: 'alice',
        review: "An incredible adventure with rich, immersive world-building. Tolkien's imagination knows no bounds."
      },
      {
        username: 'bob',
        review: 'A delightful read for all ages. The story is captivating, and the characters are well-developed.'
      }
    ]
  },
  {
    title: 'Moby Dick',
    author: 'Herman Melville',
    publicationDate: '1851-10-18',
    ISBN: '9781503280786',
    genre: 'Adventure',
    reviews: [
      {
        username: 'carol',
        review: "A complex and multi-layered novel. Melville's writing is dense but rewarding. A true classic."
      }
    ]
  },
  {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    publicationDate: '1869-01-01',
    ISBN: '9781420954306',
    genre: 'Historical Fiction',
    reviews: [
      {
        username: 'dave',
        review: "An epic tale of history, love, and war. Tolstoy's work is monumental in its scope and depth."
      },
      {
        username: 'eve',
        review: 'A challenging read, but incredibly rewarding. The historical detail and character development are outstanding.'
      }
    ]
  },
  {
    title: 'The Odyssey',
    author: 'Homer',
    publicationDate: '-800-01-01',
    ISBN: '9780140268867',
    genre: 'Epic',
    reviews: [
      {
        username: 'frank',
        review: "A timeless epic that explores themes of heroism and adventure. Homer's narrative is both engaging and profound."
      }
    ]
  }
]

export default books
