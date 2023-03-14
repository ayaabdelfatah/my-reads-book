import { Component } from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { debounce } from "throttle-debounce";
import ListBooks from "./components/ListBooks/ListBooks";
import SearchBooks from "./components/SearchBooks/SearchBooks";
import BookType from "./interfaces/BookType";
import { Dispatch } from "redux";
import "./App.css";
import * as actions from "./store/actions/actions";

const bookshelves = [
  { key: "currentlyReading", name: "Currently Reading" },
  { key: "wantToRead", name: "Want to Read" },
  { key: "read", name: "Read" },
];

type MyState = {
  myBooks: BookType[];
  searchBooks: BookType[];
  error: boolean;
};

class BooksApp extends Component<any, MyState> {
  componentDidMount = () => {
    this.props.onInitBooks();
  };
  moveBook = (book: BookType, shelf: string) => {
    this.props.onUpdateBook(book, shelf);
  };

  searchForBooks = debounce(300, (text) => this.props.onSearchedBooks(text));

  resetSearch = () => this.props.onResetSearchedBooks();
  render() {
    const { myBooks, searchBooks, error } = this.props;
    if (error) {
      return <div>Network error. Please try again later.</div>;
    }
    return (
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <ListBooks
                bookshelves={bookshelves}
                books={myBooks}
                onMove={this.moveBook}
              />
            }
          />
          <Route
            path="/search"
            element={
              <SearchBooks
                searchBooks={searchBooks}
                myBooks={myBooks}
                onSearch={this.searchForBooks}
                onMove={this.moveBook}
                resetSearch={this.resetSearch}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = (state: MyState) => {
  return {
    myBooks: state.myBooks,
    searchBooks: state.searchBooks,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch: Dispatch | any) => {
  return {
    onUpdateBook: (book: BookType, shelf: string) =>
      dispatch(actions.updateBook(book, shelf)),
    onInitBooks: () => dispatch(actions.initBooks()),
    onResetSearchedBooks: () => dispatch(actions.resetSearchedBooks()),
    onSearchedBooks: (bookName: string) =>
      dispatch(actions.searchForBooks(bookName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksApp);
