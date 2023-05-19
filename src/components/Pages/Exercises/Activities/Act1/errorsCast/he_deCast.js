function he_deCast(word, word2, randomnum) {
    if (word.toLowerCase() === "cuanto" && word2.toLowerCase() === "más") {
      return ["contra", "más"];
    
    }
    else if (word.toLowerCase() === "sobre" && word2.toLowerCase() === "todo") {
      return ["sobretodo", ""];
    }
    else if (word.toLowerCase() === "de" && word2.toLowerCase() === "que") {
      return ["que", ""];
    }
    else if (word.toLowerCase() === "a" && word2.toLowerCase() === "ver") {
      return ["haber", ""];
    }
   var t=Math.random(0,3)
  
  
  }
  
  export default he_deCast;
  