import { useState } from "react";
import styled from "styled-components";

const dataCAT = [
  [
    ["El llibre", "que vaig llegir ahir", "era molt interessant"],
    "Subordinada de relatiu",
  ],
  [
    ["No sé", "què has fet durant el cap de setmana", ""],
    "Subordinada substantiva",
  ],
  [
    ["", "Després d'esmorzar", "aniré a comprar pa"],
    "Subordinada adverbial de temps",
  ],
  [
    ["El tren va sortir amb retard", "perquè hi havia una avaria", ""],
    "Subordinada adverbial causal",
  ],
  [
    ["El teu gos és més gran", "que el meu", ""],
    "Subordinada adverbial comparativa",
  ],
  [
    ["", "Si no plou", "anirem a la platja"],
    "Subordinada adverbial condicional",
  ],
  [
    ["Estàs tan avorrit", "que m'has fet badallar", ""],
    "Subordinada adverbial consecutiva",
  ],
  [
    ["Vull estudiar", "per treballar en una empresa internacional", ""],
    "Subordinada adverbial de finalitat",
  ],
  [["Mira", " com ho faig", "i ho faràs bé"], "Subordinada substantiva"],
  [
    ["La casa", "on van viure els meus avis", "està en venda"],
    "Subordinada de relatiu",
  ],
  [["No entenc", "què dius", ""], "Subordinada substantiva"],
  [
    ["Mentre escoltava música", "vaig netejar la cuina", ""],
    "Subordinada adverbial de temps",
  ],
  [
    ["Vaig estudiar molt", "per aprovar l'examen", ""],
    "Subordinada adverbial causal",
  ],
  [
    ["El teu cotxe és tan ràpid", "com el meu", ""],
    "Subordinada adverbial comparativa",
  ],
  [
    ["", "Si et poses la jaqueta", "no passaràs fred"],
    "Subordinada adverbial condicional",
  ],
  [
    ["Van parlar tan fort", "que no els podia escoltar", ""],
    "Subordinada adverbial consecutiva",
  ],
  [
    ["Vaig comprar un pastís", "per fer una sorpresa a la meva germana", ""],
    "Subordinada adverbial de finalitat",
  ],
  [
    ["Parla amb calma", "perquè et pugui entendre millor", ""],
    "Subordinada adverbial de mode",
  ],
  [
    ["On vas anar de vacances?", "Vaig a l'illa de Menorca", ""],
    "Subordinada adverbial de lloc",
  ],
  [
    ["Vaig comprar una casa", "que estava a prop de la platja", ""],
    "Subordinada de relatiu",
  ],
  [["És important", "que arribis a temps", ""], "Subordinada substantiva"],
  [
    ["Vaig estudiar", "mentre la pluja caia", ""],
    "Subordinada adverbial de temps",
  ],
  [
    ["Vaig anar al gimnàs", "ja que volia estar en forma", ""],
    "Subordinada adverbial causal",
  ],
  [
    ["El meu germà és més alt", "que el meu pare", ""],
    "Subordinada adverbial comparativa",
  ],
  [
    ["Si no vas al metge", "la teva malaltia es pot agreujar", ""],
    "Subordinada adverbial condicional",
  ],
  [
    ["Va sortir corrent", "de manera que va arribar tard", ""],
    "Subordinada adverbial consecutiva",
  ],
  [
    ["Estudiem", "perquè podem treballar en el futur", ""],
    "Subordinada adverbial de finalitat",
  ],
  [
    ["Va parlar en veu baixa", "com si estigués amagant alguna cosa", ""],
    "Subordinada adverbial de mode",
  ],
  [
    ["Jo visc on sempre he viscut", "que és a Barcelona", ""],
    "Subordinada adverbial de lloc",
  ],
  [
    ["Vaig portar un paraigua", "per si plovia", ""],
    "Subordinada adverbial condicional",
  ],
  [
    ["Vaig córrer molt", "tot i que estava cansat", ""],
    "Subordinada adverbial concessiva",
  ],
  [["Estic segur", "que no va ser ell", ""], "Subordinada substantiva"],
  [
    [
      "La Maria ha obtingut una beca",
      "que li permetrà estudiar a l'estranger",
      "",
    ],
    "Subordinada de relatiu",
  ],
  [
    ["El menjar era deliciós", "quan el vaig tastar", ""],
    "Subordinada adverbial de temps",
  ],
  [
    ["No et preocupis", "si no ho entens", ""],
    "Subordinada adverbial condicional",
  ],
  [
    ["El noi va passar per aquí sense", "que nosaltres ens adonéssim", ""],
    "Subordinada substantiva",
  ],
  [
    ["Vull anar a la platja", "encara que faci fred", ""],
    "Subordinada adverbial concessiva",
  ],
  [
    ["Vaig sortir", "quan el sol ja s'havia posat", ""],
    "Subordinada adverbial de temps",
  ],
  [
    ["Vaig ballar molt", "perquè m'agrada molt ballar", ""],
    "Subordinada adverbial causal",
  ],
  [
    ["El llibre que vaig llegir", "era molt interessant", ""],
    "Subordinada de relatiu",
  ],
  [
    ["Vaig dir que no", "perquè tenia altres plans", ""],
    "Subordinada adverbial causal",
  ],
  [
    ["Em va sorprendre", "quan em va cridar", "per aquesta feina"],
    "Subordinada adverbial de temps",
  ],
  [
    ["La casa d'en Joan és més gran", "que la meva", ""],
    "Subordinada adverbial comparativa",
  ],
  [["", "Si plou", "no sortiré de casa"], "Subordinada adverbial condicional"],
  [
    ["Vaig estudiar molt", "per aprovar l'examen", ""],
    "Subordinada adverbial de finalitat",
  ],
  [
    ["La gent estava tan farta", "que van començar a protestar", ""],
    "Subordinada adverbial consecutiva",
  ],
  [
    ["Vaig sortir corrents", "com si em persegueixen", ""],
    "Subordinada adverbial de mode",
  ],
  [
    [
      "El llibre que vaig llegir",
      "va ser escrit per l'autor que em va agradar més",
      "",
    ],
    "Subordinada de relatiu",
  ],

  [
    ["Vaig anar a dormir", "quan vaig estar cansat", ""],
    "Subordinada adverbial de temps",
  ],
  [
    ["Vaig anar al supermercat", "on vaig trobar tot el que necessitava", ""],
    "Subordinada adverbial de lloc",
  ],
  [
    ["No em va agradar", "com ella em va tractar", ""],
    "Subordinada adverbial de mode",
  ],
  [
    ["Vaig estudiar molt", "per obtenir una bona nota", ""],
    "Subordinada adverbial de finalitat",
  ],
  [
    ["Ella no va venir", "com havia promès", ""],
    "Subordinada adverbial de mode",
  ],
  [
    ["Vaig comprar aquella casa", "perquè era barata", ""],
    "Subordinada adverbial causal",
  ],
  [
    ["M'agrada anar al parc", "quan fa bon temps", ""],
    "Subordinada adverbial de temps",
  ],
  [
    ["Vaig sortir corrents", "com si m'haguessin vist", ""],
    "Subordinada adverbial de mode",
  ],
  [
    ["Vaig estudiar molt", "com si fos l'última vegada", ""],
    "Subordinada adverbial de mode",
  ],
  [["La casa", "on vaig néixer", "era petita"], "Subordinada de relatiu"],
  [["El llibre", "que estic llegint", ""], "Subordinada de relatiu"],
  [
    ["El parc", "on jugàvem de petits", "era molt gran"],
    "Subordinada de relatiu",
  ],
  [
    ["El restaurant", "on van sopar ahir", "era molt bo"],
    "Subordinada de relatiu",
  ],
  [
    ["La persona", "a qui vaig preguntar", "em va ajudar molt"],
    "Subordinada de relatiu",
  ],
  [
    ["El parc", "on hi ha molts arbres", "és molt bonic"],
    "Subordinada de relatiu",
  ],
  [["El meu gos", "que és molt juganer", ""], "Subordinada de relatiu"],
  [
    ["La ciutat", "on van passar les vacances", "era molt interessant"],
    "Subordinada de relatiu",
  ],
  [
    ["El professor", "que ens va ensenyar", "era molt simpàtic"],
    "Subordinada de relatiu",
  ],
  [
    ["El jardí", "on van fer la festa", "era molt ben decorat"],
    "Subordinada de relatiu",
  ],
  [
    ["El llibre", "que em va prestar la meva germana", "és molt interessant"],
    "Subordinada de relatiu",
  ],

  [
    ["El doctor em va recomanar", "que deixés de fumar", ""],
    "Subordinada substantiva",
  ],

  [
    ["", "Quan vaig arribar a casa", "em vaig dutxar"],
    "Subordinada adverbial de temps",
  ],

  [
    ["", "Perquè estava cansat", "va decidir anar a dormir"],
    "Subordinada adverbial causal",
  ],

  [
    ["", "Més que aquesta camisa", "m'agrada aquella blusa"],
    "Subordinada adverbial comparativa",
  ],

  [
    ["", "Si estudies molt", "aprovaràs l'examen"],
    "Subordinada adverbial condicional",
  ],

  [
    ["Va ploure molt,", " de manera que em vaig mullar", ""],
    "Subordinada adverbial consecutiva",
  ],

  [
    ["Vaig escriure a la meva mare", "perquè m'enviï propina", ""],
    "Subordinada adverbial de finalitat",
  ],

  [
    ["Va sortir corrents", "com si hagués vist una espurna", ""],
    "Subordinada adverbial de mode",
  ],

  [
    ["", "On vaig deixar les claus", "no me'n recordo"],
    "Subordinada adverbial de lloc",
  ],

  [
    ["El llibre", "sobre el qual em van parlar", "no l'he trobat"],
    "Subordinada de relatiu",
  ],

  [
    ["Em va agradar", "el que em vas llegir ahir", ""],
    "Subordinada de relatiu",
  ],

  [
    ["Vaig comprar una cosa ", "que m'agradava molt", ""],
    "Subordinada de relatiu",
  ],

  [
    ["Vaig veure una pel·lícula", "que està basada en una novel·la", ""],
    "Subordinada de relatiu",
  ],

  [
    ["Van sortir corrents els nens ", "que van veure el circ", ""],
    "Subordinada de relatiu",
  ],

  [
    ["La casa", " on vaig viure", "es va vendre fa un any"],
    "Subordinada de relatiu",
  ],

  [
    ["Vaig buscar per internet", "on podria comprar entrades", ""],
    "Subordinada adverbial de mode",
  ],

  [
    ["Després que vaig acabar el treball", "em vaig anar a dormir", ""],
    "Subordinada adverbial de temps",
  ],

  [
    ["Va arribar tard", "tot i que sabia que estava previst a les 9:00", ""],
    "Subordinada adverbial concessiva",
  ],

  [
    ["", "Si vas a Barcelona", "no et pots perdre el parc Güell"],
    "Subordinada adverbial condicional",
  ],
  [
    [
      "Els pisos estan tan cars",
      "que els joves triguen molt a independitzar-se",
      "",
    ],
    "Subordinada adverbial consecutiva",
  ],
  [
    ["L'avisaré jo mateix", "tan bon punt pengi el telèfon", ""],
    "Subordinada adverbial de temps",
  ],
  [
    ["Vaig conèixer algú", "que viu a la meva ciutat", ""],
    "Subordinada de relatiu",
  ],
  [["No sé", "si vindràs a la festa", ""], "Subordinada substantiva"],
  [
    ["Vaig arribar a casa", "quan el sol es posava", ""],
    "Subordinada adverbial de temps",
  ],
  [
    ["El meu germà no té diners", "perquè no treballa", ""],
    "Subordinada adverbial causal",
  ],
  [
    ["No hi ha res més gran", "que l'amor que sento per tu", ""],
    "Subordinada adverbial comparativa",
  ],
  [
    ["Si tens temps", "podem anar al cinema", ""],
    "Subordinada adverbial condicional",
  ],
  [
    ["Vaig córrer tant", "que vaig arribar esgotat", ""],
    "Subordinada adverbial consecutiva",
  ],
  [
    ["Vull que em compres", "una bicicleta nova", ""],
    "Subordinada adverbial de finalitat",
  ],
  [
    ["Els meus amics van ballar", "com si no hi hagués demà", ""],
    "Subordinada adverbial de mode",
  ],
  [
    ["Vaig visitar el parc", "on vaig jugar de petit", ""],
    "Subordinada adverbial de lloc",
  ],
  [
    ["El vaixell va sortir", "després que el sol es ponés", ""],
    "Subordinada adverbial de temps",
  ],
  [
    ["No és tan ràpid", "com el teu cotxe", ""],
    "Subordinada adverbial comparativa",
  ],
  [
    ["Si vols aconseguir-ho", "has de treballar més dur", ""],
    "Subordinada adverbial condicional",
  ],
  [
    ["Vaig plorar", "perquè em van fer mal", ""],
    "Subordinada adverbial causal",
  ],
  [
    ["El gos és tan petit", "que cap a la meva mà", ""],
    "Subordinada adverbial comparativa",
  ],
  [
    ["No em preocuparé", "si em dius que vindràs", ""],
    "Subordinada adverbial condicional",
  ],
  [
    ["Vaig caminar cap a casa", "tot i que estava cansat", ""],
    "Subordinada adverbial concessiva",
  ],
  [
    ["Vaig fer la feina", "com si fos la meva última oportunitat", ""],
    "Subordinada adverbial de mode",
  ],
  [
    ["Em vaig adormir", "després que la pel·lícula acabés", ""],
    "Subordinada adverbial de temps",
  ],
  [
    ["M'agrada anar a la platja", "quan fa calor", ""],
    "Subordinada adverbial de temps",
  ],
  [["No entenc", "el que dius", ""], "Subordinada substantiva"],
  [["El llibre", "que em van regalar", ""], "Subordinada de relatiu"],
  [["M'agrada", "que estiguis aquí", ""], "Subordinada substantiva"],
  [["El restaurant", "on vam anar ahir", ""], "Subordinada de relatiu"],
  [["Em preocupa", "com anirà tot", ""], "Subordinada substantiva"],
  [["El concert", "al que van assistir", ""], "Subordinada de relatiu"],
  [["No sé", "què fer", ""], "Subordinada substantiva"],
  [
    ["La persona", "a qui vas veure", "era sospitosament agradable"],
    "Subordinada de relatiu",
  ],
  [["És important", "que vinguis", ""], "Subordinada substantiva"],
  [
    ["El cotxe", "que vam llogar", "funciona perfecte"],
    "Subordinada de relatiu",
  ],
  [
    ["El dia", "que vaig conèixer la Maria", "fou increïble"],
    "Subordinada de relatiu",
  ],
  [["Vull saber", "on has estat", ""], "Subordinada substantiva"],
  [
    ["Vaig anar al parc", "perquè volia prendre l'aire", ""],
    "Subordinada adverbial causal",
  ],
  [
    ["La gata", "que van adoptar", "és molt carinyosa"],
    "Subordinada de relatiu",
  ],
  [["M'agrada", "quan fas això", ""], "Subordinada substantiva"],
  [
    ["El professor", "que ens va explicar la teoria", ""],
    "Subordinada de relatiu",
  ],
  [
    ["No em preocupa", "si triguem una mica", ""],
    "Subordinada adverbial condicional",
  ],
  [
    ["La decisió", "que van prendre", "no em va agradar"],
    "Subordinada de relatiu",
  ],
  [
    ["Hem de sortir ara", "per arribar a temps", ""],
    "Subordinada adverbial de temps",
  ],
  [["No estic segur", "de si he pagat", ""], "Subordinada adverbial de mode"],
  [["El llibre", "que està a la taula", ""], "Subordinada de relatiu"],
  [["Vull saber", "si podré anar a la festa", ""], "Subordinada substantiva"],
  [
    ["La Laura va arribar tard", "perquè es va perdre pel camí", ""],
    "Subordinada adverbial causal",
  ],
  [
    ["El futbolista", "que va marcar el gol", "és un crack"],
    "Subordinada de relatiu",
  ],
  [
    ["Em preocupa", "que no hi hagi prou menjar", ""],
    "Subordinada substantiva",
  ],
  [["El llibre", "que em vas recomanar", ""], "Subordinada de relatiu"],
  [
    ["Si no fa bon temps", "no sortiré de casa", ""],
    "Subordinada adverbial condicional",
  ],
  [
    ["El concert", "que vaig veure ahir", "va ser espectacular"],
    "Subordinada de relatiu",
  ],
  [
    ["Mentre menjàvem", "van començar a ploure", ""],
    "Subordinada adverbial de temps",
  ],
  [
    ["Està content", "com si hagués guanyat la loteria", ""],
    "Subordinada adverbial comparativa",
  ],
  [
    ["En Xavier", "que és un pingüí molt simpàtic", "no sap programar"],
    "Subordinada de relatiu",
  ],
  [
    ["En Xavier espera", "que arribi el seu amic l'ós polar Òscar", ""],
    "Subordinada substantiva",
  ],
  [
    ["En Xavier va al cinema", "perquè vol veure la pel·lícula nova", ""],
    "Subordinada adverbial causal",
  ],
  [
    ["El pingüí Xavier", "que viu a la Antàrtida", "està acostumat al fred"],
    "Subordinada de relatiu",
  ],
  [
    [
      "En Xavier dubta",
      "si podrà nedar en aigua dolça",
      ", ja que ell està acostumat al clima de Torrefarrera",
    ],
    "Subordinada substantiva",
  ],
  [
    [
      "En Xavier, el pingüí més divertit",
      "que he vist mai",
      ", li agrada la programació",
    ],
    "Subordinada de relatiu",
  ],
  [
    ["", "Si en Xavier no té gana", "no menjarà peix"],
    "Subordinada adverbial condicional",
  ],
  [
    [
      "El pingüí Xavier",
      "que és molt amic de la llebre blanca",
      "li va explicar un secret",
    ],
    "Subordinada de relatiu",
  ],
  [
    ["En Xavier balla", "com si fos una estrella de rock", ""],
    "Subordinada adverbial de mode",
  ],
  [
    ["En Xavier és tan alt", "com el pingüí més gran de tot el grup", ""],
    "Subordinada adverbial comparativa",
  ],
  [
    ["En Marcel", "que té problemes d'ira", "no vol acceptar la seva condició"],
    "Subordinada de relatiu",
  ],
  [
    ["En Marcel no vol admetre", "que té problemes d'ira", ""],
    "Subordinada substantiva",
  ],
  [
    ["En Marcel va cridar", "perquè estava molt enfadat", ""],
    "Subordinada adverbial de finalitat",
  ],
  [
    [
      "El noi Marcel",
      "que viu al carrer principal",
      "està sempre molt alterat",
    ],
    "Subordinada de relatiu",
  ],
  [
    ["En Marcel no sap", "com controlar la seva ira", ""],
    "Subordinada substantiva",
  ],

  [
    ["Si en Marcel no va a teràpia", "no podrà millorar", ""],
    "Subordinada adverbial condicional",
  ],
  [
    ["En Marcel va trencar la finestra", "com si fos de paper", ""],
    "Subordinada adverbial de mode",
  ],
  [
    ["En Marcel es posa molt furios", "quan perd un joc", ""],
    "Subordinada adverbial de temps",
  ],
  [
    [
      "En Marcel va agafar una pedra",
      "perquè estava molt enfadat",
      "i va matar a un noi",
    ],
    "Subordinada adverbial causal",
  ],
  [
    ["El treball de Marcel", "a Codelearn", "és una tortura"],
    "Subordinada de relatiu",
  ],
  [
    ["En Marcel té por de", "perdre la feina a Codelearn", ""],
    "Subordinada substantiva",
  ],
  [
    ["En Marcel no es sent bé amb", "la situació actual de Codelearn", ""],
    "Subordinada substantiva",
  ],
  [
    [
      "El sou d'en Marcel a Codelearn",
      ", que és precari, ",
      "no és suficient per viure",
    ],
    "Subordinada de relatiu",
  ],
  [
    [
      "En Marcel va començar a buscar feina",
      "quan va veure la situació de Codelearn",
      "",
    ],
    "Subordinada adverbial de temps",
  ],
  [
    ["En Marcel no vol deixar Codelearn", "perquè té amics allà", ""],
    "Subordinada adverbial causal",
  ],
  [
    ["El director de Codelearn", "que és el cap de Marcel", "no té cap idea"],
    "Subordinada de relatiu",
  ],
  [
    ["Marcel ha estat treballant a Codelearn", "des de fa més de 5 anys", ""],
    "Subordinada adverbial de temps",
  ],
  [
    [
      "Marcel va ser promès amb una millora de sou a Codelearn",
      "que mai va arribar",
      "",
    ],
    "Subordinada de relatiu",
  ],
  [
    ["En Marcel vol ajudar", "a millorar la situació de Codelearn", ""],
    "Subordinada substantiva",
  ],
  [
    [
      "El pare d'en Maties és el director de 'tecnologia' a Fajas Tortas",
      "on ha fet una carrera molt exitosa",
      "",
    ],
    "Subordinada adverbial de lloc",
  ],
  [
    [
      "En Xavier no vol treballar a Fajas Tortas",
      "on el pare del Maties és molt respectat",
      "",
    ],
    "Subordinada adverbial de lloc",
  ],
  [
    [
      "En Maties parla de Fajas Tortas",
      "com si fos la millor empresa del món",
      "",
    ],
    "Subordinada adverbial comparativa",
  ],
  [
    [
      "El somni d'en Maties és treballar,",
      "encara que sigui en una empresa obsoleta",
      "",
    ],
    "Subordinada adverbial concessiva",
  ],
  [
    [
      "En Maties està estudiant enginyeria informàtica al CFIS",
      "per a poder treballar en un futur",
      "",
    ],
    "Subordinada adverbial de finalitat",
  ],
  [
    [
      "El pare d'en Maties treballa al camp",
      "on és molt respectat i admirat",
      "",
    ],
    "Subordinada adverbial de lloc",
  ],
  [
    [
      "El meu amic Xavier va intentar preparar el sopar",
      "tot i no saber cuinar",
      "ahir",
    ],
    "Subordinada adverbial concessiva",
  ],
  [
    [
      "En Xavier es va presentar al concurs de música",
      "malgrat no haver tocat mai un instrument abans",
      "",
    ],
    "Subordinada adverbial concessiva",
  ],
  [
    [
      "El meu company de feina, Xavier, va intentar resoldre el problema de codi",
      "malgrat no tenir-ne cap idea",
      "",
    ],
    "Subordinada adverbial concessiva",
  ],
  [
    [
      "En Xavier va voler reparar el cotxe",
      "tot i no tenir cap coneixement mecànic",
      "",
    ],
    "Subordinada adverbial concessiva",
  ],
  [
    [
      "El meu veí, Xavier, va intentar arreglar la llum",
      "encara que no sabia ni com agafar el destornillador",
      "",
    ],
    "Subordinada adverbial concessiva",
  ],
  [
    [
      "En Xavier va voler passar la nit a sols amb la seva parella",
      "a pesar de no saber ni com acariciar",
      "",
    ],
    "Subordinada adverbial concessiva",
  ],
  [
    ["El meu amic Xavier va anar a fer surf", "tot i no saber ni nedar", ""],
    "Subordinada adverbial concessiva",
  ],
  [
    [
      "En Xavier es va presentar a l'examen de conduir",
      "encara que no havia agafat mai el volant",
      "",
    ],
    "Subordinada adverbial concessiva",
  ],
  [
    [
      "El meu company de pis, Xavier, va voler cuinar el sopar",
      ", no obstant, mai ha entrat a la cuina",
      "",
    ],
    "Subordinada adverbial concessiva",
  ],
  [
    [
      "En Xavier va intentar tocar la guitarra a l'espectacle",
      "tot i no haver agafat mai un instrument abans",
      ", resultant en una catàstrofe auditiva",
    ],
    "Subordinada adverbial concessiva",
  ],
  [
    [
      "",
      "Si li dius a en Marcel que t'ajudi amb la programació",
      "acabaràs més confós que abans",
    ],
    "Subordinada adverbial condicional",
  ],
];

const dataCAST = [
  [["El coche", "que compré", "es rojo"], "Subordinada de relativo"],
  [
    ["Me sorprendió", "que no hubiera nadie en la fiesta", ""],
    "Subordinada sustantiva",
  ],
  [
    ["","Mientras estudiaba", "escuchaba música"],
    "Subordinada adverbial de tiempo",
  ],
  [
    ["","Como no me apetecía cocinar", "pedí comida a domicilio"],
    "Subordinada adverbial causal",
  ],
  [
    ["Mi perro es más grande", "que el tuyo",""],
    "Construcción comparativa",
  ],
  [
    ["","Si llueve", "nos quedaremos en casa"],
    "Subordinada adverbial condicional",
  ],
  [
    ["Estaba tan cansado", "que me quedé dormido en el sofá",""],
    "Subordinada adverbial consecutiva",
  ],
  [
    ["Él Hablaba", "como si fuera un experto en el tema",""],
    "Subordinada adverbial de modo",
  ],
  [
    ["No tenía dinero para", "comprarme un regalo",""],
    "Subordinada sustantiva",
  ],
  [["Quiero saber", "cuándo llega el tren",""], "Subordinada sustantiva"],
  [["Creo", "que mañana lloverá",""], "Subordinada sustantiva"],
  [
    ["Ayer conocí a un chico", "que hablaba varios idiomas", ""],
    "Subordinada de relativo",
  ],
  [
    ["La película", "que vi anoche", "me gustó mucho"],
    "Subordinada de relativo",
  ],
  [["No sabía", "cómo hacerlo",""], "Subordinada adverbial de modo"],
  [
    ["Me compré el libro por", "-que me lo recomendaron",""],
    "Subordinada sustantiva",
  ],
 
  [
    [ "","Si tengo tiempo", "te ayudaré con el proyecto"],
    "Subordinada adverbial condicional",
  ],
  [
    ["Me encanta el olor", "que tiene la hierba", "después de llover"],
    "Subordinada de relativo",
  ],
  [
    ["Espero", "que vengas a mi fiesta de cumpleaños", ""],
    "Subordinada sustantiva",
  ],
  [
    ["No pude estudiar por", "-que me dolía la cabeza", "toda la tarde"],
    "Subordinada sustantiva",
  ],
  [
    ["La casa", "donde vivo", "es muy bonita"],
    "Subordinada de relativo",
  ],
  [
    ["Necesito"," que me ayudes", "urgentemente"],
    "Subordinada sustantiva",
  ],
  [
    ["","Mientras cocinaba", "escuché música"],
    "Subordinada adverbial de tiempo",
  ],
  [
    ["","Si llueve", "nos quedamos en casa"],
    "Subordinada adverbial condicional",
  ],
  [
    ["Estudié mucho", "por lo tanto, aprobé el examen", ""],
    "Subordinada adverbial Ilativa",
  ],
  [
    ["Habló tan bajo", "que no le oímos", ""],
    "Subordinada adverbial consecutiva",
  ],
  [
    ["No me gustan las verduras", "a pesar de que son saludables", ""],
    "Subordinada adverbial concesiva",
  ],
  [
    ["Voy a la piscina para ", "hacer ejercicio", ""],
    "Subordinada sustantiva",
  ],
  [
    ["Ese libro es tan interesante", "como el que leí la semana pasada", ""],
    "Construcción comparativa",
  ],
  [
    ["La película", "que vimos anoche", "era muy aburrida"],
    "Subordinada de relativo",
  ],
  [["Espero", "que vengas a mi fiesta", ""], "Subordinada sustantiva"],
  [
    ["","Mientras estudiaba", "me quedé dormido"],
    "Subordinada adverbial de tiempo",
  ],
  [
    ["","Si pierdo mi pasaporte", "no podré viajar"],
    "Subordinada adverbial condicional",
  ],
  [
    ["Compré un abrigo nuevo por", "-que hacía mucho frío", ""],
    "Subordinada Sustantiva",
  ],
  [
    ["Habló tan bajo", "que nadie le entendió", ""],
    "Subordinada adverbial de modo",
  ],
  [
    [
      "Me gustaría ir de vacaciones",
      "a pesar de que no tengo mucho dinero",
      "",
    ],
    "Subordinada adverbial concesiva",
  ],
  [
    ["Voy a la biblioteca", "para estudiar para el examen", ""],
    "Subordinada sustantiva",
  ],
  [
    ["Ese edificio es tan alto", "como la torre Eiffel", ""],
    "Construcción comparativa",
  ],
  [
    ["La casa", "donde pasé mi infancia", "fue demolida"],
    "Subordinada de relativo",
  ],
  [
    ["La película que vimos", "era muy buena", ""],
    "Subordinada de relativo",
  ],
  [["No sé", "si vendrán", "a la fiesta"], "Subordinada sustantiva"],
  [
    ["Mientras estudiaba", "escuché una canción", ""],
    "Subordinada adverbial de tiempo",
  ],
  [
    ["","Como llovía", "decidimos quedarnos en casa",],
    "Subordinada adverbial causal",
  ],
  [
    ["Si apruebo el examen", "celebraré con mis amigos", ""],
    "Subordinada adverbial condicional",
  ],
  [
    ["Habló tan alto", "que se asustaron los vecinos", ""],
    "Subordinada adverbial consecutiva",
  ],
  [
    ["Ella baila", "como si nadie la estuviera mirando", ""],
    "Subordinada adverbial de modo",
  ],

  [
    ["Aunque esté lloviendo", "iré a correr", ""],
    "Subordinada adverbial concesiva",
  ],
  [
    ["Este libro es más interesante", "que el anterior que leí", ""],
    "Construcción comparativa",
  ],
  [
    ["El pastel que preparó mi abuela", "estaba delicioso", ""],
    "Subordinada de relativo",
  ],
  [
    ["Quiero que me cuentes", "lo que ha pasado", ""],
    "Subordinada sustantiva",
  ],
  [
    ["Después de la cena", "me fui a dormir", ""],
    "Subordinada adverbial de tiempo",
  ],
  [
    ["","Ya que no tienes nada que hacer", "puedes ayudarme"],
    "Subordinada adverbial causal",
  ],
  [
    ["Si me llamas", "te contestaré", ""],
    "Subordinada adverbial condicional",
  ],
  [
    ["Hablaba tan rápido", "que no le entendí nada", ""],
    "Subordinada adverbial consecutiva",
  ],
  [
    ["Ella estudia", "como si quisiera sacar la mejor nota", ""],
    "Subordinada adverbial de modo",
  ],

  [
    ["Aunque te moleste", "tengo que decírtelo", ""],
    "Subordinada adverbial concesiva",
  ],
  [
    ["Este restaurante es más caro", "que el otro que fuimos", ""],
    "Construcción comparativa",
  ],
  [
    ["Dudo que lleguen a tiempo", "por lo que habrá que empezar sin ellos", ""],
    "Subordinada adverbial ilativa",
  ],
  [
    ["Voy a estudiar para", " que pueda aprobar el examen", ""],
    "Subordinada sustantiva",
  ],
  [
    ["Trabaja mucho para", " que puedas tener un futuro mejor", ""],
    "Subordinada sustantiva",
  ],
  [
    ["Ahorra un poco de dinero para", " que puedas irte de vacaciones", ""],
    "Subordinada sustantiva",
  ],
  [
    ["Haz ejercicio diariamente para", " que puedas mantenerte en forma", ""],
    "Subordinada sustantiva",
  ],
  [
    [
      "Estudia idiomas para",
      "que puedas comunicarte con personas de todo el mundo",
      "",
    ],
    "Subordinada sustantiva",
  ],
  [
    ["Necesito tu ayuda para", "terminar este trabajo", ""],
    "Subordinada sustantiva",
  ],
  [
    ["Me alegro de que haya llegado para", "ayudarme", ""],
    "Subordinada sustantiva",
  ],
  [
    ["No tengo tiempo para", "leer ese libro", ""],
    "Subordinada sustantiva",
  ],
  [
    ["Quiero estudiar francés para", "viajar a Francia", ""],
    "Subordinada sustantiva",
  ],
  [
    ["Voy a la tienda para", "comprar comida", ""],
    "Subordinada sustantiva",
  ],
  [
    ["Hoy hace mucho calor,", "por tanto, mejor nos quedamos en casa", ""],
    "Subordinada adverbial ilativa",
  ],
  [
    ["No quiero llegar tarde", "así que saldré con tiempo de sobra", ""],
    "Subordinada adverbial ilativa",
  ],

  [
    [
      "Ya que has venido a visitarme,",
      "por consiguiente, te invitaré a cenar",
      "",
    ],
    "Subordinada adverbial ilativa",
  ],
  [
    [
      "No me gusta el fútbol",
      "conque prefiero ver otra cosa en la televisión",
      "",
    ],
    "Subordinada adverbial ilativa",
  ],
  [
    ["Estudio todos los días", "por tanto siempre saco buenas notas", ""],
    "Subordinada adverbial ilativa",
  ],
  [
    ["No tenía hambre", "así que no comí nada", ""],
    "Subordinada adverbial ilativa",
  ],
  [
    [
      "El piso está en mal estado",
      "por consiguiente hay que hacer algunas reparaciones",
      "",
    ],
    "Subordinada adverbial ilativa",
  ],
  [
    [
      "Vamos a llegar tarde",
      "conque tendrás que llamar al cliente para disculparte",
      "",
    ],
    "Subordinada adverbial ilativa",
  ],
  [
    ["No me gusta la lluvia", "por tanto siempre llevo un paraguas", ""],
    "Subordinada adverbial ilativa",
  ],
  [
    ["Hice una buena presentación", "por tanto el jefe me felicitó", ""],
    "Subordinada adverbial ilativa",
  ],
  [
    ["Ayer hice deporte", "así que hoy me duele todo el cuerpo", ""],
    "Subordinada adverbial ilativa",
  ],
  [
    ["Mi tía es médica", "por tanto siempre tengo un consejo médico", ""],
    "Subordinada adverbial ilativa",
  ],
  [
    [
      "Llegué tarde a la reunión",
      "por tanto no pude presentar mi propuesta",
      "",
    ],
    "Subordinada adverbial ilativa",
  ],
  [
    ["Ya hemos pagado la entrada", "así que podemos entrar al concierto", ""],
    "Subordinada adverbial ilativa",
  ],
  [
    [
      "No me gusta el cine de terror",
      "a pesar de que mi pareja insiste en ver esas películas",
      "",
    ],
    "Subordinada adverbial concesiva",
  ],
  [
    [
      "No tengo experiencia en ventas",
      "aunque me contrataron como vendedor en la tienda",
      "",
    ],
    "Subordinada adverbial concesiva",
  ],
  [
    [
      "Hice una dieta estricta durante un mes",
      "aunque al final no logré bajar de peso",
      "",
    ],
    "Subordinada adverbial concesiva",
  ],
  [
    [
      "Estoy muy ocupado con el trabajo",
      "no obstante, siempre encuentro tiempo para leer un poco cada día",
      "",
    ],
    "Subordinada adverbial concesiva",
  ],
  [
    [
      "Sé que debería ahorrar dinero",
      "pero siempre termino gastándolo en cosas innecesarias",
      "",
    ],
    "Subordinada adverbial concesiva",
  ],

  [
    [
      "No tenía suficiente experiencia en el campo",
      "a pesar de que me ofrecieron el trabajo",
      "",
    ],
    "Subordinada adverbial concesiva",
  ],
  [
    ["", "A pesar de tener miedo a las alturas", "me subí a la montaña rusa"],
    "Subordinada adverbial concesiva",
  ],
  [
    ["No había estudiado para el examen", "aun así, saqué una buena nota", ""],
    "Subordinada adverbial concesiva",
  ],
  [
    ["", "Aunque no tenía mucho dinero", "decidí irme de vacaciones"],
    "Subordinada adverbial concesiva",
  ],

  [
    ["", "A pesar de tener un pie roto", "continuó haciendo deporte"],
    "Subordinada adverbial concesiva",
  ],
  [
    [
      "No había estudiado francés en años",
      "no obstante, pude entender la conversación",
      "",
    ],
    "Subordinada adverbial concesiva",
  ],
  [
    [
      "",
      "Aunque tenía miedo a volar",
      "decidí tomar el avión para llegar más rápido",
    ],
    "Subordinada adverbial concesiva",
  ],

  [
    [
      "",
      "Aunque no era mi tipo de música favorita",
      "terminé disfrutando el concierto",
    ],
    "Subordinada adverbial concesiva",
  ],
  [
    ["", "Si bien no tenía mucha hambre,", "comí una rebanada de pastel", ""],
    "Subordinada adverbial concesiva",
  ],
  [
    [
      "Aunque no me gustaba el ambiente de la ciudad",
      "decidí mudarme allí por trabajo",
      "",
    ],
    "Subordinada adverbial concesiva",
  ],
  [
    ["No había estudiado para el examen", "de todas formas, me presenté", ""],
    "Subordinada adverbial concesiva",
  ],
  [
    [
      "A pesar de no ser muy sociable",
      "decidí ir a la fiesta de cumpleaños",
      "",
    ],
    "Subordinada adverbial concesiva",
  ],

  [
    ["", "Aunque no me gusta el frío", "iré a esquiar con mis amigos"],
    "Subordinada adverbial concesiva",
  ],
  [
    ["No me siento bien", "por lo tanto, no iré a trabajar hoy", ""],
    "Subordinada adverbial ilativa",
  ],
  [
    [
      "Prefiero la comida mexicana",
      "pese a que voy a probar la comida japonesa",
      "",
    ],
    "Subordinada adverbial concesiva",
  ],
  [
    ["Estoy muy cansado,", "por eso, voy a dormir temprano hoy", ""],
    "Subordinada adverbial ilativa",
  ],
  [
    ["", "Aunque nunca he corrido una maratón", "voy a intentarlo este año"],
    "Subordinada adverbial concesiva",
  ],
  [
    [
      "No me gusta madrugar",
      "así que prefiero trabajar en el turno de tarde",
      "",
    ],
    "Subordinada adverbial ilativa",
  ],
  [
    [
      "",
      "Aunque no me gusta el cine de terror",
      "mis amigos me han convencido para ir a ver la película",
    ],
    "Subordinada adverbial concesiva",
  ],
  [
    [
      "Me gusta mucho el chocolate",
      "así que siempre llevo una barra en mi bolsa",
      "",
    ],
    "Subordinada adverbial ilativa",
  ],
  [
    [
      "Prefiero el baloncesto,",
      "no obstante, disfruto jugando al fútbol con mis amigos",
      "",
    ],
    "Subordinada adverbial concesiva",
  ],
  [
    ["El libro", "que compré ayer", "es muy interesante"],
    "Subordinada de relativo",
  ],
  [["No sé", "qué voy a hacer", "mañana"], "Subordinada sustantiva"],
  [
    ["", "Después de comer langostinos", "siempre me echo una siesta"],
    "Subordinada adverbial de tiempo",
  ],
  [
    ["", "Como no estudies más", "vas a suspender el examen"],
    "Subordinada adverbial condicional",
  ],
  [
    ["Estaba lloviendo tanto", "que nos quedamos en casa", ""],
    "Subordinada adverbial consecutiva",
  ],

  [["Mi hermano es más alto", "que yo", ""], "Construcción comparativa"],
  [
    ["La película", "que vimos anoche", "me gustó mucho"],
    "Subordinada de relativo",
  ],
  [["No me dijo", "cuándo volvería", ""], "Subordinada sustantiva"],
  [
    ["", "Antes de que oscurezca", "iremos al parque"],
    "Subordinada adverbial de tiempo",
  ],

  [
    ["El partido fue tan aburrido", "que me dormí", ""],
    "Subordinada adverbial consecutiva",
  ],
  [
    ["Él Hablaba", "como si me conociera de toda la vida", ""],
    "Subordinada adverbial de modo",
  ],
  [
    ["Voy a estudiar para ", "sacar buenas notas", ""],
    "Subordinada sustantiva",
  ],

  [["El mares más grande ", "que un lago", ""], "Construcción comparativa"],
  [
    ["El chico", "que vive al lado", "es muy simpático"],
    "Subordinada de relativo",
  ],
  [
    ["No creo", "que pueda ir a la fiesta", ""],
    "Subordinada sustantiva",
  ],
  [
    ["El jardín", "donde jugábamos", "era muy grande"],
    "Subordinada de relativo",
  ],
  [
    ["La película", "que vi ayer", "fue muy aburrida"],
    "Subordinada de relativo",
  ],
  [
    ["El libro", "que me recomendaste", "estaba genial"],
    "Subordinada de relativo",
  ],
  [
    ["La ciudad", "donde vivo", "es muy bonita"],
    "Subordinada de relativo",
  ],
  [
    ["El perro", "que ladra mucho", "es muy molesto"],
    "Subordinada de relativo",
  ],
  [
    ["El coche", "que compré hace dos años", "todavía funciona bien"],
    "Subordinada de relativo",
  ],
  [
    ["La chica", "a la que ayudé ayer", "me dio las gracias"],
    "Subordinada de relativo",
  ],
  [
    ["La canción", "que escuché en la radio", "era muy pegadiza"],
    "Subordinada de relativo",
  ],
  [
    ["El restaurante", "donde comimos anoche", "era muy elegante"],
    "Subordinada de relativo",
  ],
  [
    ["La película", "cuya banda sonora me gusta mucho", "ganó un premio"],
    "Subordinada de relativo",
  ],
  [["No me gusta", "que me mientan", ""], "Subordinada sustantiva"],
  [["Es cierto", "que llegó tarde", ""], "Subordinada sustantiva"],
  [["Me alegra", "que hayas venido", ""], "Subordinada sustantiva"],
  [
    ["No entiendo", "por qué no lo hizo", ""],
    "Subordinada sustantiva",
  ],
  [
    ["Llegaré tarde", "si hay mucho tráfico", ""],
    "Subordinada adverbial condicional",
  ],
  [
    ["Hablamos bajo", "para que no nos oigan", ""],
    "Subordinada sustantiva",
  ],
  [
    ["Lo hice por", "-que me lo pidió mi amigo", ""],
    "Subordinada sustantiva",
  ],
  [
    ["Trabajaré hasta tarde", "a menos que termine antes", ""],
    "Subordinada adverbial condicional",
  ],
  [
    ["No puedo salir", "aunque quiero hacerlo", ""],
    "Subordinada adverbial concesiva",
  ],
  [
    ["No me dijo nada", "a pesar de saber la verdad", ""],
    "Subordinada adverbial concesiva",
  ],
  [
    ["Leeré", "mientras llega el tren", ""],
    "Subordinada adverbial de tiempo",
  ],
  [
    ["Voy a estudiar", "para que apruebe el examen", ""],
    "Subordinada sustantiva",
  ],
  [
    ["Esperaré", "hasta que termine la reunión", ""],
    "Subordinada adverbial de tiempo",
  ],
  [
    ["La película fue un éxito gracias a", "que el director es muy bueno", ""],
    "Subordinada sustantiva",
  ],
  [
    ["Jugaré al tenis", "tan pronto como termine el trabajo", ""],
    "Subordinada adverbial de tiempo",
  ],
  [
    ["No me gusta el pescado", "aunque sea muy saludable", ""],
    "Subordinada adverbial concesiva",
  ],
  [
    ["Comí mucho por", "-que tenía mucha hambre", ""],
    "Subordinada sustantiva",
  ],
  [
    ["Viajaré", "en cuanto tenga el dinero", ""],
    "Subordinada adverbial de tiempo",
  ],
  [
    ["No quiero ir", "a menos que tú vayas también", ""],
    "Subordinada adverbial condicional",
  ],
  [
    ["Ella no vendrá por", "-que está enferma", ""],
    "Subordinada sustantiva",
  ],
  [
    ["El cuadro", "que colgaste en la pared", "me gustó mucho"],
    "Subordinada de relativo",
  ],
  [
    ["Es importante", "que estudies para el examen", "desde ya"],
    "Subordinada sustantiva",
  ],
  [
    [
      "Me compré un vestido",
      "como si me lo hubiera hecho a medida",
      "y me queda perfecto",
    ],
    "Construcción comparativa",
  ],
  [
    ["Vendré a verte en cuanto pueda por", "-que me preocupa tu salud", ""],
    "Subordinada sustantiva",
  ],
  [
    [
      "Me preocupa",
      "que no hayas entendido la explicación",
      "porque es importante que lo comprendas",
    ],
    "Subordinada sustantiva",
  ],

  [
    ["Los chicos", "que estaban jugando en el parque", "eran muy ruidosos"],
    "Subordinada de relativo",
  ],
  [
    ["Espero", "que mi amigo llegue a tiempo para el concierto", ""],
    "Subordinada sustantiva",
  ],
  [
    ["La montaña", "que subimos el verano pasado", "era muy alta"],
    "Subordinada de relativo",
  ],
  [
    [
      "Le dije a mi hermano",
      "que me comprara un regalo",
      "porque hoy es mi cumpleaños",
    ],
    "Subordinada sustantiva",
  ],
  [
    ["Voy a salir corriendo, ", "en caso de que llueva, ", "para no mojarme"],
    "Subordinada adverbial condicional",
  ],
  [
    ["Los zapatos", "que te compraste ayer", "son muy bonitos"],
    "Subordinada de relativo",
  ],
  [
    [
      "",
      "A pesar de que llovió todo el día",
      "nos divertimos mucho en el parque de atracciones",
    ],
    "Subordinada adverbial concesiva",
  ],
  [
    [
      "No sabía",
      "dónde estaba mi bolígrafo favorito",
      "hasta que lo encontré en el bolsillo de mi chaqueta",
    ],
    "Subordinada sustantiva",
  ],
  [
    ["El libro", "que leí el mes pasado", "era muy interesante"],
    "Subordinada de relativo",
  ],
  [
    ["Juan es el chico", "que vive en la casa de al lado", "todos lo conocen"],
    "Subordinada de relativo",
  ],
  [
    ["No sé", "si ella vendrá", "a la fiesta"],
    "Subordinada sustantiva",
  ],
  [
    ["Iré a la playa", "cuando termine de trabajar", "esta tarde"],
    "Subordinada adverbial de tiempo",
  ],
  [
    ["No fui a trabajar por", "-que estaba enfermo", "ayer"],
    "Subordinada sustantiva",
  ],

  [
    ["El coche", "que compré la semana pasada", "es rojo"],
    "Subordinada de relativo",
  ],
  [
    ["Me gusta", "ir al cine los viernes", "por la noche"],
    "Subordinada sustantiva",
  ],
  [
    ["Pedro aprendió a bailar salsa", "después de tomar clases", ""],
    "Subordinada adverbial de tiempo",
  ],
  [
    ["No quiero ir al parque", "a menos que haga buen tiempo", ""],
    "Subordinada adverbial condicional",
  ],
  [
    ["Estoy cansado por", "-que trabajé toda la noche", ""],
    "Subordinada sustantiva",
  ],
  [
    ["Aprendí a cocinar", "cuando vivía en Italia", ""],
    "Subordinada adverbial de tiempo",
  ],
  [
    ["Me gusta caminar por", "-que es bueno para la salud", ""],
    "Subordinada sustantiva",
  ],
  [
    ["Pedro estudia", "como si fuera el examen más importante", "de su vida"],
    "Subordinada adverbial de modo",
  ],
  [
    ["Me compré un abrigo por", "-que hace frío", "en invierno"],
    "Subordinada sustantiva",
  ],
  [
    ["No puedo hablar ahora por", "-que estoy ocupado", ""],
    "Subordinada sustantiva",
  ],
  [
    ["Elena habla inglés", "tan bien como un nativo", ""],
    "Construcción comparativa",
  ],
  [
    ["Los niños", "que juegan en el parque", "son muy felices"],
    "Subordinada de relativo",
  ],
  [
    ["Voy a la playa", "antes de ir al trabajo", "cada mañana"],
    "Subordinada adverbial de tiempo",
  ],
  [
    ["Me gusta correr por", "-que me hace sentir bien", ""],
    "Subordinada sustantiva",
  ],
  [
    ["El perro", "que se escapó ayer", "fue encontrado por su dueño"],
    "Subordinada de relativo",
  ],

  [["Lorena cocina", "tan bien como su madre", ""], "Construcción comparativa"],
  [
    ["Aprendí a tocar la guitarra", "después de muchos años de práctica", ""],
    "Subordinada adverbial de tiempo",
  ],
  [
    ["El río", "que atraviesa la ciudad", "es muy grande"],
    "Subordinada de relativo",
  ],
  [
    ["Prefiero ir en bici", "en lugar de ir en coche", ""],
    "Construcción comparativa",
  ],
  [
    ["Marcel golpeó la pared por", "-que se enfadó con su hermano", ""],
    "Subordinada sustantiva",
  ],
  [
    [
      "Marcel dijo que no quería ir a la terapia por",
      "-que le daba vergüenza",
      "",
    ],
    "Subordinada sustantiva",
  ],
  [
    ["La psicóloga explicó a Marcel", "que debía controlar sus emociones", ""],
    "Subordinada sustantiva",
  ],
  [
    ["Marcel comenzó a respirar profundamente para", "calmarse", ""],
    "Subordinada sustantiva",
  ],
  [
    ["Marcel se dio cuenta de que necesitaba ayuda para", "mejorar su ira", ""],
    "Subordinada sustantiva",
  ],

  [
    [
      "Marcel gritó con rabia",
      "cuando vio que su helado se había derretido",
      "",
    ],
    "Subordinada adverbial de tiempo",
  ],
  [
    ["La terapeuta le recomendó a Marcel", "que practicara la meditación", ""],
    "Subordinada sustantiva",
  ],
  [
    ["Marcel decidió hablar con su amigo para", "desahogarse", ""],
    "Subordinada sustantiva",
  ],
  [
    [
      "El entrenador de Marcel le enseñó",
      "cómo canalizar su ira en deportes",
      "",
    ],
    "Subordinada sustantiva",
  ],
  [
    [
      "A diferencia de Matias, Marcel Gruñeiro es buen alumno,",
      "ya que es muy inteligente",
      "",
    ],
    "Subordinada adverbial causal",
  ],
  [
    [
      "Xavier Madrona es buen alumno,",
      "ya que su padre también lo era",
      "",
    ],
    "Subordinada adverbial causal",
  ],
  [
    [
      "Marina enseña bien lengua",
      "ya que su método es ordenado y claro",
      "",
    ],
    "Subordinada adverbial causal",
  ],
  [
    [
      "Las clases de lengua son difíciles",
      "ya que las estructuras léxicas son complejas",
      "",
    ],
    "Subordinada adverbial causal",
  ],
  [
    [
      "Escribo",
      "dado que es mi pasión",
      "",
    ],
    "Subordinada adverbial causal",
  ],
  [
    [
      "Practico piano",
      "dado que es mi instrumento favorito",
      "",
    ],
    "Subordinada adverbial causal",
  ],
  [
    [
      "Trataré de hablar con él",
      "ya que está completamente insoportable",
      "",
    ],
    "Subordinada adverbial causal",
  ],
  [
    [
      "Intentaré meditar",
      "puesto que estoy alterado",
      "",
    ],
    "Subordinada adverbial causal",
  ],
  [
    [
      "El pingüino Xavi debe volver a su iglú",
      "dado que la noche ya cae",
      "",
    ],
    "Subordinada adverbial causal",
  ],

];

function Act4({ correcting, language }) {
  const [Subordinada, setSubordinada] = useState(
    language == "cat"
      ? dataCAT[Math.floor(Math.random() * dataCAT.length)]
      : dataCAST[Math.floor(Math.random() * dataCAST.length)]
  );
  const defaultMsg = language=="cat"? "Escull una opció!" : "Escoje una opción!"
  const [selected, setSelected] = useState(defaultMsg);

  var options = [];
  if (language == "cat") {
    dataCAT.forEach((element) => {
      if (!options.includes(element[1])) options.push(element[1]);
    });
  } else {
    dataCAST.forEach((element) => {
      if (!options.includes(element[1])) options.push(element[1]);
    });
  }


  const correctanswer = Subordinada[1];
  return (
    <Component>
      {Subordinada[0][0] != "" ? Subordinada[0][0] + " " : ""}
      {Subordinada[0][1] != "" ? <u>{Subordinada[0][1]}</u> : ""}
      {Subordinada[0][2] != "" && Subordinada[0][2] != " "
        ? " " + Subordinada[0][2] + "."
        : "."}
      <br />

      <select
      
        onChange={(e) => setSelected(e.target.value)}
        disabled={correcting}
        className={
          correcting && selected != defaultMsg
            ? selected.toLocaleLowerCase() == correctanswer.toLocaleLowerCase()
              ? "correct-answ"
              : "wrong-answ"
            : ""
        }
      >
        <option disabled selected="true">
          {defaultMsg}
        </option>
        {options.sort().map((element) => {
          return <option>{element}</option>;
        })}
      </select>
    </Component>
  );
}

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

  select {
    margin-top: 0.2rem;
    -webkit-appearance: none;
    padding: 7px 40px 7px 12px;
    width: 100%;
    border: 1px solid #e8eaed;
    border-radius: 5px;
    background: white;
    box-shadow: 0 1px 3px -2px #9098a9;
    cursor: pointer;
    font-family: inherit;
    font-size: 16px;
    transition: all 150ms ease;
    &:required:invalid {
      color: #5a667f;
    }

    option {
      color: #223254;
      &[value=""][disabled] {
        display: none;
      }
    }

    &:focus {
      outline: none;
      border-color: #0077ff;
      box-shadow: 0 0 0 2px rgba(#0077ff, 0.2);
    }

    &:hover + svg {
      stroke: #0077ff;
    }

    select {
      background: red !important;
    }
  }

  .correct-answ {
    color: green;
  }

  .wrong-answ {
    color: red;
  }
`;

export default Act4;
