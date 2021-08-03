import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Container } from "@material-ui/core";
import Header from "./components/Header/Header";

const App = () => {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const dictionaryApi = async () => {
    try {
      const { data } = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/plane"
      );
      setMeanings(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    dictionaryApi();
  }, []);
  return (
    <div
      style={{ height: "100vh", backgroundColor: "#282c34", color: "#ffffff" }}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
      </Container>
    </div>
  );
};

export default App;
