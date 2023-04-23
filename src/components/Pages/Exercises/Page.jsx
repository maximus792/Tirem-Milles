import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useIsOverflow } from "../../IsOverflow";
import Navbar from "./../../Navbar";
import Book from "./Book";
import "./Bookstyles.css";
import getData from "./Activities/Act1/getData";
import getIndex from "../Index/indexes";

function Page({ chapter, activity }) {
  const [loaded, setloaded] = useState(false);
  //Títol
  var url = window.location.href.split("/");
  var key = url[url.length - 2];
  var language = url[url.length - 1];

  const index = getIndex(language);
  const [title, settitle] = useState(index[key - 1].title);
  const [subtitle, setsubtitle] = useState(index[key - 1].subtitle);

  const [marked, setmarked] = useState(0);

  const [paragrafs, setparagrafs] = useState(getData(language));
  var data = activity;

  const [numParagrafs, setnumParagrafs] = useState(data.length);

  const [correcting, setcorrecting] = useState(false);
  const [showErrors, setshowErrors] = useState(false);
  const [typeAct6, settypeAct6] = useState(0);
  const textbox = useRef();
  const bookRef = useRef();

  const [errnum, seterrnum] = useState(0);
  /*   const [data, setdata] = useState(activity); */

  var errn = 0;
  var errcount = 0;
  const changeErr = (num) => {
    errn += num;
    errcount += 2;
    console.log(`${errcount}, ${numParagrafs}`);
    if (errcount >= numParagrafs) seterrnum(errn);
  };
  useEffect(() => {
    console.log(errn);
  }, [errn]);

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

  data = activity.slice(0, numParagrafs);

  return (
    <PageContainer>
      {/*<ErrorContext.Provider value={{/* Nombre derrors totals, nombre de coses marcades, s'esta corretgint? totalErrors: false, markedWords: 0, correcting: false}}>*/}
      <Navbar actualPage={"Exercises"} />
      <Container ref={bookRef}>
        <Book
          chapter={chapter}
          title={title}
          subtitle={subtitle}
          language={language}
          marked={marked}
          errnum={errnum}
          exercisenum={key}
          setcorrecting={setcorrecting}
          correcting={correcting}
          setshowErrors={setshowErrors}
          showErrors={showErrors}
        >
          {chapter == 6 && language == "cat"? (
            <div
              style={{
                position: "absolute",
                right: 150,
                top: 10,
                cursor: "pointer",
              }}
            >
              <p
                style={{
                  margin: ".5rem",
                  backgroundColor: "#FDFD96",
                  padding: ".5rem",
                }}
              onClick={(e)=>{settypeAct6(1)}}
              >
                Marcar assimilacions
              </p>
              <p
                style={{
                  margin: ".5rem",
                  backgroundColor: "#77DD77",
                  padding: ".5rem",
                }}
                onClick={(e)=>{settypeAct6(0)}}
              >
                Marcar sonoritzacions
              </p>
            </div>
          ) : (
            ""
          )}
          <div
            className="textbox"
            ref={textbox}
            marked={marked}
            style={{ opacity: "0" }}
          >
            {data.slice(0, numParagrafs).map((element, i) => {
              if (key != "1" && key != "2")
                return React.cloneElement(element, {
                  setmarked: setmarked,
                  seterrnum: changeErr,
                  correcting: correcting,
                  language: language,
                  showErrors: showErrors,
                  typeAct6:typeAct6,
                });
              /*  console.log(data.slice(0, numParagrafs)); */
              console.log(paragrafs.length);

              /*  if (i + 3 * i >= paragrafs.length) {
                return null;
              } else if (i + 3 + 3 * i >= paragrafs.length) {
                return React.cloneElement(element, {
                  setmarked: setmarked,
                  seterrnum: changeErr,
                  data: [...paragrafs.slice(i + 3 * i, paragrafs.length)],
                  correcting: correcting,
                  language: language,
                  showErrors: showErrors,
                });
              }
              return React.cloneElement(element, {
                setmarked: setmarked,
                seterrnum: changeErr,
                data: paragrafs.slice(i + 3 * i, i + 3 + 3 * i),
                correcting: correcting,
                language: language,
                showErrors: showErrors,
              });  */
              console.log(i);

              if (2 * i >= paragrafs.length) {
                return null;
              } else if (2 * i + 2 >= paragrafs.length) {
                console.log(paragrafs.slice(2 * i, paragrafs.length));
                console.log(2 * i + 2);
                return React.cloneElement(element, {
                  setmarked: setmarked,
                  seterrnum: changeErr,
                  data: paragrafs.slice(2 * i, paragrafs.length),
                  correcting: correcting,
                  language: language,
                  showErrors: showErrors,
                  typeAct6:typeAct6,
                });
              }
              return React.cloneElement(element, {
                setmarked: setmarked,
                seterrnum: changeErr,
                data: paragrafs.slice(2 * i, 2 * i + 2),
                correcting: correcting,
                language: language,
                showErrors: showErrors,
                typeAct6:typeAct6,
              });
            })}
          </div>
        </Book>
      </Container>
    </PageContainer> //</ErrorContext.Provider>
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

const PageContainer = styled.div`
  overflow: hidden;
  max-height: 100vh;
`;
