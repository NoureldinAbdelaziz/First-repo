import "./App.css";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import BookShelf from "./BookShelf";
import {Link, Route, Routes} from "react-router-dom"
import BookSearch from "./BookSearch";

function App() {
    const [books, setBooks] = useState([])
    const [flip, setFlip] = useState (true)

    useEffect(() => {
      const getBooks = async () => {
        const res = await BooksAPI.getAll();
        setBooks(res);
      };
      getBooks();
    }, []);

    const handleNewShelf = (book, shelf)=>{
      const bookIndex = books.map((currentBook) => {
        for(let i = 0; i < books.length ; i++){
          if (currentBook.id === book.id){
            return i
          }
        }
        return -1
      })
      const updatedBooks = books
      if (bookIndex === -1){
        book.shelf = shelf
        updatedBooks.push(book)
      }
      else{
        updatedBooks[bookIndex].shelf = shelf
      }
      setBooks(updatedBooks)
      BooksAPI.update(book,shelf)
      setFlip(!flip)
    }

    const currentlyReadingBooks = books.map((book) => {
      if(book.shelf === "currentlyReading"){
        return book
      }
    })
    const wantToReadBooks = books.map((book) => {
      if(book.shelf === "wantToRead"){
        return book
      }
    })
    const readBooks = books.map((book) => {
      if(book.shelf === "read"){
        return book
      }
    })
      
     return(
    <Routes className="app"> 
      <Route path = "/search" render = {()=><BookSearch books = {books} updateShelf = {handleNewShelf}/>}/>
      <Route 
        exact
        path="/"
        render={()=> {
          <div>
            <h2  className = "list-books-title">My Reads</h2>
            <div className = "list-books-content">
              <BookShelf className = "bookshelf" updateShelf = {handleNewShelf} books = {currentlyReadingBooks} shelfTitle = "Currently Reading"/>
              <BookShelf className = "bookshelf" updateShelf = {handleNewShelf} books = {wantToReadBooks} shelfTitle = "Want To Read"/>
              <BookShelf className = "bookshelf" updateShelf = {handleNewShelf} books = {readBooks} shelfTitle = "Read"/>
            </div>  
             <Link to="/search" className="open-search">
                Open Search
             </Link>
          </div>
        }
        } 
        />
    </Routes>
        );
}
    

 


export default App;
