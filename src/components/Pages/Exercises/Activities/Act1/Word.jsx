import styled from "styled-components";
import { useState, useContext } from "react";

function Word({ text, error, errText, setmarked }) {
  const [marked, setMarked] = useState(false);
  let bfsigns = "";
  let word = "";
  let afsigns = "";
  let passedWord = false;

  if (error) {
    for (const char of errText) {
      if (`,.!¡:?¿()"`.includes(char)) {
        if (passedWord) afsigns += char;
        else bfsigns += char;
      } else {
        word += char;
        passedWord = true;
      }
    }
  } else {
    for (const char of text) {
      if (`,.!¡:?¿()"`.includes(char)) {
        if (passedWord) afsigns += char;
        else bfsigns += char;
      } else {
        word += char;
        passedWord = true;
      }
    }
  }

  return (
    <Container
      onClick={(e) => {
        setMarked((curr) => !curr);
        if (!marked) {
          setmarked((curr) => curr + 1);
        } else {
          setmarked((curr) => curr - 1);
        }
        if (error) console.log("ERROR");
      }}
    >
      <span>{bfsigns}</span>
      <WordSpan
        className={marked ? "marked" : ""}
        style={marked ? { backgroundColor: "#fff6a3b2" } : {}}
      >
        {word}
      </WordSpan>
      <span>{afsigns}</span>
    </Container>
  );
}

export default Word;

const Container = styled.span`
  padding: 0 0.2rem;
  user-select: none;
`;

const WordSpan = styled.span`
  &:hover {
    background-color: #fff6a3b2;
    border-radius: 2px;
    cursor: pointer;
  }
`;
