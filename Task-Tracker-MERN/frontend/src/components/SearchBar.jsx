import { useState, useEffect } from "react";
import { TextField } from "@mui/material";

function SearchBar({ onSearch }) {

  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      onSearch(keyword);
    }, 300); // delay for smooth typing

    return () => clearTimeout(delaySearch);

  }, [keyword]);

  return (
    <TextField
      label="Search Tasks"
      variant="outlined"
      fullWidth
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      sx={{ mb: 3 }}
    />
  );
}

export default SearchBar;
