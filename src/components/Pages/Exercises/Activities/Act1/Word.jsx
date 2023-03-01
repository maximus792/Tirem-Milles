import styled from "styled-components";
import { useState } from "react";


function Word({ text }) {
  const [marked, setMarked] = useState(false);

  let bfsigns = "";
  let word = "";
  let afsigns = "";
  let passedWord = false;

  for (const char of text) {
    if (`,.!¡:?¿()"`.includes(char)) {
      if (passedWord) afsigns += char;
      else bfsigns += char;
    } else {
      word += char;
      passedWord = true;
    }
  }

  return (
    <Container>
      <span>{bfsigns}</span>
      <WordSpan>{word}</WordSpan>
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
