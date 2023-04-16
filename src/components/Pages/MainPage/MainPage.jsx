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
      
        <p text="justify">
          Perseverança, rigor, treball, constància, assiduïtat, determinació, fermesa. Aquests són alguns trets que algú ha de tenir per superar un objectiu comú: aprovar batxillerat. <br />Aquesta web, junt amb les explicacions de les comandants lingüístiques Marina Comellas i Marisa Samitier, serviran per a posar-te a prova mitjançant una sèrie d'exercicis que no t'ho posaran fàcil. En aquests, encara que de diferent manera a cada un d'ells, t'enfrontaràs a un repte autocorrectiu on se t'avaluarà competencalment.<br /> Fonètica, corregir errors, conjugació de verbs... A què estàs esperant?
          
        </p>
      </Explanation>
      <Explanation>
        <h1 className="bgtext">Objectius</h1>
        <p>
          Els objectius d'aquesta web (a part del seu adherent plus --> es broma) és incrementar la competència lingüística dels inexperts estudiants de 2n de Batxillerat del Col·legi Claver de Raïmat. <br />Això es durà a terme mitjançant la realització d'aquesta sèrie de didàctics exercicis que comprenen gran part dels àmbits treballats a classe.<br /> Aquesta coalició entre les lingüísticament poderoses professores de llengua i uns modestos estudiants es convertirà en la raó per què el Claver tornarà a ser el que era. Forma-hi part!
        </p>
        
      </Explanation>
      <Explanation>
        <h1 className="bgtext">Qui som</h1>
        <p>
          Bé, som 3 estudiants de 2n de Batxillerat que troben l'aprenentatge més resolutiu amb mètodes com l'ús de les tecnologies.<br /> En primer lloc tenim en Marcel, un adolescent amb problemes d'autocontrol i ira que presumeix de ser professor d'una escola de programació obsoleta. <br />En segon lloc, en Xavier, un alumne amb un clar trastorn narcissista que, a més a més, té un clar semblant a un pingüí.<br /> I, per últim, en Matías, un noi guapo, intel·ligent, racional, honest, autoexigent, sensible, sincer, agradable, amable, generós i perseverant, entre moltes altres qualitats, a més de ser, com no podríeu mai endevinar, qui ha escrit això. <br /> Disfruteu de la web!
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
