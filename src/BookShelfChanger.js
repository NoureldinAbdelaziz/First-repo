const BookShelfChanger = ({ onUpdateShelf, bookData}) => {

    return(
        <div className="book-shelf-changer">
                            <select onChange={(event)=> onUpdateShelf(bookData, event.target.value)} value = {bookData.shelf}>
                              <option value="none" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
        </div>
    )
}

export default BookShelfChanger;