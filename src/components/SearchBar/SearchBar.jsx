import React, { useState } from "react";
import "./SerachBar.scss";
import SearchIcon from "@mui/icons-material/Search";
import Input from "../Input/Input";
const SearchBar = () => {
  const [userSearchInput, setuserSearchInput] = useState("");

  const handleSearchInput = (e) => {
    const input = e.target.value;
    setuserSearchInput(input);
  };
  return (
    <div className="SearchBar">
      <div className="SearchBar--Icon">
        <SearchIcon fontSize="large" />
      </div>
      <div className="SearchBar--Input">
        <Input
          style={customSearchBoxStyle}
          type="text"
          value={userSearchInput}
          onChange={handleSearchInput}
          placeholder="Spam Mail Project"
        />
      </div>
      <div className="SearchBar--SortAction"></div>
    </div>
  );
};

export default SearchBar;

const customSearchBoxStyle = {
  width: "100%",
  height: "100%",
  border: "none",
  outline: "none",
};
