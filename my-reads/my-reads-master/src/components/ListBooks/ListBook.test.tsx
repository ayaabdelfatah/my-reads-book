import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import ListBooks from "./ListBooks";
import Bookshelf from "./Bookshelf/Bookshelf";

configure({ adapter: new Adapter() });

describe("<ListBook />", () => {
  let wrapper: React.Component | any;
  const bookshelves = [
    { key: "currentlyReading", name: "Currently Reading" },
    { key: "wantToRead", name: "Want to Read" },
    { key: "read", name: "Read" },
  ];
  beforeEach(() => {
    wrapper = shallow(
      <ListBooks books={[]} bookshelves={bookshelves} onMove={() => {}} />
    ) as React.Component | any;
  });
  it("component should have 3 book shelves", () => {
    expect(wrapper.find(Bookshelf)).toHaveLength(3);
  });
});
