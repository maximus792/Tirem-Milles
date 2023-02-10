import React from 'react'
import styled from 'styled-components';
import Navbar from '../../Navbar'

function ExercisesPage() {
  return (
    <Container>
       <Navbar actualPage={"Exercises"} />
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  
`;

export default ExercisesPage