import Book from "./Book.js"
const BookShelf = ({shelfTitle, books, updateShelf}) => {

    return(<div className="bookshelf">
                <h2 className="bookshelf-title">{shelfTitle}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    
                   {books.map((book)=>
                    <Book key={book.id}
                          onUpdateShelf = {updateShelf}
                          bookData = {book}
                    />
                   )}
                      
                    
                  </ol>
                </div>
              </div>
    )
}

export default BookShelf;