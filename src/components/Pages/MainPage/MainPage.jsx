import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import Navbar from "../../Navbar";
import StartButton from "./StartButton";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function MainPage() {
  return (
    <Container>
      <Navbar actualPage={"Inici"} />
      <MainInfo>
        <Titles>
          <SupTitle>Una web d'alumnes per a alumnes</SupTitle>
          <MainTitle>Tirem Milles</MainTitle>
          <p>
            A continuació t’oferim una serie d’exercicis interactius <br /> per
            tal de practicar els continguts explicats per les <br />
            TIETES DE LLENGUA
          </p>
        </Titles>
        <BookDiv>
          <Book src="images/llibre.png" />
          <div className="shadow"></div>
        </BookDiv>
        <AngleDownIcon />
      </MainInfo>

      {/*  */}

      <Explanation id="first-explanation">
        <h1 className="bgtext">Com funciona</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
          blandit nibh. Cras sed rhoncus nibh. Nullam quis magna justo. Sed
          pharetra commodo diam, id semper massa. In lacinia, quam convallis
          euismod auctor, orci odio tincidunt sapien, eget scelerisque odio dui
          a lacus. Etiam vitae eleifend ante. Integer semper faucibus viverra.
          Curabitur tempus purus vitae est tincidunt malesuada.
        </p>
        <p>
          Duis mollis mollis neque, in tempus leo luctus sit amet. Suspendisse
          malesuada mollis enim, at commodo lacus mollis et. Maecenas feugiat
          lectus ac felis tristique, et pulvinar odio pretium. Cras ullamcorper
          vel felis id auctor. Phasellus efficitur sapien orci, in sagittis erat
          vulputate nec. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Suspendisse potenti.
        </p>
      </Explanation>
      <Explanation>
        <h1 className="bgtext">Objectius</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
          blandit nibh. Cras sed rhoncus nibh. Nullam quis magna justo. Sed
          pharetra commodo diam, id semper massa. In lacinia, quam convallis
          euismod auctor, orci odio tincidunt sapien, eget scelerisque odio dui
          a lacus. Etiam vitae eleifend ante. Integer semper faucibus viverra.
          Curabitur tempus purus vitae est tincidunt malesuada.
        </p>
        <p>
          Duis mollis mollis neque, in tempus leo luctus sit amet. Suspendisse
          malesuada mollis enim, at commodo lacus mollis et. Maecenas feugiat
          lectus ac felis tristique, et pulvinar odio pretium. Cras ullamcorper
          vel felis id auctor. Phasellus efficitur sapien orci, in sagittis erat
          vulputate nec. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Suspendisse potenti.
        </p>
      </Explanation>
      <Explanation>
        <h1 className="bgtext">Qui som</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
          blandit nibh. Cras sed rhoncus nibh. Nullam quis magna justo. Sed
          pharetra commodo diam, id semper massa. In lacinia, quam convallis
          euismod auctor, orci odio tincidunt sapien, eget scelerisque odio dui
          a lacus. Etiam vitae eleifend ante. Integer semper faucibus viverra.
          Curabitur tempus purus vitae est tincidunt malesuada.
        </p>
        <p>
          Duis mollis mollis neque, in tempus leo luctus sit amet. Suspendisse
          malesuada mollis enim, at commodo lacus mollis et. Maecenas feugiat
          lectus ac felis tristique, et pulvinar odio pretium. Cras ullamcorper
          vel felis id auctor. Phasellus efficitur sapien orci, in sagittis erat
          vulputate nec. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Suspendisse potenti.
        </p>
      </Explanation>
      <StartButton />
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
`;

const AngleDownIcon = () => {
  return (
    <a href="#first-explanation">
      <FontAwesomeIcon
        icon={faAngleDown}
        style={{
          color: "white",
          position: "absolute",
          bottom: "10px",
          left: "50vw",
          fontSize: "5rem",
          animation: "updown 1s Infinite ease-in-out",
        }}
      />
    </a>
  );
};
const MainInfo = styled.div`
  height: calc(100% - 5vw);
  background: rgb(244, 81, 45);
  background: linear-gradient(
    180deg,
    rgba(244, 81, 45, 1) 0%,
    rgba(245, 161, 34, 1) 100%
  );

  display: flex;
  align-items: center;
  padding: 0 5rem;

  h1,
  p {
    color: white;
    text-align: center;
  }
  p {
    font-family: "Josefin Sans", sans-serif;
    font-size: 1.5vw;
    margin: 0 4rem;
  }
`;

const MainTitle = styled.h1`
  font-family: "Karantina", sans-serif;
  font-size: 7.5vw;
  letter-spacing: 5px;
  text-transform: uppercase;
`;

const SupTitle = styled.p``;
const Titles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 70%;
`;
const Book = styled.img`
  width: 100%;
  height: 100%;
  animation: updown 3s Infinite ease-in-out;
`;
const BookDiv = styled.div`
  width: 30%;
  position: relative;

  .shadow {
    position: absolute;
    height: 30px;
    bottom: -5px;
    left: 30px;
    right: 50px;
    background: rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    filter: blur(8px);
  }
`;

const Explanation = styled.div`
  padding: 2rem 20% 2rem 20%;
  width: 100%;

  h1 {
    text-transform: uppercase;
    font-family: "Karantina";
    font-size: 6rem;
    padding-bottom: 1rem;
  }

  p {
    padding-bottom: 2rem;
  }
`;

export default MainPage;
