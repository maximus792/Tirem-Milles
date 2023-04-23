function generalErrorsCast(word) {
  /* ACABATS EN -DAD -> -DAT */
  if (
    word[word.length - 1] == "d" &&
    word[word.length - 2] == "a" &&
    word[word.length - 3] == "d"
  ) {
    return word.slice(0, word.length - 1) + "t";
  }

  /* Treure errors */
  if (word.includes("á")) word = word.replace("á", "a");
  else if (word.includes("é")) word = word.replace("é", "e");
  else if (word.includes("ó")) word = word.replace("ó", "o");
  else if (word.includes("í") || word.includes("ï"))
    word = word.replace("í", "i").replace("ï", "i");
  else if (word.includes("ú") || word.includes("ü"))
    word = word.replace("ú", "u").replace("ü", "u");

  /* PARAULES CONCRETES */

  if (word.toLowerCase() === "innobador") return "inobador";
  else if (word.toLowerCase() === "innobadora") return "inobadora";
  else if (word.toLowerCase() === "innobadores") return "inobadores";
  else if (word.toLowerCase() === "innobadoras") return "inobadoras";

  /* CANVI DE LLETRES */
  if (word.includes("v") && word.includes("b")) {
    let result = "";
    for (let i = 0; i < word.length; i++) {
      if (word[i] === "v") {
        result += "b";
      } else if (word[i] === "b") {
        result += "v";
      } else {
        result += word[i];
      }
    }
    return result;
  } else if (word.includes("v") && word.indexOf("v") != 0 && word.length > 2) {
    return word.replace("v", "b");
  } else if (
    word.includes("b") &&
    word.indexOf("b") != 0 &&
    word.indexOf("b") != word.length &&
    word[word.indexOf("b") - 1] != "m" &&
    word[word.indexOf("b") + 1] != "t" &&
    word[word.indexOf("b") + 1] != "l" &&
    word[word.indexOf("b") + 1] != "r"
  ) {
    return word.replace("b", "v");
  } else if (word.includes("ss")) {
    return word.replace("ss", "s");
  } else if (
    word.includes("s") &&
    word.indexOf("s") > 1 &&
    word.indexOf("s") < word.length - 1 &&
    "aeiou".includes(word[word.indexOf("s") - 1]) &&
    "aeiou".includes(word[word.indexOf("s") + 1])
  ) {
    return word.replace("s", "ss");
  }

  switch (word.toLowerCase()) {
    case "ha":
      word = "a";
      break;
    case "son":
      word = "són";
      break;
    default:
      break;
  }

  return word;
}

export default generalErrorsCast;
