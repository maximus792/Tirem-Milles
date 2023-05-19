import React, { useState, useEffect } from "react";

import styled from "styled-components";
import generalErrors from "./errorsCat/generalErrors";
import he_de from "./errorsCat/he_de";
import perque from "./errorsCat/perque";
import Word from "./Word";
import getData from "./getData";
import generalErrorsCast from "./errorsCast/generalErrorsCast";
import he_deCast from "./errorsCast/he_deCast";
import femMasc from "./errorsCat/fem-masc";

function Act1({
  setmarked,
  seterrnum,
  data,
  correcting,
  showErrors,
  language,
}) {
  const [randomnum, setrandomnum] = useState(Math.floor(Math.random() * 5));
  const numberOfPhrases = 2;
  const maxPhraseWordLenght = 100;
  const index = Math.floor(Math.random() * (data.length - numberOfPhrases));

  var result = "";
  var words = [];

  for (let i = 0; i < numberOfPhrases; i++) {
    if (data[index + i]?.split(" ").length <= maxPhraseWordLenght)
      result += data[index + i] + ". ";
    /*   else result += data[i] + ". "; */
  }
  let i = 0;
  var splittedText = result.split(" ");
  var errnum = 0;

  while (i < result.split(" ").length) {
    var error = false;
    var temp = undefined;
    if (language == "cat") {
      /* Només la meitat dels cops */
      if ((randomnum + i) % 2 == 0) {
        error = false;
        words.push({
          correctText: splittedText[i],
          error: false,
        });
        i += 1;
      } else {
        //TINC QUE / HE DE   //  i a
        temp = he_de(splittedText[i], splittedText[i + 1]);

        if (
          temp != undefined &&
          (temp[0] != splittedText[i] || temp[1] != splittedText[1])
        ) {
          console.log("HEDE " + splittedText[i]);
          error = true;
          errnum += 1;
          words.push({
            correctText: `${splittedText[i]} ${splittedText[i + 1]}`,
            error,
            errorText: `${temp[0]} ${temp[1]}`,
          });
          i += 2;
        }

        /* Canviar femeni i masculi de paraules amb interferències */
        if (splittedText[i + 2] != undefined) {
          if (
            (splittedText[i].toLowerCase() === "a" &&
              splittedText[i + 1].toLowerCase() === "les") ||
            (splittedText[i].toLowerCase() === "a" &&
              splittedText[i + 1].toLowerCase() === "la")
          ) {
            temp = femMasc(
              `${splittedText[i]} ${splittedText[i + 1]}`,
              splittedText[i + 2]
            );

            if (temp !== undefined) {
              errnum += 1;
              error = true;
              words.push({
                correctText: `${splittedText[i]} ${splittedText[i + 1]}`,
                error,
                errorText: temp,
              });
              words.push({
                correctText: splittedText[i + 2],
                error: false,
                errorText: temp,
              });
              i += 2;
            }
          } else {
            temp = femMasc(splittedText[i], splittedText[i + 1]);
            if (splittedText[i] == "els") console.log(temp);
            if (
              temp !== undefined &&
              (temp[0] !== splittedText[i] || temp[1] !== splittedText[i + 1])
            ) {
              errnum += 1;
              error = true;
              words.push({
                correctText: splittedText[i],
                error,
                errorText: temp[0],
              });
              words.push({
                correctText: splittedText[i + 1],
                error: false,
                errorText: temp[1],
              });
              i += 2;
            }
          }
        }

        //ERRORS GENERALS
        temp = generalErrors(splittedText[i]);
        console.log("GENERAL " + splittedText[i]);
        if (temp !== splittedText[i] && !error) {
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
        if (
          splittedText[i + 1] != undefined &&
          perque(splittedText[i], splittedText[i + 1], random) != undefined &&
          !error
        ) {
          /*  console.log(splittedText[i], splittedText[i+1]) */
          /* setrandom(Math.floor(Math.random() * 6)); */
          var random = 0;
          temp = perque(splittedText[i], splittedText[i + 1], random);
          /* console.log(temp); */

          if (
            (temp !== splittedText[i] ||
              temp !== `${splittedText[i]} ${splittedText[i + 1]}`) &&
            temp != undefined &&
            !error
          ) {
            console.log("PERQUE " + splittedText[i]);
            errnum += 1;
            error = true;
            words.push({
              correctText: `${splittedText[i]} ${splittedText[i + 1]}`,
              error,
              errorText: temp,
            });
            i += 2;
          }
        } else {
          error = false;
          words.push({
            correctText: splittedText[i],
            error: false,
          });
          i += 1;
        }
      }
    } else if (language == "cast") {
      var error = false;
      var temp = undefined;
      if ((randomnum + i) % 2 == 0) {
        error = false;
        words.push({
          correctText: splittedText[i],
          error: false,
        });
        i += 1;
      } else {
        /* General errors cast */
        temp = generalErrorsCast(splittedText[i]);
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

        temp = he_deCast(splittedText[i], splittedText[i + 1]);

        if (
          temp != undefined &&
          (temp[0] != splittedText[i] || temp[1] != splittedText[1])
        ) {
          console.log("HEDE " + splittedText[i]);
          error = true;
          errnum += 1;
          words.push({
            correctText: `${splittedText[i]} ${splittedText[i + 1]}`,
            error,
            errorText: `${temp[0]} ${temp[1]}`,
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
      }
    }
  }
  seterrnum(errnum);

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
            correcting={correcting}
            showErrors={showErrors}
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
