function generalErrors(word) {

  /* Treure grafies finals/incicials típiques */
  if (word.includes("eïtat")) return word.replace("eïtat", "itat");

  /* Gentilicis? */
 /* if (word[word.length-1] == "y" && word[word.length-2] == "n" && word[word.length-3] == "t" ) return word.replace("eïtat", "itat"); */

  /*l, l·l*/
  if (word.includes("l·l")) return word.replace("l·l", "l");
  else if (
    word.includes("l") &&
    "aeiouàèéíóòú".includes(word[word.indexOf("l") - 1]) &&
    "aeiouàèéíóòú".includes(word[word.indexOf("l") + 1])
  )
    return word.replace("l", "l·l");
  /* mn /mm /nn /i coses vàries */
  

  if (word.includes("mn")) return word.replace("mn","n")
  else if (word.includes("mm")) return word.replace("mm","nm")
  
  /* tj - j */
  if (
    word.includes("tj")) return word.replace("tj","j")
  
   
  if (word.toLowerCase() === "tant") {
    return "tan";
  } else if (word.toLowerCase() === "rebatut") {
    return "rebatit";
  } else if (word.toLowerCase() === "sobretot") {
    return "sobre tot";
  } else if (word.toLowerCase() === "cap") {
    return "ningun";
  } else if (word.toLowerCase() === "conrear") {
    return "cultivar";
  } else if (word.toLowerCase() === "conreu") {
    return "cultiu";
  } else if (word.toLowerCase() === "gens") {
    return "res";
  } else if (word.toLowerCase() === "endebaddes") {
    return "en va";
  } else if (word.toLowerCase() === "mentre") {
    return "mentres";
  } else if (word.toLowerCase() === "imbatut") {
    return "imbatit";
  } else if (word.toLowerCase() === "debatut") {
    return "debatit";
  } else if (word.toLowerCase() === "sabut") {
    return "sapigut";
  } else if (word.toLowerCase() === "vincle") {
    return "víncul";
  } else if (word.toLowerCase() === "tan") {
    return "tant";
  } else if (word.toLowerCase() === "brasiler") {
    return "brasileny";  
  } else if (word.toLowerCase() === "milions") {
    return "millons";
  } else if (word.toLowerCase() === "edats") {
    return "edads";
  } else if (word.toLowerCase() === "eines") {
    return "eïnes";
  } else if (word.toLowerCase() === "aprendre") {
    return "apendre";
  } else if (word.toLowerCase() === "comprendre") {
    return "compendre";
  } else if (word.toLowerCase() === "bronze") {
    return "bronce";
  } else if (word.toLowerCase() === "perseverar") {
    return "preservar";
  } else if (word.toLowerCase() === "antiga") {
    return "antigua";
  } else if (word.toLowerCase() === "dies") {
    return "díes";
  } else if (word.toLowerCase() === "coet") {
    return "cohet";
  } else if (word.toLowerCase() === "començar") {
    return "comensar";
  } else if (word.toLowerCase() === "descobrir") {
    return "descubrir";
  } else if (word.toLowerCase() === "medis") {
    return "mitjans";
  } else if (word.toLowerCase() === "mitjans") {
    return "medis";
  } else if (word.toLowerCase() === "nombrosos") {
    return "numerosos";
  } else if (word.toLowerCase() === "termini") {
    return "plaç";
  }

  /* TREURE GUIÓ de les paraules */
  if (word.includes("-")) {
    return word.replace("-", "");
  }

  /* NO TREURE ACCENT A SOC, O AFEGIR-LO */
  if (word == "soc" || word == "sóc") {
    return "sóc";
  }
  /* Treure accents */
  if (word.includes("à")) return word.replace("à", "a");
  else if (word.includes("è") || word.includes("é"))
    return word.replace("è", "e").replace("é", "e");
  else if (word.includes("ò") || word.includes("ó"))
    return word.replace("ò", "o").replace("ó", "o");
  else if (word.includes("í") || word.includes("ï"))
    return word.replace("í", "i").replace("ï", "i");
  else if (word.includes("ú") || word.includes("ü"))
    return word.replace("ú", "u").replace("ü", "u");

  /* T FINAL DE LES PARAULES ACABADES EN -ENT*/
  if (
    word[word.length - 1] == "t" &&
    word[word.length - 2] == "n" &&
    word[word.length - 3] == "e"
  ) {
    return word.slice(0, word.length - 1);
  }
  /* Afegir accent a paraulea acabades amb ia */
  if (word[word.length - 1] == "a" && word[word.length - 2] == "i") {
    return word.slice(0, word.length - 2) + "ía";
  }

  /* qua -> cua */
  if (word.includes("q") && word.includes("u") && word.includes("a")) {
    return word.replace("qua", "cua");
  }

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
    case "em":
      return "hem";
      break;
    case "hem":
      return "em";
      break;
    default:
      break;
  }

  return word;
}

export default generalErrors;
