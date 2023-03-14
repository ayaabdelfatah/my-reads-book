import React from "react";
import { Link } from "react-router-dom";
import BookType from "../../interfaces/BookType";
import { Shelf } from "../../interfaces/ShelfType";
import Bookshelf from "./Bookshelf/Bookshelf";
import "./ListBooks.css";

const ListBooks = ({
  books,
  bookshelves,
  onMove,
}: {
  books: BookType[];
  bookshelves: Shelf[];
  onMove: Function;
}) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {bookshelves.map((shelf: Shelf) => (
            <Bookshelf
              key={shelf.key}
              shelf={shelf}
              books={books}
              onMove={onMove}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="search">
          <button>Add a Book</button>
        </Link>
      </div>
    </div>
  );
};

export default ListBooks;
