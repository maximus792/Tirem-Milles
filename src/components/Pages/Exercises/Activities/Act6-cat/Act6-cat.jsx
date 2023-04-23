import React, { useState } from "react";
import styled from "styled-components";

const dataCAT = [
  "La nit es fa vella, el temps es fa lent, la vida es fa curta.",
];

function Lletra({ key, children, assim, son, correcting, typeAct6 }) {
  const [selected, setselected] = useState(false);
  const [type, settype] = useState(0);
  const [error, seterror] = useState(false);
  /* 1 assim 0 son */

/*   if (correcting && selected) {
    seterror((assim && !type) || (!assim && type) || (son && !type) || (!son && type))
  } */

  return (
    <LletraStyle
      style={
        correcting&&selected&&!((assim && type) || (son && type))
          ? { backgroundColor: "red" }
          : selected && type
          ? {
              backgroundColor: "#FDFD96",
            }
          : selected && !type
          ? { backgroundColor: "#77DD77" }
          : {}
      }
      onClick={(e) => {
        settype(typeAct6);
        setselected((curr) => !curr);
      }}
    >
      {children}
    </LletraStyle>
  );
}

function Act6Cat({ correcting, language, typeAct6 }) {
  const [text, setText] = useState(
    dataCAT[Math.floor(Math.random() * dataCAT.length)]
  );
  var assim, son;

  return (
    <Component>
      <Text>
        {text.split("").map((lletra, i) => {
          if ("ptcfxs".includes(lletra) &&  text.split("")[i+1] == " " && "a".includes(text.split("")[i + 2]))
            son = true;
          return (
            <Lletra
              typeAct6={typeAct6}
              key={i}
              correcting={correcting}
              assim={assim}
              son={son}
            >
              {lletra}
            </Lletra>
          );
        })}
      </Text>
    </Component>
  );
}

const Component = styled.div`
  margin-top: 1.4rem;
  margin-bottom: 1.4rem;
  margin-left: 1.5rem;
  width: 30vw;
  @media (min-width: 1100px) {
    margin-left: 3rem;
    width: 30vw;
  }
  @media (max-width: 700px) {
    margin-left: 1rem;
    width: 20vw;
  }

  .correct-answ {
    color: green;
  }

  .wrong-answ {
    color: red;
  }

  input {
    margin-right: 0.5rem;
  }
  label {
    transition: all 150ms ease;
    margin-right: 1rem;
  }
  .options-component {
    margin-top: 0.4rem;
  }
`;

const Text = styled.div``;
const LletraStyle = styled.span`
  margin: 0 0.03rem;
  cursor: pointer;
  font-size: 1.4rem;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;

export default Act6Cat;
