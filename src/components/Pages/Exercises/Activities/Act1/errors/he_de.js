function he_de(word, word2, randomnum) {

  
if(word.toLowerCase() === "i" && word2.toLowerCase() === "a"){
  return ["hi", "ha"]
}

  switch (word.toLowerCase()) {
    case "he":
      if (word2 == "de") {

        word = "tinc";
        word2 = "que";
      }
      else{
        return undefined
      }
      break;

    case "has":
      if (word2 == "de") {

        word = "tens";
        word2 = "que";
      }
      else{
        return undefined
      }
      break;
    case "ha":
      if (word2 == "de") {

        word = "té";
        word2 = "que";
      }
      else{
        return undefined
      }
      break;
    case "hem":
      if (word2 == "de") {

        word = "tenim";
        word2 = "que";
      }
      else{
        return undefined
      }
      break;
    case "heu":
      if (word2 == "de") {

        word = "teniu";
        word2 = "que";
      }
      else{
        return undefined
      }
      break;
    case "han":
      if (word2 == "de") {

        word = "tenen";
        word2 = "que";
      }
      else{
        return undefined
      }
      break;
    default:
      return undefined
      break;
  }

  return [word, word2];
}

export default he_de;
