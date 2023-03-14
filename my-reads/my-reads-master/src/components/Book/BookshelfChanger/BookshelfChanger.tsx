import React from "react";
import BookType from "../../../interfaces/BookType";
import "./BookshelfChanger.css";

const BookshelfChanger = ({
  book,
  shelf,
  onMove,
}: {
  book: BookType;
  shelf: string;
  onMove: Function;
}) => {

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    onMove(book, value);
  };
  return (
    <div className="book-shelf-changer">
      <select value={shelf} onChange={handleChange}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookshelfChanger;
