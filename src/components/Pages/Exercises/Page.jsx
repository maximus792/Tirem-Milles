import { text } from "@fortawesome/fontawesome-svg-core";
import { useState, useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import { useIsOverflow } from "../../IsOverflow";
import Navbar from "./../../Navbar";
import Book from "./Book";
import "./Bookstyles.css";

function Page({ chapter, activity }) {
  const [title, settitle] = useState("Capítol I");
  const [subtitle, setsubtitle] = useState("Troba els errors");
  /*   const [data, setdata] = useState(activity); */
  var data = activity;
  console.log(activity);

  const [numParagrafs, setnumParagrafs] = useState(data.length);
  const textbox = useRef();
  const bookRef = useRef();

  
  useIsOverflow(textbox, (isOverflow) => {
    /*  console.log(isOverflow); */
  
    if (isOverflow) {
      setnumParagrafs((curr) => curr - 1);
    }
    /* else if(bookRef.current.offsetWidth >= 1100){
      setnumParagrafs(data.length)
    } 
      else if(bookRef.current.offsetWidth <= 600){
      setnumParagrafs(3)
    } */

    console.log(
      `OFFSET: ${bookRef.current.offsetWidth}; overflow: ${isOverflow}`
    );
    /*   console.log(window.innerWidth / 2);
    console.log(document.querySelectorAll(".textbox p")[0].offsetWidth);
    if (
      window.innerWidth / 2 >=
      document.querySelectorAll(".textbox p")[0].offsetWidth
    ) {
      setnumParagrafs(
        (window.innerWidth / 2) %
          document.querySelectorAll(".textbox p")[0].offsetWidth - 2
      );
    } */
  });

  data = data.slice(0, numParagrafs);

  const Data = () => {
    return (
      <div className="textbox" ref={textbox}>
        {data.slice(0, numParagrafs).map((element, i) => {
          return element;
        })}
      </div>
    );
  };

  return (
    <div>
      <Navbar actualPage={"Exercises"} />
      <Container ref={bookRef}>
        <Book chapter={chapter} subtitle={subtitle}>
          <Data />
        </Book>
      </Container>
    </div>
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
