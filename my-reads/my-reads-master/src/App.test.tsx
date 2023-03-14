import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import App from "./App";
import Bookshelf from "./components/ListBooks/Bookshelf/Bookshelf";
import Book from "./components/Book/Book";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./store/reducer";

configure({ adapter: new Adapter() });

describe("<App />", () => {
  let wrapper: React.Component | any;

  beforeEach(() => {
    const store = configureStore({
      reducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          immutableCheck: false,
          serializableCheck: false,
        }),
    });
    wrapper = shallow(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
  });

  it("should not render <Bookshelf /> or <Book /> when not receiving Books", () => {
    
    wrapper.setProps({
      myBooks: [],
      searchBooks: [],
    });

    expect(wrapper.find(Bookshelf)).toHaveLength(0);
    expect(wrapper.find(Book)).toHaveLength(0);
  });
});
