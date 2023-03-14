import BookType from "../../interfaces/BookType";
import BookshelfChanger from "./BookshelfChanger/BookshelfChanger";
import "./Book.css";

const Book = ({
  book,
  shelf,
  onMove,
}: {
  book: BookType;
  shelf: string;
  onMove: Function;
}) => (
  <li>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={
            book.imageLinks
              ? {
                  backgroundImage: `url(${book.imageLinks.thumbnail})`,
                }
              : {}
          }
        />
        <BookshelfChanger book={book} shelf={shelf} onMove={onMove} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors ? book.authors.join(", ") : "Unknown Author"}
      </div>
    </div>
  </li>
);

export default Book;
