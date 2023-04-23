
function femMasc(word1,word2,word3){

    var masculi = `afores deute deutes front fronts orde ordes avantatge avantatges dot full fulls pebre bacteri bacteris dubte dubtes interviu pendent pendents batent escafandre llegum llegums penitenciari penitenciaris compte comptes espinacs lleixiu radiocasset radiocassets corrent corrents estratagema marge marges senyal senyals costum costums estruç estruços narius titella titelles desavantatge desavantatges`;

    masculi.split(" ").map((element) => {
      if ((word1.toLowerCase() === "els" && word2.toLowerCase() === element) || (word2.toLowerCase() === "els" && word3.toLowerCase() === element))
        return ["les", element];
      else if ((word1.toLowerCase() === "als" && word2.toLowerCase() === element) || (word2.toLowerCase() === "als" && word3.toLowerCase() === element))
        return ["a les", element];
      else if ((word1.toLowerCase() === "el" && word2.toLowerCase() === element) || (word2.toLowerCase() === "el" && word3.toLowerCase() === element))
        return ["la", element];
      else if ((word1.toLowerCase() === "al" && word2.toLowerCase() === element) || (word2.toLowerCase() === "al" && word3.toLowerCase() === element))
        return ["a la", element];
    });
  
  
    var femeni = `afores deute front orde avantatge dot full pebre bacteri dubte interviu pendent batent escafandre llegum penitenciari compte comptes espinacs lleixiu radiocasset corrent estratagema marge senyal costum estruç narius titella desavantatge`;
  
    femeni.split(" ").map((element) => {
      if (word1.toLowerCase() === "les" && word2.toLowerCase() === element)
        return ["els", element];
      else if (word1.toLowerCase() === "a" && word2.toLowerCase() === "les" && word3.toLowerCase() === element)
        return ["als", element];
      else if (word1.toLowerCase() === "la" && word2.toLowerCase() === element)
        return ["el", element];
      else if (word1.toLowerCase() === "a" && word2.toLowerCase() === "la" && word3.toLowerCase() === element)
        return ["al", element];
    });

    return undefined
}

export default femMasc