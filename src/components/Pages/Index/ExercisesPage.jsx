import React, { useState, useRef } from "react";
import styled from "styled-components";
import Navbar from "../../Navbar";
import BookComponent from "./BookComponent";
import getIndex from "./indexes";
function ExercisesPage() {
  const [clickable, setclickable] = useState(false);
  const [lang, setlang] = useState("cat");
  var index = getIndex(lang);

  var chunkSize = 5;
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
    console.log(targetId);
    setlang(targetId);

    if (targetId === "cat") {
      target.lastChild.style.transform = "translate(200%)";
      target.firstChild.style.transform = "translate(100%)";
      marisaRef.current.style.bottom = "70px";
      marinaRef.current.style.bottom = "-50%";
      fightRef.current.style.opacity = "0";
      setclickable(true);
    } else if (targetId === "cast") {
      target.firstChild.style.transform = "translate(-200%)";
      target.lastChild.style.transform = "translate(-100%)";
      marisaRef.current.style.bottom = "-50%";
      marinaRef.current.style.bottom = "40px";
      fightRef.current.style.opacity = "0";
      setclickable(true);
    } else if (targetId === "main") {
      setclickable(false);
      target.firstChild.style.transform = "translate(0%)";
      target.lastChild.style.transform = "translate(0%)";
      marisaRef.current.style.bottom = "-50%";
      marinaRef.current.style.bottom = "-50%";
      fightRef.current.style.opacity = "1";
      
    }
  };


  var marisaRef = useRef()
  var marinaRef = useRef()
  var fightRef = useRef()
  return (
    <Container id="main">
      <Navbar actualPage={"Exercises"} />
      <Main>
        <h1>Escull el teu idioma</h1>
        <BooksDiv onClick={handleLanguage}>
          <BookDiv id="cat" 
              onMouseEnter={()=>{
                console.log("ep");
                
              }}>
            <BookComponent
              clickable={clickable}
              styles={{ transform: "scale(0.8)" }}
              data={chunkedIndex}
              tapa={"tapaCat.png"}
            />
          </BookDiv>
          <BookDiv id="cast">
            <BookComponent
              clickable={clickable}
              styles={{ transform: "scale(0.8)" }}
              data={chunkedIndex}
              tapa={"tapaCast.png"}
            />
          </BookDiv>
        </BooksDiv>
        <Marisaimg id="marisaImage" ref={marisaRef} src="images/marisa.png" alt="" srcset="" />
        <Marinaimg id="marinaImage" ref={marinaRef} src="images/marina.png" alt="" srcset="" />
        <FightImg id="fightImage" ref={fightRef} src="images/fight.png" alt="" srcset="" />
      </Main>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;
const Main = styled.main`
  margin: 0 2rem;
  margin-top: 2rem;
  height: 100%;
  position: relative;
  h1 {
    font-family: "Karantina";
    font-size: 4rem;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
  }
  
`;
const BooksDiv = styled.div`
  margin-top: 3rem;
  height: 100%;
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

const Marisaimg = styled.img`
position: absolute;
right: -30px;
bottom: -50%;
transform: rotate(-10deg);
transition: all 1s ease-in-out;
`
const Marinaimg = styled.img`
position: absolute;
left: -30px;
bottom: -50%;
transform: rotate(10deg);
transition: all 1s ease-in-out;
`
const FightImg = styled.img`
position: absolute;
left: 50%;
bottom: 25%;
transform: translate(-50%,-50%);
width: 30vh;
transition: all 1s ease-in-out;
`

export default ExercisesPage;
