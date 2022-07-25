import BookShelfChanger from "./BookShelfChanger";

const Book = ({bookData, onUpdateShelf}) => {
 
return(
    <li>
                      <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage:
                                `url(${bookData.imageLinks.smallThumbnail})`,
                            }}
                          ></div>
                          <BookShelfChanger onUpdateShelf = {onUpdateShelf} bookData = {bookData} shelf = {bookData.shelf}/>
                        </div>
                        <div className="book-title">{bookData.title}</div>
                        <div className="book-authors">{bookData.authors}</div>
                      </div>
                    </li>
)
}
 export default Book;