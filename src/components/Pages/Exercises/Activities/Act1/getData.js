const data = [`
  El sol s'amagava darrere dels turons quan la Martina va arribar a la petita vila de muntanya on havia decidit passar uns dies per desconectar de la feina i la ciutat. Amb el seu equipatge a l'esquena, va caminar fins a la casa rural que havia reservat per internet, una antiga masia de pedra amb vistes a la vall.
  El propietari de la casa, en Miquel, la va rebre amb un somriure i li va ensenyar la seva habitació, amb una gran finestra des d'on es podia veure el bosc i la muntanya. La Martina va deixar la seva motxilla a un racó i va sortir al pati, on unes gallines picotejaven el sòl.
  La vida a la vila era tranquil·la i pausada, sense sorolls ni presses. La Martina va passar els primers dies fent excursions per la muntanya, respirant aire pur i descobrint paisatges espectaculars. A les tardes, llegia al balcó de la seva habitació, amb una tassa de te i unes galetes que havia comprat al forn del poble.
  Una nit, mentre sopava a la terrassa d'un restaurant del poble, la Martina va conèixer en Joan, un jove de la vila que treballava a la fàbrica de formatge del seu oncle. Van parlar de les seves vides, les seves aficions i les seves preocupacions. En Joan li va ensenyar alguns racons del poble que ella no havia descobert encara.
  A mesura que passaven els dies, la Martina i en Joan es van veure més sovint. Van fer caminades junts, van passejar pel riu i van anar a escoltar música en directe a la plaça del poble. Amb el temps, van començar a sentir una atracció l'un per l'altre, però no van voler afanyar les coses.
  Una nit, després d'un sopar a la casa de la la Martina, van seure al balcó i van veure les estrelles. En Joan li va confessar que havia estat enamorat d'ella des del primer dia, però que no volia pressionar-la. La Martina es va emocionar i li va confessar que ella també sentia alguna cosa per ell.
  Els dies van passar ràpids i, abans que s'adonessin, havien passat dues setmanes a la vila. La Martina i en Joan van decidir que volien intentar una relació a distància i es van intercanviar números de telèfon i adreces de correu electrònic. Es van besar acomiadant-se a l'estació de tren i van prometre mantenir el contacte.
  la Martina va tornar a la ciutat amb el cor ple d'emocions. La seva estada a la vila havia estat un respir d'aire fresc enmig de la seva vida estressant i havia conegut a una persona especial que, malgrat la distància, volia intentar-ho amb ella. Va prometre tornar a la vila, de ben segur.
  `.replaceAll("—", "\n-")
  .split(". "),



]
  

function getData() {
/*   var rannum = Math.floor(Math.random()*data.length); */
 var rannum = 0
  return data[rannum];
}

export default getData;
