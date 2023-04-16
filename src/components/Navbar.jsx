import React from "react";
import styled from "styled-components";

function Navbar({ actualPage }) {
  return (
    <Container>
      <Nav>
        <div>
          <a onClick={function(){
            window.location.href='#';
          }} style={{fontSize: "30px", userSelect:"none"}}>Tirem Milles</a>
        </div>
        <Pages>
          <a href="/" style={{ opacity: actualPage == "Inici" ? 1 : 0.5, userSelect:"none" }}>Inici</a>
          <a href="/exercises" style={{ opacity: actualPage == "Exercises" ? 1 : 0.5,userSelect:"none" }}>
            Exercicis
          </a>
        </Pages>
      </Nav>
    </Container>
  );
}

const Container = styled.div`
/*   padding-top: 1vh; */
  letter-spacing: 4px;
  font-family: "Jockey One";
  text-transform: uppercase;
  font-size: 30px;
  height: 5vw;
  background: linear-gradient(180deg, #ff0f00 0%, #f4512d 100%);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  a{
    cursor: pointer;
  }
`;

const Nav = styled.nav`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const Pages = styled.div`
    font-size: 25px;
  a {
    transition: all 1s;
    margin-right: 30px;
    color: white;
    text-decoration: none;
  }
  a:hover{
    opacity: 1!important;
  }
`;

export default Navbar;


