import React, { useState } from "react";
import styled from "styled-components";

const dataCAST = [
 
  ["Niños", "Simple"],
  ["Sillita", "Derivada"],
  ["Baloncesto", "Compuesta"],
  ["Desalmado", "Parasintética por derivación"],
  ["Multimillonario", "Parasintética por composición"],
  ["Bicicleta", "Derivada"],
  ["Librero", "Derivada"],
  ["Zapatería", "Derivada"],
  ["Jardinero", "Derivada"],
  ["Cocinero", "Derivada"],
  ["Llamar", "Simple"],
  ["Casa", "Primitiva"],
  ["Mesa", "Primitiva"],
  ["Árbol", "Primitiva"],
  ["Agua", "Primitiva"],
  ["Sol", "Primitiva"],
  ["Silla", "Primitiva"],
  ["Tierra", "Primitiva"],
  ["Mar", "Primitiva"],
  ["Cielo", "Primitiva"],
  ["Fuego", "Primitiva"],
  ["Pan", "Primitiva"],
  ["Piedra", "Primitiva"],
  ["Luz", "Primitiva"],
  ["Flor", "Primitiva"],
  ["Montaña", "Primitiva"],
  ["Río", "Primitiva"],
  ["Viento", "Primitiva"],
  ["Estrella", "Primitiva"],
  ["Nube", "Primitiva"],
  ["Nieve", "Primitiva"],
  ["Camino", "Primitiva"],
  ["Lluvia", "Primitiva"],
  ["Ola", "Primitiva"],
  ["Sol", "Primitiva"],
  ["Luna", "Primitiva"],
  ["Hielo", "Primitiva"],
  ["Tierra", "Primitiva"],
  ["Aire", "Primitiva"],
  ["Marea", "Primitiva"],
  ["Barro", "Primitiva"],
  ["Pasto", "Primitiva"],
  ["Arena", "Primitiva"],
  ["Agua", "Primitiva"],
  ["Amarillo", "Primitiva"],
  ["Árbol", "Primitiva"],
  ["Azul", "Primitiva"],
  ["Blanco", "Primitiva"],
  ["Casa", "Primitiva"],
  ["Cuerpo", "Primitiva"],
  ["Diente", "Primitiva"],
  ["Gato", "Primitiva"],
  ["León", "Primitiva"],
  ["Lobo", "Primitiva"],
  ["Madera", "Primitiva"],
  ["Mesa", "Primitiva"],
  ["Miel", "Primitiva"],
  ["Naranja", "Primitiva"],
  ["Nuez", "Primitiva"],
  ["Oro", "Primitiva"],
  ["Pájaro", "Primitiva"],
  ["Plata", "Primitiva"],
  ["Puerta", "Primitiva"],
  ["Ratón", "Primitiva"],
  ["Rojo", "Primitiva"],
  ["Soltero", "Primitiva"],
  ["Tigre", "Primitiva"],
  ["Vaca", "Primitiva"],
  ["Aire", "Primitiva"],
  ["Alma", "Primitiva"],
  ["Ángel", "Primitiva"],
  ["Arena", "Primitiva"],
  ["Arco", "Primitiva"],
  ["Árido", "Primitiva"],
  ["Ave", "Primitiva"],
  ["Barro", "Primitiva"],
  ["Bosque", "Primitiva"],
  ["Cielo", "Primitiva"],
  ["Cobre", "Primitiva"],
  ["Cola", "Primitiva"],
  ["Cuerda", "Primitiva"],
  ["Estrella", "Primitiva"],
  ["Fuego", "Primitiva"],
  ["Hielo", "Primitiva"],
  ["Hierro", "Primitiva"],
  ["Luna", "Primitiva"],
  ["Miel", "Primitiva"],
  ["Montaña", "Primitiva"],
  ["Niebla", "Primitiva"],
  ["Ojo", "Primitiva"],
  ["Ola", "Primitiva"],
  ["Oreja", "Primitiva"],
  ["Pez", "Primitiva"],
  ["Piedra", "Primitiva"],
  ["Río", "Primitiva"],
  ["Roca", "Primitiva"],
  ["Sangre", "Primitiva"],
  ["Tierra", "Primitiva"],
  ["Viento", "Primitiva"],
  ["Volcán", "Primitiva"],
  ["Mesa", "Primitiva"],
  ["Piso", "Primitiva"],
  ["Piedra", "Primitiva"],
  ["Luz", "Primitiva"],
  ["Tela", "Primitiva"],
  ["Casa", "Primitiva"],
  ["Planta", "Primitiva"],
  ["Cuerpo", "Primitiva"],
  ["Cabeza", "Primitiva"],
  ["Corazón", "Primitiva"],
  ["Luz", "Primitiva"],
  ["Tierra", "Primitiva"],
  ["Agua", "Primitiva"],
  ["Vida", "Primitiva"],
  ["Muerte", "Primitiva"],
  ["Mundo", "Primitiva"],
  ["Cielo", "Primitiva"],
  ["Árbol", "Primitiva"],
  ["Flor", "Primitiva"],
  ["Planta", "Primitiva"],
  ["Animal", "Primitiva"],
  ["Ojo", "Primitiva"],
  ["Boca", "Primitiva"],
  ["Mano", "Primitiva"],
  ["Pie", "Primitiva"],
  ["Sueño", "Primitiva"],
  ["Silla", "Primitiva"],
  ["Mesa", "Primitiva"],
  ["Comida", "Primitiva"],
  ["Bebida", "Primitiva"],
  ["lavaplatos", "Compuesta"],
  ["sacacorchos", "Compuesta"],
  ["guardabosques", "Compuesta"],
  ["pararrayos", "Compuesta"],
  ["lavamanos", "Compuesta"],
  ["salvavidas", "Compuesta"],
  ["guardabarros", "Compuesta"],
  ["Sillas", "Simple"],
  ["Niñas", "Simple"],
  ["Perros", "Simple"],
  ["Gatos", "Simple"],
  ["Casas", "Simple"],
  ["Árboles", "Simple"],
  ["Flores", "Simple"],
  ["Estrellas", "Simple"],
  ["Canciones", "Simple"],
  ["Caminos", "Simple"],
  ["Gafas", "Simple"],
  ["Puentes", "Simple"],
  ["Habitaciones", "Simple"],
  ["Cucharas", "Simple"],
  ["Sofás", "Simple"],
  ["Pisos", "Simple"],
  ["Bicicletas", "Simple"],
  ["Escuelas", "Simple"],
  ["Mujeres", "Simple"],
  ["Mamás", "Simple"],
  ["Abuelas", "Simple"],
  ["Hermanas", "Simple"],
  ["Amigas", "Simple"],
  ["Maestras", "Simple"],
  ["Doctoras", "Simple"],
  ["Científicas", "Simple"],
  ["Escritoras", "Simple"],
  ["Abuela", "Simple"],
  ["Hermana", "Simple"],
  ["Amiga", "Simple"],
  ["Maestra", "Simple"],
  ["Doctora", "Simple"],
  ["Científica", "Simple"],
  ["Escritora", "Simple"],
  ["Perchas", "Simple"],
  ["Lápices", "Simple"],
  ["Marcadores", "Simple"],
  ["Carpetas", "Simple"],
  ["Bombillas", "Simple"],
  ["Puertas", "Simple"],
  ["Ventanas", "Simple"],
  ["Sillas", "Simple"],
  ["Muebles", "Simple"],
  ["Pinturas", "Simple"],
  ["Plantas", "Simple"],
  ["Cuadros", "Simple"],
  ["Dientes", "Simple"],
  ["Médicos", "Simple"],
  ["Enfermeros", "Simple"],
  ["Pacientes", "Simple"],
  ["Policías", "Simple"],
  ["Bomberos", "Simple"],
  ["Soldados", "Simple"],
  ["Jueces", "Simple"],
  ["Profesores", "Simple"],
  ["Ingenieros", "Simple"],
  ["Cocineros", "Simple"],
  ["Pelotas", "Simple"],
  ["Piscinas", "Simple"],
  ["Relojes", "Simple"],
  ["Globos", "Simple"],
  ["Camisas", "Simple"],
  ["Zapatos", "Simple"],
  ["Sombreros", "Simple"],
  ["Juguetes", "Simple"],
  ["Muñecas", "Simple"],
  ["Autos", "Simple"],
  ["Cucharas", "Simple"],
  ["Tenedores", "Simple"],
  ["Cuchillos", "Simple"],
  ["Vasos", "Simple"],
  ["Platos", "Simple"],
  ["Cubiertos", "Simple"],
  ["Cestos", "Simple"],
  ["Pinceles", "Simple"],
  ["Esmaltes", "Simple"],
  ["Lentes", "Simple"],
  ["Audífonos", "Simple"],
  ["Cámaras", "Simple"],
  ["Computadoras", "Simple"],
  ["Monitores", "Simple"],
  ["Teclados", "Simple"],
  ["Ratones", "Simple"],
  ["Libretas", "Simple"],
  ["Cuadernos", "Simple"],
  ["Láminas", "Simple"],
  ["Pinceles", "Simple"],
  ["Pinturas", "Simple"],
  ["Lienzos", "Simple"],
  ["Marcos", "Simple"],
  ["Cajas", "Simple"],
  ["Bolsas", "Simple"],
  ["Cajones", "Simple"],
  ["Almohadas", "Simple"],
  ["Colchones", "Simple"],
  ["Sábanas", "Simple"],
  ["Mantas", "Simple"],
  ["Edredones", "Simple"],
  ["Barras", "Simple"],
  ["Discos", "Simple"],
  ["Mancuernas", "Simple"],
  ["Máquinas", "Simple"],
  ["Bicicletas", "Simple"],
  ["Patinetas", "Simple"],
  ["Triciclos", "Simple"],
  ["Coches", "Simple"],
  ["Barcos", "Simple"],
  ["Aviones", "Simple"],
  ["Helicópteros", "Simple"],
  ["Barcos", "Simple"],
  ["Globos aerostáticos", "Simple"],
  ["Satélites", "Simple"],
  ["Cohetes", "Simple"],
  ["Astronautas", "Simple"],
  ["Caramelos", "Simple"],
  ["Golosinas", "Simple"],
  ["Chicles", "Simple"],
  ["Dulces", "Simple"],
  ["Hamburguesas", "Simple"],
  ["Pizzas", "Simple"],
  ["Tacos", "Simple"],
  ["Sándwiches", "Simple"],
  ["Bocadillos", "Simple"],
  ["Fresas", "Simple"],
  ["Manzanas", "Simple"],
  ["Naranjas", "Simple"],
  ["Plátanos", "Simple"],
  ["Sandías", "Simple"],
  ["Melones", "Simple"],
  ["Piñas", "Simple"],
  ["Limones", "Simple"],
  ["Cerezas", "Simple"],
  ["Uvas", "Simple"],
  ["Papayas", "Simple"],
  ["Mangos", "Simple"],
  ["Aguacates", "Simple"],
  ["Arándanos", "Simple"],
  ["Frambuesas", "Simple"],
  ["gato", "Primitiva"],
  ["perrito", "Derivada"],
  ["corriendo", "Simple"],
  ["corre", "Simple"],
  ["saltando", "Simple"],
  ["salta", "Simple"],
  ["niña", "Simple"],
  ["niños", "Simple"],
  ["mesa", "Primitiva"],
  ["mesita", "Derivada"],
  ["bailando", "Simple"],
  ["baila", "Simple"],
  ["flores", "Simple"],
  ["jugar", "Simple"],
  ["jugando", "Simple"],
  ["jugó", "Simple"],
  ["león", "Primitiva"],
  ["leones", "Simple"],
  ["cantando", "Simple"],
  ["canta", "Simple"],
  ["casita", "Derivada"],
  ["saltitos", "Simple"],
  ["fumar", "Simple"],
  ["fumando", "Simple"],
  ["fumó", "Simple"],
  ["corriendo", "Simple"],
  ["corre", "Simple"],
  ["saltando", "Simple"],
  ["salta", "Simple"],
  ["bailando", "Simple"],
  ["baila", "Simple"],
  ["jugar", "Simple"],
  ["jugando", "Simple"],
  ["jugó", "Simple"],
  ["cantando", "Simple"],
  ["canta", "Simple"],
  ["fumar", "Simple"],
  ["fumando", "Simple"],
  ["fumó", "Simple"],
  ["pensando", "Simple"],
  ["piensa", "Simple"],
  ["creyendo", "Simple"],
  ["cree", "Simple"],
  ["soñando", "Simple"],
  ["sueña", "Simple"],
  
  ["trabajando", "Simple"],
  ["trabaja", "Simple"],
  ["buscando", "Simple"],
  ["busca", "Simple"],
  ["riendo", "Simple"],
  ["ríe", "Simple"],
  ["comiendo", "Simple"],
  ["come", "Simple"],
  ["cantando", "Simple"],
  ["canta", "Simple"],
  ["bailando", "Simple"],
  ["baila", "Simple"],
  ["paseando", "Simple"],
  ["pasea", "Simple"],
  ["escuchando", "Simple"],
  ["escucha", "Simple"],
  ["viendo", "Simple"],
  ["ve", "Simple"],
  ["leyendo", "Simple"],
  ["lee", "Simple"],
  ["puentes", "Simple"],
  ["colores", "Simple"],
  ["flores", "Simple"],
  ["botes", "Simple"],
  ["gafas", "Simple"],
  ["calles", "Simple"],
  ["nieves", "Simple"],
  ["camas", "Simple"],
  ["dientes", "Simple"],
  ["caras", "Simple"],
  ["mentes", "Simple"],
  ["cunas", "Simple"],
  ["calzados", "Simple"],
  ["sombras", "Simple"],
  ["águilas", "Simple"],
  ["rosales", "Simple"],
  ["lentes", "Simple"],
  ["damas", "Simple"],
  ["trenzas", "Simple"],
  ["cartas", "Simple"],
  ["guitarras", "Simple"],
  ["sombrillas", "Simple"],
  ["monedas", "Simple"],
  ["pizzas", "Simple"],
  ["chaquetas", "Simple"],
  ["maletas", "Simple"],
  ["ventanas", "Simple"],
  ["pantalones", "Simple"],
  ["botellas", "Simple"],
  ["bicicletas", "Simple"],
  ["serpientes", "Simple"],
  ["manzanas", "Simple"],
  ["computadoras", "Simple"],
  ["sándwiches", "Simple"],
  ["sabanas", "Simple"],
  ["zanahorias", "Simple"],
  ["libélulas", "Simple"],
  ["ratones", "Simple"],
  ["pescados", "Simple"],
  ["pelotas", "Simple"],
  ["papayas", "Simple"],
  ["cocodrilos", "Simple"],
  ["mamuts", "Simple"],
  ["aztecas", "Simple"],
  ["vikingos", "Simple"],
  ["piratas", "Simple"],
  ["dinosaurios", "Simple"],
  ["librero", "Derivada"],
  ["librería", "Derivada"],
  ["panadero", "Derivada"],
  ["panadería", "Derivada"],
  ["maestro", "Derivada"],
  ["maestría", "Derivada"],
  ["cantante", "Derivada"],

  ["cantarín", "Derivada"],
  ["canturrear", "Derivada"],
  ["televisor", "Derivada"],
  ["televisión", "Derivada"],
  ["guitarra", "Derivada"],
  ["guitarrita", "Derivada"],
  ["futbolista", "Derivada"],
  ["fútbol", "Derivada"],
  ["corredor", "Derivada"],
  ["carrera", "Derivada"],
  ["carrerita", "Derivada"],
  ["correría", "Derivada"],
  ["correduría", "Derivada"],
  ["corrida", "Derivada"],
  ["corrediza", "Derivada"],
  ["corredoría", "Derivada"],
  ["corredera", "Derivada"],
  ["café", "Derivada"],
  ["cafetera", "Derivada"],
  ["cafetal", "Derivada"],
  ["cafetalero", "Derivada"],
  ["cafetería", "Derivada"],
  ["pescado", "Derivada"],
  ["pescadero", "Derivada"],
  ["pescadería", "Derivada"],
  ["pescador", "Derivada"],
  ["pescadillo", "Derivada"],
  ["pescadilla", "Derivada"],
  ["pescadito", "Derivada"],
  ["pescadote", "Derivada"],
  ["pescadilla", "Derivada"],
  ["pescadoz", "Derivada"],
  ["pescadumbre", "Derivada"],
  ["pescadumbrejo", "Derivada"],
  ["pescaíto", "Derivada"],
  ["caminante", "Derivada"],

  ["caminar", "Derivada"],
  ["caminata", "Derivada"],
  ["caminero", "Derivada"],
  ["caminable", "Derivada"],
  ["caminamiento", "Derivada"],
  ["verde", "Derivada"],
  ["verdecito", "Derivada"],
  ["verdoso", "Derivada"],
  ["verdura", "Derivada"],
  ["verdurita", "Derivada"],
  ["verdeante", "Derivada"],
  ["verdecer", "Derivada"],
  ["verdugón", "Derivada"],
  ["verdulero", "Derivada"],
  ["verdulería", "Derivada"],
  ["verdear", "Derivada"],
  ["gallina", "Derivada"],
  ["gallinero", "Derivada"],
  ["gallinaza", "Derivada"],
  ["gallinita", "Derivada"],
  ["gallardo", "Derivada"],
  ["gallinaza", "Derivada"],
  ["gallardón", "Derivada"],
  ["gallinae", "Derivada"],
  ["gallinejas", "Derivada"],
  ["gallipato", "Derivada"],
  ["gallardete", "Derivada"],
  ["cuchillo", "Primitiva"],
  ["cuchillada", "Derivada"],
  ["cuchillero", "Derivada"],
  ["cuchillada", "Derivada"],
  ["cuchillero", "Derivada"],
  ["cuchillar", "Derivada"],
  ["cuchillero", "Derivada"],
  ["cuchillazo", "Derivada"],
  ["mesa", "Primitiva"],
  ["mesita", "Derivada"],
  ["mesilla", "Derivada"],
  ["mesón", "Derivada"],
  ["mesonero", "Derivada"],
  ["mesote", "Derivada"],
  ["mesura", "Derivada"],
  ["mesurado", "Derivada"],
  ["mesurado", "Derivada"],
  ["mesuramiento", "Derivada"],
  ["mesurar", "Derivada"],
  ["mesura", "Derivada"],
  ["mesurero", "Derivada"],
  ["mesurón", "Derivada"],
  ["mesurado", "Derivada"],
  ["mesuradamente", "Derivada"],
  ["mesuramiento", "Derivada"],
  ["botella", "Primitiva"],
  ["botellita", "Derivada"],
  ["botellero", "Derivada"],
  ["botellín", "Derivada"],
  ["botellón", "Derivada"],
  ["botellazo", "Derivada"],
  ["botellar", "Derivada"],
  ["botellero", "Derivada"],
  ["botellón", "Derivada"],
  ["botellazo", "Derivada"],
  ["botica", "Primitiva"],
  ["boticario", "Derivada"],
  ["boticario", "Derivada"],
  ["botiquín", "Derivada"],
  ["botica", "Derivada"],
  ["boticón", "Derivada"],
  ["botijero", "Derivada"],
  ["botijuela", "Derivada"],
  ["botija", "Derivada"],
  ["botijo", "Derivada"],
  ["boca", "Primitiva"],
  ["bocaza", "Derivada"],
  ["bocacalle", "Derivada"],
  ["bocadillo", "Derivada"],
  ["bocado", "Derivada"],
  ["bocajarro", "Derivada"],
  ["bocata", "Derivada"],
  ["bocatón", "Derivada"],
  ["bocaza", "Derivada"],
  ["boceto", "Derivada"],
  ["bocio", "Derivada"],
  ["bocón", "Derivada"],
  ["bodegón", "Derivada"],
  ["bodeguero", "Derivada"],
  ["bodega", "Derivada"],
  ["bodegón", "Derivada"],
  ["bodegón", "Derivada"],
  ["bodeguilla", "Derivada"],
  ["bodega", "Derivada"],
  ["bodeguero", "Derivada"],
  ["bodega", "Derivada"],
  ["bodegón", "Derivada"],
  ["bodegón", "Derivada"],
  ["bodeguilla", "Derivada"],
  ["bodega", "Derivada"],
  ["bodeguero", "Derivada"],
  ["bombilla", "Derivada"],
  ["bombillo", "Derivada"],
  ["bombillazo", "Derivada"],
  ["antivirus", "Compuesta"],
  ["autocorrector", "Compuesta"],
  ["reprogramar", "Derivada"],
  ["desordenado", "Derivada"],
  ["superhéroe", "Compuesta"],
  ["superheroína", "Parasintética por composición"],

  ["postdata", "Compuesta"],
  ["televidente", "Derivada"],
  ["enamoramiento", "Derivada"],
  ["desilusionado", "Derivada"],
  ["multimedia", "Compuesta"],
  ["transatlántico", "Compuesta"],
  ["desinformación", "Derivada"],
  ["injusticia", "Derivada"],
  ["sobrepasar", "Derivada"],
  ["posibilidad", "Derivada"],
  ["comprensivo", "Derivada"],
  ["Reutilización", "Derivada"],
  ["Inmadurez", "Derivada"],
  ["Desorganización", "Derivada"],
  ["Infelicidad", "Derivada"],
  ["Deslealtad", "Derivada"],
  ["Irresponsabilidad", "Derivada"],
  ["Inconsciente", "Derivada"],
  ["Antisocial", "Derivada"],
  ["Reconstrucción", "Derivada"],

  ["Desenfrenado", "Derivada"],
["Inexplicablemente", "Derivada"],
["Descuidadamente", "Derivada"],
["Reutilizable", "Derivada"],
["Inconscientemente", "Derivada"],
["Desesperadamente", "Derivada"],
["Atemporalidad", "Derivada"],
["Interminablemente", "Derivada"],
["Deslumbramiento", "Derivada"],

["Desanimo", "Derivada"],
["Reprochable", "Derivada"],
["Desarmar", "Derivada"],
["Descontento", "Derivada"],
["Resentimiento", "Derivada"],
["Desaparecido", "Derivada"],
["Desconfianza", "Derivada"],
["Recomendación", "Derivada"],
["Desencanto", "Derivada"],

["Despistado", "Derivada"],
["Reconstrucción", "Derivada"],
["Desenlace", "Derivada"],
["Resignación", "Derivada"],
["Desgastado", "Derivada"],
["Indisoluble", "Derivada"],
["Impenetrable", "Derivada"],
["Desaprobación", "Derivada"],
["Desacuerdo", "Derivada"],
["Reestructuración", "Derivada"],

["Desilusionado", "Derivada"],
["Reencarnación", "Derivada"],
["Desviación", "Derivada"],
["Desaparición", "Derivada"],
["Recalentamiento", "Derivada"],
["Desesperación", "Derivada"],
["Desfiguración", "Derivada"],
["Respetable", "Derivada"],
["Desobediencia", "Derivada"],
["Descomposición", "Derivada"],
["Resbaladizo", "Derivada"],


["Resplandeciente", "Derivada"],
["Reconocible", "Derivada"],


["Desvío", "Derivada"],

["Desenfocado", "Derivada"],
["Reincorporación", "Derivada"],
["Desinflar", "Derivada"],
["Desesperar", "Derivada"],
["Reconfortante", "Derivada"],

["Reeducación", "Derivada"],
["Reescritura", "Derivada"],
["Precalentamiento", "Derivada"],
["Zapatería", "Derivada"],
  ["Perezoso", "Derivada"],
  ["Canción", "Primitiva"],
  ["Cantante", "Derivada"],
  ["Pescadería", "Derivada"],
  ["Televisión", "Derivada"],
  ["Perro", "Primitiva"],
  ["Cortina", "Primitiva"],
  ["Cortinilla", "Derivada"],
  ["Piedra", "Primitiva"],
  ["Pedrusco", "Derivada"],
  ["Insoportable", "Parasintética por derivación"],
  ["Verdugo", "Derivada"],
  ["Amoroso", "Derivada"],
  ["Vestuario", "Compuesta"],
  ["Escritorio", "Compuesta"],
  ["Espectáculo", "Derivada"],
  ["Cajita", "Derivada"],
  ["Cajón", "Primitiva"],

  ["Comida", "Primitiva"],
  ["Cielo", "Primitiva"],
  ["Cielito", "Derivada"],
  ["Oveja", "Primitiva"],
  ["Ovejita", "Derivada"],
  ["Felino", "Derivada"],
  ["Felicidad", "Derivada"],
  ["Festejo", "Derivada"],
  ["Festejito", "Derivada"],
  ["Caracol", "Primitiva"],
  ["Caracolillo", "Derivada"],
  ["Dulce", "Primitiva"],
  ["Dulcería", "Derivada"],
  ["Mentiroso", "Derivada"],
  ["Mentira", "Primitiva"],
  ["Flor", "Primitiva"],
  ["Florero", "Derivada"],
  ["Pájaro", "Primitiva"],
  ["Pajarillo", "Derivada"],
  ["Mujer", "Primitiva"],
  ["Mujeriego", "Derivada"],
  ["Jardín", "Primitiva"],
  ["Jardinero", "Derivada"],
  ["Música", "Primitiva"],
  ["Músico", "Derivada"],
  ["Cafetería", "Derivada"],
  ["Café", "Primitiva"],
  ["Biblioteca", "Derivada"],
  ["Libro", "Primitiva"],
  ["Cine", "Primitiva"],
  ["Cinematógrafo", "Derivada"],
  ["Cuchillo", "Primitiva"],
  ["Cuchillito", "Derivada"],
  ["Futbolista", "Derivada"],
  ["Fútbol", "Primitiva"],
  ["Rey", "Primitiva"],
  ["Reyecito", "Derivada"],
  ["Microondas", "Compuesta"],
  ["Sillita", "Derivada"],
  ["Pastelito", "Derivada"],
  ["Caminante", "Derivada"],
  ["Jardinero", "Derivada"],
  ["Librería", "Derivada"],
  ["Caminata", "Derivada"],
  ["Bailarín", "Derivada"],
  ["Pintura", "Derivada"],
  ["Lechera", "Derivada"],
  ["Gallinero", "Derivada"],
  ["Casita", "Derivada"],
  ["Aguacate", "Derivada"],
  ["Reyerta", "Derivada"],
  ["Corredor", "Derivada"],
  ["Cocinita", "Derivada"],
  ["Lectora", "Derivada"],
  ["Pescador", "Derivada"],
  ["Gallina", "Derivada"],
  ["Perrito", "Derivada"],
  ["Pescadito", "Derivada"],
  ["Comedor", "Derivada"],
  ["Cantante", "Derivada"],
  ["Barquito", "Derivada"],
  ["Bailarina", "Derivada"],
  ["Agujero", "Derivada"],
  ["Campesino", "Derivada"],
  ["Cazador", "Derivada"],
  ["Pastor", "Derivada"],
  ["Navegante", "Derivada"],
  ["Escritora", "Derivada"],
  ["Maestra", "Derivada"],
  ["Corredora", "Derivada"],
  ["Trenza", "Derivada"],
  ["Pintor", "Derivada"],
  ["Gatito", "Derivada"],
  ["Lechería", "Derivada"],
  ["Jugadora", "Derivada"],
  ["Perrita", "Derivada"],
  ["Oveja", "Derivada"],
  ["Cocinero", "Derivada"],
  ["Vendedor", "Derivada"],
  ["Luchador", "Derivada"],
  ["Cocinera", "Derivada"],
  ["Nadador", "Derivada"],
  ["Estudiante", "Derivada"],
  ["Pescadora", "Derivada"],
  ["Bebé", "Derivada"],
  ["Escritor", "Derivada"],
  ["Cazadora", "Derivada"],
  ["Camionero", "Derivada"],
  ["Lavaplatos", "Derivada"],
  ["Pastelería", "Derivada"],
  ["Agujita", "Derivada"],
  ["Biblioteca", "Derivada"],
  ["Médico", "Derivada"],
  ["Película", "Derivada"],
  ["Gallinera", "Derivada"],
  ["Pintura", "Derivada"],
  ["Caminadora", "Derivada"],
  ["Pescadito", "Derivada"],
  ["Bebé", "Derivada"],
  ["Librero", "Derivada"],
  ["Maestro", "Derivada"],
  ["Vendedor", "Derivada"],
  ["Luchadora", "Derivada"],
  ["Cocinera", "Derivada"],
  ["Nadadora", "Derivada"],
  ["Estudio", "Derivada"],
  ["Pescador", "Derivada"],
  ["Jugadora", "Derivada"],
  ["Biblioteca", "Derivada"],
  ["Gallinero", "Derivada"],
  ["Pastelería", "Derivada"],
  ["enchufable", "Parasintética por derivación"],
  ["desesperante", "Parasintética por derivación"],
  ["huesudo", "Derivada"],
  ["cantarín", "Derivada"],
  ["bailarina", "Derivada"],
  ["cantante", "Derivada"],
  ["molinillo", "Derivada"],
  ["lavandería", "Derivada"],
  ["escritorio", "Derivada"],
  ["campesino", "Derivada"],
  ["perezoso", "Derivada"],
  ["carretera", "Derivada"],
  ["botoncito", "Derivada"],
  ["corazón", "Derivada"],
  ["alucinante", "Derivada"],
  ["aburrimiento", "Derivada"],
  ["cariñoso", "Derivada"],
  ["revoltoso", "Derivada"],
  ["canturrear", "Derivada"],
  ["saltarín", "Derivada"],
  ["callejón", "Derivada"],
  ["pararrayos", "Compuesta"],
  ["baloncesto", "Compuesta"],
  ["guardabosques", "Compuesta"],
  ["lavaplatos", "Compuesta"],
  ["pasamontañas", "Compuesta"],
  ["pelirrojo", "Compuesta"],
  ["salvavidas", "Compuesta"],
  ["rompecabezas", "Compuesta"],
  ["mediodía", "Compuesta"],
  ["girasol", "Compuesta"],
  ["limpiabotas", "Compuesta"],
  ["sacacorchos", "Compuesta"],
  ["limpiaparabrisas", "Compuesta"],
  ["sabelotodo", "Compuesta"],
  ["limpiacristales", "Compuesta"],
  ["limpiacristalero", "Parasintética por composición"],
  ["guardacoches", "Compuesta"],
  ["Guardacochero", "Parasintética por composición"],
  ["matahombres", "Compuesta"],
  ["atrapasueños", "Compuesta"],
  ["abrelatas", "Compuesta"],
  ["quitamanchas", "Compuesta"],
  ["paracaídas", "Compuesta"],
  ["baloncesto", "Compuesta"],
  ["sacapuntas", "Compuesta"],
  ["guardacostas", "Compuesta"],
  ["lavaplatos", "Compuesta"],
  ["rompecabezas", "Compuesta"],
  ["guardabosques", "Compuesta"],
  ["matamoscas", "Compuesta"],
  ["rompevientos", "Compuesta"],
  ["cazatalentos", "Compuesta"],
  ["rascacielos", "Compuesta"],
  ["quitamanchas", "Compuesta"],
  ["cortafuegos", "Compuesta"],
  ["salvavidas", "Compuesta"],
  ["pasamontañas", "Compuesta"],
  ["cortaúñas", "Compuesta"],
  ["sobretodo", "Compuesta"],
  ["limpiacristales", "Compuesta"],
  ["pararrayos", "Compuesta"],
  ["sacacorchos", "Compuesta"],
  ["rompecabezas", "Compuesta"],
  ["guardabosques", "Compuesta"],
  ["matamoscas", "Compuesta"],
  ["rompevientos", "Compuesta"],
  ["cazatalentos", "Compuesta"],
  ["rascacielos", "Compuesta"],
  ["quitamanchas", "Compuesta"],
  ["cortafuegos", "Compuesta"],
  ["salvavidas", "Compuesta"],
  ["pasamontañas", "Compuesta"],
  ["cortaúñas", "Compuesta"],
  ["sobretodo", "Compuesta"],
  ["limpiacristales", "Compuesta"],
  ["pararrayos", "Compuesta"],
  ["sacacorchos", "Compuesta"],
  ["comecocos", "Compuesta"],
  ["girasol", "Compuesta"],
  ["guardapolvo", "Compuesta"],
  ["pelirrojo", "Compuesta"],
  ["quitamiedos", "Compuesta"],
  ["salvavidas", "Compuesta"],
  ["sordomudo", "Compuesta"],
  ["pararrayos", "Compuesta"],
  ["limpiafondos", "Compuesta"],


  ["portamonedas", "Compuesta"],
  ["portamonederos", "Parasintética por composición"],
  ["lanzallamas", "Compuesta"],
  ["aguardiente", "Compuesta"],
  ["rompecorazones", "Compuesta"],
  ["guardabarros", "Compuesta"],
  ["cortaespárragos", "Compuesta"],
  ["paraguas", "Compuesta"],
  ["quitapenas", "Compuesta"],
  ["quitaesmalte", "Compuesta"],
  ["saltamontes", "Compuesta"],
  ["parabrisas", "Compuesta"],
  ["guardamuebles", "Compuesta"],
  ["cortinillas", "Compuesta"],
  ["salvapantallas", "Compuesta"],
  ["portaplumas", "Compuesta"],
  ["portaplumeros", "Parasintética por composición"],
  ["guardaespaldas", "Compuesta"],
["paraguas", "Compuesta"],
["rascacielos", "Compuesta"],
["salvavidas", "Compuesta"],
["sacacorchos", "Compuesta"],
["lavavajillas", "Compuesta"],
["altavoz", "Compuesta"],
["pasatiempo", "Compuesta"],
["rompecabezas", "Compuesta"],
["sabelotodo", "Compuesta"],
["limpiabotas", "Compuesta"],
["limpiabotero", "Compuesta"],
["guardabosques", "Compuesta"],
  ["sacacorchos", "Compuesta"],
  ["pasamontañas", "Compuesta"],
  ["sacapuntas", "Compuesta"],
  ["rompecabezas", "Compuesta"],

  ["salvavidas", "Compuesta"],
  ["parachoques", "Compuesta"],
  ["lavaplatos", "Compuesta"],
  ["rascacielos", "Compuesta"],
  ["guardacostas", "Compuesta"],
  ["cortacésped", "Compuesta"],
  ["pararrayos", "Compuesta"],
  ["guardaespaldas", "Compuesta"],
  ["portaviones", "Compuesta"],
  ["parabrisas", "Compuesta"],
  ["pelirrojo", "Compuesta"],
  ["matahari", "Compuesta"],
  ["salvapantallas", "Compuesta"],
  ["sacaleches", "Compuesta"],
  ["quitamanchas", "Compuesta"],
  ["sacabocados", "Compuesta"],
  ["matamoscas", "Compuesta"],
  ["sacapapeles", "Compuesta"],
  ["cortafuegos", "Compuesta"],
  ["portafolio", "Compuesta"],
  ["lavamanos", "Compuesta"],
  ["rompecorazones", "Compuesta"],
  ["guardarropa", "Compuesta"],
  ["pasacalles", "Compuesta"],
  ["guardapolvo", "Compuesta"],
  ["abrebotellas", "Compuesta"],
  
  ["limpiacristales", "Compuesta"],
  ["quitaesmalte", "Compuesta"],
  ["quitaesmaltista", "Parasintética por composición"],
  ["peluquín", "Compuesta"],
  ["paracaidas", "Compuesta"],
  ["guardaníquel", "Compuesta"],
  ["guardaniquelero", "Parasintética por composición"],
  ["picaflor", "Compuesta"],
  ["cortaúñas", "Compuesta"],
  ["lustrabotas", "Compuesta"],
  ["pasatiempo", "Compuesta"],
  ["lavavajillas", "Compuesta"],
  ["matapiojos", "Compuesta"],
  ["sacatrapos", "Compuesta"],
  ["abrelatas", "Compuesta"],
  ["paraguas", "Compuesta"],
  ["guardavías", "Compuesta"],
  ["sacamuelas", "Compuesta"],
  ["portaplumas", "Compuesta"],
  ["quitapenas", "Compuesta"],
  ["sacapuntas", "Compuesta"],
  ["lavaplatos", "Compuesta"],
  ["rompecabezas", "Compuesta"],
  ["pararrayos", "Compuesta"],
  ["guardaespaldas", "Compuesta"],
  ["mariposa", "Compuesta"],
  ["rascacielos", "Compuesta"],
  ["pelirrojo", "Compuesta"],
  ["salvavidas", "Compuesta"],
  ["sacaleches", "Compuesta"],
  ["sacalechero", "Parasintética por composición"],
 
  ["pasamuros", "Compuesta"],
  ["portavoz", "Compuesta"],
  ["cortina", "Compuesta"],
  ["lavapiés", "Compuesta"],
  ["rompecorazones", "Compuesta"],
  ["Desalmado", "Parasintética por derivación"],
  ["Desesperado", "Parasintética por derivación"],
  ["Enloquecido", "Parasintética por derivación"],
  ["Desfavorecido", "Parasintética por derivación"],
  ["Enriquecido", "Parasintética por derivación"],
  ["Enternecedor", "Parasintética por derivación"],
  ["Empobrecido", "Parasintética por derivación"],
  ["Desfigurado", "Parasintética por derivación"],
  ["Ensangrentado", "Parasintética por derivación"],
  ["Deslumbrado", "Parasintética por derivación"],
  ["Engañado", "Parasintética por derivación"],
  ["Desorientado", "Parasintética por derivación"],
  ["Emocionado", "Parasintética por derivación"],
  ["Desaprobado", "Parasintética por derivación"],
  ["Enamorado", "Parasintética por derivación"],
  ["Desacostumbrado", "Parasintética por derivación"],
  ["Enfurecido", "Parasintética por derivación"],
  ["Desagradable", "Parasintética por derivación"],
  ["Envejecido", "Parasintética por derivación"],
  ["Desgarrado", "Parasintética por derivación"],
  ["Entumecido", "Parasintética por derivación"],
  ["Desilusionado", "Parasintética por derivación"],
  ["Engreído", "Parasintética por derivación"],
  ["Desarmado", "Parasintética por derivación"],
  ["Endulzado", "Parasintética por derivación"],
  ["Desentendido", "Parasintética por derivación"],
  ["Engordado", "Parasintética por derivación"],
  ["Desconsolado", "Parasintética por derivación"],
  ["Enredado", "Parasintética por derivación"],
  ["Desconcertado", "Parasintética por derivación"],
  ["Enamoramiento", "Parasintética por derivación"],
  
  ["Desalmado", "Parasintética por derivación"],
  ["Desabrigado", "Parasintética por derivación"],
  ["Despertador", "Parasintética por derivación"],
  ["Desconocido", "Parasintética por derivación"],

  ["Desempleado", "Parasintética por derivación"],
  ["Enterrador", "Parasintética por derivación"],
  ["Entristecedor", "Parasintética por derivación"],
  ["Empobrecido", "Parasintética por derivación"],
  ["Enriquecedor", "Parasintética por derivación"],
  ["Encantador", "Parasintética por derivación"],
  ["Engañador", "Parasintética por derivación"],
  ["Iluminado", "Parasintética por derivación"],
  ["Enloquecido", "Parasintética por derivación"],
  ["Endurecido", "Parasintética por derivación"],
  ["Empequeñecido", "Parasintética por derivación"],
  ["Empapado", "Parasintética por derivación"],
  ["Desenfrenado", "Parasintética por derivación"],
  ["Deslumbrante", "Parasintética por derivación"],
  ["Desesperado", "Parasintética por derivación"],
  ["Desconcertado", "Parasintética por derivación"],
  ["Desanimado", "Parasintética por derivación"],
  ["Deslenguado", "Parasintética por derivación"],
  ["Desenmascarado", "Parasintética por derivación"],
  ["Desilusionado", "Parasintética por derivación"],
  ["Desmejorado", "Parasintética por derivación"],
  ["Desnaturalizado", "Parasintética por derivación"],
  ["Desorganizado", "Parasintética por derivación"],
  ["Despistado", "Parasintética por derivación"],
  ["Desgarrador", "Parasintética por derivación"],
  ["Desatado", "Parasintética por derivación"],
  ["Desubicado", "Parasintética por derivación"],
  ["Desvencijado", "Parasintética por derivación"],

  ["Desenfadado", "Parasintética por derivación"],
  ["Desorbitado", "Parasintética por derivación"],
  ["Despiadado", "Parasintética por derivación"],
  ["Deslizado", "Parasintética por derivación"],
  ["Desintegrado", "Parasintética por derivación"],
  ["Desnudado", "Parasintética por derivación"],
  ["Desollado", "Parasintética por derivación"],
  ["Desobediente", "Parasintética por derivación"],
  ["Desinformado", "Parasintética por derivación"],
  ["Desarmado", "Parasintética por derivación"],
  ["Desencantado", "Parasintética por derivación"],
  ["Desagradable", "Parasintética por derivación"],
  ["Desacostumbrado", "Parasintética por derivación"],
  ["Desalentador", "Parasintética por derivación"],
  ["Destrozado", "Parasintética por derivación"],
  ["Desubicado", "Parasintética por derivación"],
  ["Desvalido", "Parasintética por derivación"],
  ["Desvelado", "Parasintética por derivación"],
  ["Desvirtuado", "Parasintética por derivación"],
  ["bienvenida", "Parasintética por composición"],
  ["alunizaje", "Parasintética por derivación"],
  ["automovilista", "Parasintética por derivación"],
  ["deslumbramiento", "Parasintética por derivación"],
  ["encuadernación", "Parasintética por derivación"],
  ["excarcelación", "Parasintética por derivación"],
  ["excentricidad", "Parasintética por derivación"],
  ["paracaidista", "Parasintética por composición"],
  ["paragüero", "Parasintética por composición"],
  ["picapedrero", "Parasintética por composición"],
  ["reducción", "Parasintética por derivación"],
  ["anaranjado", "Parasintética por derivación"],
["aniñado", "Parasintética por derivación"],
["atemorizado", "Parasintética por derivación"],
["cumpleañero", "Parasintética por derivación"],
["desalmado", "Parasintética por derivación"],
["descafeinado", "Parasintética por derivación"],
["descarado", "Parasintética por derivación"],
["enriquecedor", "Parasintética por derivación"],
["enrojecido", "Parasintética por derivación"],
["gordinflón", "Parasintética por composición"],
["intramuscular", "Parasintética por derivación"],
["malhumorado", "Parasintética por composición"],
["pordiosero", "Parasintética por derivación"],


];



function Act6Cast({ correcting, language, actID }) {
  const [fig, setfig] = useState(
    dataCAST[Math.floor(Math.random() * dataCAST.length)]
  );
  const [selected, setSelected] = useState("Escoje una opción!");

  const correctanswer = fig[1];

  var options = [];
  dataCAST.forEach((element) => {
    if (!options.includes(element[1]) && element[1] != correctanswer) options.push(element[1]);
  });

  const [ops, setOps] = useState(
    [correctanswer]
      .concat(
        [...options].sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 2)
      )
      .sort(() => Math.random() - 0.5)
  );
  console.log("MARCEL:", fig, ops)
  return (
    <Component>
      {" "}
      <b>{fig[0]}</b>
      <br />
      <div
        className="options-component"
        onChange={(e) => {
          setSelected(e.target.value);
        }}
      >
        {ops.map((element, i) => {
          return (
            <>
              <input
                checked={element == selected}
                value={element}
                type="radio"
                name={"ex" + actID.toString()}
                id={i.toString() + "-" + actID.toString()}
                disabled={correcting}
              />
              <label
                className={
                  correcting && selected != "Escoje una opción!"
                    ? correctanswer == selected
                      ? "correct-answ"
                      : "wrong-answ"
                    : ""
                }
                htmlFor={i.toString() + "-" + actID.toString()}
              >
                {element}
              </label>
            </>
          );
        })}
      </div>
    </Component>
  );
}

const Component = styled.div`
  margin-top: 1.4rem;
  margin-bottom: 1.4rem;
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

  .correct-answ {
    color: #2dce2d;
  }

  .wrong-answ {
    color: red;
  }

  input {
    margin-right: 0.5rem;
  }
  label {
    transition: all 150ms ease;
    margin-right: 1rem;
  }
  .options-component {
    margin-top: 0.4rem;
  }
`;

export default Act6Cast;
