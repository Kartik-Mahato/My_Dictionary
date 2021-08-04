import React from "react";

import "./Definition.css";

const Definition = ({ word, category, meanings, lightMode }) => {
  // console.log(meanings[0]?.phonetics[0]?.audio);

  return (
    <div className="meanings">
      {meanings[0] && word && category === "en" && (
        <audio
          style={{
            borderRadius: "10px",
            width: "100%",
          }}
          src={meanings[0]?.phonetics[0]?.audio}
          controls
        >
          Your browser doesn't support audio element
        </audio>
      )}
      {word === "" ? (
        <span className="subTitle">Start by typing a word...</span>
      ) : (
        meanings.map((meaning) =>
          meaning.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMeaning"
                style={{
                  background: lightMode ? "#3b5360" : "white",
                  color: lightMode ? "#fff" : "black",
                }}
              >
                <b>{def.definition}</b>
                <hr
                  style={{
                    backgroundColor: lightMode ? "#fff" : "black",
                    width: "100%",
                  }}
                />
                <br />
                {def.example && (
                  <span>
                    <b>Example(s): </b>
                    {def.example}
                  </span>
                )}
                <br />
                {def.synonyms && (
                  <span>
                    <b>Synonym(s): </b>
                    {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definition;
