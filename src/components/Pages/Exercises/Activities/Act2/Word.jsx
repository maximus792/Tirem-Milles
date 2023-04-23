import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

function Word({
  text,
  error,
  errText,
  setmarked,
  correcting,
  showErrors,
  seterrnum,
}) {
  const [marked, setMarked] = useState(false);
  const [corrected, setcorrected] = useState(false);
  const [editing, setediting] = useState(false);
  let bfsigns = "";
  let word = "";
  let afsigns = "";
  let passedWord = false;
  const wordRef = useRef();

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



  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && editing) {
      event.preventDefault();
      console.log(event.target.innerHTML);
      console.log(text);
      console.log(event.target.innerHTML == text.replace(/[^\w\s]/g, ""));
      if (event.target.innerHTML == text.replace(/[^\w\sÀ-ÿ'-]|_/g, "")) {
        setmarked((curr) => curr + 1);
        setcorrected(true);
      }
    }
  });

  return (
    <Container>
      <span>{bfsigns}</span>
      <WordSpan
        onClick={() => {
          setediting(true);
        }}
        contentEditable={!corrected}
        ref={wordRef}
        className={marked ? "marked" : ""}
        style={
          error && showErrors && !corrected
            ? { textDecoration: "underline" }
            : corrected && error
            ? { fontWeight: "bold", backgroundColor: "transparent" }
            : {}
        }
      >
        {corrected ? text.replace(/[^\w\sÀ-ÿ'-]|_/g, "") : word}
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
  outline: 0px solid transparent;
`;
