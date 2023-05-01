import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function StartButton() {
  const Icon = () => {
    return (
      <FontAwesomeIcon
        icon={faArrowRightLong}
        style={{
          color: "black",
          textAlign: "center",
          fontSize: ".7em",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      />
    );
  };
  return (
    <Container>
      <Link to="/exercises">Començar {/* <Icon /> */}</Link>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
  a {
    text-transform: uppercase;
    font-family: "Karantina";
    cursor: pointer;
    position: relative;
    text-align: center;
    display: inline-block;
    font-size: 4rem;
    font-weight: 800;
    color: black;
    overflow: hidden;

    /* background: linear-gradient(to right, midnightblue, midnightblue 50%, royalblue 50%); */
    background: rgb(244, 81, 45);
    background: linear-gradient(
      90deg,
      rgba(244, 81, 45, 1) 0%,
      rgba(245, 161, 34, 1) 50%,
      rgba(0, 0, 0, 1) 49%,
      rgba(0, 0, 0, 1) 100%
    );

    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    background-position: 100%;

    transition: background-position 275ms ease;
  }

  a:hover {
    background-position: 0 100%;
  }
`;
/* 
const Container = styled.div`
  a {
    transition: all 1s ease-in-out;
    text-transform: uppercase;
    font-family: "Karantina", "sans-serif";
    font-size: 10rem;
  }

  a:hover {

    transform: rotate(360deg);


    background: -webkit-linear-gradient(
      180deg,
      rgba(244, 81, 45, 1) 0%,
      rgba(245, 161, 34, 1) 100%
    );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }
`; */

export default StartButton;
