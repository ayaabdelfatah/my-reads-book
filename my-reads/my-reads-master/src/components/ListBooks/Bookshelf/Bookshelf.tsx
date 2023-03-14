import React from "react";
import BookType from "../../../interfaces/BookType";
import { Shelf } from "../../../interfaces/ShelfType";
import Book from "../../Book/Book";
import "./Bookshelf.css";

const Bookshelf = ({
  books,
  shelf,
  onMove,
}: {
  books: BookType[];
  shelf: Shelf;
  onMove: Function;
}) => {
  const booksOnThisShelf = books.filter((book) => book.shelf === shelf.key);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksOnThisShelf.map((book) => (
            <Book key={book.id} book={book} shelf={shelf.key} onMove={onMove} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
