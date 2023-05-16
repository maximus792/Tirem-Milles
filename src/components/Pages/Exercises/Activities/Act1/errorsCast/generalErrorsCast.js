function generalErrorsCast(word) {
  /* ACABATS EN -DAD -> -DAT */
  if (
    word[word.length - 1] == "d" &&
    word[word.length - 2] == "a" &&
    word[word.length - 3] == "d"
  ) {
    return word.slice(0, word.length - 1) + "t";
  }

  if (word[word.length - 1] == "a" && word[word.length - 2] == "i") {
    return word.slice(0, word.length - 2) + "ía";
  }

  /* Treure errors */
  if (word.includes("á")) word = word.replace("á", "a");
  else if (word.includes("é")) word = word.replace("é", "e");
  else if (word.includes("ó")) word = word.replace("ó", "o");
  else if (word.includes("í") || word.includes("ï"))
    word = word.replace("í", "i").replace("ï", "i");
  else if (word.includes("ú") || word.includes("ü"))
    word = word.replace("ú", "u").replace("ü", "u");
  

  if (word.includes("nn")) return word.replace("nn", "n");
  /* PARAULES CONCRETES */

  if (word.toLowerCase() === "desde") return word.replace("esd", "es d");
  if (word.toLowerCase().includes("encia"))
    return word.replace("encia", "éncia");
  if (word.toLowerCase().includes("mb")) return word.replace("mb", "nv");
  if (word.toLowerCase() === "prever") return word.replace("prever", "preveer");
  if (word.toLowerCase() === "y") return word.replace("y", "i");
  if (word.toLowerCase().includes("rred")) return word.replace("rred", "rrer");
  if (word.toLowerCase().includes("cue")) return word.replace("cue", "qüe");
  if (word.toLowerCase().includes("cua")) return word.replace("cua", "qua");
  if (word.toLowerCase() === "estoy") return word.replace("estoy", "soy");
  if (word.toLowerCase() === "está") return word.replace("está", "es");
  if (word.toLowerCase() === "colocar") return word.replace("colocar", "poner");
  if (word.toLowerCase() === "son") return word.replace("son", "són");
  if (word.toLowerCase() === "es") return word.replace("es", "és");

  if (word.toLowerCase() === "hacia") return word.replace("hacia", "hacía");

  if (word.toLowerCase().includes("y")) return word.replace("y", "i");

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
