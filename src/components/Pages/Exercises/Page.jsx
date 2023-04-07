import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useIsOverflow } from "../../IsOverflow";
import Navbar from "./../../Navbar";
import Book from "./Book";
import "./Bookstyles.css";
import getData from "./Activities/Act1/getData";

function Page({ chapter, activity }) {
  const [title, settitle] = useState("Capítol I");
  const [subtitle, setsubtitle] = useState("Troba els errors");
  const [marked, setmarked] = useState(0);
  const [errnum, seterrnum] = useState(0);
  /*   const [data, setdata] = useState(activity); */
  var data = activity;

  const [numParagrafs, setnumParagrafs] = useState(data.length);

  const [correcting, setcorrecting] = useState(false);
  const textbox = useRef();
  const bookRef = useRef();

  useEffect(() => {
    console.log(marked);
  }, [marked]);

  useIsOverflow(textbox, (isOverflow) => {
    if (isOverflow) {
      textbox.current.style.opacity = "0";
      setnumParagrafs((curr) => curr - 1);
    } else {
      textbox.current.style.opacity = "1";
    }
    console.log(
      `OFFSET: ${bookRef.current.offsetWidth}; overflow: ${isOverflow}`
    );
  });

  data = data.slice(0, numParagrafs);
const paragrafs=getData()
  return (
    <div>
      {/*<ErrorContext.Provider value={{/* Nombre derrors totals, nombre de coses marcades, s'esta corretgint? totalErrors: false, markedWords: 0, correcting: false}}>*/}
      <Navbar actualPage={"Exercises"} />
      <Container ref={bookRef}>
        <Book chapter={chapter} subtitle={subtitle} marked={marked} errnum={errnum}>
          <div
            className="textbox"
            ref={textbox}
            marked={marked}
            style={{ opacity: "0" }}
          >
            {data.slice(0, numParagrafs).map((element, i) => {
              return React.cloneElement(element, { setmarked: setmarked, seterrnum:seterrnum, data:paragrafs.slice(i,i+3) });
            })}
          </div>
        </Book>
      </Container>
    </div> //</ErrorContext.Provider>
  );
}

export default Page;

const Container = styled.div`
  background-color: #fffef9;
  height: calc(100vh - 5vw);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 400px) {
    display: none;
  }
`;
