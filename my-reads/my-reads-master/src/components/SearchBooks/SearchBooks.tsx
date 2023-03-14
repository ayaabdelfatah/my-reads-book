import { Link } from "react-router-dom";
import SearchBooksInput from "./SearchBooksInput/SearchBooksInput";
import SearchResults from "./SearchResults/SearchResults";
import "./SearchBooks.css";
import BookType from "../../interfaces/BookType";

const SearchBooks = ({
  searchBooks,
  myBooks,
  onSearch,
  resetSearch,
  onMove,
}: {
  searchBooks: BookType[];
  myBooks: BookType[];
  onSearch: Function;
  resetSearch: React.MouseEventHandler<HTMLButtonElement> | any;
  onMove: Function;
}) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search" onClick={resetSearch}>
            Close
          </button>
        </Link>
        <SearchBooksInput onSearch={onSearch} />
      </div>
      <SearchResults
        searchBooks={searchBooks}
        myBooks={myBooks}
        onMove={onMove}
      />
    </div>
  );
};

export default SearchBooks;
