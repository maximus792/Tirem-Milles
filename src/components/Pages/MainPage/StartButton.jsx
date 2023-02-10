import styled from "styled-components";

function StartButton() {
  return (
    <Container>
      <a>Comença</a>
    </Container>
  );
}

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
`;

export default StartButton;
