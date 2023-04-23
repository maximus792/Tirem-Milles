import { useState } from "react";
import styled from "styled-components";

const dataCAT = [
  ["ser", ["Primera del singular", "present de subjuntiu", "sigui"]],
  [
    "estar",
    ["Tercera del singular", "passat anterior d'indicatiu", "hagué estat"],
  ],
  [
    "tenir",
    ["Primera del singular", "passat anterior d'indicatiu", "haguí tingut"],
  ],

  ["poder", ["Tercera del singular", "imperfet de subjuntiu", "pogués"]],
  ["dir", ["Primera del singular", "imperfet d'indicatiu", "deia"]],
  ["fer", ["Primera del plural", "futur perfet d'indicatiu", "haurà fet"]],
  [
    "anar",
    ["Tercera del singular", "condicional perfet d'indicatiu", "hauria anat"],
  ],
  ["veure", ["Segona del plural", "imperfet d'indicatiu", "veíeu"]],
  ["saber", ["Tercera del singular", "present d'indicatiu", "saps"]],
  [
    "haver",
    ["Primera del singular", "plusquamperfet d'indicatiu", "havia hagut"],
  ],
  ["caldre", ["Primera del singular", "imperfet d'indicatiu", "calia"]],
  ["menjar", ["Primera del singular", "present d'indicatiu", "menjo"]],
  ["fer-se", ["Tercera del singular", "futur d'indicatiu", "es farà"]],
  ["cabre", ["Tercera del singular", "imperfet d'indicatiu", "cabia"]],
  ["plorar", ["Segona del singular", "present de subjuntiu", "ploris"]],
  ["anar-se'n", ["Segona del singular", "present de subjuntiu", "te'n vagis"]],
  ["caure", ["Primera del singular", "imperfet d'indicatiu", "queia"]],
  [
    "dormir",
    ["Tercera del singular", "futur perfet d'indicatiu", "haurà dormit"],
  ],
  ["llegir", ["Segona del plural", "condicional d'indicatiu", "llegiríeu"]],
  ["caminar", ["Primera del singular", "present d'indicatiu", "camino"]],

  ["correr", ["Tercera del singular", "imperfet d'indicatiu", "corria"]],

  ["escriure", ["Tercera del singular", "imperatiu", "escriu"]],
  [
    "pintar",
    ["Primera del singular", "condicional perfet d'indicatiu", "hauria pintat"],
  ],
  [
    "ballar",
    ["Tercera del singular", "futur perfet d'indicatiu", "haurà ballat"],
  ],
  ["cantar", ["Segona del singular", "futur simple d'indicatiu", "cantaràs"]],
  ["nadar", ["Tercera del singular", "imperfet d'indicatiu", "nadava"]],

  [
    "cantar",
    ["Segona del singular", "passat simple d'indicatiu", "has cantat"],
  ],
  ["aprendre", ["Tercera del singular", "present de subjuntiu", "aprengui"]],
  [
    "vendre",
    ["Primera del singular", "futur perfet d'indicatiu", "hauré venut"],
  ],
  ["tenir", ["Segona del singular", "passat simple d'indicatiu", "has tingut"]],
  ["comprar", ["Tercera del singular", "futur simple d'indicatiu", "comprarà"]],
  ["fer", ["Primera del singular", "futur perfet d'indicatiu", "hauré fet"]],
  ["viure", ["Tercera del singular", "pretèrit imperfet d'indicatiu", "vivia"]],

  ["pensar", ["Segona del singular", "futur simple d'indicatiu", "pensaràs"]],
  ["cantar", ["Tercera del singular", "present de subjuntiu", "canti"]],
  ["ser", ["Primera del singular", "futur simple d'indicatiu", "seré"]],
  [
    "estar",
    ["Tercera del singular", "pretèrit imperfet d'indicatiu", "estava"],
  ],
  ,
  ["parlar", ["Primera del singular", "Present de subjuntiu", "parli"]],
  ["viure", ["Tercera del singular", "Perfet d'indicatiu", "ha viscut"]],
  ["fer", ["Primera del plural", "Imperfet d'indicatiu", "fèiem"]],
  [
    "anar",
    ["Segona del singular", "Plusquamperfet d'indicatiu", "havies anat"],
  ],
  ["llegir", ["Tercera del plural", "Passat simple d'indicatiu", "van llegir"]],
  [
    "menjar",
    ["Primera del singular", "Passat anterior d'indicatiu", "haguí menjat"],
  ],
  ["dir", ["Segona del plural", "Futur d'indicatiu", "direu"]],
  ["ser", ["Tercera del singular", "Futur perfet d'indicatiu", "haurà estat"]],
  ["estar", ["Primera del singular", "Condicional simple", "estaria"]],
  ["tenir", ["Tercera del plural", "Condicional perfet", "haurien tingut"]],
  ["cabre", ["Tercera del singular", "Imperatiu", "cap"]],
  ["poder", ["Primera del plural", "Present de subjuntiu", "puguem"]],
  ["saber", ["Segona del singular", "Perfet d'indicatiu", "has sabut"]],
  ["venir", ["Primera del singular", "Imperfet de subjuntiu", "vingués"]],
  [
    "dormir",
    ["Tercera del plural", "Plusquamperfet de subjuntiu", "haguessin dormit"],
  ],
  ["lloar", ["Segona del singular", "Imperatiu", "lloa"]],
  ["obeir", ["Tercera del singular", "Present d'indicatiu", "obeix"]],
  [
    "vendre",
    ["Primera del plural", "Passat anterior d'indicatiu", "haguérem venut"],
  ],
  ["morir", ["Tercera del singular", "Condicional simple", "moriria"]],
  ["ferir", ["Segona del singular", "Futur d'indicatiu", "feriràs"]],
  ["ajeure's", ["Segona del singular", "Imperatiu", "ajeure't"]],
  ["caber", ["Primera del singular", "Present d'indicatiu", "cabo"]],
  [
    "cabre",
    ["Primera del singular", "Passat anterior d'indicatiu", "haguí cabut"],
  ],
  ["caldre", ["Primera del plural", "Imperfet de subjuntiu", "calguéssim"]],
  ["caure", ["Segona del singular", "Futur d'indicatiu", "cauràs"]],
  ["cerndre", ["Tercera del singular", "Passat simple d'indicatiu", "cerní"]],
  [
    "circumscriure",
    ["Primera del singular", "Present de subjuntiu", "circumscrigui"],
  ],
  ["cloure", ["Primera del plural", "Perfet d'indicatiu", "clos"]],
  [
    "cobrir",
    ["Tercera del plural", "Futur perfet d'indicatiu", "hauran cobert"],
  ],
  ["coldre", ["Segona del plural", "Imperatiu", "colliu"]],
  ["collir", ["Tercera del singular", "Imperfet de subjuntiu", "collís"]],
  [
    "encendre",
    ["Primera del singular", "Passat anterior d'indicatiu", "haguí encès"],
  ],
  ["encloure", ["Tercera del plural", "Futur d'indicatiu", "enclouran"]],
  ["endur-se", ["Segona del singular", "Imperatiu", "enduu-te"]],
  ["enfondre", ["Primera del plural", "Present de subjuntiu", "enfondim"]],
  [
    "entendre",
    ["Segona del singular", "Plusquamperfet d'indicatiu", "havies entès"],
  ],
  [
    "entrelluir",
    ["Tercera del singular", "Perfet de subjuntiu", "hagi entrelluït"],
  ],
  [
    "entremetre's",
    ["Tercera del singular", "Imperfet d'indicatiu", "s'entremetia"],
  ],
  [
    "entretenir",
    [
      "Segona del plural",
      "Passat anterior d'indicatiu",
      "haguéreu entretingut",
    ],
  ],
  [
    "entreveure",
    ["Tercera del plural", "Passat simple d'indicatiu", "entreveieren"],
  ],
  ["equivaler", ["Primera del singular", "Present d'indicatiu", "equivalc"]],
  [
    "escollir",
    ["Tercera del plural", "Passat anterior d'indicatiu", "havien escollit"],
  ],
  ["escopir", ["Primera del plural", "Perfet de subjuntiu", "haguem escopit"]],
  ["escórrer", ["Segona del singular", "Imperatiu", "escorre"]],
  ["escriure", ["Tercera del singular", "Futur d'indicatiu", "escriurà"]],
  ["esdevenir", ["Primera del singular", "Present de subjuntiu", "esdevingui"]],
  ["saber", ["Primera del singular", "Present de subjuntiu", "sàpiga"]],
  ["satisfer", ["Tercera del singular", "Passat simple", "satisfagué"]],
  ["ser", ["Segona del singular", "Futur perfet", "haurà estat"]],
  ["seure's", ["Primera del plural", "perfet d'indicatiu", "ens hem segut"]],
  [
    "sobreeixir",
    ["Tercera del singular", "Passat anterior", "hagué sobrevingut"],
  ],
  ["sobresortir", ["Primera del singular", "Imperatiu", "surt"]],
  [
    "sobreviure",
    ["Tercera del singular", "Present de subjuntiu", "sobrevisqui"],
  ],
  ["socórrer", ["Primera del plural", "Condicional simple", "socorreríem"]],
  ["sofrir", ["Segona del singular", "Imperatiu", "sofreix"]],
  ["soler", ["Tercera del singular", "perfet d'indicatiu", "solia"]],
  ["somriure", ["Primera del plural", "Futur", "somriurem"]],
  ["sorprendre", ["Segona del singular", "Passat perfet", "has sorprès"]],
  ["sortir", ["Tercera del singular", "Present de subjuntiu", "surti"]],
  ["sostenir", ["Primera del singular", "Passat perfet ", "he sostingut"]],
  [
    "sostreure",
    ["Tercera del singular", "Imperfect de subjuntiu", "sostregués"],
  ],
  ["sotmetre", ["Segona del singular", "Futur perfet", "hauràs sotmès"]],
  ["cabre", ["Primera del singular", "perfet", "he cabut"]],
  ["dir", ["Tercera del singular", "Condicional perfet", "hauria dit"]],
  ["dormir", ["Segona del singular", "Futur", "dormiràs"]],
  ["tenir", ["Primera del plural", "perfet d'indicatiu", "teníem"]],
  ["saber", ["Primera del singular", "Present de subjuntiu", "sàpiga"]],
  ["saber", ["Segona del singular", "Imperfet de subjuntiu", "saberessis"]],
  ["saber", ["Tercera del singular", "Futur perfet", "haurà sabut"]],
  ["saber", ["Primera del plural", "Passat anterior", "haguérem sabut"]],
  ["saber", ["Segona del plural", "Imperatiu afirmatiu", "sabeu"]],
  ["saber", ["Tercera del plural", "Passat simple", "saberen"]],
  ["saber", ["Primera del singular", "Plusquamperfet", "havia sabut"]],
  ["saber", ["Segona del singular", "Condicional perfet", "hauries sabut"]],
  ["saber", ["Tercera del singular", "Present de subjuntiu", "sàpiga"]],
  ["saber", ["Primera del plural", "Futur", "sabrem"]],
  ["satisfer", ["Segona del singular", "Imperatiu afirmatiu", "satisfàs"]],
  ["satisfer", ["Primera del singular", "Passat simple", "satisfagué"]],
  ["satisfer", ["Tercera del singular", "Present d'indicatiu", "satisfà"]],
  ["satisfer", ["Tercera del plural", "Passat simple", "satisfagueren"]],
  ["satisfer", ["Segona del singular", "Futur simple", "satisfaràs"]],
  ["ser", ["Primera del singular", "Present d'indicatiu", "soc"]],
  ["ser", ["Segona del singular", "Futur", "seràs"]],
  ["ser", ["Tercera del singular", "Passat simple", "sigué"]],
  ["ser", ["Primera del plural", "imperfet", "érem"]],
  ["ser", ["Tercera del plural", "Futur perfet", "hauran estat"]],
  ["cantar", ["primera del singular", "present de l'indicatiu", "canto"]],
  [
    "cantar",
    ["tercera del singular", "pretèrit perfet de l'indicatiu", "ha cantat"],
  ],
  ["cantar", ["primera del singular", "imperfet de l'indicatiu", "cantava"]],
  [
    "cantar",
    ["tercera del singular", "futur simple de l'indicatiu", "cantarà"],
  ],
  ["cantar", ["segona del singular", "imperatiu", "canta"]],
  ["cantar", ["primera del singular", "present de subjuntiu", "canti"]],
  ["cantar", ["tercera del singular", "imperfet de subjuntiu", "cantés"]],
  ["cantar", ["primera del singular", "futur simple de subjuntiu", "cantaré"]],
  ["cantar", ["tercera del singular", "condicional simple", "cantaria"]],
  ["cantar", ["tercera del singular", "condicional perfet", "hauria cantat"]],
  ["pintar", ["primera del singular", "present de l'indicatiu", "pinto"]],
  [
    "pintar",
    ["tercera del singular", "pretèrit perfet de l'indicatiu", "ha pintat"],
  ],
  ["pintar", ["primera del singular", "imperfet de l'indicatiu", "pintava"]],
  [
    "pintar",
    ["tercera del singular", "futur simple de l'indicatiu", "pintarà"],
  ],
  ["pintar", ["segona del singular", "imperatiu", "pinta"]],
  ["pintar", ["primera del singular", "present de subjuntiu", "pinti"]],
  ["pintar", ["tercera del singular", "imperfet de subjuntiu", "pintés"]],
  ["pintar", ["primera del singular", "futur simple de subjuntiu", "pintaré"]],
  ["pintar", ["tercera del singular", "condicional simple", "pintaria"]],
  ["pintar", ["tercera del singular", "condicional perfet", "hauria pintat"]],
  ["moure", ["primera del singular", "present de l'indicatiu", "moc"]],
  [
    "moure",
    ["tercera del singular", "pretèrit perfet de l'indicatiu", "ha mogut"],
  ],
  ["moure", ["primera del singular", "imperfet de l'indicatiu", "movia"]],
  ["moure", ["tercera del singular", "futur simple de l'indicatiu", "mourà"]],
  ["moure", ["segona del singular", "imperatiu", "mou"]],
  ["moure", ["primera del singular", "present de subjuntiu", "mogui"]],
  ["moure", ["tercera del singular", "imperfet de subjuntiu", "mogués"]],
  ["cantar", ["primera del singular", "present de l'indicatiu", "canto"]],
  [
    "cantar",
    ["tercera del singular", "pretèrit perfet de l'indicatiu", "ha cantat"],
  ],
  ["cantar", ["primera del singular", "imperfet de l'indicatiu", "cantava"]],
  [
    "cantar",
    ["tercera del singular", "futur simple de l'indicatiu", "cantarà"],
  ],
  ["cantar", ["segona del singular", "imperatiu", "canta"]],
  ["cantar", ["primera del singular", "present de subjuntiu", "canti"]],
  ["cantar", ["tercera del singular", "imperfet de subjuntiu", "cantés"]],
  ["cantar", ["primera del singular", "futur simple de subjuntiu", "cantare"]],
  ["cantar", ["tercera del singular", "condicional simple", "cantaria"]],
  ["cantar", ["tercera del singular", "condicional perfet", "hauria cantat"]],
  ["pintar", ["primera del singular", "present de l'indicatiu", "pinto"]],
  [
    "pintar",
    ["tercera del singular", "pretèrit perfet de l'indicatiu", "ha pintat"],
  ],
  ["pintar", ["primera del singular", "imperfet de l'indicatiu", "pintava"]],
  [
    "pintar",
    ["tercera del singular", "futur simple de l'indicatiu", "pintarà"],
  ],
  ["pintar", ["segona del singular", "imperatiu", "pinta"]],
  ["pintar", ["primera del singular", "present de subjuntiu", "pinti"]],
  ["pintar", ["tercera del singular", "imperfet de subjuntiu", "pintés"]],
  ["pintar", ["primera del singular", "futur simple de subjuntiu", "pintaré"]],
  ["pintar", ["tercera del singular", "condicional simple", "pintaria"]],
  ["pintar", ["tercera del singular", "condicional perfet ", "hauria pintat"]],
  ["moure", ["primera del singular", "present de l'indicatiu", "moc"]],
  [
    "moure",
    ["tercera del singular", "pretèrit perfet de l'indicatiu", "ha mogut"],
  ],
  ["moure", ["primera del singular", "imperfet de l'indicatiu", "moguia"]],
  ["moure", ["tercera del singular", "futur simple de l'indicatiu", "moutrà"]],
  ["moure", ["segona del singular", "imperatiu", "mou"]],
  ["moure", ["primera del singular", "present de subjuntiu", "mogui"]],
  ["moure", ["tercera del singular", "imperfet de subjuntiu", "mogués"]],
  ["amollir", ["Primera del singular", "Present de subjuntiu", "amolli"]],
  [
    "arrossegar",
    ["Tercera del singular", "Passat anterior", "hagué arrossegat"],
  ],
  ["bategar", ["Tercera del plural", "Imperfet de subjuntiu", "batessin"]],
  ["cabre", ["Segona del plural", "Futur perfet", "haureu cabut"]],
  ["caçar", ["Primera del plural", "Perfet d'indicatiu", "hem caçat"]],
  ["conduir", ["Segona del plural", "Present de subjuntiu", "conduïu"]],
  ["decidir", ["Tercera del singular", "Passat simple", "va decidir"]],
  ["desobeir", ["Primera del singular", "Imperfet de subjuntiu", "desobeís"]],
  [
    "emmalaltir",
    [
      "Tercera del singular",
      "Plusquamperfet de subjuntiu",
      "hagués emmalaltit",
    ],
  ],
  ["envejar", ["Primera del plural", "Condicional", "envejaríem"]],
  ["esdevenir", ["Tercera del plural", "Present d'imperatiu", "esdevinguin"]],
  ["estar", ["Segona del singular", "Imperatiu", "estigues"]],
  ["exigir", ["Primera del singular", "Present d'indicatiu", "exigeixo"]],
  ["fer", ["Tercera del singular", "Futur", "farà"]],
  ["haver", ["Tercera del plural", "perfet d'indicatiu", "havien"]],
  ["llegir", ["Primera del plural", "perfet d'indicatiu", "llegíem"]],
  ["mentir", ["Segona del plural", "perfet d'indicatiu", "heu mentit"]],
  ["moure", ["Primera del singular", "present d'indicatiu", "mogut"]],
  ["obrir", ["Tercera del singular", "perfet d'indicatiu", "obria"]],
  ["parlar", ["Tercera del singular", "Futur", "parlarà"]],
  ["prendre", ["Primera del plural", "Present de subjuntiu", "prenem"]],
  ["provenir", ["Segona del singular", "present d'indicatiu", "provens"]],
  ["rebre", ["Primera del singular", "Passat anterior", "haguí rebut"]],
  ["resoldre", ["Tercera del plural", "Perfet d'indicatiu", "han resolt"]],
  ["saber", ["Tercera del singular", "Imperfet d'indicatiu", "sabia"]],
  ["sobreviure", ["Segona del plural", "Futur", "sobreviureu"]],
  ["sortir", ["Primera del singular", "Present de subjuntiu", "surti"]],
  ["tenir", ["Segona del plural", "Imperatiu", "tingueu"]],
  ["envejar", ["Primera del plural", "Passat Perifràstic", "vam envejar"]],
  ["esdevenir", ["Tercera del plural", "Passat Perifràstic", "van envejar"]],
  ["estar", ["Segona del singular", "Passat Perifràstic", "vas estar"]],
  ["exigir", ["Primera del singular", "Passat Perifràstic", "vaig exigir"]],
  ["fer", ["Tercera del singular", "Passat Perifràstic", "va fer"]],
  ["haver", ["Tercera del plural", "Passat Perifràstic", "van haver"]],
  ["llegir", ["Primera del plural", "Passat Perifràstic", "vam llegir"]],
  ["mentir", ["Segona del plural", "Passat Perifràstic", "vau mentir"]],
  ["moure", ["Primera del singular", "Passat Perifràstic", "vaig moure"]],
  ["obrir", ["Tercera del singular", "Passat Perifràstic", "va obrir"]],
  ["parlar", ["Tercera del singular", "Passat Perifràstic", "va parlar"]],
  ["prendre", ["Primera del plural", "Passat Perifràstic", "vam prendre"]],
  ["provenir", ["Segona del singular", "Passat Perifràstic", "vas provenir"]],
  ["rebre", ["Primera del singular", "Passat Perifràstic", "vaig rebre"]],
  ["resoldre", ["Tercera del plural", "Passat Perifràstic", "van resoldre"]],
  ["saber", ["Tercera del singular", "Passat Perifràstic", "va saber"]],
  ["sobreviure", ["Segona del plural", "Passat Perifràstic", "vau sobreviure"]],
  ["sortir", ["Primera del singular", "Passat Perifràstic", "vaig sortir"]],
  ["tenir", ["Segona del plural", "Passat Perifràstic", "vau tenir"]][
    ("haver", ["Primera del singular", "Perfet de Subjuntiu", "hagi tingut"])
  ],
  [
    "arribar",
    ["Tercera del singular", "Plusquamperfet de Subjuntiu", "hagués arribat"],
  ],
  ["ser", ["Tercera del plural", "Perfet de Subjuntiu", "hagin estat"]],
  [
    "tenir",
    ["Segona del singular", "Plusquamperfet de Subjuntiu", "haguessis tingut"],
  ],
  ["saber", ["Primera del plural", "Perfet de Subjuntiu", "haguem sabut"]],
  ["dir", ["Segona del plural", "Perfet de Subjuntiu", "hàgiu dit"]],
  [
    "fer",
    ["Tercera del singular", "Plusquamperfet de Subjuntiu", "hagués fet"],
  ],
  [
    "poder",
    ["Primera del singular", "Plusquamperfet de Subjuntiu", "hagués pogut"],
  ],
  ["veure", ["Tercera del plural", "Perfet de Subjuntiu", "hagin vist"]],
  [
    "vendre",
    ["Primera del plural", "Plusquamperfet de Subjuntiu", "haguéssim venut"],
  ],
  [
    "llegir",
    ["Tercera del singular", "Plusquamperfet de Subjuntiu", "hagués llegit"],
  ],
  ["moure", ["Primera del singular", "Perfet de Subjuntiu", "hagi mogut"]],
  ["prendre", ["Segona del plural", "Perfet de Subjuntiu", "hàgiu pres"]],
  [
    "escriure",
    ["Tercera del singular", "Plusquamperfet de Subjuntiu", "hagués escrit"],
  ],
  ["voler", ["Tercera del plural", "Perfet de Subjuntiu", "hagin volgut"]],
  ["morir", ["Primera del singular", "Perfet de Subjuntiu", "hagi mort"]],
  ["llegar", ["Tercera del singular", "Perfet de Subjuntiu", "hagi llegat"]],
  [
    "anar",
    ["Primera del plural", "Plusquamperfet de Subjuntiu", "haguéssim anat"],
  ],
  ["estar", ["Segona del singular", "Perfet de Subjuntiu", "hagis estat"]],
  ["fer-se", ["Primera del singular", "Perfet de Subjuntiu", "m'hagi fet"]],
  [
    "haver de",
    ["Tercera del singular", "Plusquamperfet de Subjuntiu", "hagués hagut"],
  ],
  ["fer", ["Tercera del singular", "Perfet de Subjuntiu", "hagi fet"]],
  [
    "haver-hi",
    ["Tercera del singular", "Plusquamperfet de Subjuntiu", "hi hagués hagut"],
  ],
  ["portar", ["Tercera del plural", "Perfet de Subjuntiu", "hagin portat"]][
    ("menjar", ["jo", "perfet de subjuntiu", "hagi menjat"])
  ],
  ["vendre", ["tu", "plusquamperfet de subjuntiu", "haguessis venut"]],
  ["cantar", ["ell", "perfet de subjuntiu", "hagi cantat"]],
  ["ser", ["nosaltres", "plusquamperfet de subjuntiu", "haguéssim estat"]],
  ["poder", ["vós", "perfet de subjuntiu", "hagueu pogut"]],
  ["haver", ["ells", "plusquamperfet de subjuntiu", "haguessin hagut"]],
  ["sortir", ["jo", "plusquamperfet de subjuntiu", "hagués sortit"]],
  ["llegir", ["tu", "perfet de subjuntiu", "hagis llegit"]],
  ["fer", ["nosaltres", "plusquamperfet de subjuntiu", "haguéssim fet"]],
  ["dormir", ["vós", "perfet de subjuntiu", "hagueu dormit"]],
];
const dataCAST = [
  ["Ser", ["Primera del singular", "Presente del subjuntivo", "sea"]],
  ["Estar", ["Segunda del plural", "Imperativo", "estad"]],
  ["Hacer", ["Tercera del singular", "Imperfecto del subjuntivo", "hiciera"]],
  ["Decir", ["Primera del singular", "Pasado simple del indicativo", "dije"]],
  ["Tener", ["Tercera del singular", "Perfecto del indicativo", "ha tenido"]],
  [
    "Ir",
    ["Segunda del singular", "Pluscuamperfecto del indicativo", "habías ido"],
  ],

  ["Ver", ["Tercera del singular", "Futuro del indicativo", "verá"]],
  ["Poder", ["Primera del singular", "Presente del indicativo", "puedo"]],
  [
    "Querer",
    [
      "Segunda del singular",
      "Futuro perfecto del indicativo",
      "habrás querido",
    ],
  ],

  [
    "Saber",
    [
      "Tercera del singular",
      "Condición perfecta perifrástica del indicativo",
      "había sabido",
    ],
  ],

  ["Salir", ["Primera del singular", "Imperfecto del subjuntivo", "saliera"]],
  ["Entrar", ["Segunda del plural", "Imperativo", "entrad"]],
  [
    "Haber",
    ["Tercera del singular", "Pasado anterior del indicativo", "hubo habido"],
  ],

  ["Venir", ["Tercera del singular", "Presente del subjuntivo", "venga"]],
  [
    "Dar",
    ["Primera del singular", "Pluscuamperfecto del indicativo", "había dado"],
  ],

  ["Poner", ["Segunda del singular", "Futuro del indicativo", "pondrás"]],
  ["Sentir", ["Primera del singular", "Presente del indicativo", "siento"]],
  ["Hacer", ["Tercera del plural", "Imperfecto del indicativo", "hacían"]],
  ["Decir", ["Segunda del singular", "Imperativo", "di"]],
  ["Tener", ["Tercera del singular", "Futuro del subjuntivo", "tendrá"]],
  ["Comer", ["Primera del singular", "Presente del indicativo", "como"]],
  ["Vivir", ["Tercera del singular", "Presente del subjuntivo", "viva"]],
  ["Hacer", ["Segunda del singular", "Imperativo", "haz"]],
  ["Pensar", ["Primera del singular", "Pasado simple del indicativo", "pensé"]],

  ["Quedar", ["Tercera del singular", "Perfecto del indicativo", "ha quedado"]],

  ["Llegar", ["Primera del singular", "Futuro del subjuntivo", "llegaré"]],
  ["Buscar", ["Tercera del singular", "Imperfecto del subjuntivo", "buscara"]],

  [
    "Empezar",
    [
      "Segunda del singular",
      "Futuro perfecto del indicativo",
      "habrás empezado",
    ],
  ],

  ["Poder", ["Primera del plural", "Presente del indicativo", "podemos"]],
  [
    "Hacer",
    ["Tercera del singular", "Pasado anterior del indicativo", "hubo hecho"],
  ],

  [
    "Ir",
    ["Segunda del singular", "Pluscuamperfecto del indicativo", "habías ido"],
  ],

  ["Llamar", ["Primera del singular", "Imperativo", "llama"]],
  [
    "Necesitar",
    ["Tercera del singular", "Presente del indicativo", "necesita"],
  ],

  ["Parecer", ["Segunda del plural", "Presente del subjuntivo", "parezcáis"]],
  ["Sentir", ["Primera del singular", "Pasado simple del indicativo", "sentí"]],

  ["Hacer", ["Tercera del singular", "Imperfecto del indicativo", "hacía"]],
  [
    "Pedir",
    ["Primera del singular", "Futuro perfecto del indicativo", "habré pedido"],
  ],

  [
    "Poder",
    [
      "Tercera del singular",
      "Condición perfecta perifrástica del indicativo",
      "ha podido",
    ],
  ],

  ["Escribir", ["Segunda del singular", "Imperativo", "escribe"]],
  [
    "Tener",
    ["Tercera del singular", "Pasado anterior del indicativo", "hubo tenido"],
  ],

  ["Hablar", ["Primera del singular", "Presente del indicativo", "hablo"]],
  [
    "Querer",
    [
      "Segunda del singular",
      "Pluscuamperfecto del indicativo",
      "habías querido",
    ],
  ],

  ["Jugar", ["Tercera del singular", "Futuro del indicativo", "jugará"]],
  ["Llevar", ["Primera del singular", "Presente del subjuntivo", "lleve"]],
  ["Pensar", ["Tercera del singular", "Pasado simple del indicativo", "pensó"]],

  ["Estar", ["Segunda del singular", "Imperativo", "está"]],
  [
    "Conocer",
    ["Tercera del singular", "Imperfecto del subjuntivo", "conociera"],
  ],

  [
    "Gustar",
    ["Primera del singular", "Futuro perfecto del indicativo", "habré gustado"],
  ],

  [
    "Desconocer",
    ["Tercera del singular", "Presente del indicativo", "desconoce"],
  ],
  ["Mover", ["Segunda del singular", "Imperativo", "mueve"]],
  ["Torcer", ["Primera del singular", "Presente del subjuntivo", "torza"]],
  [
    "Deshacer",
    [
      "Tercera del singular",
      "Pasado anterior del indicativo",
      "había deshecho",
    ],
  ],

  [
    "Nacer",
    [
      "Segunda del singular",
      "Pluscuamperfecto del indicativo",
      "habías nacido",
    ],
  ],

  ["Traducir", ["Primera del singular", "Futuro del subjuntivo", "traduciré"]],

  [
    "Destituir",
    [
      "Tercera del singular",
      "Condición perfecta perifrástica del indicativo",
      "ha destituido",
    ],
  ],

  ["Negar", ["Segunda del singular", "Imperativo", "niega"]],
  ["Traer", ["Primera del singular", "Presente del indicativo", "traigo"]],
  [
    "Desviar",
    ["Tercera del singular", "Imperfecto del indicativo", "desviaba"],
  ],

  ["Oler", ["Primera del singular", "Imperativo", "huele"]],
  ["Ver", ["Tercera del singular", "Presente del subjuntivo", "vea"]],
  [
    "Distraer",
    [
      "Segunda del singular",
      "Futuro perfecto del indicativo",
      "habrás distraído",
    ],
  ],

  [
    "Pedir",
    ["Tercera del singular", "Pasado anterior del indicativo", "había pedido"],
  ],

  ["Vestir", ["Primera del singular", "Presente del indicativo", "visto"]],
  [
    "Dormir",
    [
      "Segunda del singular",
      "Pluscuamperfecto del indicativo",
      "habías dormido",
    ],
  ],

  ["Perder", ["Tercera del singular", "Futuro del indicativo", "perderá"]],
  ["Yacer", ["Primera del singular", "Imperativo", "yace"]],
  ["Volver", ["Segunda del singular", "Presente del subjuntivo", "vuelvas"]],
  [
    "Traducir",
    ["Tercera del singular", "Pasado simple del indicativo", "tradujo"],
  ],

  ["Conducir", ["Tercera del singular", "Presente del indicativo", "conduce"]],
  ["Leer", ["Segunda del singular", "Imperativo", "lee"]],
  ["Caer", ["Primera del singular", "Presente del subjuntivo", "caiga"]],
  ["Conocer", ["Tercera del singular", "Futuro del indicativo", "conocerá"]],
  ["Hacer", ["Segunda del singular", "Presente del indicativo", "haces"]],
  ["Escribir", ["Primera del singular", "Imperativo", "escribe"]],
  [
    "Decir",
    ["Tercera del singular", "Pasado anterior del indicativo", "había dicho"],
  ],

  ["Salir", ["Segunda del singular", "Presente del subjuntivo", "salgas"]],
  [
    "Ir",
    ["Primera del singular", "Pluscuamperfecto del indicativo", "había ido"],
  ],

  [
    "Poner",
    ["Tercera del singular", "Futuro perfecto del indicativo", "habrá puesto"],
  ],

  ["Saber", ["Primera del singular", "Presente del indicativo", "sé"]],
  ["Haber", ["Tercera del singular", "Presente del subjuntivo", "haya"]],
  ["Ser", ["Segunda del singular", "Imperativo", "sé"]],
  ["Estar", ["Tercera del singular", "Presente del indicativo", "está"]],
  ["Tener", ["Primera del singular", "Presente del indicativo", "tengo"]],
  ["Venir", ["Segunda del singular", "Imperativo", "ven"]],
  ["Querer", ["Tercera del singular", "Pasado simple del indicativo", "quiso"]],

  ["Dar", ["Primera del singular", "Presente del subjuntivo", "dé"]],
  ["Ver", ["Tercera del singular", "Imperfecto del subjuntivo", "viera"]],
  ["Soler", ["Segunda del singular", "Presente del indicativo", "sueles"]],

  ["Ser", ["Primera del singular", "Presente del indicativo", "soy"]],
  ["Hacer", ["Segunda del singular", "Imperativo", "haz"]],
  ["Estar", ["Tercera del singular", "Pasado simple del indicativo", "estuvo"]],
  ["Saber", ["Primera del singular", "Futuro del indicativo", "sabré"]],
  ["Venir", ["Segunda del plural", "Imperfecto del subjuntivo", "vinierais"]],
  ["Poner", ["Tercera del singular", "Perfecto del indicativo", "ha puesto"]],
  ["Ir", ["Primera del singular", "Futuro simple del indicativo", "iré"]],
  [
    "Haber",
    [
      "Segunda del plural",
      "Pluscuamperfecto del subjuntivo",
      "hubierais tenido",
    ],
  ],
  ["Tener", ["Tercera del singular", "Presente del subjuntivo", "tenga"]],
  ["Querer", ["Primera del plural", "Presente del indicativo", "queremos"]],
  [
    "Salir",
    ["Segunda del singular", "Futuro perfecto del indicativo", "saldrás"],
  ],
  [
    "Decir",
    [
      "Tercera del singular",
      "Condicional perfecto del indicativo",
      "habría dicho",
    ],
  ],
  ["Hacer", ["Primera del singular", "Subjuntivo imperfecto", "hiciera"]],
  ["Saber", ["Tercera del plural", "Imperfecto del indicativo", "sabían"]],
  ["Ir", ["Segunda del plural", "Subjuntivo presente", "vayáis"]],
  [
    "Traer",
    ["Primera del singular", "Pasado anterior del indicativo", "traje"],
  ],
  ["Estar", ["Tercera del singular", "Imperativo", "esté"]],
  [
    "Poder",
    ["Segunda del plural", "Futuro compuesto del indicativo", "habréis podido"],
  ],
  [
    "Poner",
    ["Primera del plural", "Subjuntivo pluscuamperfecto", "hubiéramos puesto"],
  ],
  ["Haber", ["Primera del singular", "Presente del indicativo", "he"]],
  ["Dar", ["Tercera del singular", "Futuro simple del indicativo", "dará"]],
  ["Estar", ["Segunda del singular", "Presente del indicativo", "estás"]],
  ["Hacer", ["Primera del singular", "Subjuntivo presente", "haga"]],
  ["Ir", ["Tercera del singular", "Imperfecto del indicativo", "iba"]],
  [
    "Pasar",
    [
      "Segunda del plural",
      "Condicional perfecto del indicativo",
      "habríais pasado",
    ],
  ],
  ["Querer", ["Tercera del singular", "Presente del subjuntivo", "quiera"]],
  ["Ser", ["Primera del plural", "Pasado simple del indicativo", "fuimos"]],
  ["Tener", ["Segunda del singular", "Imperfecto del indicativo", "tenías"]],
  ["Ver", ["Tercera del singular", "Presente del imperativo", "ve"]],
  ["Amar", ["Primera del singular", "Passado anterior del indicativo", "amé"]],
  ["Beber", ["Segunda del plural", "Subjuntivo perfecto", "hayáis bebido"]],
  ["Buscar", ["Tercera del singular", "Imperfecto del subjuntivo", "buscara"]],
  [
    "Caer",
    ["Primera del singular", "Futuro perfecto del indicativo", "habré caído"],
  ],
  [
    "Caminar",
    [
      "Segunda del singular",
      "Subjuntivo pluscuamperfecto",
      "hubieras caminado",
    ],
  ],
  [
    "Cantar",
    ["Tercera del singular", "Perfecto del subjuntivo", "haya cantado"],
  ],
  [
    "Comer",
    ["Primera del singular", "Futuro compuesto del indicativo", "habré comido"],
  ],
  [
    "Comprender",
    ["Segunda del plural", "Subjuntivo imperfecto", "comprendierais"],
  ],
  [
    "Conocer",
    [
      "Tercera del singular",
      "Futuro perfecto del subjuntivo",
      "hubiere conocido",
    ],
  ],
  ["Correr", ["Primera del plural", "Imperativo", "corramos"]],
  [
    "Creer",
    [
      "Segunda del singular",
      "Pluscuamperfecto del subjuntivo",
      "hubieras creído",
    ],
  ],
  [
    "Cubrir",
    ["Tercera del singular", "Pasado simple del subjuntivo", "cubriera"],
  ],
  [
    "Decir",
    ["Primera del singular", "Subjuntivo pluscuamperfecto", "hubiera dicho"],
  ],
  [
    "Dormir",
    ["Segunda del plural", "Futuro simple del subjuntivo", "durmiereis"],
  ],
  ["Empezar", ["Tercera del plural", "Imperativo", "empiecen"]],
  ["Entender", ["Primera del singular", "Presente del subjuntivo", "entienda"]],
  [
    "Esperar",
    [
      "Segunda del singular",
      "Condiconal perfecto perifrástico",
      "habrás esperado",
    ],
  ],
  [
    "Estudiar",
    [
      "Tercera del singular",
      "Futuro compuesto del subjuntivo",
      "hubiere estudiado",
    ],
  ],
  ["Fumar", ["Primera del singular", "Presente del imperativo", "fuma"]],
  ["Ganar", ["Segunda del plural", "Imperfecto del subjuntivo", "ganarais"]],
  [
    "Hablar",
    ["Tercera del singular", "Futuro simple del subjuntivo", "hablare"],
  ],
  ["Hacer", ["Primera del singular", "Imperfecto del subjuntivo", "hiciera"]],
  ["Ir", ["Tercera del singular", "Condicional", "iría"]],
  ["Jugar", ["Segunda del plural", "Presente del indicativo", "jugáis"]],
  [
    "Leer",
    ["Tercera del singular", "Futuro perfecto del subjuntivo", "hubiere leído"],
  ],
  [
    "Llegar",
    ["Primera del singular", "Pasado anterior del indicativo", "llegué"],
  ],
  ["Llorar", ["Segunda del plural", "Subjuntivo presente", "lloréis"]],
  [
    "Mirar",
    ["Tercera del singular", "Pluscuamperfecto del indicativo", "había mirado"],
  ],
  [
    "Nadar",
    [
      "Primera del singular",
      "Futuro perfecto del subjuntivo",
      "hubiere nadado",
    ],
  ],
  ["Oír", ["Tercera del singular", "Subjuntivo futuro", "oyere"]],
  [
    "Pagar",
    ["Segunda del singular", "Futuro simple del indicativo", "pagarás"],
  ],
  ["Pasar", ["Tercera del plural", "Imperativo", "pasen"]],
  ["Pensar", ["Primera del singular", "Subjuntivo futuro", "pensare"]],
  [
    "Perder",
    [
      "Segunda del plural",
      "Pluscuamperfecto del subjuntivo",
      "hubierais perdido",
    ],
  ],
  ["Poder", ["Tercera del singular", "Futuro simple del indicativo", "podrá"]],
  ["Poner", ["Primera del singular", "Subjuntivo perfecto", "haya puesto"]],
  ["Querer", ["Segunda del singular", "Presente del subjuntivo", "quieras"]],
  [
    "Reír",
    ["Tercera del singular", "Futuro compuesto del indicativo", "habrá reído"],
  ],
  ["Salir", ["Primera del singular", "Condicional", "saldría"]],
  ["Saber", ["Segunda del singular", "Imperativo negativo", "no sepas"]],
  ["Ser", ["Tercera del singular", "Subjuntivo presente", "sea"]],
  ["Tener", ["Primera del singular", "Pasado simple del indicativo", "tuve"]],
  ["Trabajar", ["Segunda del singular", "Imperativo", "trabaja"]],
  ["Usar", ["Tercera del plural", "Futuro simple del indicativo", "usarán"]],
  ["Vender", ["Primera del singular", "Subjuntivo imperfecto", "vendiera"]],
  ["Vivir", ["Segunda del plural", "Presente del subjuntivo", "viváis"]],
  [
    "Volver",
    [
      "Tercera del singular",
      "Futuro perfecto del subjuntivo",
      "hubiere vuelto",
    ],
  ],
  ["Aceptar", ["Primera del singular", "Imperativo", "acepta"]],
  [
    "Anunciar",
    [
      "Segunda del singular",
      "Futuro compuesto del subjuntivo",
      "hubieres anunciado",
    ],
  ],
  [
    "Ayudar",
    [
      "Tercera del singular",
      "Pluscuamperfecto del subjuntivo",
      "hubiera ayudado",
    ],
  ],
  ["Bailar", ["Primera del plural", "Presente del indicativo", "bailamos"]],
  ["Caminar", ["Segunda del singular", "Imperativo negativo", "no camines"]],
  ["Cocinar", ["Tercera del singular", "Subjuntivo presente", "cocine"]],
  [
    "Conducir",
    ["Primera del singular", "Futuro simple del subjuntivo", "condujere"],
  ],
  ["Conocer", ["Segunda del singular", "Presente del subjuntivo", "conozcas"]],
  [
    "Correr",
    ["Tercera del singular", "Futuro simple del subjuntivo", "corriere"],
  ],
  [
    "Creer",
    [
      "Primera del singular",
      "Pluscuamperfecto del subjuntivo",
      "hubiera creído",
    ],
  ],
  [
    "Dormir",
    [
      "Segunda del singular",
      "Futuro perfecto del subjuntivo",
      "hubieres dormido",
    ],
  ],
  ["Encontrar", ["Tercera del singular", "Imperativo", "encuentre"]],
  [
    "Entregar",
    ["Primera del singular", "Pasado simple del indicativo", "entregué"],
  ],
  [
    "Escuchar",
    [
      "Segunda del plural",
      "Futuro perfecto del subjuntivo",
      "hubiere escuchado",
    ],
  ],
  ["Explicar", ["Tercera del singular", "Presente del imperativo", "explica"]],
  [
    "Hablar",
    ["Primera del singular", "Pasado anterior del indicativo", "hablé"],
  ],
  ["Andar", ["Tercera del singular", "Presente del indicativo", "anda"]],
  ["Caber", ["Segunda del singular", "Imperativo afirmativo", "cabe"]],
  ["Decir", ["Primera del singular", "Imperativo", "di"]],
  [
    "Estar",
    ["Tercera del singular", "Futuro compuesto del indicativo", "habrá estado"],
  ],
  [
    "Haber",
    ["Segunda del singular", "Subjuntivo imperfecto", "hubieras habido"],
  ],
  [
    "Hacer",
    [
      "Tercera del singular",
      "Pluscuamperfecto del subjuntivo",
      "hubiere hecho",
    ],
  ],
  [
    "Ir",
    ["Primera del singular", "Condicional Perfecto perifrástico", "habría ido"],
  ],
  ["Oler", ["Segunda del singular", "Imperativo", "huele"]],
  ["Poder", ["Tercera del singular", "Subjuntivo futuro", "pudiere"]],
  ["Poner", ["Primera del singular", "Presente del indicativo", "pongo"]],
  ["Salir", ["Segunda del singular", "Imperativo afirmativo", "sal"]],
  [
    "Saber",
    ["Tercera del singular", "Futuro compuesto del indicativo", "habrá sabido"],
  ],
  ["Soler", ["Primera del singular", "Presente del indicativo", "suelo"]],
  [
    "Satisfacer",
    ["Segunda del singular", "Imperativo afirmativo", "satisface"],
  ],
  ["Tener", ["Tercera del singular", "Imperativo", "ten"]],
  ["Traducir", ["Primera del singular", "Subjuntivo imperfecto", "tradujera"]],
  ["Traer", ["Tercera del singular", "Presente del indicativo", "trae"]],
  ["Valer", ["Segunda del singular", "Presente del indicativo", "vales"]],
  ["Ver", ["Tercera del singular", "Imperativo afirmativo", "ve"]],
  [
    "Abandonar",
    ["Primera del singular", "Pasado perfecto del indicativo", "he abandonado"],
  ],

  ["Beber", ["Segunda del singular", "Imperativo afirmativo", "bebe"]],
  [
    "Cerrar",
    ["Tercera del singular", "Futuro perfecto del indicativo", "habrá cerrado"],
  ],
  ["Coser", ["Primera del singular", "Imperativo afirmativo", "cosa"]],
  [
    "Construir",
    ["Segunda del singular", "Subjuntivo imperfecto", "construyeras"],
  ],
  [
    "Conocer",
    [
      "Tercera del singular",
      "Pluscuamperfecto del indicativo",
      "había conocido",
    ],
  ],
  [
    "Corregir",
    [
      "Primera del singular",
      "Pluscuamperfecto del indicativo",
      "había corregido",
    ],
  ],
  [
    "Crecer",
    [
      "Segunda del singular",
      "Futuro perfecto del indicativo",
      "habrás crecido",
    ],
  ],
  [
    "Dormir",
    [
      "Tercera del singular",
      "Pluscuamperfecto del indicativo",
      "había dormido",
    ],
  ],
  ["Elegir", ["Primera del singular", "Subjuntivo futuro", "eligiere"]],
  [
    "Empezar",
    [
      "Segunda del plural",
      "Futuro compuesto del subjuntivo",
      "hubiere empezado",
    ],
  ],
  [
    "Entender",
    [
      "Tercera del singular",
      "Futuro perfecto del indicativo",
      "habrá entendido",
    ],
  ],
  [
    "Escoger",
    ["Primera del singular", "Subjuntivo futuro perfecto", "hubiere escogido"],
  ],
  [
    "Establecer",
    [
      "Tercera del singular",
      "Pasado anterior del subjuntivo",
      "hubiere establecido",
    ],
  ],
  [
    "Fingir",
    ["Segunda del singular", "Subjuntivo pluscuamperfecto", "hubieras fingido"],
  ],
  ["Freír", ["Primera del singular", "Presente del indicativo", "frío"]],
  ["Ganar", ["Segunda del singular", "Imperativo negativo", "no ganes"]],
  [
    "Guardar",
    ["Tercera del singular", "Subjuntivo pluscuamperfecto", "hubiera guardado"],
  ],
  ["Hacer", ["Primera del singular", "Subjuntivo imperfecto", "hiciera"]],
  ["Imprimir", ["Segunda del singular", "Imperativo afirmativo", "imprime"]],
  [
    "Ir",
    [
      "Tercera del plural",
      "Pretérito perfecto simple del indicativo",
      "fueron",
    ],
  ],
  [
    "Luchar",
    [
      "Primera del singular",
      "Futuro perfecto del subjuntivo",
      "hubiere luchado",
    ],
  ],
  ["Morder", ["Segunda del singular", "Presente del indicativo", "muerdes"]],
  ["Morir", ["Tercera del singular", "Subjuntivo presente", "muera"]],
  ["Nacer", ["Primera del singular", "Futuro simple del indicativo", "naceré"]],
  ["Negar", ["Segunda del plural", "Presente del indicativo", "negáis"]],
  [
    "Oír",
    ["Tercera del singular", "Pluscuamperfecto del indicativo", "había oído"],
  ],
  [
    "Olvidar",
    [
      "Primera del singular",
      "Pluscuamperfecto del indicativo",
      "había olvidado",
    ],
  ],
  ["Parir", ["Tercera del singular", "Presente del indicativo", "pare"]],
  ["Pasar", ["Segunda del singular", "Imperativo negativo", "no pases"]],
  [
    "Pintar",
    ["Tercera del singular", "Futuro perfecto del indicativo", "habrá pintado"],
  ],
  ["Poder", ["Primera del singular", "Subjuntivo imperfecto", "pudiera"]],
  [
    "Poner",
    [
      "Segunda del singular",
      "Futuro perfecto del subjuntivo",
      "hubieres puesto",
    ],
  ],
  ["Cantar", ["Primera del singular", "Presente", "cante"]],
  ["Vivir", ["Segunda del plural", "Perfecto", "habéis vivido"]],
  ["Correr", ["Tercera del singular", "Imperfecto", "corría"]],
  ["Ser", ["Primera del plural", "Pluscuamperfecto", "habíamos sido"]],
  [
    "Escribir",
    ["Segunda del singular", "Pretérito perfecto simple", "escribiste"],
  ],
  ["Comer", ["Tercera del plural", "Pretérito anterior", "hubieron comido"]],
  ["Hablar", ["Primera del singular", "Futuro", "hablaré"]],
  ["Poder", ["Segunda del plural", "Futuro perfecto", "habréis podido"]],
  ["Ir", ["Tercera del singular", "Condicional", "iría"]],
  ["Tener", ["Segunda del singular", "Condicional Perfecto", "habrías tenido"]],
  ["Ser", ["Primera del singular", "Presente Subjuntivo", "sea"]],
  ["Vivir", ["Segunda del plural", "Perfecto Subjuntivo", "hayáis vivido"]],
  [
    "Conducir",
    ["Tercera del singular", "Pretérito perfecto simple", "condujo"],
  ],
  ["Andar", ["Tercera del singular", "Pretérito perfecto simple", "ha andado"]],
  ["Estar", ["Segunda del plural", "Imperfecto Subjuntivo", "estuvierais"]],
  [
    "Hacer",
    ["Primera del plural", "Pluscuamperfecto Subjuntivo", "hubiéramos hecho"],
  ],
  ["Ir", ["Tercera del singular", "Presente Imperativo", "ve"]],
  ["Saber", ["Segunda del singular", "Afirmativo Imperativo", "sabe"]],
  ["Ser", ["Primera del plural", "Negativo Imperativo", "no seamos"]],
  ["Estar", ["Tercera del plural", "Afirmativo Imperativo", "estén"]],
  ["ser", ["Primera del singular", "Perfecto de subjuntivo", "haya sido"]],
  [
    "ser",
    ["Segunda del singular", "Pluscuamperfecto de subjuntivo", "hubieras sido"],
  ],
  ["ser", ["Tercera del singular", "Perfecto de subjuntivo", "haya sido"]],
  [
    "ser",
    ["Primera del plural", "Pluscuamperfecto de subjuntivo", "hubiéramos sido"],
  ],
  ["ser", ["Segunda del plural", "Perfecto de subjuntivo", "hayáis sido"]],
  [
    "ser",
    ["Tercera del plural", "Pluscuamperfecto de subjuntivo", "hubieran sido"],
  ],
  [
    "estar",
    [
      "Primera del singular",
      "Pluscuamperfecto de subjuntivo",
      "hubiera estado",
    ],
  ],
  ["estar", ["Segunda del singular", "Perfecto de subjuntivo", "hayas estado"]],
  [
    "estar",
    [
      "Tercera del singular",
      "Pluscuamperfecto de subjuntivo",
      "hubiera estado",
    ],
  ],
  ["estar", ["Primera del plural", "Perfecto de subjuntivo", "hayamos estado"]],
  [
    "estar",
    [
      "Segunda del plural",
      "Pluscuamperfecto de subjuntivo",
      "hubierais estado",
    ],
  ],
  ["estar", ["Tercera del plural", "Perfecto de subjuntivo", "hayan estado"]],
  ["tener", ["Primera del singular", "Perfecto de subjuntivo", "haya tenido"]],
  [
    "tener",
    [
      "Segunda del singular",
      "Pluscuamperfecto de subjuntivo",
      "hubieras tenido",
    ],
  ],
  ["tener", ["Tercera del singular", "Perfecto de subjuntivo", "haya tenido"]],
  [
    "tener",
    [
      "Primera del plural",
      "Pluscuamperfecto de subjuntivo",
      "hubiéramos tenido",
    ],
  ],
  ["tener", ["Segunda del plural", "Perfecto de subjuntivo", "hayáis tenido"]],
  [
    "tener",
    ["Tercera del plural", "Pluscuamperfecto de subjuntivo", "hubieran tenido"],
  ],
  [
    "ir",
    ["Primera del singular", "Pluscuamperfecto de subjuntivo", "hubiera ido"],
  ],
  ["ir", ["Tercera del singular", "Perfecto de subjuntivo", "haya ido"]][
    ("ir",
    ["Segunda del singular", "Pluscuamperfecto de subjuntivo", "hubieras ido"])
  ],
  ["ir", ["Primera del plural", "Perfecto de subjuntivo", "hayamos ido"]],
  [
    "ir",
    ["Tercera del plural", "Pluscuamperfecto de subjuntivo", "hubieran ido"],
  ],
  ["haber", ["Primera del singular", "Perfecto de subjuntivo", "haya habido"]],
  [
    "haber",
    [
      "Segunda del singular",
      "Pluscuamperfecto de subjuntivo",
      "hubieras habido",
    ],
  ],
  ["haber", ["Tercera del singular", "Perfecto de subjuntivo", "haya habido"]],
  [
    "haber",
    [
      "Primera del plural",
      "Pluscuamperfecto de subjuntivo",
      "hubiéramos habido",
    ],
  ],
  ["haber", ["Segunda del plural", "Perfecto de subjuntivo", "hayáis habido"]],
  [
    "haber",
    ["Tercera del plural", "Pluscuamperfecto de subjuntivo", "hubieran habido"],
  ],
  ["tener", ["Primera del singular", "Imperativo", "ten"]],
  ["tener", ["Segunda del singular", "Imperativo", "ten"]],
  ["tener", ["Primera del plural", "Imperativo", "tengamos"]],
  ["tener", ["Segunda del plural", "Imperativo", "tened"]],
  ["estar", ["Primera del singular", "Imperfecto del subjuntivo", "estuviera"]],
  ["estar", ["Segunda del singular", "Imperativo", "está"]],
  ["estar", ["Tercera del singular", "Imperfecto del subjuntivo", "estuviera"]],
  [
    "estar",
    ["Primera del plural", "Imperfecto del subjuntivo", "estuviéramos"],
  ],
  ["estar", ["Segunda del plural", "Imperativo", "estad"]],
  ["estar", ["Tercera del plural", "Imperfecto del subjuntivo", "estuvieran"]],
  ["saber", ["Primera del singular", "Perfecto de subjuntivo", "haya sabido"]],
];

function Act3({ correcting, language }) {
  const [verb, setverb] = useState(
    language == "cat"
      ? dataCAT[Math.floor(Math.random() * dataCAT.length)]
      : dataCAST[Math.floor(Math.random() * dataCAST.length)]
  );

  const [value, setvalue] = useState("");

  const correctanswer = verb[1][2];

  return (
    <Component>
      <div>
        <div className="statement">
          <span className="title-verb">
            {verb[0].charAt(0).toUpperCase() + verb[0].slice(1)}
          </span>{" "}
          <br />
          {verb[1][0]} : <span className="temps-verbal">{verb[1][1]}</span>
        </div>

        {correcting ? (
          <>
            <input
              type="text"
              readOnly
              value={value == correctanswer ? correctanswer : value}
              className={
                value.toLowerCase() == correctanswer
                  ? "correct-answer"
                  : "wrong-answer"
              }
            />
            {value.toLowerCase() != correctanswer ? (
              <span className="solution"> {correctanswer} </span>
            ) : (
              ""
            )}
          </>
        ) : (
          <input
            onChange={(e) => {
              setvalue(e.target.value);
            }}
            placeholder="Introdueix la teva resposta"
          />
        )}
      </div>
    </Component>
  );
}

export default Act3;

const Component = styled.div`
  margin-bottom: 1.3rem;
  margin-left: 1.5rem;
  width: 30vw;
  @media (min-width: 1100px) {
    margin-left: 3rem;
    width: 30vw;
  }
  @media (max-width: 700px) {
    margin-left: 1rem;
    width: 20vw;
  }


  input {
    border: 1px solid #aaa;
    border-radius: 4px;
    margin: 8px 0;
    outline: none;
    padding: 8px;
    box-sizing: border-box;
    transition: 0.3s;
    width: 60%;
  }
  input:focus {
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgerBlue;
  }
  .temps-verbal {
    font-weight: bold;
    text-align: right;
  }
  .title-verb {
    text-decoration: underline;
  }
  .correct-answer {
    color: green;
  }
  .wrong-answer {
    color: #ff6961;
  }
  .solution {
    color: green;
  }
`;
