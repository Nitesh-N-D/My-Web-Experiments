import { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";

function SearchBar({ onSearch }) {

  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    onSearch(keyword);
  };

  return (
    <Stack direction="row" spacing={2} sx={{ mb: 3 }}>

      <TextField
        label="Search Tasks"
        variant="outlined"
        fullWidth
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <Button
        variant="contained"
        onClick={handleSearch}
      >
        Search
      </Button>

    </Stack>
  );
}

export default SearchBar;