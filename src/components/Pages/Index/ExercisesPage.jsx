import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../../Navbar";
import BookComponent from "./BookComponent";
function ExercisesPage() {
  const [clickable, setclickable] = useState(false);

  const index = [
    {
      title: "Capítol I",
      subtitle: "Troba els errors",
    },
    {
      title: "Capítol II",
      subtitle: "Troba els errors",
    },
    {
      title: "Capítol III",
      subtitle: "Troba els errors",
    },
    {
      title: "Capítol IV",
      subtitle: "Troba els errors",
    },
    {
      title: "Capítol V",
      subtitle: "Troba els errors",
    },
    {
      title: "Capítol VI",
      subtitle: "Troba els errors",
    },
    {
      title: "Capítol VII",
      subtitle: "Troba els errors",
    },
    {
      title: "Capítol VIII",
      subtitle: "Troba els errors",
    },
    {
      title: "Capítol IX",
      subtitle: "Troba els errors",
    },
  ];

  var chunkSize = 4;
  var chunkedIndex = index.reduce((resultArray, item, i) => {
    const chunkIndex = Math.floor(i / chunkSize);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);
  chunkedIndex = chunkedIndex.reverse();
  console.log(chunkedIndex);

  const handleLanguage = (e) => {
    var target = e.currentTarget;
    var targetId = e.target.parentElement.parentElement.id;

    if (targetId === "cat") {
      target.lastChild.style.transform = "translate(200%)";
      target.firstChild.style.transform = "translate(100%)";
      setclickable(true);
    } else if (targetId === "cast") {
      target.firstChild.style.transform = "translate(-200%)";
      target.lastChild.style.transform = "translate(-100%)";
      setclickable(true);
    }
  };

  return (
    <Container>
      <Navbar actualPage={"Exercises"} />
      <Main>
        <h1>Escull el teu idioma</h1>
        <BooksDiv onClick={handleLanguage}>
          <BookDiv id="cat">
            <BookComponent
              clickable={clickable}
              styles={{ transform: "scale(0.8)" }}
              data={chunkedIndex}
              tapa={"tapa.png"}
            />
          </BookDiv>
          <BookDiv id="cast">
            <BookComponent
              clickable={clickable}
              styles={{ transform: "scale(0.8)" }}
              data={chunkedIndex}
              tapa={"tapa.png"}
            />
          </BookDiv>
        </BooksDiv>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
const Main = styled.main`
  margin: 0 2rem;
  margin-top: 2rem;
  h1 {
    font-family: "Karantina";
    font-size: 4rem;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
  }
`;
const BooksDiv = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 300px) {
    display: none;
  }
`;
const BookDiv = styled.div`
  transition: all 2s;
  z-index: 5;
`;
export default ExercisesPage;
