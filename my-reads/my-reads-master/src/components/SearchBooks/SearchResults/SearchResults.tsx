import React from "react";
import BookType from "../../../interfaces/BookType";
import Book from "../../Book/Book";
import "./SearchResults.css";

const SearchResults = ({
  myBooks,
  searchBooks,
  onMove,
}: {
  myBooks: BookType[];
  searchBooks: BookType[];
  onMove: Function;
}) => {
  // setting the updated books to the received shearch results
  const updatedBooks = searchBooks.map((book) => {
    const editBook = myBooks.find((b) => b.id === book.id);
    editBook && (book.shelf = editBook.shelf);
    return book;
  });
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {updatedBooks.map((book) => (
          <Book
            key={book.id}
            book={book}
            shelf={book.shelf || "none"}
            onMove={onMove}
          />
        ))}
      </ol>
    </div>
  );
};

export default SearchResults;
