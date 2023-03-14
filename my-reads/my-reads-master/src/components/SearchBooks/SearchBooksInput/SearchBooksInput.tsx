import React from "react";
import "./SearchBooksInput.css";

const SearchBooksInput = ({onSearch}: {onSearch: Function}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    onSearch(val);
  };

  return (
    <div className="search-books-input-wrapper">
      <input
        type="text"
        placeholder="Search by title or author"
        onInput={handleChange}
        autoFocus
      />
    </div>
  );
};

export default SearchBooksInput;
