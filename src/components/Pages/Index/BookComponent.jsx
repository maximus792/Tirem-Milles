import React, { useState } from "react";
import styled from "styled-components";

function BookComponent({ styles, data, clickable, tapa }) {
  const [currentPage, setcurrentPage] = useState(0);
  return (
    <BookDiv style={styles}>
      {data.map((element, key) => {
        return (
          <Page
            key={key}
            onClick={(e) => {
              if (!clickable) return;
              if (key !== 0) {
                if (e.currentTarget.classList.contains("passed")) {
                  e.currentTarget.style.zIndex = `${key}`;
                  /* currentPage = data.length - key; */
                } else {
                  /* currentPage =
                    data.length - key + 1 > data.length
                      ? data.length
                      : data.length - key + 1; */
                  e.currentTarget.style.zIndex = `${data.length - key}`;
                }

                setcurrentPage(key);
                e.currentTarget.classList.toggle("passed");
              }
            }}
          >
            <PageData key={key}>
              {element.map((page, i) => (
                <button
                  style={{ border: "none", color: "black", cursor: "pointer" }}
                  disabled={false}
                  key={i}
                  onClick={function (e) {
                    if (
                      !clickable ||
                      e.currentTarget.parentElement.parentElement.classList.contains("passed")
                    )
                      return;
                    console.log(key);
                    console.log("link");
                    window.location.href = `exercises-${i + 1}`;
                  }}
                >
                  <b>{page.title}</b> - {page.subtitle}
                </button>
              ))}
              <div
                className="symb"
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  position: "absolute",
                  bottom: "5px",
                  right: "5px",
                }}
              >
                {key !== 0 ? ">" : ""}
              </div>
            </PageData>
          </Page>
        );
      })}
      <Book
        src={`images/${tapa}`}
        onClick={(e) => {
          if (!clickable) return;
          if (e.target.classList.contains("passed")) {
            setcurrentPage(1);
            console.log(currentPage);
            e.target.style.zIndex = "10";
          } else {
            delay(1000).then(() => (e.target.style.zIndex = "0"));
            setcurrentPage(2);
            console.log(currentPage);
          }

          e.target.classList.toggle("passed");
        }}
      />
      <div className="shadow"></div>
    </BookDiv>
  );
}
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export default BookComponent;

const BookDiv = styled.div`
  position: relative;
  &:after {
    position: absolute;
    content: "";
    width: 15px;
    -webkit-box-shadow: inset -27px 2px 13px -25px rgba(0, 0, 0, 0.81);
    box-shadow: inset -27px 2px 13px -25px rgba(0, 0, 0, 0.81);
    top: 0;
    left: 0;
    bottom: 4px;
  }
`;
const Book = styled.img`
  position: relative;
  transition: transform 1s;
  width: 100%;
  z-index: 0;

  transform-origin: 0% 50%;

  &.passed {
    animation: bookpass 2s forwards;
  }
`;

const Page = styled.div`
  z-index: 0;
  width: 100%;
  height: 100%;
  background: #eee;
  position: absolute;
  top: 0;
  right: 0;
  transform-origin: 0% 50%;
  opacity: 1;
  display: block;

  &.passed {
    animation: bookpasspage 2s forwards;
    div {
      animation: hidepage 1s forwards;
      @keyframes hidepage {
        50% {
          display: block;
          pointer-events: none;
          opacity: 1;
        }
        51% {
          opacity: 0;
          display: none;
        }
        100% {
          opacity: 0;
          display: none;
        }
      }
    }

    @keyframes bookpasspage {
      0% {
        transform: rotateY(0);
      }
      100% {
        transform: rotateY(-180deg);
        background: #f4f4f4;
      }
    }
  }
`;

const PageData = styled.div`
  margin-top: 1.5rem;
  margin-left: 1.5rem;
  width: 90%;
  height: 95%;
  padding: 2rem;
  position: relative;
  align-self: center;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  a {
    color: black;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    padding: 0.5rem;
  }
  a:hover {
    transform: scale(1.1);
  }

  &:before {
    content: "Índex";
    position: absolute;
    top: -5px;
    left: 10px;
    font-size: 3.5rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-family: "Karantina", sans-serif;
  }
`;
