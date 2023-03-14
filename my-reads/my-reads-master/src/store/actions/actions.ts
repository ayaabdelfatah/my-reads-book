import { Dispatch } from "redux";
import BookType from "../../interfaces/BookType";
import * as actionTypes from "./actionTypes";
import * as BooksAPI from "../../BooksAPI";

export const setBooks = (books: BookType[]) => {
  return {
    type: actionTypes.SET_BOOKS,
    myBooks: books,
  };
};

export const setSearchedBooks = (books: BookType[]) => {
  return {
    type: actionTypes.SEARCH_FOR_BOOK,
    searchBooks: books,
  };
};

export const fetchBooksFailed = () => {
  return {
    type: actionTypes.FETCH_BOOKS_FAILED,
  };
};

export const removeBook = (id: string) => {
  return {
    type: actionTypes.REMOVE_BOOK,
    bookId: id,
  };
};

export const moveBook = (book: BookType, shelf: string) => {
  return {
    type: actionTypes.MOVE_BOOK,
    book: book,
    shelf: shelf,
  };
};

export const initBooks = () => {
  return (dispatch: Dispatch) => {
    BooksAPI.getAll()
      .then((books: BookType[]) => {
        dispatch(setBooks(books));
      })
      .catch((err: string) => {
        console.log(err);
        dispatch(fetchBooksFailed());
      });
  };
};

export const updateBook = (book: BookType, shelf: string) => {
  return (dispatch: Dispatch) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        if (shelf === "none") {
          dispatch(removeBook(book.id));
        } else {
          dispatch(moveBook(book, shelf));
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchBooksFailed());
      });
  };
};

export const searchForBooks = (bookName: string) => {
  return (dispatch: Dispatch) => {
    if (bookName.length) {
      BooksAPI.search(bookName, null).then((books) => {
        if (books.error) {
          dispatch(resetSearchedBooks());
        } else {
          dispatch(setSearchedBooks(books));
        }
      });
    } else {
      dispatch(resetSearchedBooks());
    }
  };
};

export const resetSearchedBooks = () => {
  return {
    type: actionTypes.RESET_SEARCH_BOOKS,
  };
};
