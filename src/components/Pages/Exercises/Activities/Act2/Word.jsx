import styled from "styled-components";
import { useState, useEffect } from "react";

function Word({ text, error, errText, setmarked, correcting, showErrors }) {
  const [marked, setMarked] = useState(false);
  const [corrected, setcorrected] = useState(false);
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

  var bgcolor = "none";
  var fontbold = "normal";
  if (correcting && marked && error) {
    bgcolor = "#77DD77";
  } else if (correcting && marked && !error) {
    bgcolor = "#FF6961";
  } else {
    bgcolor = "#fff6a3b2";
  }

  useEffect(() => {
    if (correcting) {
    } else {
      if (marked && error) {
        setcorrected(true);
      } else if (marked && !error) {
        setMarked(false);
        setmarked((curr) => curr - 1);
      }
    }
  }, [correcting]);

  return (
    <Container
      onClick={(e) => {
        if (!correcting && !corrected) {
          setMarked((curr) => !curr);
          if (!marked) {
            setmarked((curr) => curr + 1);
          } else {
            setmarked((curr) => curr - 1);
          }
          if (error) console.log("ERROR");
        }
      }}
    >
      <span>{bfsigns}</span>
      <WordSpan
        className={marked ? "marked" : ""}
        onMouseEnter={(e) => {
          if (!correcting && !corrected)
            e.target.style.backgroundColor = "#fff6a3b2";
        }}
        onMouseLeave={(e) => {
          if (!correcting && !marked) e.target.style.backgroundColor = "";
        }}
        style={
          !marked && error && showErrors
            ? {textDecoration:"underline"}
            : marked && corrected
            ? { fontWeight: "bold", backgroundColor: "transparent" }
            : marked
            ? { backgroundColor: bgcolor }
            : {}
        }
      >
        {corrected ? text : word}
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
    border-radius: 2px;
    cursor: pointer;
  }
`;
