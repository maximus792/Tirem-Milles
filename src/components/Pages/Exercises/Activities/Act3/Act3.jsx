import { useState } from "react";
import styled from "styled-components";


const data = [
  ["ser", ["Primera del singular", "present de subjuntiu", "sigui"]],
  [
    "estar",
    ["Tercera del singular", "passat anterior d'indicatiu", "hagué estat"],
  ],
  [
    "tenir",
    ["Primera del singular", "passat anterior d'indicatiu", "haguí tingut"],
  ],
  ["voler", ["Segona del singular", "futur de subjuntiu", "vulgues"]],
  ["poder", ["Tercera del singular", "imperfet de subjuntiu", "pogués"]],
  ["dir", ["Primera del singular", "imperfet d'indicatiu", "deia"]],
  ["fer", ["Primera del plural", "futur perfet d'indicatiu", "haurà fet"]],
  [
    "anar",
    ["Tercera del singular", "condicional perfet perifràstic", "hauria anat"],
  ],
  ["veure", ["Segona del plural", "imperfet d'indicatiu", "veíeu"]],
  ["saber", ["Tercera del singular", "present d'indicatiu", "saps"]],
  [
    "haver",
    ["Primera del singular", "plusquamperfet d'indicatiu", "havia hagut"],
  ],
  ["caldre", ["Primera del singular", "imperfet d'indicatiu", "calia"]],
  ["menjar", ["Primera del singular", "present d'indicatiu", "menjo"]],
  ["fer-se", ["Tercera del singular", "futur d'indicatiu", "es farà"]],
  ["cabre", ["Tercera del singular", "imperfet d'indicatiu", "cabia"]],
  ["pleure", ["Primera del singular", "futur de subjuntiu", "plori"]],
  ["anar-se'n", ["Segona del singular", "present de subjuntiu", "n'adonis"]],
  ["caure", ["Primera del singular", "imperfet d'indicatiu", "caia"]],
  [
    "dormir",
    ["Tercera del singular", "futur perfet d'indicatiu", "haurà dormit"],
  ],
  ["llegir", ["Segona del plural", "condicional d'indicatiu", "llegiríeu"]],
  ["caminar", ["Primera del singular", "present d'indicatiu", "camino"]],
  ["cantar", ["Segona del singular", "futur de subjuntiu", "cantes"]],
  ["correr", ["Tercera del singular", "imperfet d'indicatiu", "corria"]],
  ["llegir", ["Primera del singular", "futur de subjuntiu", "llegiré"]],
  ["escriure", ["Tercera del singular", "imperatiu", "escriu"]],
  [
    "pintar",
    ["Primera del singular", "condicional perfet perifràstic", "hauria pintat"],
  ],
  [
    "ballar",
    ["Tercera del singular", "futur perfecte d'indicatiu", "haurà ballat"],
  ],
  ["cantar", ["Segona del singular", "futur simple d'indicatiu", "cantaràs"]],
  ["nadar", ["Tercera del singular", "imperfecte d'indicatiu", "nagejava"]],
  ["cuinar", ["Primera del singular", "futur de subjuntiu", "cuinaré"]],
  [
    "cantar",
    [
      "Segona del singular",
      "preterit perfecte simple d'indicatiu",
      "has cantat",
    ],
  ],
  ["aprendre", ["Tercera del singular", "present de subjuntiu", "aprengui"]],
  [
    "vendre",
    ["Primera del singular", "futur perfecte d'indicatiu", "hauré venut"],
  ],
  [
    "tenir",
    [
      "Segona del singular",
      "preterit perfecte simple d'indicatiu",
      "has tingut",
    ],
  ],
  ["comprar", ["Tercera del singular", "futur simple d'indicatiu", "comprarà"]],
  ["fer", ["Primera del singular", "futur perfecte d'indicatiu", "hauré fet"]],
  [
    "viure",
    ["Tercera del singular", "preterit imperfecte d'indicatiu", "vivia"],
  ],
  ["demanar", ["Primera del singular", "futur de subjuntiu", "demanaré"]],
  ["pensar", ["Segona del singular", "futur simple d'indicatiu", "pensaràs"]],
  ["cantar", ["Tercera del singular", "present de subjuntiu", "canti"]],
  ["ser", ["Primera del singular", "futur simple d'indicatiu", "seré"]],
  [
    "estar",
    ["Tercera del singular", "preterit imperfecte d'indicatiu", "estava"],
  ],
];

function Act3() {
  var verb = data[Math.floor(Math.random() * data.length)];
  const answer = verb[1][2];
  console.log("AAA", verb);
  return (
    <Component>
      {verb[1][0]} : <b>{verb[1][1]}</b> <br />{" "}
      <input placeholder="Introdueix la teva resposta" />
    </Component>
  );
}

export default Act3;


const Component = styled.div`
  margin-bottom: 1.3rem;
  input {
    border: 1px solid #aaa;
    border-radius: 4px;
    margin:8px 0;
    outline:none;
    padding:8px;
    box-sizing:border-box;
    transition:.3s;
  }
  input:focus{
    border-color:dodgerBlue;
    box-shadow:0 0 8px 0 dodgerBlue;
  }
`;