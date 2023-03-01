import styled from "styled-components";
import Word from "./Word";


const data =
  `Quan em van sortir les primeres dents em feien molt de mal les genives. Quan em toquejava Ia boca plena de babes i em queixalava els dits i els punys en senyal de dolor, fra Guillem em donava crosta de pa sucada amb Ilet i mel perqué Ia mossegués; així aconseguia calmar-me i evitar que somiqués. Recordo que em vaig acxÑumar de a callar quan, mentre aprenia a caminar, queia per terra i prenia mal. Em tornava a aixecar, mirava el meu mestre amb cara de pena i ell venia corrent, m'espolsava Ia sorra de les ferides i em netejava la sang amb un raig d'aigua. Jo no gemegava ni em planyia, ni plorava, per descomptat. Calia restar en silenci- Després el meu mestre em donava un copet al cul i assenyalava endavant amb el dit índex, tot indicant-me silenciosament que ho tornés a intentar. Quan tenia mal de panxa, mal d'orella o mal de coll, em comunicava amb el meu tutor tibant-li Ia màniga de Ia cogulla. Fra Guillem s'ajupia i es posava al meu nivell perqué jo li assenyalés la part del cos que em neguitejava. Llavors m'agafava a coll i em duia a la infermeria. Allá, mentre jo tot obedient assegut a la trona, sense perdre detall de res, ell barrejava en el seu morter herbes, arrels, extractes i olis, i em preparava el medicament apropiat. Jo adoravaAquelles prestatgeries atapeides em tenien el cor robat, totes plenes de components estranys, classificats en pots de vidre d'ambre i de terrissa col•locats en fileres i etiquetats amb rétols escrits en llatí. De nen, jo somniava coses molt agradables. De vegades somniava que vivia en una casa molt bonica i que tenia una mare molt maca que sempre estava mi. S'assemblava a Ia Mare de Déu. Em mirava amorosament, em somreia i m'acaronava les galtes amb unes mans suaus i fines que jo aleshores relacionava amb el palp de les flors del carbas" M'agradava somniar amb aquella mare. Després, quan em em sabia greu no veure-la més i provava de tornar-me a adormir continuar-la somniant, sense aconseguir-ho. Aquells somnis que tenia em de amb rara autenticitat, I'olor d'una mare, barreja d'espígol i de mel i el tacte cálid de les seves mans, entre el vellut i la seda. El que més m'acontentava de tots aquells somnis era que semblaven de veritat. D'altres vegades somniava que aquella mare i jo passejàvem contents i cofois per uns carrers plens de gent, amb cases a banda i banda. Ens asséiem en unes cadires altes davant d'una tauleta rodona de marbre lluent i una senyora un pél grassa amb un davantal blanc i una mica tacat ens duia unes tasses amb xocolata desfeta. Jo la xomlata, al convent, no Ihavia vista ni tastada mai, peró a dins meu, sense per qué, jo sabia del cert que alló tan bo i que feia aquella olor tan bona, era xocolata. Quan vaig fer tres anys, malgrat que era un nen sa, fort, Ilest i curiós, i a que havia estat criat en un ambient de bonesa i d'estimació, jo encara no parlava. Fra Guillem, que sempre es preocupava molt de mi en tot allb que tingués a veure amb la meva educació i amb el meu va decidir de fer una consulta al despatx del pare prior. —Aquest nen necessita sentir parlar, dom Pere —va afirmar el meu mestre mentre el prior l'escoltava assegut a la cadira de fusta treballada i seient de cuir, davant la seva taula grossa, curulla de El Xic viu envoltat del silenci més absolut. I aixó, que li és bo, com ho és, sens dubte, per a tots els membres d'aquesta comunitat, també li és dolent: si no sent parlar, no n'aprendrà mai. Em sembla, dom Pere, que si aixó passa, en Ferran quedará mut per El prior, que segons vaig saber més endavant, havia estat I'impulsor de Ia meva adopció dins Ia comunitat de Valltrista i que havia defensat amb determinació aquella proposta davant el Capítol General de Ia Congregació de Cartoixes en qué s'havia debatut i aprovat aquella ordenació excepcional va respirar fondo, neguitejat per allà que fra Guillem li vaticinava. —Entenc el vostre punt de vista, fra Guillem —va afirmar, amb la gravetat que el moment requeria—. Peró els Estatuts de I'orde són molt dars en aquest punt. Diuen, i vós ho sabeu perfectament, que no és permés que els germans parlin d'alló que vulguin, ni que disposin de la Ilibertat de fer-ho quan vulguin. Fra Guillem, sort, no va —Ho sé, dom Pere. Us agraeixo que feu referéncia als Estatuts. perqué, si no vaig errat, també diuen que, en tot alló que pugui ser útil a la nostra feina, els germans donats podem parlar, sempre que utilitzem poques paraules i que siguin ben mesurades i pronunciades en veu baixa. El treball que em va ser encomanat fa tres anys, a més de la meva tasca d'infermer, va ser, precisament, la criança de Ia criatura i Ia educació. El prior, asegut i repenjat al respatller, no havia deixat de mirar el meu mestre en cap moment mentre l'escoltava. Va aclucar els ulls, va inspirar lentament una alenada que semblava que no havia d'acabar mai d'omplir-li el pit, va contenir I'aire durant uns instants i tot seguit el va anar exhalant lentament pel nas. Fra Guillem va continuar. la infermeria. Era el meu lloc preferit de tota la cartoixa.
`
    .replaceAll("—", "\n-")
    .split(". ");
function Act1() {
  const numberOfPhrases = 2;
  const maxPhraseWordLenght = 100;
  const index = Math.floor(Math.random() * (data.length - numberOfPhrases));

  var result = "";

  for (let i = 0; i < numberOfPhrases; i++) {
    if (data[index + i].split(" ").length <= maxPhraseWordLenght)
      result += data[index + i] + ". ";
  }

  return (
    <Paragraph>
      {result.split(" ").map((word, i) => {
        return (
            <Word key={i} text={word} /> 
        );
      })}
    </Paragraph>
  );
}
const Paragraph = styled.p`
display: flex;
justify-content: flex-start;
flex-wrap: wrap;

span:first-child{
  text-transform: capitalize;
}
`

export default Act1;
