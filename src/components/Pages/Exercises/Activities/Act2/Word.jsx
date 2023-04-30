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
  let isListenerAttached = false;

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

  const enterFunction = (event) => {
    if(event.key ==="Enter") {event.preventDefault();
    if(!editing && !corrected){
      if (errText === undefined) {
        wordRef.current.innerHTML = text.replaceAll(/[^\w\sàáäèéëìíïòóöùúü·'\-«»ç]/gi, "");
        return;
      } else {
        wordRef.current.innerHTML = errText.replaceAll(/[^\w\sàáäèéëìíïòóöùúü·'\-«»ç]/gi, "");
        return;
      } 
    }}
    if (event.key === "Enter" && editing && event.target.nodeName == "SPAN") {
      console.log(wordRef.current.innerHTML);
      console.log(text);
      console.log(wordRef.current.innerHTML == text.replace(/[^\w\s]/g, ""));
      if (wordRef.current.innerHTML == text.replace(/[^\w\sÀ-ÿ']|_/g, "")) {
        setmarked((curr) => curr + 1);
        setcorrected(true);
        setediting(false);
      } else {
        console.log(text, errText);
        setediting(false);
        if (errText === undefined) {
          wordRef.current.innerHTML = text.replace(/[^\w\sÀ-ÿ']|_/g, "");
          return;
        } else {
          wordRef.current.innerHTML = errText.replace(/[^\w\sÀ-ÿ']|_/g, "");
          return;
        }
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", enterFunction, false);

    return () => {
      document.removeEventListener("keydown", enterFunction, false);
    };
  }, [enterFunction]);
  /*   document.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && editing && event.target.nodeName == "SPAN") {
      event.preventDefault();
      console.log(wordRef.current.innerHTML);
      console.log(text);
      console.log(wordRef.current.innerHTML == text.replace(/[^\w\s]/g, ""));
      if (wordRef.current.innerHTML == text.replace(/[^\w\sÀ-ÿ']|_/g, "")) {
        setmarked((curr) => curr + 1);
        setcorrected(true);
        setediting(false)
      } else {
        console.log(text, errText) ;
        setediting(false)
        if (errText === undefined)
          wordRef.current.innerHTML = text.replace(/[^\w\sÀ-ÿ']|_/g, "");
        else wordRef.current.innerHTML = errText.replace(/[^\w\sÀ-ÿ']|_/g, "");
      }
    }
  }); */

  return (
    <Container>
      <span>{bfsigns}</span>
      <WordSpan
        onFocus={() => {
          console.log(text);
          setediting(true);
        }}
        onClick={() => {
          setediting(true);
        }}
        contentEditable={!corrected}
        suppressContentEditableWarning={true}
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
