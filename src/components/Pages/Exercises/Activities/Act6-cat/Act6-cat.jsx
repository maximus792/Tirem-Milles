import React, { useState } from "react";
import styled from "styled-components";

const dataCAT = [
"El Maties ha tret un deu al TDR, tot i haver sotmès al Marcel i al Xavi a fer-lo tot.",
 "La mare d'en Maties està molt enfadada, ja que el seu fill no ha encès el rentaplats.",
"En Maties soluciona les seves inseguretats insultant als seus amics.",
"El pare d'en Maties i d'en Xavier són completament oposats.",
"El pare d'en Maties és una persona molt respectada en el món de les enganyifes a Hisenda.",
"El pare d'en Maties té quatre treballadors mal pagats i en negre, tot i fer èmfasi en què és pel seu bé.",
"En Maties fa molt èmfasi en treure bones notes als exàmens, menys als de llengua.",
"En Maties deu la seva nota als seus grans amics, no sap sumar.",
"La Martina té un arxiu PDF encriptat als ordinadors del despatx de casa.",
"La Martina està molt orgullosa del seu germà, tot i ser un fracassat.",
"El Maties té moltes amigues amb les quals va a missa.",
"Encara que demà no plogui, la possibilitat que caigui un raig és molt alta!",
"El furiós i dolent alumne Marcel serà ben encaminat pel gran mestre Xavier.",
"El Marcel no valora els seus amics excel·lents, tot i que li fan tota la feina.",
"El Marcel és el pitjor alumne que pots tenir, encara que intenta millorar sense èxit.",
"Si el Marcel no estigués tan boig i perdut no tindria tants enemics.",
"Si el Marcel no es prengués els medicaments per controlar la ràbia, el món seria molt pitjor.",
"Si en algun moment sents tanta ràbia com el Marcel, visita el teu psicòleg de confiança.",
  //Chat 1
  "El Marcel va fer una patacada a la feina i va començar a bufar com un bou, ja que estava molt enfadat.",
  "Va intentar relaxar-se però qualsevol cosa li posava de mal humor. Va acabar cridant-li al cap de la botiga.",
  "Després de la discussió, en Marcel va sortir furibund del local i va començar a caminar sense rumb.",
  "Va arribar a casa i va llençar el telèfon contra la paret, deixant-lo fet miques.",
  "Va intentar meditar però les seves pulsacions no baixaven i es va posar més nerviós.",
  "Va intentar desfogar-se fent esport, però va acabar ferint-se i va acabar més frustrat.",
  "Quan va arribar el sopar, va agafar el cargol sense adonar-se que estava ben calent i va fer una expressió de dolor.",
  "Va començar a insultar a tots els que passaven pel carrer i es va crear una situació incòmoda.",
  "Va començar a trencar objectes a casa seva per desfogar-se.",
  "Va cridar-li al veí perquè el gos no parava d'alletar i no el deixava descansar.",
  "Va intentar fer una activitat relaxant com llegir, però no podia concentrar-se.",
  "Va començar a discutir amb els seus amics per coses insignificants.",
  "Va perdre els papers a la carretera i va començar a fer servir el clàxon sense parar.",
  "Va fer una fumera a la cuina intentant fer el sopar i va acabar cremant la paella.",
  "Va anar a comprar i va discutir amb la caixera perquè no acceptava un cupó.",
  "Va acabar el cap de setmana sense sortir de casa perquè tenia por de posar-se nerviós en públic.",
  "Va intentar practicar la respiració diafragmàtica però no va ser efectiu.",
  "Va tenir una discussió amb la seva parella perquè no estava d'acord amb una decisió important.",
  "Va tenir una reunió important i va acabar insultant el seu cap per una decisió que no li agradava.",
  "Va intentar fer exercicis de relaxació però va acabar adormint-se i no va ser efectiu.",

  //chat2
  "A les tietes de llengua se'ls ha perdut la paciència ensenyant participis passats que ningú recordarà.",
  "Avui ens han fet fer exercicis de sintaxi que han fet petar els ploms a més d'un alumne.",
  "La classe d'avui ha estat tan avorrida que fins i tot he somiat amb el verb 'ser'.",
  "La tieta de llengua avui ens ha posat a llegir un text de més de 10 pàgines amb paraules que ni el diccionari coneix.",
  "M'ha costat més entendre les explicacions de la tieta de llengua que llegir un llibre en japonès.",
  "He passat més temps corregint les faltes ortogràfiques dels meus companys que escoltant les explicacions de la tieta de llengua.",
  "La tieta de llengua avui ens ha fet jugar a un joc de paraules que ha acabat semblant una partida de Scrabble.",
  "Hem passat tota la classe intentant pronunciar bé la lletra 'r' i la tieta de llengua encara no ens ha donat l'OK.",
  "La classe de llengua avui ha estat tan avorrida que he acabat fent l'orni en el meu llibre de text.",
  "A la tieta de llengua li agrada posar-nos exercicis que semblen un enigma de Sherlock Holmes.",
  "Hem passat la classe buscant sinònims del verb 'dir' que semblava més un joc de paraules que una classe de llengua.",
  "Avui la tieta de llengua ens ha posat a llegir un text tan dens que ens ha recordat una pedra de molí.",
  "La tieta de llengua avui ens ha posat a fer un exercici de construcció de frases que ha acabat semblant un trencaclosques.",
  "Avui la tieta de llengua ens ha posat a fer un exercici de versificació que ha acabat semblant una competició de rap.",
  "La tieta de llengua avui ens ha posat a fer un dictat tan difícil que he acabat escrivint en xinès.",
  
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
  "El rei va construir un castell fort i resistent per protegir el seu regne.",
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
            ("ptc".includes(lletra.toLocaleLowerCase()) &&
              text.split("")[i + 1].replaceAll("h","").toLocaleLowerCase() == " " &&
              "bdgzjvlrmnz".includes(text.split("")[i + 2].replaceAll("h","").toLocaleLowerCase())) ||
            ("fxs".includes(lletra.toLocaleLowerCase()) &&
              text.split("")[i + 1].replaceAll("h","").toLocaleLowerCase() == " " &&
              "bdgzjvaeiolrmnzuàèéíóòú".includes(text.split("")[i + 2].replaceAll("h","").toLocaleLowerCase()))
          )
            son = true;
          if (i >= 4)
            if (
              text.split("")[i - 4].replaceAll("h","").toLocaleLowerCase() == "t" &&
              text.split("")[i - 3].replaceAll("h","").toLocaleLowerCase() == "r" &&
              text.split("")[i - 2].replaceAll("h","").toLocaleLowerCase() == "a" &&
              text.split("")[i - 1].replaceAll("h","").toLocaleLowerCase() == "n" &&
              text.split("")[i].replaceAll("h","").toLocaleLowerCase() == "s" &&
              "bdgzjvlrmnzaeiouàèéíóòú".includes(text.split("")[i + 1].replaceAll("h","").toLocaleLowerCase())
            )
              son = true;

          if (i >= 3) {
            if (
              text.split("")[i - 3].replaceAll("h","").toLocaleLowerCase() == "d" &&
              text.split("")[i - 2].replaceAll("h","").toLocaleLowerCase() == "i" &&
              text.split("")[i - 1].replaceAll("h","").toLocaleLowerCase() == "n" &&
              text.split("")[i].replaceAll("h","").toLocaleLowerCase() == "s" &&
              "bdgzjvlrmnzaeiouàèéíóòú".includes(text.split("")[i + 1].replaceAll("h","").toLocaleLowerCase())
            )
              son = true;
            if (
              text.split("")[i - 3].replaceAll("h","").toLocaleLowerCase() == "f" &&
              text.split("")[i - 2].replaceAll("h","").toLocaleLowerCase() == "o" &&
              text.split("")[i - 1].replaceAll("h","").toLocaleLowerCase() == "n" &&
              text.split("")[i].replaceAll("h","").toLocaleLowerCase() == "s" &&
              "bdgzjvlrmnzaeiouàèéíóòú".includes(text.split("")[i + 1].replaceAll("h","").toLocaleLowerCase())
            )
              son = true;
          }

          if (
            "s".includes(lletra.toLocaleLowerCase()) &&
            "aeiouàèéíóòú".includes(text.split("")[i + 1].replaceAll("h","").toLocaleLowerCase()) &&
            "aeiouàèéíóòú".includes(text.split("")[i - 1].replaceAll("h","").toLocaleLowerCase())
          )
            son = true;
          if (i > 1)
            if (
              "eèé".includes(text.split("")[i - 1].replaceAll("h","").toLocaleLowerCase()) &&
              text.split("")[i].replaceAll("h","").toLocaleLowerCase() == "x" &&
              "bdgzjvlrmnzaeiouàèéíóòú".includes(text.split("")[i + 1].replaceAll("h","").toLocaleLowerCase())
            )
              son = true;
          if (
            text.split("")[i].replaceAll("h","").toLocaleLowerCase() == "i" &&
            text.split("")[i + 1].replaceAll("h","").toLocaleLowerCase() == "g" &&
            text.split("")[i + 2].replaceAll("h","").toLocaleLowerCase() == " " &&
            "bdgzjvaeiolrmnuàèéíóòú".includes(text.split("")[i + 3].replaceAll("h","").toLocaleLowerCase())
          ) {
            son = true;
            lletra = "ig";
            exception += 1;
          }

          if (
            text.split("")[i].replaceAll("h","").toLocaleLowerCase() == "t" &&
            text.split("")[i + 1].replaceAll("h","").toLocaleLowerCase() == "s" &&
            text.split("")[i + 2].replaceAll("h","").toLocaleLowerCase() == " " &&
            "bdgzjvaeiolrmnzuàèéíóòú".includes(text.split("")[i + 3].replaceAll("h","").toLocaleLowerCase())
          ) {
            son = true;
            lletra = "ts";
            exception += 1;
          }
          if (
            text.split("")[i].replaceAll("h","").toLocaleLowerCase() == "c" &&
            text.split("")[i + 1].replaceAll("h","").toLocaleLowerCase() == "s" &&
            text.split("")[i + 2].replaceAll("h","").toLocaleLowerCase() == " " &&
            "bdgzjvaeiolrmnzuàèéíóòú".includes(text.split("")[i + 3].replaceAll("h","").toLocaleLowerCase())
          ) {
            son = true;
            lletra = "cs";
            exception += 1;
          }
          if (
            lletra.toLocaleLowerCase() == "t" &&
            text.split("")[i + 1].replaceAll("h","").toLocaleLowerCase() == "x" &&
            text.split("")[i + 2].replaceAll("h","").toLocaleLowerCase() == " " &&
            "bdgzjvaeiolrmnzuàèéíóòú".includes(text.split("")[i + 3].replaceAll("h","").toLocaleLowerCase())
          ) {
            lletra = "tx";
            son = true;
            exception += 1;
          }

          if (
            ("n".includes(lletra.toLocaleLowerCase()) &&
              "bmpgcfxtd".includes(text.split("")[i + 1].replaceAll("h","").toLocaleLowerCase())) ||
            ("m".includes(lletra.toLocaleLowerCase()) && "f".includes(text.split("")[i + 1].replaceAll("h","").toLocaleLowerCase())) ||
            ("l".includes(lletra.toLocaleLowerCase()) && "jx".includes(text.split("")[i + 1].replaceAll("h","").toLocaleLowerCase()))
          )
            assim = true;
          if (
            ("n".includes(lletra.toLocaleLowerCase()) &&
              text.split("")[i + 1].replaceAll("h","").toLocaleLowerCase() == " " &&
              "bmpgcfxtd".includes(text.split("")[i + 2].replaceAll("h","").toLocaleLowerCase())) ||
            ("m".includes(lletra.toLocaleLowerCase()) &&
              text.split("")[i + 1].replaceAll("h","").toLocaleLowerCase() == " " &&
              "f".includes(text.split("")[i + 2].replaceAll("h","").toLocaleLowerCase())) ||
            ("nl".includes(lletra.toLocaleLowerCase()) &&
              text.split("")[i + 1].replaceAll("h","").toLocaleLowerCase() == " " &&
              "n".includes(text.split("")[i + 2].replaceAll("h","").toLocaleLowerCase()) &&
              "y".includes(text.split("")[i + 3].replaceAll("h","").toLocaleLowerCase())) ||
            ("n".includes(lletra.toLocaleLowerCase()) &&
              "l".includes(text.split("")[i + 1].replaceAll("h","").toLocaleLowerCase()) &&
              "l".includes(text.split("")[i + 2].replaceAll("h","").toLocaleLowerCase())) ||
            ("nl".includes(lletra.toLocaleLowerCase()) &&
              text.split("")[i + 1].replaceAll("h","").toLocaleLowerCase() == " " &&
              "l".includes(text.split("")[i + 2].replaceAll("h","").toLocaleLowerCase()) &&
              "l".includes(text.split("")[i + 3].replaceAll("h","").toLocaleLowerCase())) ||
            ("l".includes(lletra.toLocaleLowerCase()) &&
              text.split("")[i + 1].replaceAll("h","").toLocaleLowerCase() == " " &&
              "g".includes(text.split("")[i + 2].replaceAll("h","").toLocaleLowerCase()) &&
              ("e".includes(text.split("")[i + 3].replaceAll("h","").toLocaleLowerCase()) ||
                "i".includes(text.split("")[i + 3].replaceAll("h","").toLocaleLowerCase()))) ||
            ("l".includes(lletra.toLocaleLowerCase()) &&
              text.split("")[i + 1].replaceAll("h","").toLocaleLowerCase() == "g" &&
              (text.split("")[i + 2].replaceAll("h","").toLocaleLowerCase() == "e" || text.split("")[i + 3].replaceAll("h","").toLocaleLowerCase() == "i"))
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
