import React from "react";
import styled from "styled-components";

function Ajuda({ exercisenum, title, subtitle, chapter, language }) {
  const Content = () => {
    if (exercisenum == 3 && language == "cat") {
      return ex3CAT;
    } else if (exercisenum == 3 && language == "cast") {
      return "cast";
    }
    else if (exercisenum == 6 && language == "cast")
      return ex6CAST;
  };

  if(exercisenum != 1 && exercisenum != 2)
  return (
    <Container>
      <h1>Ajuda en "{subtitle}"</h1>
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

  .example{
    color: red;
  }
  th {
    min-width: 10rem;

    background-color: #f4512d;
    color: white;
  }
  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  td{
    padding: 0.5rem;
  }

  .table-container{
    overflow-x: scroll;
    border: 1px solid #e1e1e1;
    padding: 1rem;
  }

  th{
    height: 3rem;
  }

  td:nth-child(1){
    background-color: #eeeeee;
  }


`;

const H2 = styled.h2`
margin-top: 1.5rem;
margin-bottom: .5rem;
`
const Explain = styled.div`
margin: 2rem 3rem;
background-color: #e1e1e1;
padding: 1.5rem;
padding-top: 1rem;
border-radius: 1rem;
`
export default Ajuda;

var ex3CAT = (
  <div>
    <Explain>
    <H2 style={{marginTop: "0"}}>Com funciona?</H2>
    <p><b>És ben senzill!</b> Escriu a la casella la conjugació del verb que et demana l'exercici en el temps verbal esmentat.</p>
    </Explain>
    
    <H2>Les conjugacions</H2>
    Per fer servir els verbs ens és molt útil tenir verbs model, que agrupem en
    tres conjugacions:
    <br />
    <h3 style={{marginTop:"1rem", marginBottom:"0.3rem"}}>1a conjugació</h3>
    Acaben en <b>-ar</b>. La majoria són regulars i segueixen el model de treballar o
    parlar (vegeu la taula inferior).
    <h3 style={{marginTop:"1rem", marginBottom:"0.3rem"}}>2a conjugació</h3>
    Acaben en <b>-er, -re</b>. Tenen com a model el verb viure. Molts tenen una -c
    final al present quan els conjuguem amb jo. Els verbs dur i dir són de la
    segona conjugació.
    <h3 style={{marginTop:"1rem", marginBottom:"0.3rem"}}>3a conjugació</h3>
    Acaben en <b>-ir</b>. Segueixen dos models: els dels verbs dormir i llegir. Els
    verbs tenir (o tindre) i venir (o vindre) són de la tercera conjugació.
    <br />
    <br />
    <hr />
    <H2>Els temps verbals</H2>
    <p>A continuació us deixem un petit exemple amb el verb <b>CANTAR</b> de com es fan les diferents conjugacions. <b>RECORDEU</b> que també hi ha verbs irregulars i, per tant, no tots segueixen la norma.</p>
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
          <th>Plusquamperfet</th> <th>Passat simple</th> <th>Passat anterior</th>{" "}
          <th>Passat perifràstic</th> <th>Passat anterior perifràstic</th>{" "}
          <th>Futur</th> <th>Futur perfet</th> <th>Condicional</th>{" "}
          <th>Condicional perfet</th>{" "}
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
          <td className="verbTable-td">canti</td>{" "}
          <td className="verbTable-td">cantés</td>{" "}
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
          <td className="verbTable-td">Ell, ella, vostè</td>{" "}
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
          <td className="verbTable-td">Vosaltres, vós</td>{" "}
          <td className="verbTable-td">canteu</td>{" "}
          <td className="verbTable-td">cantéssiu</td>{" "}
          <td className="verbTable-td">hàgiu cantat</td>{" "}
          <td className="verbTable-td">haguéssiu cantat</td>{" "}
        </tr>{" "}
        <tr>
          {" "}
          <td className="verbTable-td">Ells, elles, vostès</td>{" "}
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


const ex6CAST = 
<div>
    <H2>Tipos de palabaras </H2>
    Las palabras se clasifican en funcion de su composición (lexemas y morfemas)<br/><br/>
    <h3>Palabras Primitivas</h3>
    Solo cuentan con <b> un lexema</b>. Ej: <i className="example">Silla</i><br/><br/>
    <h3>Palabras simples</h3>
    Se componen de <b>un lexema</b> y uno o más <b>morfemas flexivos</b>. Ej <i className="example">Niñ<u>as</u></i><br/><br/>
</div>
;