function perque(word1, word2, random) {
  word1 = word1.toLowerCase();
  word2 = word2.toLowerCase();
  /* var perquelist = [
    "perque",
    "per que",
    "per què",
    "perquè",
    "per què",
    "perquè",
  ];

  if (word1 === "perquè" || (word1 === "per" && word2 === "què")) {
    return perquelist[random];
  } else {
    return undefined;
  } */

  if (word1 === "perquè") {
    return "per què";
  } else if (word1 === "per" && word2 === "què") {
    return "perquè";
  }
 /*  else if(word1==="per" && word2!=="què" && word2!=="a"){
    return "per a " + word2
  } */
}
export default perque;
