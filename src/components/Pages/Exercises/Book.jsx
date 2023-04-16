import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import React, { Children } from "react";
import styled from "styled-components";

function Book({ chapter, title, subtitle, children, errnum, setcorrecting,correcting, marked, language, exercisenum, setshowErrors, showErrors  }) {
  function changeExercise() {
    window.location.href = `/exercises/${parseInt(exercisenum) + 1}/${language}`;
  }
  function changePrevExercise() {
    window.location.href = `/exercises/${parseInt(exercisenum) - 1}/${language}`;
  }
  function help(){
    if(exercisenum == 1){
      setshowErrors((curr)=>!curr)
    }
  }
  return (
    <Container>
      {/* <h1>
        Capítol{" "}
        <span style={{ fontFamily: "JetBrains Mono" }}>
          {romanize(chapter)}
        </span>
      </h1> */}
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      {children}
      <BookButtons>
        <FirstPageButtons>
        {exercisenum!=1?<PageButton onClick={changePrevExercise}><b>&larr;</b>Enrere</PageButton>:""}
          <PageButton onClick={help}>{showErrors?"Amagar errors":"Ajuda"}</PageButton>
          <PageButton onClick={()=>{setcorrecting((curr)=>!curr)}}>{correcting?"Tornar a intentar":"Corregir"}</PageButton>
        </FirstPageButtons>
        <SecondPageButtons style={exercisenum!=1?{justifyContent:"flex-end"}:{}}>
          {exercisenum==1?<PageButton >ERRORS: {marked}/{errnum}</PageButton>:""}
          <PageButton onClick={changeExercise} >Següent <b>&rarr;</b></PageButton>
        </SecondPageButtons>
      </BookButtons>
    </Container>
  );
}

function romanize(num) {
  if (isNaN(num)) return NaN;
  var digits = String(+num).split(""),
    key = [
      "",
      "C",
      "CC",
      "CCC",
      "CD",
      "D",
      "DC",
      "DCC",
      "DCCC",
      "CM",
      "",
      "X",
      "XX",
      "XXX",
      "XL",
      "L",
      "LX",
      "LXX",
      "LXXX",
      "XC",
      "",
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX",
    ],
    roman = "",
    i = 3;
  while (i--) roman = (key[+digits.pop() + i * 10] || "") + roman;
  return Array(+digits.join("") + 1).join("M") + roman;
}

export default Book;

const Container = styled.div`
  padding: 2rem;
  background-color: white;
  width: 75vw;
  height: 700px;
  border: 1px solid #000;
  border-radius: 10px;

  @media (max-height: 900px){
    height: 85vh;
    width: 65vw;
  }

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  overflow: hidden;

  -webkit-box-shadow: inset -27px 2px 13px -25px rgba(0, 0, 0, 0.81);
  box-shadow: inset -27px 2px 13px -25px rgba(0, 0, 0, 0.81);

  &:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    width: 11px;

    height: 100%;
    background: rgba(
      205,
      205,
      205,
      0.3
    ); /* 
    -webkit-box-shadow: 0px 0px 10px 10px #cdcdcd;
    box-shadow: 0px 0px 10px 10px #cdcdcd; */
  }

  h1,
  h2 {
    font-family: "Jockey One";
    letter-spacing: 2px;
  }
  h1 {
    text-transform: uppercase;
  }
`;

const BookButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;  
  align-items: center;
`;

const FirstPageButtons = styled.div`
  border-top: 1px solid #000;
  display: flex;
  justify-content: space-between;
  width: 45%;
  height: 100%;
  padding-top: 1vh;
`;
const SecondPageButtons = styled.div`
  border-top: 1px solid #000;
  display: flex;
  justify-content: space-between;
  width: 45%;
  padding-top: 1vh;
`;

const PageButton = styled.p`
  font-family: "Jockey One";
  font-size: 1.5rem;
  letter-spacing: 2px;
  cursor: pointer;
  user-select: none;
`;
