import React from "react";
import styled from "styled-components";

function Ajuda({ exercisenum, title, subtitle, chapter, language }) {
  const Content = () => {
    if (exercisenum == 3 && language == "cat") {
      return ex3CAT;
    } else if (exercisenum == 3 && language == "cast") {
      return ex3CAST;
    } else if (exercisenum == 6 && language == "cast") return ex6CAST;
    else if (exercisenum == 4 && language == "cat") return ex4CAT;
    else if (exercisenum == 4 && language == "cast") return ex4CAST;
    else if (exercisenum == 5 && language == "cat") return ex5CAT;
    else if (exercisenum == 5 && language == "cast") return ex5CAST;
    else if (exercisenum == 6 && language == "cat") return ex6CAT;
  };

  if (exercisenum != 1 && exercisenum != 2)
    return (
      <Container>
        <h1>
          {language == "cat" ? "Ajuda" : "Ayuda"} en "{subtitle}"
        </h1>
        <Content />
      </Container>
    );
}
const Hider = styled.div`
  background-color: red;

  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

const Container = styled.div`
  overflow-x: hidden;
  padding: 2rem;
  border-radius: 10px;
  position: absolute;
  top: 20px;
  left: 50px;
  right: 50px;
  bottom: 70px;
  background: red;
  display: flex;
  flex-direction: column;
  z-index: 99;
  overflow-y: scroll;

  background-color: #f5f5f5;
  /* margin: 0 auto; */

  -webkit-box-shadow: 0px 0px 37px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 37px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 37px -6px rgba(0, 0, 0, 0.75);

  .example {
    color: red;
  }
  th {
    min-width: 10rem;
    padding: 0.5rem;

    background-color: #f4512d;
    color: white;
  }
  table,
  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  td {
    padding: 0.5rem;
  }

  .table-container {
    overflow-x: scroll;
    border: 1px solid #e1e1e1;
    padding: 1rem;
  }

  th {
    height: 3rem;
  }

  td:nth-child(1) {
    background-color: #eeeeee;
  }
`;

const H2 = styled.h2`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;

const H3 = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-family: "Karantina", sans-serif;
  font-size: 1.7rem;
`;
const Explain = styled.div`
  margin: 2rem 3rem;
  background-color: #e1e1e1;
  padding: 1.5rem;
  padding-top: 1rem;
  border-radius: 0.5rem;
`;
export default Ajuda;

var ex3CAT = (
  <div>
    <Explain>
      <H2 style={{ marginTop: "0" }}>Com funciona?</H2>
      <p>
        <b>És ben senzill!</b> Escriu a la casella la conjugació del verb que et
        demana l'exercici en el temps verbal esmentat.
      </p>
    </Explain>
    <H2>Les conjugacions</H2>
    Per fer servir els verbs ens és molt útil tenir verbs model, que agrupem en
    tres conjugacions:
    <br />
    <H3>1a conjugació</H3>
    Acaben en <b>-ar</b>. La majoria són regulars i segueixen el model de
    treballar o parlar (vegeu la taula inferior).
    <H3>2a conjugació</H3>
    Acaben en <b>-er, -re</b>. Tenen com a model el verb viure. Molts tenen una
    -c final al present quan els conjuguem amb jo. Els verbs dur i dir són de la
    segona conjugació.
    <H3>3a conjugació</H3>
    Acaben en <b>-ir</b>. Segueixen dos models: els dels verbs dormir i llegir.
    Els verbs tenir (o tindre) i venir (o vindre) són de la tercera conjugació.
    <br />
    <br />
    <hr />
    <H2>Els temps verbals</H2>
    <p>
      A continuació us deixem un petit exemple amb el verb <b>CANTAR</b> de com
      es fan les diferents conjugacions. <b>RECORDEU</b> que també hi ha verbs
      irregulars i, per tant, no tots segueixen la norma.
    </p>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    ></div>
    <H2>Indicatiu</H2>{" "}
    <div className="table-container">
      <table className="verbTable">
        {" "}
        <tr>
          {" "}
          <th>Personas</th> <th>Present</th> <th>Perfet</th> <th>Imperfet</th>{" "}
          <th>Plusquamperfet</th> <th>Passat simple</th>{" "}
          <th>Passat anterior</th> <th>Passat perifràstic</th>{" "}
          <th>Passat anterior perifràstic</th> <th>Futur</th>{" "}
          <th>Futur perfet</th> <th>Condicional</th> <th>Condicional perfet</th>{" "}
        </tr>{" "}
        <tr>
          {" "}
          <td className="verbTable-td">Jo</td>{" "}
          <td className="verbTable-td">canto</td>{" "}
          <td className="verbTable-td">he cantat</td>{" "}
          <td className="verbTable-td">cantava</td>{" "}
          <td className="verbTable-td">havia cantat</td>{" "}
          <td className="verbTable-td">cantí</td>{" "}
          <td className="verbTable-td">hagué cantat</td>{" "}
          <td className="verbTable-td">estic cantant</td>{" "}
          <td className="verbTable-td">vaig estar cantant</td>{" "}
          <td className="verbTable-td">cantaré</td>{" "}
          <td className="verbTable-td">hauré cantat</td>{" "}
          <td className="verbTable-td">cantonaria</td>{" "}
          <td className="verbTable-td">hauria cantat</td>{" "}
        </tr>{" "}
        <tr>
          {" "}
          <td className="verbTable-td">Tu</td>{" "}
          <td className="verbTable-td">cantes</td>{" "}
          <td className="verbTable-td">has cantat</td>{" "}
          <td className="verbTable-td">cantaves</td>{" "}
          <td className="verbTable-td">havies cantat</td>{" "}
          <td className="verbTable-td">cantares</td>{" "}
          <td className="verbTable-td">hagueres cantat</td>{" "}
          <td className="verbTable-td">estàs cantant</td>{" "}
          <td className="verbTable-td">vas estar cantant</td>{" "}
          <td className="verbTable-td">cantaràs</td>{" "}
          <td className="verbTable-td">hauràs cantat</td>{" "}
          <td className="verbTable-td">cantaries</td>{" "}
          <td className="verbTable-td">hauries cantat</td>{" "}
        </tr>{" "}
        <tr>
          {" "}
          <td className="verbTable-td">Ell, ella, vostè</td>{" "}
          <td className="verbTable-td">canta</td>{" "}
          <td className="verbTable-td">ha cantat</td>{" "}
          <td className="verbTable-td">cantava</td>{" "}
          <td className="verbTable-td">havia cantat</td>{" "}
          <td className="verbTable-td">cantà</td>{" "}
          <td className="verbTable-td">hagué cantat</td>{" "}
          <td className="verbTable-td">està cantant</td>{" "}
          <td className="verbTable-td">va estar cantant</td>{" "}
          <td className="verbTable-td">cantarà</td>{" "}
          <td className="verbTable-td">haurà cantat</td>{" "}
          <td className="verbTable-td">cantaria</td>{" "}
          <td className="verbTable-td">hauria cantat</td>{" "}
        </tr>{" "}
        <tr>
          {" "}
          <td className="verbTable-td">Nosaltres</td>{" "}
          <td className="verbTable-td">cantem</td>{" "}
          <td className="verbTable-td">hem cantat</td>{" "}
          <td className="verbTable-td">cantàvem</td>{" "}
          <td className="verbTable-td">havíem cantat</td>{" "}
          <td className="verbTable-td">cantàrem</td>{" "}
          <td className="verbTable-td">haguérem cantat</td>{" "}
          <td className="verbTable-td">estem cantant</td>{" "}
          <td className="verbTable-td">vam estar cantant</td>{" "}
          <td className="verbTable-td">cantarem</td>{" "}
          <td className="verbTable-td">haurem cantat</td>{" "}
          <td className="verbTable-td">cantaríem</td>{" "}
          <td className="verbTable-td">hauríem cantat</td>{" "}
        </tr>{" "}
        <tr>
          {" "}
          <td className="verbTable-td">Vosaltres, vós</td>{" "}
          <td className="verbTable-td">canteu</td>{" "}
          <td className="verbTable-td">heu cantat</td>{" "}
          <td className="verbTable-td">cantàveu</td>{" "}
          <td className="verbTable-td">havíeu cantat</td>{" "}
          <td className="verbTable-td">cantàreu</td>{" "}
          <td className="verbTable-td">haguéreu cantat</td>{" "}
          <td className="verbTable-td">esteu cantant</td>{" "}
          <td className="verbTable-td">vau estar cantant</td>{" "}
          <td className="verbTable-td">cantareu</td>{" "}
          <td className="verbTable-td">haureu cantat</td>{" "}
          <td className="verbTable-td">cantaríeu</td>{" "}
          <td className="verbTable-td">hauríeu cantat</td>{" "}
        </tr>{" "}
        <tr>
          {" "}
          <td className="verbTable-td">Ells, elles, vostès</td>{" "}
          <td className="verbTable-td">canten</td>{" "}
          <td className="verbTable-td">han cantat</td>{" "}
          <td className="verbTable-td">cantaven</td>{" "}
          <td className="verbTable-td">havien cantat</td>{" "}
          <td className="verbTable-td">cantaren</td>{" "}
          <td className="verbTable-td">hagueren cantat</td>{" "}
          <td className="verbTable-td">estan cantant</td>{" "}
          <td className="verbTable-td">van estar cantant</td>{" "}
          <td className="verbTable-td">cantaran</td>{" "}
          <td className="verbTable-td">hauran cantat</td>{" "}
          <td className="verbTable-td">cantarien</td>{" "}
          <td className="verbTable-td">haurien cantat</td>{" "}
        </tr>{" "}
      </table>{" "}
    </div>
    <H2>Subjuntiu</H2>{" "}
    <div className="table-container">
      <table className="verbTable">
        {" "}
        <tr>
          {" "}
          <th>Personas</th> <th>Present</th> <th>Imperfet</th> <th>Perfet</th>{" "}
          <th>Plusquamperfet</th>{" "}
        </tr>{" "}
        <tr>
          {" "}
          <td className="verbTable-td">Jo</td>{" "}
          <td className="verbTable-td">cante</td>{" "}
          <td className="verbTable-td">cantase</td>{" "}
          <td className="verbTable-td">hagi cantat</td>{" "}
          <td className="verbTable-td">hagués cantat</td>{" "}
        </tr>{" "}
        <tr>
          {" "}
          <td className="verbTable-td">Tu</td>{" "}
          <td className="verbTable-td">cantis</td>{" "}
          <td className="verbTable-td">cantessis</td>{" "}
          <td className="verbTable-td">hagis cantat</td>{" "}
          <td className="verbTable-td">haguessis cantat</td>{" "}
        </tr>{" "}
        <tr>
          {" "}
          <td className="verbTable-td">Ell, ella</td>{" "}
          <td className="verbTable-td">canti</td>{" "}
          <td className="verbTable-td">cantés</td>{" "}
          <td className="verbTable-td">hagi cantat</td>{" "}
          <td className="verbTable-td">hagués cantat</td>{" "}
        </tr>{" "}
        <tr>
          {" "}
          <td className="verbTable-td">Nosaltres</td>{" "}
          <td className="verbTable-td">cantem</td>{" "}
          <td className="verbTable-td">cantéssim</td>{" "}
          <td className="verbTable-td">hàgim cantat</td>{" "}
          <td className="verbTable-td">haguéssim cantat</td>{" "}
        </tr>{" "}
        <tr>
          {" "}
          <td className="verbTable-td">Vosaltres</td>{" "}
          <td className="verbTable-td">canteu</td>{" "}
          <td className="verbTable-td">cantéssiu</td>{" "}
          <td className="verbTable-td">hàgiu cantat</td>{" "}
          <td className="verbTable-td">haguéssiu cantat</td>{" "}
        </tr>{" "}
        <tr>
          {" "}
          <td className="verbTable-td">Ells, elles</td>{" "}
          <td className="verbTable-td">cantin</td>{" "}
          <td className="verbTable-td">cantessin</td>{" "}
          <td className="verbTable-td">hagin cantat</td>{" "}
          <td className="verbTable-td">haguessin cantat</td>{" "}
        </tr>{" "}
      </table>{" "}
    </div>
    <H2>Imperatiu</H2>{" "}
    <div className="table-container">
      <table className="verbTable">
        {" "}
        <tr>
          {" "}
          <th>Personas</th> <th>Imperatiu</th>{" "}
        </tr>{" "}
        <tr>
          {" "}
          <td className="verbTable-td">Tu</td>{" "}
          <td className="verbTable-td">canta</td>{" "}
        </tr>{" "}
        <tr>
          {" "}
          <td className="verbTable-td">Ell, ella, vostè</td>{" "}
          <td className="verbTable-td">canti</td>{" "}
        </tr>{" "}
        <tr>
          {" "}
          <td className="verbTable-td">Nosaltres</td>{" "}
          <td className="verbTable-td">cantem</td>{" "}
        </tr>{" "}
        <tr>
          {" "}
          <td className="verbTable-td">Vosaltres, vós</td>{" "}
          <td className="verbTable-td">canteu</td>{" "}
        </tr>{" "}
        <tr>
          {" "}
          <td className="verbTable-td">Ells, elles, vostès</td>{" "}
          <td className="verbTable-td">canteu</td>{" "}
        </tr>{" "}
      </table>
    </div>
  </div>
);

const ex3CAST = (
  <div>
    <Explain>
      <H2 style={{ marginTop: "0" }}>Com funciona?</H2>
      <p>
        <b>Es muy sencillo!</b> Escriu a la casella la conjugació del verb que
        et demana l'exercici en el temps verbal esmentat.
      </p>
    </Explain>
    <H2>Las conjugaciones</H2>
    Para usar los verbos nos es muy útil tener verbos modelo, que agrupamos en
    tres conjugaciones:
    <br />
    <H3>1a conjugación</H3>
    Acaban en <b>-ar</b>. La mayoría son regulares y siguen el modelo de
    trabajar o hablar (ver la tabla inferior).
    <H3>2a conjugación</H3>
    Acaban en <b>-er</b>. Tienen como modelo el verbo comer.
    <H3>3a conjugación</H3>
    Acaban en <b>-ir</b>. Siguen el modelo del verbo dormir
    <br />
    <br />
    <hr />
    <H2>Los tiempos verbales</H2>
    <p>
      A continuación les dejamos un pequeño ejemplo con el verbo <b>CANTAR</b>{" "}
      de cómo se hacen las diferentes conjugaciones. <b>RECUERDEN</b> que
      también hay verbos irregulares y, por tanto, no todos siguen la norma.
    </p>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    ></div>
    <H2>Indicativo</H2>{" "}
    <div className="table-container">
      <table className="verbTable">
        {" "}
        <tr>
          {" "}
          <th>Personas</th>
          <th>Presente</th>
          <th>Pretérito perfecto compuesto</th>
          <th>Pretérito imperfecto</th> <th>Pretérito pluscuamperfecto</th>
          <th>Pretérito perfecto simple</th>
          <th>Pretérito anterior</th> <th>Futuro</th>
          <th>Futuro perfecto</th> <th>Condicional</th>
          <th>Condicional Perfecto</th>
        </tr>{" "}
        <tr>
          <td className="verbTable-td">Yo</td>
          <td className="verbTable-td">canto</td>
          <td className="verbTable-td">he cantado</td>
          <td className="verbTable-td">cantaba</td>
          <td className="verbTable-td">había cantado</td>
          <td className="verbTable-td">canté</td>
          <td className="verbTable-td">hube cantado</td>
          <td className="verbTable-td">cantaré</td>
          <td className="verbTable-td">habré cantado</td>
          <td className="verbTable-td">cantaría</td>
          <td className="verbTable-td">habría cantado</td>
        </tr>
        <tr>
          {" "}
          <td className="verbTable-td">Tu</td>{" "}
          <td className="verbTable-td">cantas</td>{" "}
          <td className="verbTable-td">has cantado</td>{" "}
          <td className="verbTable-td">cantabas</td>{" "}
          <td className="verbTable-td">habías cantado</td>{" "}
          <td className="verbTable-td">cantaste</td>{" "}
          <td className="verbTable-td">hubiste cantado</td>{" "}
          <td className="verbTable-td">cantarás</td>{" "}
          <td className="verbTable-td">habremos cantado</td>{" "}
          <td className="verbTable-td">cantarías</td>{" "}
          <td className="verbTable-td">haubrías cantado</td>{" "}
        </tr>{" "}
        <tr>
          {" "}
          <td className="verbTable-td">Él, ella, usted</td>
          <td className="verbTable-td">canta</td>
          <td className="verbTable-td">ha cantado</td>
          <td className="verbTable-td">cantaba</td>
          <td className="verbTable-td">había cantado</td>
          <td className="verbTable-td">cantó</td>
          <td className="verbTable-td">hubo cantado</td>
          <td className="verbTable-td">cantará</td>
          <td className="verbTable-td">habrá cantado</td>
          <td className="verbTable-td">cantaría</td>
          <td className="verbTable-td">habría cantado</td>
        </tr>{" "}
        <tr>
          {" "}
          <td className="verbTable-td">Nosotros</td>
          <td className="verbTable-td">Cantamos</td>
          <td className="verbTable-td">hemos cantado</td>
          <td className="verbTable-td">cantábamos</td>
          <td className="verbTable-td">había cantado</td>
          <td className="verbTable-td">cantamos</td>
          <td className="verbTable-td">hubimos cantado</td>
          <td className="verbTable-td">cantaremos</td>
          <td className="verbTable-td">habremos cantado</td>
          <td className="verbTable-td">cantaríamos</td>
          <td className="verbTable-td">habremos cantado</td>
        </tr>{" "}
        <tr>
          {" "}
          <td className="verbTable-td">Vosotros</td>
          <td className="verbTable-td">cantáis</td>
          <td className="verbTable-td">habéis cantado</td>
          <td className="verbTable-td">cantabais</td>
          <td className="verbTable-td">habíamos cantado</td>
          <td className="verbTable-td">cantasteis</td>
          <td className="verbTable-td">hubisteis cantado</td>
          <td className="verbTable-td">cantaréis</td>
          <td className="verbTable-td">habreis cantado</td>
          <td className="verbTable-td">cantaríais</td>
          <td className="verbTable-td">habríais cantado</td>
        </tr>{" "}
        <tr>
          {" "}
          <td className="verbTable-td">Ellos, Ellas</td>
          <td className="verbTable-td">cantan</td>
          <td className="verbTable-td">han cantado</td>
          <td className="verbTable-td">cantaban</td>
          <td className="verbTable-td">habían cantado</td>
          <td className="verbTable-td">cantaron</td>
          <td className="verbTable-td">hubieron cantado</td>
          <td className="verbTable-td">cantarán</td>
          <td className="verbTable-td">habrán cantado</td>
          <td className="verbTable-td">cantaían</td>
          <td className="verbTable-td">habrían cantado</td>
        </tr>{" "}
      </table>{" "}
    </div>
    <H2>Subjuntivo</H2>{" "}
    <div className="table-container">
      <table className="verbTable">
        {" "}
        <tr>
          {" "}
          <th>Personas</th> <th>Presente</th> <th>Pretérito perfecto</th>{" "}
          <th>Pretérito imperfecto</th> <th>Pretérito pluscuamperfecto</th>{" "}
        </tr>{" "}
        <tr>
          {" "}
          <td className="verbTable-td">Yo</td>{" "}
          <td className="verbTable-td">cante</td>{" "}
          <td className="verbTable-td">haya cantado</td>{" "}
          <td className="verbTable-td">cantase</td>{" "}
          <td className="verbTable-td">hubiese cantado</td>{" "}
        </tr>{" "}
        <tr>
          {" "}
          <td className="verbTable-td">Tu</td>{" "}
          <td className="verbTable-td">cantes</td>{" "}
          <td className="verbTable-td">hayas cantado</td>{" "}
          <td className="verbTable-td">cantases</td>{" "}
          <td className="verbTable-td">hubieses cantado</td>{" "}
        </tr>{" "}
        <tr>
          {" "}
          <td className="verbTable-td">Él, ella, usted</td>{" "}
          <td className="verbTable-td">cante</td>{" "}
          <td className="verbTable-td">haya cantado</td>{" "}
          <td className="verbTable-td">cantase</td>{" "}
          <td className="verbTable-td">hubiese cantado</td>{" "}
        </tr>{" "}
        <tr>
          {" "}
          <td className="verbTable-td">Nosotros</td>{" "}
          <td className="verbTable-td">cantemos</td>{" "}
          <td className="verbTable-td">hayamos cantado</td>{" "}
          <td className="verbTable-td">cantásemos</td>{" "}
          <td className="verbTable-td">hubiésemos cantado</td>{" "}
        </tr>{" "}
        <tr>
          {" "}
          <td className="verbTable-td">Vosotros</td>{" "}
          <td className="verbTable-td">cantéis</td>{" "}
          <td className="verbTable-td">hayáis cantado</td>{" "}
          <td className="verbTable-td">cantaseis</td>{" "}
          <td className="verbTable-td">hubieseis cantado</td>{" "}
        </tr>{" "}
        <tr>
          {" "}
          <td className="verbTable-td">Ellos, ellas, ustedes</td>{" "}
          <td className="verbTable-td">canten</td>{" "}
          <td className="verbTable-td">hayan cantado</td>{" "}
          <td className="verbTable-td">cantasen</td>{" "}
          <td className="verbTable-td">hubiesen cantado</td>{" "}
        </tr>{" "}
      </table>{" "}
    </div>
    <H2>Imperatiu</H2>{" "}
    <div className="table-container">
      <table className="verbTable">
        {" "}
        <tr>
          {" "}
          <th>Personas</th> <th>Imperatiu</th>{" "}
        </tr>{" "}
        <tr>
          {" "}
          <td className="verbTable-td">Tu</td>{" "}
          <td className="verbTable-td">canta</td>{" "}
        </tr>{" "}
        <tr>
          {" "}
          <td className="verbTable-td">Él, ella, usted</td>{" "}
          <td className="verbTable-td">cante</td>{" "}
        </tr>{" "}
        <tr>
          {" "}
          <td className="verbTable-td">Nosotros</td>{" "}
          <td className="verbTable-td">cantemos</td>{" "}
        </tr>{" "}
        <tr>
          {" "}
          <td className="verbTable-td">Vosotros</td>{" "}
          <td className="verbTable-td">cantad</td>{" "}
        </tr>{" "}
        <tr>
          {" "}
          <td className="verbTable-td">Ellos, ellas, ustedes</td>{" "}
          <td className="verbTable-td">canten</td>{" "}
        </tr>{" "}
      </table>
    </div>
  </div>
);

const ex6CAST = (
  <div>
    <H2>Tipos de palabaras </H2>
    Las palabras se clasifican en función de su composición (lexemas y morfemas)
    <br />
    <H3>Morfemas flexivos</H3>
    <Explain>
      El <b>morfema flexivo</b> es un tipo de morfema gramatical que se agrega a
      una raíz o base léxica para expresar una categoría gramatical o una
      relación gramatical específica. <br />
      <br />
      Los morfemas flexivos no alteran la categoría léxica de la palabra, sino
      que modifican su forma gramatical. Estos morfemas pueden indicar el número{" "}
      <b>(singular o plural)</b>, el género
      <b>(masculino o femenino)</b>, el tiempo verbal{" "}
      <b>(pasado, presente o futuro)</b>, el modo verbal{" "}
      <b>(indicativo, subjuntivo, imperativo)</b>, entre otros. <br />
      <br></br>
      <p>
        Por ejemplo, en español, la palabra{" "}
        <i style={{ fontWeight: "bold" }}>"gato"</i> puede flexionarse mediante
        el morfema flexivo de número, transformándose en{" "}
        <i style={{ fontWeight: "bold" }}>"gatos"</i> para indicar pluralidad.
        En este caso, el morfema{" "}
        <b>
          <i>"-s"</i>
        </b>{" "}
        cumple la función de marcar el plural.
      </p>
    </Explain>
    <H3>Morfemas derivativos</H3>
    <Explain>
      El morfema derivativo es aquel que se añade a una raíz o base léxica para
      formar una nueva palabra con un significado diferente o ampliado. <br/><br/>Estos
      morfemas derivativos cambian la categoría gramatical de la palabra
      original o le agregan un <b>prefijo</b> o <b>sufijo</b> que modifica su significado. <br/><br/>Por
      ejemplo, la palabra <i style={{fontWeight:"bold"}}>"tristeza"</i> se deriva de la raíz léxica <i>"triste"</i> y el
      sufijo <i>"-eza"</i>. La adición de este morfema derivativo transforma el {" "}
      <span style={{textDecoration:"underline"}}>adjetivo</span> <i style={{fontWeight:"bold"}}>"triste"</i> en un <span style={{textDecoration:"underline"}}>sustantivo</span> que representa el estado o la cualidad
      de ser triste.
    </Explain>
    <br />
    <H3>Palabras Primitivas</H3>
    Solo cuentan con <b> un lexema</b>. Ej: <i className="example">Silla</i>
    <br />
    <br />
    <H3>Palabras simples</H3>
    Se componen de <b>un lexema</b> y uno o más <b>morfemas flexivos</b>. Ej{" "}
    <i className="example">
      Niñ<u>as</u>
    </i>
    <br />
    <br />
    <H3>Palabras Complejas</H3>
    
    <ul>
      <li>
        <H3>Derivada</H3>
        Formada por <b>un lexema</b> y <b>un morfema derivativo</b>. Ej {" "} 
        <i className="example">
          Sill<u>ita</u>
        </i>
      </li>
      <li>
        <H3>Compuesta</H3>
        Formada por tan solo <b>2 o más lexemas</b>. Ej {" "}
        <i className="example">
          Balón + Cesto = <u>Baloncesto</u>
        </i>
      </li>
      <li>
        <H3>Parasintética</H3>
        <ul>
          <li>
            <H3>Por composición</H3>
            Formada <b>2 o más lexemas</b> y <b>un morfema derivativo</b>. Ej {" "}
            <i className="example">
              Siete + mes + (morfema derivativo) = <u>Sietemesino</u>
            </i>
          </li>
        <li>
          <H3>Por derivación</H3>
          Formada por <b>un lexema</b> entre <b>dos morfema derivativos</b>. Ej {" "}
          <i className="example">
            (morfema derivativo) + Alma + (morfema derivativo) = <u>Desalmado</u>
          </i>
        </li>
      </ul>
      </li>
    </ul>

    <br />
    <br />
    <hr />
    <br />
    <h1>💡Recuerda!</h1>
    <br/>
    Existe un método para diferenciar rapidamente las palabras <b>derivadas</b> de las <b>parasintéticas por derivación</b>!
    <br />
    <br />
    Este proceso implica separar los componentes de cada palabra (lexemas y morfemas), para analizarlos y ver si tienen sentido por separado.
    <br/>
    <br/>
    <div>
      <h2>Pre <span style={{color: "red"}}>/</span> cal <span style={{color: "red"}}>/</span> entamiento</h2>
      <br/>
      <ul>
        <li><u>Pregalentar</u> ✔️</li>  
        <li><u>Calentamiento</u> ✔️</li>  
      </ul>
      <br/>
      Esta palabra es <b>Derivada</b>
    </div>
    <br/>
    <div>
      <h2>Des <span style={{color: "red"}}>/</span> alm <span style={{color: "red"}}>/</span> ado</h2>
      <br/>
      <ul>
        <li><u>Desalma</u> ❌</li>  
        <li><u>Almado</u> ❌</li>  
      </ul>
      <br/>
      Esta palabra es <b>Parasintética por Derivación</b>
    </div>
    <br/>
    <div>
      <h2>Im <span style={{color: "red"}}>/</span> posib <span style={{color: "red"}}>/</span> ilidad <span style={{color: "red"}}>/</span> es</h2>
      <br/>
      <ul>
        <li><u>Posibilidades</u> ✔️</li>  
        <li><u>Imposible</u> ✔️</li>  
      </ul>
      <br/>
      Esta palabra es <b>Derivada</b>
    </div>

    
    
  </div>
);
const ex4CAT = (
  <div>
    <H2>Oracions subordinades SUBSTANTIVES</H2>
    <Explain>
      <b>Què són?</b> Les subordinades substantives són aquelles que exerceixen
      la funció d'un substantiu dins d'una oració subordinada, és a dir, poden
      fer de subjecte, de complement directe o indirecte, o de complement de
      preposició. A continuació, es detallen les característiques d'aquest tipus
      de subordinades en català:
    </Explain>

    <br></br>
    <ul>
      <li>
        <strong>Introducció:</strong> Les subordinades substantives es poden
        introduir per mitjà de les conjuncions{" "}
        <b>que, si, com, que no, quan, on, perquè o per a que</b>, entre altres.
      </li>
      <br></br>
      <li>
        <strong>Funció:</strong> Aquestes subordinades poden exercir diferents
        funcions sintàctiques, segons la seva relació amb el verb de l'oració
        principal. Algunes de les funcions que poden exercir són:
        <ul>
          <li style={{ marginTop: "1rem" }}>
            <b>Subjecte</b>: La subordinada substantiva fa de subjecte de
            l'oració principal.{" "}
          </li>
          <p style={{ color: "red", marginTop: "0.2rem" }}>
            <b>Exemple</b>: Que fumis a la casa és un problema per a mi. (La
            subordinada "Que fumis a la casa" fa de subjecte de l'oració
            principal "és un problema per a mi".)
          </p>
          <li style={{ marginTop: "1rem" }}>
            <b>Complement directe</b>: La subordinada substantiva fa de
            complement directe del verb de l'oració principal.
          </li>
          <p style={{ color: "red", marginTop: "0.2rem" }}>
            <b>Exemple</b>: No sé si et convé fer aquesta inversió. (La
            subordinada "si et convé fer aquesta inversió" fa de complement
            directe del verb "sé".)
          </p>

          <li style={{ marginTop: "1rem" }}>
            <b>Complement de Regim Verbal</b>: La subordinada substantiva fa de
            Complement de Regim Verbal del verb de l'oració principal.
          </li>
          <p style={{ color: "red", marginTop: "0.2rem" }}>
            <b>Exemple</b>: Estic disposat a fer el que em demanis. (La
            subordinada "fer el que em demanis" fa de Complement de Regim Verbal
            del verb "estic disposat".)
          </p>
        </ul>
      </li>
      <br></br>
      <li>
        <strong>Concordància:</strong> La subordinada substantiva concorda en
        nombre i persona amb el verb de l'oració principal.
      </li>
      <br></br>
      <li>
        <strong>Indicatiu o subjuntiu:</strong> El verb de la subordinada
        substantiva pot anar en indicatiu o en subjuntiu, segons la seva relació
        amb el verb de l'oració principal. Si la subordinada substantiva
        expressa una acció o un fet real, el verb va en indicatiu. Si expressa
        una acció o un fet hipotètic, possible o desitjable, el verb va en
        subjuntiu.
      </li>

      <li style={{ marginTop: "1rem" }}>
        <strong>Formes d'identificar-la:</strong> En moltes ocasions es pot
        substituir per "AIXÒ".
      </li>
      <span style={{ color: "red" }}>
        <b>Exemple</b>: Estic d'acord amb el que dius. (Estic d'acord amb{" "}
        <b>això</b>)
      </span>
    </ul>
    <H2>Oracions subordinades ADJECTIVES DE RELATIU</H2>
    <ul>
      <Explain>
        <b>Introducció:</b> Les subordinades adjectives de relatiu en català són
        aquelles oracions que es fan servir per donar informació addicional
        sobre un nom o un pronom a la frase principal. Aquestes oracions estan
        sempre subordinades a la frase principal, i es caracteritzen per
        contenir un pronom relatiu (com{" "}
        <b>"que", "qui", "el qual", "la qual", "els quals", "les quals"</b>,
        etc.) que fa de nexe entre la frase principal i l'oració subordinada.
      </Explain>
      <br />
      <li>
        <b>Funcions:</b> Les subordinades adjectives de relatiu poden ser
        explicatives o especificatives, i s'utilitzen per aportar informació
        detallada i precisa sobre el nom o pronom al qual es refereixen:
      </li>{" "}
      <br />
      <ul>
        <li>
          <strong>Oració subordinada adjectiva de relatiu explicativa:</strong>{" "}
          Aquest tipus d'oració afegeix una informació extra que no és
          imprescindible per comprendre la frase principal.
        </li>
        <p style={{ color: "red" }}>
          <b>Exemple</b>: La Maria, que és una gran amiga meva, ha arribat.
        </p>
        <li>
          <strong>
            Oració subordinada adjectiva de relatiu especificativa:
          </strong>{" "}
          Aquesta oració restringeix el significat del nom al qual es refereix,
          per tant, és imprescindible per a especificar de què es parla.
        </li>
        <p style={{ color: "red" }}>
          <b>Exemple</b>: La casa que està al final del carrer és molt gran.
        </p>
        {/* 	<li><strong>Oració subordinada adjectiva de relatiu explicativa anteposada:</strong> Aquesta oració es situa davant del nom al qual es refereix per destacar-ne alguna característica.</li>
		<p style={{color:"red"}}><b>Exemple</b>: Aquell home, el qual havia arribat tard, va ser multat.</p>
		<li><strong>Oració subordinada adjectiva de relatiu especificativa sense pronoms relatius:</strong> Aquesta oració es construeix sense utilitzar un pronom relatiu, i es forma per mitjà d'una construcció anomenada "gapping".</li>
		<p style={{color:"red"}}><b>Exemple</b>: En aquesta pizzeria fan pizzes amb pasta fina i en aquella de massa gruixuda.</p> */}
      </ul>
    </ul>

    <H2>Oracions subordinades ADVERBIALS</H2>
    <Explain>
      <b>Introducció: </b>Les subordinades adverbials són aquelles que
      compleixen la funció d'adverbi en una oració. Això significa que
      proporcionen informació sobre el temps, la manera, la causa, la finalitat,
      la condició, el lloc, la quantitat o la comparació.{" "}
    </Explain>
    <br></br>
    <ul>
      <li>
        <strong>De temps:</strong> Indiquen el moment en què es realitza l'acció
        de la frase principal.
      </li>
      <p style={{ color: "red", margin: "0.2rem" }}>
        <b>Exemple:</b> Quan vaig arribar, ja havien tancat la botiga.
      </p>
      <p style={{ marginBottom: "1.3rem" }}>
        <span style={{ fontWeight: "bold", color: "#363737" }}>
          Possibles connectors:
        </span>{" "}
        Quan, després que, abans que, mentre, tot seguit, en aquell moment, etc.
      </p>
      <li>
        <strong>De manera:</strong> Indiquen de quina manera es realitza l'acció
        de la frase principal.
      </li>
      <p style={{ color: "red", margin: "0.2rem" }}>
        <b>Exemple:</b> Parles molt ràpidament.
      </p>
      <p style={{ marginBottom: "1.3rem" }}>
        <span style={{ fontWeight: "bold", color: "#363737" }}>
          Possibles connectors:
        </span>{" "}
        Com, tal com, així, d'una manera, de forma, etc.
      </p>
      <li>
        <strong>De causa:</strong> Indiquen la causa o el motiu pel qual es
        realitza l'acció de la frase principal.
      </li>
      <p style={{ color: "red", margin: "0.2rem" }}>
        <b>Exemple:</b> Com que plou, no sortirem.
      </p>
      <p style={{ marginBottom: "1.3rem" }}>
        <span style={{ fontWeight: "bold", color: "#363737" }}>
          Possibles connectors:
        </span>{" "}
        Perquè, com que, ja que, a causa de, per, etc.
      </p>
      <li>
        <strong>De finalitat:</strong> Indiquen la finalitat o l'objectiu per al
        qual es realitza l'acció de la frase principal.
      </li>
      <p style={{ color: "red", margin: "0.2rem" }}>
        <b>Exemple:</b> Vaig estudiar durament per obtenir una bona nota.
      </p>
      <p style={{ marginBottom: "1.3rem" }}>
        <span style={{ fontWeight: "bold", color: "#363737" }}>
          Possibles connectors:
        </span>{" "}
        Per a, a fi de que, perquè, amb la finalitat de, etc.
      </p>
      <li>
        <strong>De condició:</strong> Indiquen la condició necessària perquè es
        realitzi l'acció de la frase principal.
      </li>
      <p style={{ color: "red", margin: "0.2rem" }}>
        <b>Exemple:</b> Si plou, no sortirem.
      </p>
      <p style={{ marginBottom: "1.3rem" }}>
        <span style={{ fontWeight: "bold", color: "#363737" }}>
          Possibles connectors:
        </span>{" "}
        Si, sempre que, només si, excepte si, a menys que, etc.
      </p>
      <li>
        <strong>De lloc:</strong> Indiquen el lloc on es realitza l'acció de la
        frase principal.
      </li>
      <p style={{ color: "red", margin: "0.2rem" }}>
        <b>Exemple:</b> Aniré al cinema que està al costat del parc.
      </p>
      <p style={{ marginBottom: "1.3rem" }}>
        <span style={{ fontWeight: "bold", color: "#363737" }}>
          Possibles connectors:
        </span>{" "}
        On, aquí, allà, a la dreta, a l'esquerra, a prop, etc.
      </p>
      <li>
        <strong>De quantitat:</strong> Indiquen la quantitat o la proporció en
        què es realitza l'acció de la frase principal.
      </li>
      <p style={{ color: "red", margin: "0.2rem" }}>
        <b>Exemple:</b> Vaig menjar molta paella.
      </p>
      <p style={{ marginBottom: "1.3rem" }}>
        <span style={{ fontWeight: "bold", color: "#363737" }}>
          Possibles connectors:
        </span>{" "}
        Tant, massa, prou, més que, menys que, etc.
      </p>
      <li>
        <strong>De comparació:</strong> Estableixen una comparació entre l'acció
        de la frase principal i una altra acció o circumstància.
      </li>
      <p style={{ color: "red", margin: "0.2rem" }}>
        <b>Exemple:</b> Corres més ràpid que jo.
      </p>
      <p style={{ marginBottom: "1.3rem" }}>
        <span style={{ fontWeight: "bold", color: "#363737" }}>
          Possibles connectors:
        </span>{" "}
        Com, igual que, tal com, més que, menys que, etc.
      </p>
    </ul>
  </div>
);

const ex4CAST = (
  <div>
    <H2>Subordinadas Sustantivas</H2>
    <Explain>
      Las subordinadas sustantivas son oraciones subordinadas que funcionan como
      sustantivos dentro de una oración principal.
      <br />
      <br />
      Estas oraciones subordinadas se identifican porque siempre comienzan con
      una conjunción subordinante, como <b>"que"</b>. Además, suelen estar
      introducidas por verbos en infinitivo, como por ejemplo{" "}
      <b>"pensar", "creer", "opinar", "certificar", "afirmar"</b>, entre muchos
      otros.
      <br />
      <br />
      Las oraciones subordinadas sustantivas se puedes sustituir por{" "}
      <b style={{ color: "#1a678b" }}>ESTO</b>. <b>Ejemplo:</b> "Quiero{" "}
      <span style={{ textDecoration: "underline" }}>
        que vengas a la fiesta
      </span>
      " &rarr; "Quiero <b style={{ color: "#1a678b" }}>ESTO</b>".
    </Explain>
    <p style={{ marginTop: "1rem", marginBottom: "0.7rem" }}>
      <b>FUNCIONES MÁS TÍPICAS</b>:
    </p>
    <ul>
      <li>
        <strong>Subordinadas Sustantivas de Sujeto:</strong> Son subordinadas
        que funcionan como sujeto de la oración principal.{" "}
      </li>
      <p style={{ color: "red", marginTop: "0.4rem", marginBottom: "1.3rem" }}>
        <b>Ejemplo 1:</b>{" "}
        <span style={{ textDecoration: "underline" }}>Jugar con los niños</span>{" "}
        es apasionante. &rarr; <b>INFINITIVO</b>
      </p>
      <p style={{ color: "red", marginTop: "0.4rem", marginBottom: "1.3rem" }}>
        <b>Ejemplo 2:</b> Me gusta{" "}
        <span style={{ textDecoration: "underline" }}>
          que siempre estés contento
        </span>{" "}
        &rarr; <b>CONJUNCIÓN</b>
      </p>
      <li>
        <strong>Subordinadas Sustantivas de Complemento Directo:</strong> Son
        subordinadas que funcionan como complemento directo de la oración
        principal.{" "}
      </li>
      <p style={{ color: "red", marginTop: "0.4rem", marginBottom: "1.3rem" }}>
        <b>Ejemplo:</b> Quiero{" "}
        <span style={{ textDecoration: "underline" }}>
          que vengas a la fiesta.
        </span>
      </p>
      <li>
        <strong>Subordinadas Sustantivas de Complemento Indirecto:</strong> Son
        subordinadas que funcionan como complemento indirecto de la oración
        principal.{" "}
      </li>
      <p style={{ color: "red", marginTop: "0.4rem", marginBottom: "1.3rem" }}>
        <b>Ejemplo:</b> Dieron los permisos a{" "}
        <span style={{ textDecoration: "underline" }}>
          los que los solicitaron
        </span>{" "}
        // Dieron los permisos a{" "}
        <span style={{ textDecoration: "underline" }}>
          quienes los solicitaron
        </span>
      </p>

      <li>
        <strong>CUIDADO!!</strong> En castellano <b>NO EXISTEN</b> las{" "}
        <span style={{ textDecoration: "underline" }}>
          subordinadas adverbiales de finalidad
        </span>
        , ya que estas son sustantivas
      </li>
      <p style={{ color: "red", marginTop: "0.4rem", marginBottom: "1.3rem" }}>
        <b>Ejemplo:</b> Voy al supermercado para comprar comida &rarr; Voy al
        supermercado para ESTO
      </p>
    </ul>

    <p>
      <b>TIPOS:</b>
    </p>
    <ul>
      <li>
        <strong>Con QUE conjunción:</strong>
      </li>
      <p style={{ color: "red", marginTop: "0.4rem", marginBottom: "1.3rem" }}>
        <b>Ejemplo:</b> Me gusta{" "}
        <span style={{ textDecoration: "underline" }}>que seas sincero</span>{" "}
        &rarr; Me gusta <b>ESTO</b>
      </p>
      <li>
        <strong>Con INFINITIVO:</strong>
      </li>
      <p style={{ color: "red", marginTop: "0.4rem", marginBottom: "1.3rem" }}>
        <b>Ejemplo:</b> Me gusta{" "}
        <span style={{ textDecoration: "underline" }}>comer sano</span> &rarr;
        Me gusta <b>ESTO</b>
      </p>
      <li>
        <strong>Interrogativa indirecta:</strong> La subordinada parece que es
        una pregunta
      </li>
      <p style={{ color: "red", marginTop: "0.4rem", marginBottom: "1.3rem" }}>
        <b>Ejemplo:</b> Dime{" "}
        <span style={{ textDecoration: "underline" }}>qué te pasa.</span> &rarr;
        "¿Qué te pasa?" Funciona como qüestión.
      </p>
    </ul>

    <H2>Subordinadas de relativo</H2>

    <Explain>
      <b>Explicación: </b>
      Las subordinadas de relativo son un tipo de oración subordinada que
      funciona como un adjetivo, es decir, que modifica o describe a un
      sustantivo o pronombre en la oración principal. La subordinada de relativo
      está introducida por un pronombre relativo, como{" "}
      <b>"que", "quien", "cual", "cuyo"</b>, y los adverbios relativos{" "}
      <b>"como","cuando","donde"</b> (Sín accento).
      <br />
      <br />
      Para identificar una subordinada de relativo, se puede sustituir el "que"
      por "el qual", si funciona correctamente en la oración, es una subordinada
      de relativo
    </Explain>

    <p>
      <p style={{ marginBottom: "1rem", fontWeight: "bold" }}>TIPOS:</p>
    </p>

    <ul>
      <li>
        <strong>Subordinada de relativo explicativa:</strong> La subordinada de
        relativo explicativa se utiliza para dar información adicional sobre el
        sustantivo o pronombre en la oración principal. Esta subordinada se
        separa de la oración principal con comas.
      </li>
      <p style={{ color: "red", marginTop: "0.4rem", marginBottom: "1.3rem" }}>
        <b>Ejemplo:</b> El perro,{" "}
        <span style={{ textDecoration: "underline" }}>que es muy amigable</span>{" "}
        , se acercó a mí.
      </p>

      <li>
        <strong>Subordinada de relativo especificativa:</strong> La subordinada
        de relativo especificativa se utiliza para identificar o delimitar al
        sustantivo o pronombre en la oración principal. Esta subordinada no se
        separa de la oración principal con comas.
      </li>
      <p style={{ color: "red", marginTop: "0.4rem", marginBottom: "1.3rem" }}>
        <b>Ejemplo:</b> El perro{" "}
        <span style={{ textDecoration: "underline" }}>que está ladrando</span>{" "}
        es de mi vecino. &rarr; El perro <b>el qual</b> está ladrando es de mi
        vecino.
      </p>
    </ul>

    <p style={{ marginBottom: "1rem", fontWeight: "bold" }}>ESTRUCTURA:</p>

    <ul>
      <li>
        <strong>QUE pronombre con antecedente:</strong> El "Que" se pude
        sustituir por "el qual" o uno de sus derivados. La subordinada se puede
        sustituir por un adjetivo y esta hace referencia a un antecedente
        determinado.
      </li>
      <p style={{ color: "red", marginTop: "0.4rem", marginBottom: "1.3rem" }}>
        <b>Ejemplo:</b> El alumno{" "}
        <span style={{ textDecoration: "underline" }}>que estudia</span>{" "}
        aprobará &rarr; El alumno el qual estudia aprobará &rarr; El alumno{" "}
        <b>estudioso</b> aprobará
      </p>
      <li>
        <strong>QUE pronombre sin antecedente:</strong>
      </li>
      <p style={{ color: "red", marginTop: "0.4rem", marginBottom: "1.3rem" }}>
        <b>Ejemplo:</b> El{" "}
        <span style={{ textDecoration: "underline" }}>que estudie</span>{" "}
        aprobará &rarr; El <b>(alumno)</b> que estudie aprobará
      </p>
      <li>
        <strong>Adverbios relativos:</strong> Como, Cuando y Donde.
      </li>
      <p style={{ color: "red", marginTop: "0.4rem", marginBottom: "1.3rem" }}>
        <b>Ejemplo:</b> Escribiré el trabajo{" "}
        <span style={{ textDecoration: "underline" }}>como tú</span> &rarr;
        Escribiré el trabajo <b>(de la misma forma)</b> que tú.
      </p>
      <p style={{ color: "red", marginTop: "0.4rem", marginBottom: "1.3rem" }}>
        <b>Ejemplo:</b> Iré{" "}
        <span style={{ textDecoration: "underline" }}>donde tú vayas</span>{" "}
        &rarr; Iré <b>(al lugar)</b> que tú vayas.
      </p>
      <p style={{ color: "red", marginTop: "0.4rem", marginBottom: "1.3rem" }}>
        <b>Ejemplo:</b> Lo terminé{" "}
        <span style={{ textDecoration: "underline" }}>cuando llegaste</span>{" "}
        &rarr; Lo terminé <b>(en el momento)</b> que llegaste.
      </p>
    </ul>

    <H2>Subordinadas Adverbiales</H2>

    <Explain>
      <b>Definición: </b>Las subordinadas adverbiales son oraciones subordinadas
      que funcionan como adverbios en la oración principal, es decir, que
      modifican o aclaran el sentido de un verbo, un adjetivo o un adverbio. La
      subordinada adverbial se introduce por una conjunción subordinante, como
      "cuando", "si", "porque", "aunque", entre otras.
    </Explain>

    <p style={{ fontWeight: "bold" }}>Tipos de subordinadas adverbiales:</p>
    <br />
    <ul>
      <li>
        <strong>Subordinada adverbial de tiempo:</strong> Indica el tiempo en
        que se realiza la acción de la oración principal. Se introduce con
        conjunciones subordinantes como{" "}
        <b>"siempre que", "mientras", "después de que"</b>, entre otras.
      </li>
      <p style={{ color: "red", marginTop: "0.4rem", marginBottom: "1.3rem" }}>
        <b>Ejemplo:</b> Haré los deberes <strong>mientras</strong> llegas.
      </p>

      <li>
        <strong>Subordinada adverbial de causa:</strong> Indica la causa o
        motivo de la acción de la oración principal. Se introduce con
        conjunciones subordinantes como{" "}
        <b>"porque", "como", "puesto que", "ya que"</b>, entre otras.
      </li>
      <p style={{ color: "red", marginTop: "0.4rem", marginBottom: "1.3rem" }}>
        <b>Ejemplo:</b> No fui al cine <strong>porque</strong> estaba cansado.
      </p>

      <li>
        <strong>Subordinada adverbial condicional:</strong> Indica una condición
        necesaria para que se realice la acción de la oración principal. Se
        introduce con conjunciones subordinantes como{" "}
        <b>"si", "en caso de que", "a condición de que"</b>, entre otras.
      </li>
      <p style={{ color: "red", marginTop: "0.4rem", marginBottom: "1.3rem" }}>
        <b>Ejemplo:</b> Saldré a correr <strong>si</strong> hace buen tiempo.
      </p>

      <li>
        <strong>Subordinada adverbial de modo:</strong> Indica la forma o el
        modo en que se realiza la acción de la oración principal. Se introduce
        con conjunciones subordinantes como <b>"como", "según", "tal como"</b>,
        entre otras. Se puede sustituir por "así".
      </li>
      <p style={{ color: "red", marginTop: "0.4rem", marginBottom: "1.3rem" }}>
        <b>Ejemplo:</b> Hazlo <strong>como</strong> te dije. &rarr; Hazlo{" "}
        <b>así</b>.
      </p>

      <li>
        <strong>Subordinada adverbial concesiva:</strong> Indica una concesión o
        una dificultad que se presenta a pesar de la acción de la oración
        principal. Se introduce con conjunciones subordinantes como{" "}
        <b>"aunque", "a pesar de que", "por mucho que"</b>, entre otras.
      </li>
      <p style={{ color: "red", marginTop: "0.4rem", marginBottom: "1.3rem" }}>
        <b>Ejemplo:</b> <strong>Aunque</strong> hace frío, saldré a correr.
      </p>

      <li>
        <strong>Subordinada adverbial consecutiva:</strong> Indica una
        consecuencia de la acción de la oración principal. Se introduce con
        conjunciones subordinantes como{" "}
        <b>"tan...que", "tanto...que", "de tal modo que"</b>, entre otras.
      </li>
      <p style={{ color: "red", marginTop: "0.4rem", marginBottom: "1.3rem" }}>
        <b>Ejemplo:</b> Hace <strong>tanto</strong> frío, <strong>que</strong>{" "}
        no quiero salir de casa.
      </p>
      <br />
      <hr />
      <br />
      <br />
    </ul>
    <p style={{ fontWeight: "bold", marginBottom: "1rem" }}>
      No son Adverbiales:
    </p>
    <ul>
      <li>
        <strong>Construcción Comparativa:</strong> Indica una comparación entre
        dos oraciones, por lo tanto, no es subordinante, sino coordinante. Se
        introduce con conjunciones subordinantes como{" "}
        <b>"como", "más que", "menos que"</b>, entre otras.
      </li>
      <p style={{ color: "red", marginTop: "0.4rem", marginBottom: "1.3rem" }}>
        <b>Ejemplo:</b> Él habla español <strong>como</strong> un nativo.
      </p>

      <li>
        <strong>Subordinada Sustantiva (de finalidad):</strong> Indica la
        finalidad o el propósito de la acción de la oración principal. Se
        introduce con conjunciones subordinantes como{" "}
        <b>"para que", "a fin de que"</b>, entre otras.
      </li>
      <li style={{ marginTop: "1.5rem" }}>
        <strong>Subordinada de relativo(locativo o de lugar):</strong> Indica un
        lugar o posición, pero en ningún caso es una adverbial, ya que está
        formada por una subordinada de relativo(Ya sea con un adverbio
        relativo[donde] o con un nombre tácito).
      </li>
      <p style={{ color: "red", marginTop: "0.4rem", marginBottom: "1.3rem" }}>
        <b>Ejemplo:</b> Este es el lugar <strong>donde</strong> hemos quedado.
      </p>
      <p style={{ color: "red", marginTop: "0.4rem", marginBottom: "1.3rem" }}>
        <b>Ejemplo:</b> Este es el lugar <strong>en el qual</strong> hemos
        quedado. &rarr; Hace referencia a lugar.
      </p>
    </ul>
  </div>
);

const ex5CAT = (
  <div>
    <H3>Paral·lelisme</H3>
    <Explain>
      El paral·lelisme és una figura retòrica que consisteix en la repetició
      d'estructures gramaticals o de paraules en una frase o en un conjunt de
      frases per aconseguir un efecte rítmic o de reforç. Aquesta figura
      retòrica ajuda a destacar la importància d'una idea, a crear un efecte de
      sorpresa o a enfatitzar una idea o concepte.
    </Explain>
    <i>
      <u>Ex:</u> "Vaig pujar al tren, vaig asseure'm al seient i vaig tancar els
      ulls."
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Metàfora</H3>
    <Explain>
      La metàfora és una figura retòrica que estableix una comparació entre dos
      termes que no són literalment iguals, però que tenen alguna semblança. Es
      tracta d'una comparació implícita que ajuda a entendre millor el concepte
      que es vol expressar. Aquesta figura retòrica ajuda a enriquir el
      llenguatge i a fer que la comunicació sigui més vívida i expressiva.
    </Explain>
    <i>
      <u>Ex:</u> "Ella és una rosa delicada i bella."
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Símil</H3>
    <Explain>
      El símil és una figura retòrica que estableix una comparació explícita
      entre dos termes que tenen alguna semblança. A diferència de la metàfora,
      en un símil es fa servir el "com" o "semblant a" per a establir la
      comparació. Aquesta figura retòrica ajuda a donar una imatge més clara i
      visual a l'audiència.
    </Explain>
    <i>
      <u>Ex:</u> "Ell és fort com un lleó."
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Eufemisme</H3>
    <Explain>
      El eufemisme és una figura retòrica que consisteix a utilitzar una
      expressió més suau o delicada per a referir-se a una realitat
      desagradable, incòmoda o tabú. Aquesta figura retòrica s'utilitza per a
      suavitzar el llenguatge i evitar ofendre o causar incomoditat a
      l'audiència.
    </Explain>
    <i>
      <u>Ex:</u> "Va marxar a millor vida" (en lloc de "va morir")
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Ironia</H3>
    <Explain>
      La ironia és una figura retòrica que consisteix a expressar el contrari
      del que es vol dir amb la intenció de provocar un efecte humorístic o
      crític. Aquesta figura retòrica es pot utilitzar per a manifestar una
      opinió, criticar una situació o personatge, o simplement per a entretenir
      l'audiència.
    </Explain>
    <i>
      <u>Ex:</u> "Quina meravella, un dia de pluja a la platja!"
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Personificació</H3>
    <Explain>
      La personificació és una figura retòrica que consisteix a atribuir
      característiques humanes a objectes, animals o idees abstractes. Això
      ajuda a crear una imatge més vívida i visual, i a transmetre una idea o
      emoció de manera més efectiva.
    </Explain>
    <i>
      <u>Exemple:</u> "El sol somriu als seus raigs."
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Sinestèsia</H3>
    <Explain>
      La sinestèsia és una figura retòrica que consisteix a unir sensacions
      pertanyents a diferents sentits. Aquesta figura retòrica ajuda a crear una
      imatge més rica i detallada de l'experiència descrita.
    </Explain>
    <i>
      <u>Exemple:</u> "El soroll de les olles bullint era dolç com una cançó."
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Hipèrbaton</H3>
    <Explain>
      El hipèrbaton és una figura retòrica que consisteix a alterar l'ordre
      habitual de les paraules en una frase per crear un efecte especial en el
      ritme, l'èmfasi o la sonoritat de la frase. Això pot ajudar a destacar un
      element o a crear un efecte poètic o artístic.
    </Explain>
    <i>
      <u>Exemple:</u> "El meu cor, amb teu parlat, s'ha alegrat."
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Interrogació Retòrica</H3>
    <Explain>
      L'interrogació retòrica és una figura retòrica que consisteix a fer una
      pregunta no per obtenir una resposta, sinó per provocar una reflexió o per
      fer un punt en una argumentació. Això ajuda a captar l'atenció de
      l'audiència i a reforçar el missatge del discurs.
    </Explain>
    <i>
      <u>Exemple:</u> "Com pot ser que en aquest món hi hagi tanta injustícia?"
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Antítesi</H3>
    <Explain>
      L'antítesi és una figura retòrica que consisteix en la contraposició de
      dos conceptes o idees oposades per crear un efecte dramàtic o per
      ressaltar la diferència entre ells.
    </Explain>
    <i>
      <u>Exemple:</u> "La vida és llarga si sabem aprofitar el temps, però és
      curta si la malgastem."
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Comparació</H3>
    <Explain>
      La comparació és una figura retòrica que consisteix a establir una
      similitud entre dos objectes o conceptes per fer més comprensible una idea
      o per reforçar una imatge.
    </Explain>
    <i>
      <u>Exemple:</u> "Els seus ulls brillaven com diamants."
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Hipèrbole</H3>
    <Explain>
      La hipèrbole és una figura retòrica que consisteix a exagerar una idea o
      una situació per fer-la més impactant o per enfatitzar una emoció.
    </Explain>
    <i>
      <u>Exemple:</u> "Em vaig morir de riure quan ho vaig sentir."
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Metonímia</H3>
    <Explain>
      La metonímia és una figura retòrica que consisteix en utilitzar una
      paraula per referir-se a una altra paraula o concepte relacionat amb ella,
      però no necessàriament per sinònimia, sinó per alguna relació de
      causa-efecte, part-tot, contingut-continent, etc.
    </Explain>
    <i>
      <u>Exemple:</u> "Anem a prendre unes copes!" (les copes no es beuen
      literalment, sinó el seu contingut)
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Enumeració</H3>
    <Explain>
      L'enumeració és una figura retòrica que consisteix en la llista d'elements
      o idees per destacar-ne la importància o la diversitat, o bé per establir
      una progressió o una estructura en la narració o el discurs.
    </Explain>
    <i>
      <u>Exemple:</u> "Per sopar vam menjar sopa de verdures, pollastre rostit
      amb patates i un pastís de poma de postres."
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Oxímoron</H3>
    <Explain>
      L'oxímoron és una figura retòrica que consisteix en la unió de dos termes
      o expressions contradictòries per crear un efecte expressiu o irònic.
    </Explain>
    <i>Exemple: "Silenci assordant" o "Feliç tristesa"</i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Al·literació</H3>
    <Explain>
      L'al·literació és una figura retòrica que consisteix en la repetició d'un
      mateix so consonàntic en diverses paraules properes per crear un efecte
      musical o rítmic.
    </Explain>
    <i>Exemple: "El riu rugia rere els rocs" o "El poema de la pluja"</i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Apòstrofe</H3>
    <Explain>
      L'apòstrofe és una figura retòrica que consisteix en dirigir-se a una
      persona, cosa o entitat imaginària o absent com si estigués present.
    </Explain>
    <i>
      Exemple: "Oh, tu, mar salada, qui t'ha fet tan gran i tan blau?" (vers de
      Joan Salvat-Papasseit)
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Pleonasme</H3>
    <Explain>
      El pleonasme és una figura retòrica que consisteix en afegir una paraula
      innecessària per reforçar el sentit de l'expressió o per crear un efecte
      expressiu.
    </Explain>
    <i>Exemple: "Sortir fora" o "El nen petit"</i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Imatge</H3>
    <Explain>
      L'imatge és una figura retòrica que consisteix en evocar imatges o
      sensacions a través de paraules per crear un efecte poètic o visual.
    </Explain>
    <i>
      Exemple: "L'aire era fresc i net com una boca d'aigua de la font" o "Les
      fulles de l'arbre sospiraven al vent com un ballet de xinxolins"
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Epítet</H3>
    <Explain>
      L'epítet és un tipus de figura retòrica que consisteix en l'ús d'un
      adjectiu per a expressar una qualitat inherent al nom al qual fa
      referència. L'epítet pot ser positiu o negatiu i s'usa per a intensificar
      o reforçar el significat d'un terme.
    </Explain>
    <i>Exemple: "El blanc somni del passat"</i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Políptoton</H3>
    <Explain>
      El políptoton és una figura retòrica que consisteix en la repetició d'una
      paraula en diferents formes gramaticals en una mateixa frase o en frases
      properes. Aquesta figura retòrica crea un efecte d'enfasi o intensitat.
    </Explain>
    <i>
      Exemple: "No és la mort el que temo, sinó el no ser, no ser el que sóc"
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Hipèrbole</H3>
    <Explain>
      La hipèrbole és una figura retòrica que consisteix en l'exageració d'una
      idea, fent-la més gran o més petita del que realment és. Aquesta figura
      retòrica s'utilitza per a expressar emocions o idees amb més intensitat.
    </Explain>
    <i>Exemple: "He demanat això un milió de vegades"</i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Sinestèsia</H3>
    <Explain>
      La sinestèsia és una figura retòrica que consisteix en la unió
      d'expressions o sensacions de diferents sentits en una mateixa frase, per
      a descriure una experiència sensorial més complexa.
    </Explain>
    <i>Exemple: "La música és dolça als meus ulls"</i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Paradoxa</H3>
    <Explain>
      La paradoxa és una figura retòrica que consisteix en l'ús d'una frase que
      sembla contradir-se a si mateixa, però que en realitat conté una veritat
      profunda.
    </Explain>
    <i>Exemple: "La vida és una mort segura"</i>
  </div>
);

const ex5CAST = (
  <div>
    <H3>Políptoton</H3>
    <Explain>
      Consiste en la repetición de una palabra en diferentes formas
      gramaticales. Es una figura que se utiliza para llamar la atención sobre
      una palabra en particular y para enfatizar su significado.
    </Explain>
    <i>
      <u>Ejemplo:</u> "El que no trabaja, no come".
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Asíndeton</H3>
    <Explain>
      Consiste en la eliminación de las conjunciones que unen las palabras o
      frases en una enumeración o serie, lo que crea un efecto de rapidez y
      simplicidad.
    </Explain>
    <i>
      <u>Ejemplo:</u> "Vine, vi, vencí" (Julio César).
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Hipérbole</H3>
    <Explain>
      Es una exageración intencional que se utiliza para enfatizar una idea o
      imagen de una forma más dramática.
    </Explain>
    <i>
      <u>Ejemplo:</u> "Te he llamado mil veces".
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Ironía</H3>
    <Explain>
      Consiste en expresar lo contrario de lo que se quiere decir, con la
      intención de criticar o ridiculizar una situación o idea.
    </Explain>
    <i>
      <u>Ejemplo:</u> "¡Qué bonito día para quedarse en casa!" (cuando está
      lloviendo).
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Epíteto</H3>
    <Explain>
      Es el uso de un adjetivo que no añade nada al significado de la palabra a
      la que se refiere, sino que lo enfatiza.
    </Explain>
    <i>
      <u>Ejemplo:</u> "la blanca nieve", "el oscuro bosque".
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Metonimia</H3>
    <Explain>
      Consiste en utilizar una palabra para designar a otra que tiene una
      relación de causa-efecto, contenedor-contenido, autor-obra, entre otras.
    </Explain>
    <i>
      <u>Ejemplo:</u> "Llegó al poder la corona", donde "corona" se refiere a la
      institución o poder monárquico.
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Oxímoron</H3>
    <Explain>
      Es la unión de dos palabras que se contradicen entre sí y que generan un
      significado irónico o paradójico.
    </Explain>
    <i>
      <u>Ejemplo:</u> "un silencio atronador".
    </i>
    <br />
    <br />
    <hr />
    <br />

    <H3>Paradoja</H3>
    <Explain>
      La paradoja es una figura retórica que consiste en una afirmación o
      situación que parece contradictoria o imposible, pero que, tras un
      análisis más profundo, tiene sentido y puede ser verdadera.
    </Explain>
    <i>
      <u>Ejemplo:</u> "Solo sé que no sé nada"
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Eufemismo</H3>
    <Explain>
      El eufemismo es una figura retórica que consiste en utilizar una palabra o
      expresión menos directa o más suave para referirse a algo que puede
      resultar desagradable o inapropiado.
    </Explain>
    <i>
      <u>Ejemplo:</u> "Descansar en paz" en lugar de "estar muerto"
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Hipálage</H3>
    <Explain>
      La hipálage es una figura retórica que consiste en atribuir a una palabra
      o concepto características o cualidades que corresponden a otro elemento
      de la oración.
    </Explain>
    <i>
      <u>Ejemplo:</u> "La noche callada" en lugar de "el silencio de la noche"
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Antítesis</H3>
    <Explain>
      La antítesis es una figura retórica que consiste en contraponer dos ideas
      o conceptos opuestos para resaltar su diferencia y generar un efecto de
      contraste.
    </Explain>
    <i>
      <u>Ejemplo:</u> "Ser o no ser, esa es la cuestión"
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Encabalgamiento</H3>
    <Explain>
      El encabalgamiento es una figura retórica que consiste en continuar una
      oración o verso en el siguiente, sin pausa al final de la línea, para
      generar un efecto de fluidez y continuidad.
    </Explain>
    <i>
      <u>Ejemplo:</u> "Es una luna que mira a las / tristezas calladas de los
      campos"
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Enumeración</H3>
    <Explain>
      La enumeración es una figura retórica que consiste en listar una serie de
      elementos, ya sean concretos o abstractos, para enfatizar su importancia o
      dar mayor detalle a la idea que se quiere transmitir.
    </Explain>
    <i>
      <u>Ejemplo:</u> "Llegué, saludé, me senté, bebí un trago, encendí un
      cigarro"
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Aliteración</H3>
    <Explain>
      La aliteración es una figura retórica que consiste en la repetición del
      mismo sonido o grupo de sonidos consonantes en varias palabras seguidas,
      con el fin de crear un efecto rítmico o sonoro.
    </Explain>
    <i>
      <u>Ej:</u> El ruido con que rueda el río.
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Apóstrofe</H3>
    <Explain>
      El apóstrofe es una figura retórica que consiste en dirigirse directamente
      a una persona, cosa o idea, como si estuviera presente, aunque en realidad
      no lo esté.
    </Explain>
    <i>
      <u>Ej:</u> ¡Oh, noche que guiaste!
      <br />
      Oh, noche amable más que el alborada!{" "}
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Quiasmo</H3>
    <Explain>
      El quiasmo es una figura retórica que consiste en invertir el orden de los
      términos de dos frases o cláusulas paralelas, de modo que se cree un cruce
      o entrecruzamiento de ideas.
    </Explain>
    <i>
      <u>Ej:</u> No es más grande el que más espacio ocupa, sino el que más
      espacio deja libre.{" "}
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Personificación</H3>
    <Explain>
      La personificación es una figura retórica que consiste en atribuir
      cualidades humanas a seres inanimados, animales o abstractos.
    </Explain>
    <i>
      <u>Ej:</u> El sol se levanta con alegría.
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Paronomasia</H3>
    <Explain>
      La paronomasia es una figura retórica que consiste en utilizar palabras
      que se parecen en su sonido pero tienen distinto significado, con el fin
      de crear un efecto cómico, ingenioso o memorable.
    </Explain>
    <i>
      <u>Ej:</u> La vida es sueño y los sueños, sueños son.{" "}
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Pleonasmo</H3>
    <Explain>
      El pleonasmo es una figura retórica que consiste en utilizar palabras
      innecesarias para reforzar el significado de una expresión, a menudo con
      fines estilísticos o enfáticos.
    </Explain>
    <i>
      <u>Ej:</u> Salir afuera, subir arriba, entrar adentro, bajar abajo.
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Sinécdoque</H3>
    <Explain>
      La sinécdoque es una figura retórica que consiste en utilizar una parte de
      algo para referirse al todo o viceversa, o bien tomar el nombre de una
      materia por la cosa misma.
    </Explain>
    <i>
      <u>Ex:</u> Tengo cuatro bocas que alimentar (cuatro personas).
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Sinestesia</H3>
    <Explain>
      La sinestesia es una figura retórica que consiste en mezclar o asociar
      sensaciones o percepciones de diferentes sentidos en una misma expresión.
    </Explain>
    <i>
      <u>Ex:</u> El amarillo tiene un sabor dulce (mezcla de los sentidos del
      gusto y de la vista).
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Metáfora</H3>
    <Explain>
      La metáfora es una figura retórica que consiste en establecer una relación
      de semejanza entre dos elementos sin usar la palabra "como" o "parece".
    </Explain>
    <i>
      <u>Ex:</u> Eres un sol (se establece una relación de semejanza entre la
      persona y el sol).
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Interrogación Retórica</H3>
    <Explain>
      La interrogación retórica es una figura retórica que consiste en hacer una
      pregunta que no requiere una respuesta, sino que se utiliza para enfatizar
      una idea o hacer una afirmación.
    </Explain>
    <i>
      <u>Ex:</u> ¿Acaso no somos todos seres humanos? (la pregunta es retórica y
      no requiere una respuesta, sino que se utiliza para enfatizar la idea de
      que todos somos iguales).
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Paralelismo</H3>
    <Explain>
      El paralelismo es una figura retórica que consiste en repetir una
      estructura sintáctica similar en varias frases u oraciones para crear un
      efecto rítmico y enfatizar una idea.
    </Explain>
    <i>
      <u>Ex:</u> Veni, vidi, vici (repetición de la estructura "verbo +
      pronombre + verbo" en tres frases sucesivas).
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Parábola</H3>
    <Explain>
      La parábola es una figura retórica que consiste en una narración que tiene
      una intención didáctica o moralizante, y que utiliza una historia sencilla
      para ilustrar una enseñanza o una verdad universal.
    </Explain>
    <i>
      <u>Ex:</u> La parábola del sembrador (relato que ilustra la importancia de
      sembrar en buena tierra para obtener una buena cosecha).
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Metonimia</H3>
    <Explain>
      La metonimia es una figura retórica que consiste en utilizar un término
      para designar algo relacionado con él, pero que no es lo mismo, o bien
      sustituir un nombre propio por una característica o atributo que lo
      identifica.
    </Explain>
    <i>
      <u>Ex:</u> Bebió un vaso (el término "vaso" se utiliza para referirse al
      contenido que contiene).
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Sarcasmo</H3>
    <Explain>
      El sarcasmo es una figura retórica que consiste en decir lo contrario de
      lo que se quiere dar a entender, con la intención de ridiculizar o
      expresar desprecio hacia algo o alguien. Se suele utilizar en tono irónico
      y suele estar cargado de humor negro.
    </Explain>
    <i>
      <u>Ex:</u> "¡Qué inteligente eres! No se te escapa una" (dirigido a
      alguien que acaba de cometer un error garrafal)
    </i>
    <br />
    <br />
    <hr />
    <br />
    <H3>Hipérbaton</H3>
    <Explain>
      El hipérbaton es una figura retórica que consiste en alterar el orden
      natural de las palabras en una oración con el objetivo de generar un
      efecto poético o enfatizar una idea en particular. El hipérbaton puede
      crear una sensación de desorden o desconcierto, pero también puede ser
      utilizado para crear un ritmo o una cadencia especial en el discurso.
    </Explain>
    <i>
      <u>Ex:</u> "A la orilla del agua, sentado en un banco, estaba él" en lugar
      de "Él estaba sentado en un banco a la orilla del agua."
    </i>
  </div>
);

const ex6CAT = (
  <div>
    <Explain>
      La fonètica és la branca de la lingüística que s'ocupa de l'estudi dels
      sons del llenguatge. A través de la fonètica, podem descriure i
      classificar els sons que produïm al parlar. Una eina fonamental per a
      aquesta tasca és l'alfabet fonètic internacional <b>(AFI)</b>, que
      consisteix en un conjunt de símbols que representen cada so fonètic d'una
      manera estandarditzada.
      <br></br>
      <br></br>
      <b>Les assimilacions i sonoritzacions</b> són processos fonètics que tenen
      lloc quan pronunciem paraules o frases. Les assimilacions són canvis que
      es produeixen en els sons perquè siguin més fàcils de pronunciar en
      contextos determinats. Per exemple, quan pronunciem la paraula{" "}
      <b>"impossible"</b>, la consonant <b>"m"</b> es converteix en un so nasal
      i sonor a causa de la influència de la consonant <b>"n"</b> que la
      segueix. Les sonoritzacions són canvis en la sonoritat d'un so, que pot
      passar de ser sord a sonor o viceversa, en funció dels sons que el
      rodegen.
    </Explain>

    <H2>Grups fonètics segons el Mode d'articulació</H2>
    <p>
      Cal recalcar que les respectives sonoritzacions es troben en el mateix
      grup fonètic, per exemple, la sonorització de <b>[p]</b> és <b>[b]</b>.
    </p>
    <H3>Oclusius</H3>
    <ul>
      <li>
        <b>Sonors: </b>[ b ] [ d ] [ g ] &rarr;{" "}
        <i style={{ color: "red" }}>"bodega"</i>
        <ul>
          <li>
            Recorda que el so <b>[ g ]</b> fa referència a sons com{" "}
            <i>"g + a"</i>, no <i>"g + e"</i> &rarr;{" "}
            <i style={{ color: "red" }}>"gat"</i>
          </li>
        </ul>
      </li>
      <li>
        <b>Sords: </b>[ p ] [ t ] [ k ] &rarr;{" "}
        <i style={{ color: "red" }}>"petaca"</i>
        <ul>
          <li>
            Recorda que el so <b>[ k ]</b> també fa referència a sons com{" "}
            <i>"c + a"</i> &rarr; <i style={{ color: "red" }}>"casa"</i>
          </li>
        </ul>
      </li>
    </ul>

    <H3>Fricatius</H3>
    <ul>
      <li>
        <b>Sonors: </b>[ v ] [ ʒ ] [ z ] &rarr;{" "}
        <i style={{ color: "red" }}>"veges-ho"</i>
        <ul style={{ margin: "0.5rem 0" }}>
          <li>
            <b>[ ʒ ]: </b>Recorda que el so <b>[ ʒ ]</b> fa referència a sons
            com <i>"g + e"</i> o <i>"j + a"</i> &rarr;{" "}
            <i style={{ color: "red" }}>"gerra"</i>
          </li>
        </ul>
        <ul style={{ margin: "0.5rem 0" }}>
          <li>
            <b>[ z ]: </b>Recorda que el so <b>[ z ]</b> fa referència a la{" "}
            <b>S sonora</b>, per exemple: <i>"vocal + S + vocal"</i>, &rarr;{" "}
            <i style={{ color: "red" }}>"casa"</i>
          </li>
        </ul>
      </li>
      <li>
        <b>Sords: </b>[ f ] [ ʃ ] [ s ] &rarr;{" "}
        <i style={{ color: "red" }}>"feixos"</i>
        <ul style={{ margin: "0.5rem 0" }}>
          <li>
            <b>[ ʃ ]: </b>Recorda que el so <b>[ ʃ ]</b> fa referència a la so
            de la <b>X</b>, &rarr; <i style={{ color: "red" }}>"ximple"</i>
          </li>
        </ul>
        <ul style={{ margin: "0.5rem 0" }}>
          <li>
            <b>[ z ]: </b>Recorda que el so <b>[ s ]</b> fa referència a la{" "}
            <b>S sorda</b>, per exemple: &rarr;{" "}
            <i style={{ color: "red" }}>"sol"</i>
          </li>
        </ul>
      </li>
    </ul>

    <H3>Africats</H3>
    <p>Sonoritzacions:</p>
    <ul>
      <li>
        <b>[ tʃ ]</b> // <b>[ dʒ ]</b> &rarr; enuig // fetge
      </li>

      <li>
        <b>[ ks ]</b> // <b>[ gz ]</b> &rarr; extens // examen
      </li>

      <li>
        <b>[ ts ]</b> // <b>[ dz ]</b> &rarr; pots // realitzar
      </li>
    </ul>

    <H3>Laterals</H3>
    <ul>
      <li>
        [ l ] [ λ ] &rarr; <i style={{ color: "red" }}>cala // calla</i>
      </li>
    </ul>

    <H3>Vibrants</H3>
    <ul>
      <li>
        [ ɾ̼ ] [ r ] &rarr; <i style={{ color: "red" }}>cara // carro</i>
      </li>
    </ul>

    <H3>Nasals</H3>
    <ul>
      <li>
        [ m ] [ n ] [ ɲ ] &rarr;{" "}
        <i style={{ color: "red" }}>mare // nena // senyor</i>
      </li>
    </ul>

    <H3>Assimilacions</H3>

    <ul>
      <li style={{ margin: "0.5rem 0" }}>
        <b>[ m ]</b> &nbsp;&nbsp;//&nbsp;&nbsp; <b>[ n ]</b> + <b>[ f ]</b>{" "}
        <span style={{ fontSize: "1.5rem" }}>
          &nbsp;&nbsp; &rarr;&nbsp;&nbsp;
        </span>{" "}
        <b>[ ɱ ]</b>{" "}
        <i style={{ color: "red" }}>
          <span style={{ fontSize: "1.5rem" }}>
            &nbsp;&nbsp; &rarr;&nbsp;&nbsp;
          </span>{" "}
          emfasi <b>[ eɱfazi ]</b>
        </i>
      </li>
      <li style={{ margin: "0.5rem 0" }}>
        <b>[ n ]</b> + <b>[ g ]</b> &nbsp;&nbsp;//&nbsp;&nbsp; <b>[ k ]</b>{" "}
        <span style={{ fontSize: "1.5rem" }}>
          &nbsp;&nbsp; &rarr;&nbsp;&nbsp;
        </span>{" "}
        <b>[ ŋ ]</b>{" "}
        <i style={{ color: "red" }}>
          <span style={{ fontSize: "1.5rem" }}>
            &nbsp;&nbsp; &rarr;&nbsp;&nbsp;
          </span>{" "}
          banquer <b>[ baŋké ]</b>
        </i>
      </li>
      <li style={{ margin: "0.5rem 0" }}>
        <b>[ n ]</b> + <b>[ ʒ ]</b> &nbsp;&nbsp;//&nbsp;&nbsp; <b>[ ʃ ]</b>{" "}
        &nbsp;&nbsp;//&nbsp;&nbsp; <b>[ ɲ ]</b> &nbsp;&nbsp;//&nbsp;&nbsp;{" "}
        <b>[ λ ]</b>
        <span style={{ fontSize: "1.5rem" }}>
          &nbsp;&nbsp; &rarr;&nbsp;&nbsp;
        </span>{" "}
        <b>[ ɲ ]</b>{" "}
        <i style={{ color: "red" }}>
          <span style={{ fontSize: "1.5rem" }}>
            &nbsp;&nbsp; &rarr;&nbsp;&nbsp;
          </span>
          un llibre <b>[ uɲλibɾ̼e ]</b>
        </i>
      </li>
      <li style={{ margin: "0.5rem 0" }}>
        <b>[ l ]</b> + <b>[ ʒ ]</b> &nbsp;&nbsp;//&nbsp;&nbsp; <b>[ ʃ ]</b>{" "}
        &nbsp;&nbsp;//&nbsp;&nbsp; <b>[ ɲ ]</b> &nbsp;&nbsp;//&nbsp;&nbsp;{" "}
        <b>[ λ ]</b>
        <span style={{ fontSize: "1.5rem" }}>
          &nbsp;&nbsp; &rarr;&nbsp;&nbsp;
        </span>{" "}
        <b>[ λ ]</b>{" "}
        <i style={{ color: "red" }}>
          <span style={{ fontSize: "1.5rem" }}>
            &nbsp;&nbsp; &rarr;&nbsp;&nbsp;
          </span>
          el ximple <b>[ eλʃimple ]</b>
        </i>
      </li>
      <li style={{ margin: "0.5rem 0" }}>
        <b>[ n ]</b> + <b>[ b ]</b> &nbsp;&nbsp;//&nbsp;&nbsp; <b>[ p ]</b>{" "}
        &nbsp;&nbsp;//&nbsp;&nbsp; <b>[ m ]</b>
        <span style={{ fontSize: "1.5rem" }}>
          &nbsp;&nbsp; &rarr;&nbsp;&nbsp;
        </span>{" "}
        <b>[ m ]</b>{" "}
        <i style={{ color: "red" }}>
          <span style={{ fontSize: "1.5rem" }}>
            &nbsp;&nbsp; &rarr;&nbsp;&nbsp;
          </span>
          enmig <b>[ emi</b>tʃ ]
        </i>
      </li>
    </ul>
    <br />
    <H3>Sonoritzacions</H3>
    <ul>
      <li>
        <b>[ tʃ ]</b> &rarr; [ dʒ ]
        <ul style={{ margin: "0.5rem 0" }}>
          <li>
            <b>[ tʃ ]</b>:{" "}
            <i style={{ color: "red" }}>
              "x<b>ocolata</b>" [ tʃ ]
            </i>
          </li>
          <li>
            Sonorització:{" "}
            <i style={{ color: "red" }}>
              "ra<b>ig</b> extens" [ dʒ ]
            </i>
          </li>
        </ul>
      </li>

      <li>
        <b>[ ks ]</b> &rarr; [ gz ]
        <ul style={{ margin: "0.5rem 0" }}>
          <li>
            <b>[ ks ]</b>:{" "}
            <i style={{ color: "red" }}>
              "e<b>x</b>tens" [ ks ]
            </i>
          </li>
          <li>
            Sonorització:{" "}
            <i style={{ color: "red" }}>
              "e<b>x</b>amen " [ gz ]
            </i>
          </li>
        </ul>
      </li>

      <li>
        <b>[ ts ]</b> &rarr; [ dz ]
        <ul style={{ margin: "0.5rem 0" }}>
          <li>
            <b>[ ts ]</b>:{" "}
            <i style={{ color: "red" }}>
              "po<b>ts</b>" [ ts ]
            </i>
          </li>
          <li>
            Sonorització:{" "}
            <i style={{ color: "red" }}>
              "po<b>ts</b> oberts " [ dz ]
            </i>
          </li>
        </ul>
      </li>
    </ul>
  </div>
);
