import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import React, { Children } from "react";
import styled from "styled-components";
import ChangeLangButton from "./ChangeLangButton";
import ReloadButton from "./ReloadButton";

function Book({
  chapter,
  title,
  subtitle,
  children,
  errnum,
  setcorrecting,
  correcting,
  marked,
  language,
  exercisenum,
  setshowErrors,
  showErrors,
}) {
  function changeExercise() {
    window.location.href = `/exercises/${
      parseInt(exercisenum) + 1
    }/${language}`;
  }
  function changePrevExercise() {
    window.location.href = `/exercises/${
      parseInt(exercisenum) - 1
    }/${language}`;
  }
  function help() {
    if (exercisenum == 1 || exercisenum == 2) {
      setshowErrors((curr) => !curr);
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
      <TitleComponent>
        <div>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>

        <ToolsContainer>
          <ReloadButton />
          <ChangeLangButton language={language} />
        </ToolsContainer>
      </TitleComponent>

      {children}
      <BookButtons>
        <FirstPageButtons>
          {exercisenum != 1 ? (
            <PageButton onClick={changePrevExercise}>
              <b>&larr;</b>
              {language == "cat" ? "Enrere" : "Atrás"}
            </PageButton>
          ) : (
            ""
          )}
          <PageButton onClick={help}>
            {language == "cat"
              ? showErrors
                ? "Amagar errors"
                : "Ajuda"
              : showErrors
              ? "Esconder errores"
              : "Ayuda"}
          </PageButton>
          <PageButton
            style={exercisenum == 2 ? { display: "none" } : {}}
            onClick={() => {
              setcorrecting((curr) => !curr);
            }}
          >
            {language == "cat"
              ? correcting
                ? "Tornar a intentar"
                : "Corregir"
              : correcting
              ? "Volver a intentar"
              : "Corregir"}
          </PageButton>
        </FirstPageButtons>
        <SecondPageButtons
          style={
            exercisenum != 1 && exercisenum != 2
              ? { justifyContent: "flex-end" }
              : {}
          }
        >
          {exercisenum == 1 || exercisenum == 2 ? (
            <PageButton>
              {language == "cat" ? "ERRORS" : "ERRORES"}: {marked}/{errnum}
            </PageButton>
          ) : (
            ""
          )}
          <PageButton onClick={changeExercise}>
            {language == "cat" ? "Següent" : "Siguiente"} <b>&rarr;</b>
          </PageButton>
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
  width: 85vw;
  height: 90%;
  border: 1px solid #000;
  border-radius: 10px;

  @media (max-height: 900px) {
    height: 85vh;
    width: 65vw;
  }
  @media (min-width: 700px) {
    width: 85vw;
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
  margin: -1rem 0;
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

const TitleComponent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ToolsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > * {
    margin: 0 0.5rem;
    margin-top: -1.8rem;

}
`;
