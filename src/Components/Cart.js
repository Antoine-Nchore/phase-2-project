import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    const text = e.target.value;
    setSearchText(text);
    onSearch(text);
  };
  return (
    <InputGroup
      className="mb-3"
      style={{ width: "50rem", marginTop: "20px", marginLeft: "30px" }}
    >
      <Form.Control
        type="search"
        placeholder="search product..."
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        value={searchText}
        onChange={handleSearch}
      />
    </InputGroup>
  );
}

export default SearchBar;
