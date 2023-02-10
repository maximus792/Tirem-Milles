import React from "react";
import styled from "styled-components";

function Navbar({ actualPage }) {
  return (
    <Container>
      <Nav>
        <div>
          <a onClick={function(){
            window.location.href='https://pbs.twimg.com/profile_images/3171852749/7f4a67f61cef53a5da1eeca0bb0966a2_400x400.jpeg';
          }} style={{fontSize: "30px"}}>Tirem Milles</a>
        </div>
        <Pages>
          <a style={{ opacity: actualPage == "Inici" ? 1 : 0.5 }}>Inici</a>
          <a style={{ opacity: actualPage == "Exercicis" ? 1 : 0.5 }}>
            Exercicis
          </a>
        </Pages>
      </Nav>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 1vh;
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
  }
  a:hover{
    opacity: 1!important;
  }
`;

export default Navbar;


