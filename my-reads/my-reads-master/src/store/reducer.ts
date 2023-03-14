import * as actionTypes from "./actions/actionTypes";

import BookType from "../interfaces/BookType";
import { updateObject } from "./utility";
import { AnyAction } from "@reduxjs/toolkit";
const initialState = {
  myBooks: [],
  searchBooks: [],
  error: false,
};

const reducer = (state = initialState, action: AnyAction) => {  
  switch (action.type) {
    case actionTypes.SET_BOOKS:
      return updateObject(state, { myBooks: action.myBooks });
    case actionTypes.SEARCH_FOR_BOOK:
      return updateObject(state, { searchBooks: action.searchBooks });
    case actionTypes.FETCH_BOOKS_FAILED:
      return updateObject(state, { error: true });
    case actionTypes.MOVE_BOOK:
      action.book.shelf = action.shelf;
      return updateObject(state, {
        myBooks: state.myBooks
          .filter((b: BookType) => b.id !== action.book.id)
          .concat(action.book),
      });
    case actionTypes.REMOVE_BOOK:
      return updateObject(state, {
        myBooks: state.myBooks.filter((b: BookType) => b.id !== action.bookId),
      });
    case actionTypes.RESET_SEARCH_BOOKS:
      return updateObject(state, { searchBooks: [] });

    default:
      return state;
  }
};

export default reducer;
