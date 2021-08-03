import React from "react";
import {
  createTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from "@material-ui/core";

import "./Header.css";
import { categories } from "../../data/category";

const Header = ({ category, setCategory, word, setWord }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  return (
    <div className="header">
      <span className="title">{word ? word : "My Dictionary"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            id="standard-basic"
            label="Search a word"
            className="search"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            label="Language"
            className="select"
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
