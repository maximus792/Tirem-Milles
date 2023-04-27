function femMasc(word1, word2) {
  var masculi = `afores deute deutes front fronts orde ordes avantatge avantatges dot full fulls pebre bacteri bacteris dubte dubtes interviu pendent pendents batent escafandre llegum llegums penitenciari penitenciaris compte comptes espinacs lleixiu radiocasset radiocassets corrent corrents estratagema marge marges senyal senyals costum costums estruç estruços narius titella titelles desavantatge desavantatges`;

  if (word1.toLowerCase() == "els" && masculi.includes(word2))
    console.log(`${word1}  ${word2}`);

  if (word1.toLowerCase() == "els" && masculi.includes(word2))
    return ["les ", word2];
  else if (word1.toLowerCase() === "als" && masculi.includes(word2))
    return ["a les ", word2];
  else if (word1.toLowerCase() === "el" && masculi.includes(word2))
    return ["la ", word2];
  else if (word1.toLowerCase() === "al" && masculi.includes(word2))
    return ["a la ", word2];

  var femeni = `alicates au aus esplendor esplendors psicoanàlisi psicoanàlisis allau allaus cercavila estrena estrenes remor remors amargor amargors calor calors claror clarors frescor frescors resplendor resplandors anàlisi anàlisis dent dents gènesi gènesis resta restes àncora àncores desfilada desfilades marató maratons Sida síndrome síndromes andana andanes disfressa disfresses olor olors suor suors apoteosi apoteosis dita dites oïda oïdes verdor verdors aroma aromes esperma espermes postres`;

  if (word1.toLowerCase() === "les" && femeni.includes(word2))
    return ["els", word2];
  else if (word1.toLowerCase() === "a les" && femeni.includes(word2))
    return ["als", word2];
  else if (word1.toLowerCase() === "la" && femeni.includes(word2))
    return ["el", word2];
  else if (word1.toLowerCase() === "a la" && femeni.includes(word2))
    return ["al", word2];

  return undefined;
}

export default femMasc;
