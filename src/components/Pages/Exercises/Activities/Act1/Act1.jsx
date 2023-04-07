import React, { useState, useEffect } from "react";

import styled from "styled-components";
import generalErrors from "./errors/generalErrors";
import he_de from "./errors/he_de";
import perque from "./errors/perque";
import Word from "./Word";
import getData from "./getData";

function Act1({ setmarked, seterrnum,data }) {

  const numberOfPhrases = 2;
  const maxPhraseWordLenght = 100;
  const index = Math.floor(Math.random() * (data.length - numberOfPhrases));

  var result = "";
  var words = [];

  for (let i = 0; i < numberOfPhrases; i++) {
    if (data[index + i].split(" ").length <= maxPhraseWordLenght)
      result += data[index + i] + ". ";
  }
  let i = 0;
  var splittedText = result.split(" ");
  var errnum = 0;
  while (i < result.split(" ").length) {
    var error = false;
    var temp = undefined;

    //TINC QUE / HE DE
    temp = he_de(splittedText[i], splittedText[i + 1]);
    if (temp != undefined) {
      error = true;
      errnum += 1;
      words.push({
        correctText: splittedText[i],
        error,
        errorText: temp[0],
      });
      words.push({
        correctText: splittedText[i + 1],
        error,
        errorText: temp[1],
      });
      i += 2;
    }

    //ERRORS GENERALS
    temp = generalErrors(splittedText[i]);
    if (temp !== splittedText[i]) {
      errnum += 1;
      error = true;
      words.push({
        correctText: splittedText[i],
        error,
        errorText: temp,
      });
      i += 1;
    }

    //PERQUES
    if (splittedText[i + 1] != undefined) {
      /*  console.log(splittedText[i], splittedText[i+1]) */
      /* setrandom(Math.floor(Math.random() * 6)); */
      var random = 0;
      temp = perque(splittedText[i], splittedText[i + 1], random);
      /* console.log(temp); */
    }
    if (
      (temp !== splittedText[i] ||
        temp !== `${splittedText[i]} ${splittedText[i + 1]}`) &&
      temp != undefined
    ) {
      errnum += 1;
      error = true;
      words.push({
        correctText: `${splittedText[i]} ${splittedText[i + 1]}`,
        error,
        errorText: temp,
      });
      i += 2;
    } else {
      error = false;
      words.push({
        correctText: splittedText[i],
        error: false,
      });
      i += 1;
    }

    seterrnum(errnum);
  }

  return (
    <Paragraph>
      {words.map((word, i) => {
        return (
          <Word
            key={i}
            text={word.correctText}
            error={word.error}
            errText={word.errorText}
            setmarked={setmarked}
          />
        );
      })}
    </Paragraph>
  );
}
const Paragraph = styled.p`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  span:first-child:first-letter {
    text-transform: capitalize;
  }
`;

export default Act1;
