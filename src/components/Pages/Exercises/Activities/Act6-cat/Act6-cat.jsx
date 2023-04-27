import React, { useState } from "react";
import styled from "styled-components";

const dataCAT = [
  `La Maria viatja en transatlàntic.`,
  `El vaixell s'ha enfonsat al xocar amb la pedra!`,
  `Els tecnòlegs haurien de fer més exercicis si volen aprovar.`,
  "Cap problema és tan gran que no es pugui superar amb una ment ben centrada.",
  "Tot el que necessites és confiança i un somni per perseguir.",
  "L'amor no es tracta de possessió, sinó de llibertat.",
  "La veritat és que tots els éssers humans són iguals.",
  "La paciència és l'arma més poderosa de totes.",
  "El temps és l'únic recurs que mai no es recupera, així que gaudeix del moment.",
  "El respecte és la base de qualsevol relació saludable.",
  "La mentida és la pitjor cosa que pots fer per mantenir una relació.",
  "Ningú pot fer-te sentir inferior sense el teu consentiment.",
  "La vida és una aventura, no una carrera per arribar a la meta.",
  "La creativitat és la intel·ligència divertint-se.",
  "El somni és la primera passa cap a la realitat.",
  "La imaginació és més important que el coneixement.",
  "La felicitat no és una destinació, és un viatge.",
  "La persistència és el camí cap a l'èxit.",
  "El coneixement és poder, però la saviesa és pau.",
  "El fracàs és l'oportunitat de començar de nou amb més intel·ligència.",
  "El que fas avui pot millorar tot el teu demà.",
  "El que penses, ho acabes aconseguint.",
  "L'èxit és la suma de petits esforços repetits dia rere dia.",
  "El temps no té remei, però el futur depèn de tu.",
  "Mai saps el fort que ets fins que ser fort és l'única opció que tens.",
  "El fracàs és l'èxit en progressió.",
  "La vida és el que passa mentre estem ocupats fent altres plans.",
  "No ens agraden les coses que realment valorem, sinó les que ens costen.",
  "Les persones que estan disposades a fer les coses difícils són les que obtenen els grans resultats.",
  "La felicitat és una decisió que prens cada dia.",
  "No deixis que els teus somnis esdevinguin només somnis.",
  "T'has de convertir en el canvi que vols veure al món.",
  "La vida és un joc, però no pots guanyar si no et sents còmode jugant.",
  "La vida és com una bicicleta, has de seguir avançant per mantenir l'equilibri.",
  "No puguis arribar a ser el millor, però pots ser el millor que pots ser.",
  "La feina d'un líder és inspirar als altres a fer coses que ells mateixos no creuen que poden fer.",
  "No busquis la perfecció, busca el progrés.",
  "La vida no tracta de trobar-te a tu mateix, sinó de crear-te a tu mateix.",
  "Fes cada dia una mica millor que l'anterior.",
  "No pots canviar el vent, però pots ajustar les teves veles per arribar al teu destí.",
  "Les persones que creuen que ho poden fer són les que ho acaben fent.",
  "L'èxit és una muntanya que has de pujar un pas a la vegada.",
  "No existeix l'èxit immediat, és un resultat de molts anys d'esforç.",
  "Poca gent sap que el príncep té un cotxe vermell.",
  "El teu cos té la clau per acabar amb el problema de la calor.",
  "Cal protegir-se de la calor amb una tovallola i una gorra.",
  "Fidel als seus ideals, el capità va decidir no rendir-se.",
  "Els dracs són criatures mítiques que escupen foc per la boca.",
  "No hi ha res millor que un bon bocata de pernil amb tomàquet.",
  "El sol brilla amb força sobre el blau del cel de primavera.",
  "La por al fracàs és una barrera que moltes persones han de superar.",
  "Cada matí, la jove es desperta amb ganes de viure aventures.",
  "Les fulles de l'alzina són verdes i lluents a la primavera.",
  "La gent de la ciutat té la tendència a anar sempre amb pressa.",
  "El gust de la melmelada de préssec és dolç i intens alhora.",
  "Amb la seva veu profunda i potent, el cantant va omplir l'estadi.",
  "El cel de la nit està ple d'estrelles brillants i llunyanes.",
  "Els vells camins de pedra són testimonis de temps passats.",
  "El soroll del tràfic és una constant en la vida de les ciutats.",
  "El vent fred de l'hivern fa tremolar les fulles dels arbres.",
  "Les olors del bosc són un record que perdura per sempre.",
  "A la platja, el soroll de les ones és una música que convida a relaxar-se.",
  "La neu és blanca i freda, i el seu toc suau és com el de la ploma.",
  "Puc passar per la porta petita perquè sóc prim i petit.",
  "En Toni té un cotxe potent i potentós que pot pujar per tots els turons.",
  "La clau estava amagada entre les plantes i vaig haver de buscar-la per tot el jardí.",
  "El gos gros i gris es va escapar del jardí i va córrer cap a la ciutat.",
  "Joan va jugant a jocs de jocs de rol, jugant i riure sense parar.",
  "El gran gegant va gaudir del sol i de la calor, descansant al costat dels arbres.",
  "El zelador zelós sempre manté la zona neta i ordenada per als visitants.",
  "El sol va lluir i les flors van florir durant la primavera d'aquest any.",
  "La Lisa volia lluir el seu vestit llarg i lluent a la festa de dissabte.",
  "El nou joc de la consola és molt divertit i emocionant per als joves.",
  "El gran gigant xinès va preparar un sopar xinès per als seus amics.",
  "La senyora es va asseure silenciosament i va escoltar la música suau.",
  "El pa saborós i cruixent era el millor acompanyament per a la sopa calenta.",
  "La moto vermella i veloç va córrer pel carrer i va girar a l'esquerra.",
  "El nen dolç i amable va portar un regal per a la seva àvia malalta.",
  "La salsa picant i saborosa era el complement perfecte per a les patates fregides.",
  "El rei va construir un castell fort i resisten per protegir el seu regne.",
  "El matí va ser fred i brumós, però el sol es va aixecar més tard.",
  "El mussol nocturn va sortir a caçar ratolins i altres animals petits.",
  "El pilot va pujar a l'avió potent i modern per iniciar el vol.",

  /* --------------------- */
];

function Lletra({ key, children, assim, son, correcting, typeAct6 }) {
  const [selected, setselected] = useState(false);
  const [type, settype] = useState(0);
  const [error, seterror] = useState(false);
  const [corrected, setcorrected] = useState(false);

  /* 1 assim 0 son */

  /*   if (correcting && selected) {
    seterror((assim && !type) || (!assim && type) || (son && !type) || (!son && type))
  } */
  /* 
correcting && selected && !((assim && type) || (son && type))
          ? { backgroundColor: "red" }
          : selected && type
          ? {
              backgroundColor: "#FDFD96",
            }
          : selected && !type
          ? { backgroundColor: "#77DD77" }
          : {} */
  if (selected) {
    console.log("type");
    console.log(type);
    console.log(son);
    console.log(assim);
  }

  if (correcting && selected && ((assim && type) || (son && !type))) {
    setcorrected(true);
    setselected(false);
  }
  return (
    <LletraStyle
      style={
        corrected && son
          ? { fontWeight: "bold", color: "#77DD77" }
          : corrected && assim
          ? { fontWeight: "bold", color: "#bfbf06" }
          : correcting && selected && !((assim && type) || (son && !type))
          ? { backgroundColor: "red" }
          : selected && type
          ? {
              backgroundColor: "#FDFD96",
            }
          : selected && !type
          ? { backgroundColor: "#77DD77" }
          : assim && correcting
          ? {
              textDecoration: "underline",
              color: "#da6600",
              fontWeight: "bold",
            }
          : son && correcting
          ? {
              textDecoration: "underline",
              color: "#77DD77",
              fontWeight: "bold",
            }
          : {}
      }
      onClick={(e) => {
        if (!correcting) {
          settype(typeAct6);
          setselected((curr) => !curr);
        }
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
  var exception = 0;

  return (
    <Component>
      <Text>
        {text.split("").map((lletra, i) => {
          var assim = false,
            son = false;
          if (exception > 0) {
            exception -= 1;
            return;
          }
          //SON
          if (
            ("ptc".includes(lletra) &&
              text.split("")[i + 1] == " " &&
              "bdgzjvlrmnz".includes(text.split("")[i + 2])) ||
            ("fxs".includes(lletra) &&
              text.split("")[i + 1] == " " &&
              "bdgzjvaeiolrmnzuàèéíóòú".includes(text.split("")[i + 2]))
          )
            son = true;
          if (i >= 4)
            if (
              text.split("")[i - 4] == "t" &&
              text.split("")[i - 3] == "r" &&
              text.split("")[i - 2] == "a" &&
              text.split("")[i - 1] == "n" &&
              text.split("")[i] == "s" &&
              "bdgzjvlrmnzaeiouàèéíóòú".includes(text.split("")[i + 1])
            )
              son = true;

          if (i >= 3) {
            if (
              text.split("")[i - 3] == "d" &&
              text.split("")[i - 2] == "i" &&
              text.split("")[i - 1] == "n" &&
              text.split("")[i] == "s" &&
              "bdgzjvlrmnzaeiouàèéíóòú".includes(text.split("")[i + 1])
            )
              son = true;
            if (
              text.split("")[i - 3] == "f" &&
              text.split("")[i - 2] == "o" &&
              text.split("")[i - 1] == "n" &&
              text.split("")[i] == "s" &&
              "bdgzjvlrmnzaeiouàèéíóòú".includes(text.split("")[i + 1])
            )
              son = true;
          }

          if (
            "s".includes(lletra) &&
            "aeiouàèéíóòú".includes(text.split("")[i + 1]) &&
            "aeiouàèéíóòú".includes(text.split("")[i - 1])
          )
            son = true;
          if (i > 1)
            if (
              text.split("")[i - 1] == "e" &&
              text.split("")[i] == "x" &&
              "bdgzjvlrmnzaeiouàèéíóòú".includes(text.split("")[i + 1])
            )
              son = true;
          if (
            text.split("")[i] == "i" &&
            text.split("")[i + 1] == "g" &&
            text.split("")[i + 2] == " " &&
            "bdgzjvaeiolrmnuàèéíóòú".includes(text.split("")[i + 3])
          ) {
            son = true;
            lletra = "ig";
            exception += 1;
          }

          if (
            text.split("")[i] == "t" &&
            text.split("")[i + 1] == "s" &&
            text.split("")[i + 2] == " " &&
            "bdgzjvaeiolrmnzuàèéíóòú".includes(text.split("")[i + 3])
          ) {
            son = true;
            lletra = "ts";
            exception += 1;
          }

          if (
            ("n".includes(lletra) &&
              "bmpgcfxtd".includes(text.split("")[i + 1])) ||
            ("m".includes(lletra) && "f".includes(text.split("")[i + 1])) ||
            ("l".includes(lletra) && "jx".includes(text.split("")[i + 1]))
          )
            assim = true;
          if (
            ("n".includes(lletra) &&
              text.split("")[i + 1] == " " &&
              "bmpgcfxtd".includes(text.split("")[i + 2])) ||
            ("m".includes(lletra) &&
              text.split("")[i + 1] == " " &&
              "f".includes(text.split("")[i + 2])) ||
            ("nl".includes(lletra) &&
              text.split("")[i + 1] == " " &&
              "n".includes(text.split("")[i + 2]) &&
              "y".includes(text.split("")[i + 3])) ||
            ("n".includes(lletra) &&
              "l".includes(text.split("")[i + 1]) &&
              "l".includes(text.split("")[i + 2])) ||
            ("nl".includes(lletra) &&
              text.split("")[i + 1] == " " &&
              "l".includes(text.split("")[i + 2]) &&
              "l".includes(text.split("")[i + 3])) ||
            ("l".includes(lletra) &&
              text.split("")[i + 1] == " " &&
              "g".includes(text.split("")[i + 2]) &&
              ("e".includes(text.split("")[i + 3]) ||
                "i".includes(text.split("")[i + 3]))) ||
            ("l".includes(lletra) &&
              text.split("")[i + 1] == "g" &&
              (text.split("")[i + 2] == "e" || text.split("")[i + 3] == "i"))
          )
            assim = true;

          //ASSIM
          /* if (true) assim = false; */
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
    color: #2dce2d;
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
