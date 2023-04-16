
function getIndex(language){
  const indexCAT = [
    {
      title: "Capítol I",
      subtitle: "Troba els errors",
    },
    {
      title: "Capítol II",
      subtitle: "Corregeix els errors",
    },
    {
      title: "Capítol III",
      subtitle: "EP! Una mica de verbs",
    },
    {
      title: "Capítol IV",
      subtitle: "Quina subordinada és?",
    },
    {
      title: "Capítol V",
      subtitle: "I les figures retòriques?",
    },/* 
    {
      title: "Capítol VI",
      subtitle: "Troba els errors",
    },
    {
      title: "Capítol VII",
      subtitle: "Troba els errors",
    },
    {
      title: "Capítol VIII",
      subtitle: "Troba els errors",
    },
    {
      title: "Capítol IX",
      subtitle: "Troba els errors",
    }, */
  ];

  const indexCAST = [
    {
      title: "Capítulo I",
      subtitle: "Encuentra los errores",
    },
    {
      title: "Capítulo II",
      subtitle: "Corrige los errores",
    },
    {
      title: "Capítulo III",
      subtitle: "Un poco de verbos",
    },
    {
      title: "Capítulo IV",
      subtitle: "Subordinadas a por doquier",
    },
    {
      title: "Capítulo V",
      subtitle: "Figuras Retóricas, juego de poetas",
    },/* 
    {
      title: "Capítulo VI",
      subtitle: "Troba els errors",
    },
    {
      title: "Capítulo VII",
      subtitle: "Troba els errors",
    },
    {
      title: "Capítulo VIII",
      subtitle: "Troba els errors",
    },
    {
      title: "Capítulo IX",
      subtitle: "Troba els errors",
    }, */
  ];

  if(language == "cat")
  return indexCAT
  else if(language=="cast")
  return indexCAST
  else return indexCAT
}

  export default getIndex