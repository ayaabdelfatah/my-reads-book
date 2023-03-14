import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import SearchBooksInput from "./SearchBooksInput/SearchBooksInput";

configure({ adapter: new Adapter() });

describe("<SearchBooks />", () => {
  it('should call onChange prop with input search value', () => {
    const onSearch = jest.fn();
    const SearchBooksInputEl = shallow(<SearchBooksInput onSearch={onSearch} />)
    const event = {
      preventDefault() {},
      target: { value: 'test-value' }
    };
    SearchBooksInputEl.find('input').simulate('input', event);
    expect(onSearch).toBeCalledWith('test-value');
  });
})