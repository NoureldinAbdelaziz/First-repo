import { Link } from "react-router-dom"; 
import { useState } from "react";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";

const BookSearch = ({books, updateShelf}) => {
  const [query, setQuery] = useState("")

  const updateQuery = (query) => {
    setQuery(query)
  }

  const showingBooks = (query) => {
    books.filter((b) =>
          b.name.toLowerCase().includes(query.toLowerCase()));
    BooksAPI.search(query, showingBooks)
      }
  
    return(
        <div className="search-books">
          <div className="search-books-bar">
            <div className="search-books-input-wrapper">
               <Link to="/" className="close-search">
                  back
               </Link>
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                onChange={(event)=>updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {showingBooks.map((book) => (
                <li key={book.id} className="search-items">
                  <Book onUpdateShelf={updateShelf} bookData = {book} />
                </li>
              ))}
            </ol>
          </div>
        </div>
    )

}

export default BookSearch;