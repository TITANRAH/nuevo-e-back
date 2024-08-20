import * as fs from "fs";

export interface VidaSana {
  id: string;
  title: string;
  imageHeader: string;
  subtitulo: string;
  description: string;
  image: string;
  type: string;
  typeColor: string;
  tema: string;
  fecha: string;
  contenido: string;
}

export const dataVidaSana: VidaSana[] = [
  {
    id: "1",
    title: "Aprende reanimación cardio pulmonar",
    imageHeader: "/img/vida-sana/notas/reanimacion-pulmunar.jpg",
    subtitulo:
      "Valeska González, enfermera egresada de Universidad Diego Portales, instructora y miembro de la sociedad AHA (American Heart Association).",
    description: "salvar una vida puede estar en tus manos.",
    image: "/img/vida-sana/notas/reanimacion-pulmunar.jpg",
    type: "notas",
    typeColor: "bg-[#2f80ede6] ",
    tema: "URGENCIAS",
    fecha: "2021-10-01",
    contenido: `De acuerdo a estadísticas de la OMS, las dos principales causas de muerte en el mundo durante los últimos 15 años son la cardiopatía isquémica y los ataques cerebrovasculares, con una cifra de 15 millones de víctimas aproximadamente.

    Más de la mitad de la población nacional fallece por enfermedades crónicas (muchas de ellas relacionadas con el corazón) tales como infartos, enfermedades arterioescleróticas, arritmia, diabetes, enfermedades respiratorias, cáncer, entre otras. Otro dato, entregado por la Encuesta Nacional de Salud (2019) muestra factores que influyen con el daño al corazón: el 40% fuma tabaco, 39% de la población tiene sobrepeso (25% obesidad), 88% son sedentarios, un 29% tiene hipertensión, y un 99% consume más sal de la recomendada internacionalmente.
    
    Un PCR (paro cardiorrespiratorio) se define como una interrupción brusca e inesperada de la actividad mecánica del corazón y de la respiración espontánea, y potencialmente reversible si se identifica a tiempo y se inicia una reanimación básica. En Chile, particularmente, existe una mortalidad cercana al 98% por paros cardiorrespiratorios en situaciones donde no hay profesionales de la salud; si un testigo circunstancial sabe cómo practicar una reanimación, podría triplicar la tasa de supervivencia frente a esto.
    
    La reanimación cardiopulmonar, también conocida como RCP, consiste en un conjunto de maniobras sincronizadas que, primero, ayudan a sustituir la circulación y respiración espontánea, y para luego restaurarla. Para que una RCP tenga éxito debe ser correctamente aplicada pues, si se realiza a tiempo, puede perfectamente salvar la vida de una persona. Valeska González, enfermera miembro de la Asociación americana del corazón, instructora AHA y experta en primeros auxilios, explica los pasos que seguir:
    
    1.Constatar que el paciente está en paro: acercarse a la víctima y comprobar si responde, dejando libre el tórax y presionando de forma enérgica para chequear si hay respiración. Si la respuesta es no, se procede a activar el sistema de respuesta de emergencia (ambulancia, bomberos o carabineros), y a solicitar un desfibrilador (DEA) inmediatamente.

    2.Inicio de RCP de alta calidad: posicionar las manos en la mitad del esternón, manteniendo los brazos totalmente rectos, creando un ángulo recto entre la cadera y los brazos para que se utilice la fuerza de todo el cuerpo al deprimir el tórax. Se debe realizar 100 a 120 compresiones por minuto, con una profundidad de al menos 5 cm al deprimir, y siempre sobre una superficie lisa y dura.

    3.Desfibrilación: un desfibrilador es un aparato que transmite corriente al músculo cardíaco en forma indirecta a través de la pared torácica. En el caso de contar con uno, se debe utilizar apenas esté disponible, siguiendo las instrucciones que posee (este será capaz de analizar si el paciente requerirá una descarga eléctrica). Se deben instalar los electrodos en el pecho de la víctima, asegurarse de que nadie lo toque, esperar la cantidad de descargas que sean necesarias y, cuando indique, reanudar el masaje cardíaco anterior.

    4.Llegada de soporte vital avanzado (ambulancia o similar): finalmente, este será capaz de entregar el cuidado profesional y que lo traslade a un centro adecuado y calificado.

    Si se ha tenido éxito, luego de aquello el paciente recibirá el tratamiento post paro, y finalmente logrará la recuperación.
    
    “Es importante saber que, por ley, todos los centros con alta concurrencia de gente (empresas, estadios, malls, aeropuertos, colegios, universidades) deben contar con un DEA para estos casos, pero la gente también debe informarse sobre cómo usarlos y cómo reaccionar en general. Las personas pueden morir por la falta de este conocimiento, y puede estar en sus manos salvar vidas” indica la enfermera.

    `,
  },
  {
    id: "2",
    title: "Autoexamen mamario",
    imageHeader: "/img/vida-sana/notas/autoexamen-mamario.jpg",
    subtitulo:
      "María José Oyarzun, Matrona, especialista en Salud sexual y salud reproductiva, con enfoque en derecho, género y diversidad. Cursando Magister en sexología, docente universitaria Universidad Andrés Bello.",
    description: "conoce cómo realizarlo de forma correcta.",
    image: "/img/vida-sana/notas/autoexamen-mamario.jpg",
    type: "notas",
    typeColor: "bg-[#2f80ede6]",
    tema: "SALUD DE LA MUJER",
    fecha: "2021-10-01",
    contenido: `
    Según un estudio del MINSAL (2018-2019), 5.400 mujeres son detectadas con cáncer de mama cada año en Chile, de las cuales 1.700 fallecen. La detección temprana es la manera más efectiva de evitar llegar a ello, y las cifras en el país deja en claro una cosa: no existe suficiente conciencia sobre la importancia de prevenir y detectar a tiempo.

Después de casi dos años de pandemia, el foco en el sistema de salud continúa siendo el COVID, y acudir a los controles no es fácil con la poca disponibilidad de los centros de salud; lo preventivo queda en segundo plano, lo que supone una enorme desventaja cuando la prevención es lo que hace la diferencia para lidiar con un cáncer de mama.

Para realizar el examen de manera correcta, María José Oyarzun muestra los principales pasos que se deben seguir:

Comenzar de pie frente a un espejo, sin ropa desde la cintura hacia arriba, para poder mirar la forma de las mamas y características de la clavícula, axilas, cómo cae la mama, si hay cambios en la piel o si esta se retrae, si el pezón se hunde bajo la presión gravitatoria de la mama, etc.
Colocar las manos en la cintura y llevar los codos hacia afuera. Así, la mama se despega del músculo pectoral al que está adherida y se logra ver mejor su caída, cambios en la piel o de forma, o bultos que no son visibles estando acostada.
Aún de pie, tocar las mamas con una mano. Gracias a su gravitación, se puede tener acceso al músculo pectoral y a la parte de encima con mucha más facilidad.
Acostarse y colocar una mano detrás de la cabeza y la otra tocando la mama contraria. Palpar con la punta de los dedos, suave, pero con presión constante, siguiendo círculos en orden, para que no quede ningún lugar sin examinar).
Una vez se termina de palpar en búsqueda de bultos, se termina apretando el pezón para ver si sale algún flujo anormal.
Si se ha tenido éxito, luego de aquello el paciente recibirá el tratamiento post paro, y finalmente logrará la recuperación.

“La idea no es favorecer el miedo, más bien saber que tenemos el poder de cambiar el funcionamiento de nuestro cuerpo. Hay factores que no podemos cambiar -como la genética-, pero sí hay otros que podemos modificar en pos de tener una mejor salud”, señala la matrona. Llevar una alimentación saludable (evitar alimentos procesados con exceso de sodio y grasa), realizar actividad física constante, disminuir los ambientes de estrés, no fumar, realizarse el autoexamen, y llevar un control habitual con profesionales de la salud son pasos relevantes”.

María José entrega un mensaje final: “No debemos olvidar los controles preventivos. No acudamos a profesionales solo por sentirnos mal o por una enfermedad, hagámoslo de manera constante para empezar a empoderarnos de nuestro autocuidado y conocer nuestro cuerpo. Hay una gran deuda en Chile: estamos muy acostumbrados a que un profesional de la salud diga qué hacer, cuando deberíamos ser acompañantes que entregan las herramientas para que las personas ejerzan su derecho a controlar su propia salud”.
    `,
  },
  {
    id: "3",
    title: "¡Hidratación! ",
    imageHeader: "/img/vida-sana/notas/hidratacion.jpg",
    subtitulo:
      "Valeska González, enfermera egresada de Universidad Diego Portales, instructora y miembro de la sociedad AHA (American Heart Association).",
    description: "En verano es clave",
    image: "/img/vida-sana/notas/hidratacion.jpg",
    type: "notas",
    typeColor: "bg-[#2f80ede6] ",
    tema: "BIENESTAR",
    fecha: "2021-10-01",
    contenido: `
    La recomendación general es consumir 2 litros de agua al día; sin embargo, esta recomendación puede ser variable según la edad, la cantidad de actividad física que se realiza, el nivel de sudoración de cada persona o la temperatura a la que estemos expuestos.

Nuestro cuerpo está compuesto por un 66% de agua, por lo que mantenernos hidratados es vital para nuestro funcionamiento. Sin embargo, pese a que poseemos diversos mecanismos para regular y controlarla, perdemos líquido constantemente en funciones básicas como orinar, sudar o, incluso, respirar. ¿Qué pasa en verano cuando los termómetros de muchas regiones del país superan los 25°? ¿Cómo es posible mantener hidratado nuestro organismo con las altas temperaturas y la exposición al sol de esta época?

Aquí van unos consejos:

Es importante que prioricemos el agua como nuestra principal fuente de hidratación versus las bebidas azucaradas
Empieza el día con un vaso de agua, te ayudará a reponer las pérdidas de líquido producidas durante la noche.
Hidratarse en forma constante durante el día. Tener una botella de agua siempre a la mano que puedes ir rellenando e ir tomando en forma constante y en pequeñas cantidades a lo largo del día.
Ingiere alimentos ricos en agua como frutas y verduras. Son parte de una dieta sana, por lo que además de favorecer tu hidratación ayudarán a cuidar tu estado de salud en general.
No esperes a tener sed para beber agua. La sed es un signo de deshidratación, por lo tanto, ¡adelántate!
Cuida el consumo de exceso de alcohol y bebidas de fantasía. Prefiere agua y si vas a tomar alcohol, procura hidratarte previamente con agua, al igual que durante y después.
Si tienes dudas, necesitas orientación médica, crea tu cuenta y recibe atención de nuestro equipo profesional.
    `,
  },
  {
    id: "4",
    title: "Beneficios de la telemedicina",
    imageHeader: "/img/vida-sana/notas/telemedicina.jpg",
    subtitulo:
      "Valeska González, enfermera egresada de Universidad Diego Portales, instructora y miembro de la sociedad AHA (American Heart Association).",
    description:
      "en el seguimiento y control de pacientes con patologías crónicas.",
    image: "/img/vida-sana/notas/telemedicina.jpg",
    type: "notas",
    typeColor: "bg-[#2f80ede6]",
    tema: "BIENESTAR",
    fecha: "2021-10-01",
    contenido: `
    La existencia de la pandemia aceleró el desarrollo del sistema de salud público y privado del país necesariamente; acciones como asistir a citas médicas, realizarse exámenes y otros procedimientos se volvieron un obstáculo que afectó especialmente a quienes padecen enfermedades crónicas y se encontraban en tratamiento permanente y controlado.

En este escenario, la telemedicina se convirtió en una pieza clave frente a estas dificultades logísticas -cómo contactarse con el médico tratante, cómo obtener una licencia o receta, cómo resolver una duda inmediata, etc. Plataformas como Medismart.live, que entregan múltiples servicios pensados en facilitar el tratamiento a los pacientes, contribuyen a la solución y disminuyen la probabilidad de deserción de tratamientos.

“Medismart.live tiene un ecosistema de teleconsulta para enfermos crónicos que les permite tomarse exámenes de control en su casa, que la orden médica les llegue en la teleconsulta, sus medicamentos pueden ser despachados a domicilio, etc. Lo que intentamos es poner la tecnología al servicio de la solución de estos problemas, para impedir que una persona que está en tratamiento crónico deje de tomar sus medicamentos y promover el autocuidado” señala Raúl Aguilar, Enfermero magister en economía aplicada a políticas públicas.

El concepto de ecosistema es la esencia de este servicio, pues abarca la telemedicina, la relación con las farmacias, el despacho de medicamentos y exámenes a domicilio en un solo lugar; gracias a ello, es posible ahorrar viajes, tiempo, gastos de movilización y, en el caso de pacientes crónicos, retardar o prevenir complicaciones que se evitan con los controles.

Existen algunas restricciones, como los casos de urgencia, pues lógicamente no pueden tratarse por esta vía; sin embargo, la plataforma permite acceder a orientación inmediata cuando hay dudas de alguna sintomatología de riesgo, y un médico puede identificarlos y determinar si es necesario acudir a un servicio de urgencia -es decir, gracias a la prevención, es posible disminuir los ingresos hospitalarios por razones evitables. Por otra parte, en los casos donde son necesarios exámenes físicos, igualmente será necesario concurrir a una consulta presencial.

Con el objetivo de ser una solución para todos, MediSmart fue creada como una plataforma accesible y amigable, partiendo por el hecho de ser pensada en consumir la mínima cantidad de internet posible; así, se incluye a comunidades que no tengan fácil acceso y se disminuyen las barreras de entrada a la teleconsulta. Igualmente, el historial digital de un paciente pertenece a él en un 100%: se almacena en una cuenta individual que cumple con todos los protocolos de seguridad y privacidad de información -solo el titular de la cuenta tiene acceso a sus datos. Además, si el paciente requiere tratarse con un profesional fuera de la plataforma, pueden descargarlos y utilizarlos con libertad. “Los enfermos crónicos necesitan de sus datos, porque hay diferentes especialistas en diferentes prestadores que les atienden, y es necesario ser portador de sus propios datos, y nuestra tecnología colabora con eso”, afirma Aguilar.
    `,
  },
  {
    id: "5",
    title: "Mes de la prevención",
    imageHeader: "/img/vida-sana/notas/cancer-mama.jpg",
    subtitulo:
      "María José Oyarzun, Matrona, especialista en Salud sexual y salud reproductiva, con enfoque en derecho, género y diversidad. Cursando Magister en sexología, docente Universidad Andrés Bello.",
    description: "lo que debes saber del Cáncer de Mama",
    image: "/img/vida-sana/notas/cancer-mama.jpg",
    type: "notas",
    typeColor: "bg-[#2f80ede6]",
    tema: "SALUD DE LA MUJER",
    fecha: "2021-10-01",
    contenido: `
    
    `,
  },

  //video capsulas

  {
    id: "7",
    title: "Cuidados COVID-19",
    imageHeader: "",
    subtitulo: "",
    description: "",
    image: "/img/vida-sana/capsulas/covid.jpg",
    type: "capsulas",
    typeColor: "bg-[#eb5757]",
    tema: "SALUD DEL ADULTO",
    fecha: "2021-10-01",
    contenido: "https://www.youtube.com/embed/DjExo32zBZE",
  },
  {
    id: "8",
    title: "Salud mental en adultos mayores",
    imageHeader: "",
    subtitulo: "",
    description: "",
    image: "/img/vida-sana/capsulas/mental-adulto-mayor.jpg",
    type: "capsulas",
    typeColor: "bg-[#eb5757]",
    tema: "SALUD DEL ADULTO MAYOR",
    fecha: "2021-10-01",
    contenido: "https://www.youtube.com/embed/5UkyBtInMYk",
  },
  {
    id: "9",
    title: "Telemedicina",
    imageHeader: "",
    subtitulo: "",
    description: "",
    image: "/img/vida-sana/capsulas/telemedicina.jpg",
    type: "capsulas",
    typeColor: "bg-[#eb5757]",
    tema: "BIENESTAR",
    fecha: "2021-10-01",
    contenido: "https://www.youtube.com/embed/CqzO3ywTBU0",
  },
  {
    id: "10",
    title: "Hipertensión",
    imageHeader: "",
    subtitulo: "",
    description: "",
    image: "/img/vida-sana/capsulas/hipertension.jpg",
    type: "capsulas",
    typeColor: "bg-[#eb5757]",
    tema: "SALUD DEL ADULTO",
    fecha: "2021-10-01",
    contenido: "https://www.youtube.com/embed/CqzO3ywTBU0",
  },
  {
    id: "11",
    title: "Chequeo Preventivo",
    imageHeader: "",
    subtitulo: "",
    description: "",
    image: "/img/vida-sana/capsulas/preventivo.jpg",
    type: "capsulas",
    typeColor: "bg-[#eb5757]",
    tema: "SALUD DEL ADULTO",
    fecha: "2021-10-01",
    contenido: "https://www.youtube.com/embed/Sqm3-JBtAE0",
  },
  {
    id: "12",
    title: "Alimentación Saludable",
    imageHeader: "",
    subtitulo: "",
    description: "",
    image: "/img/vida-sana/capsulas/alimentacion-saludable.jpg",
    type: "capsulas",
    typeColor: "bg-[#eb5757]",
    tema: "NUTRICION",
    fecha: "2021-10-01",
    contenido: "https://www.youtube.com/embed/TFo0dH4H5cI",
  },
  {
    id: "13",
    title: "Etiquetas Nutricionales",
    imageHeader: "",
    subtitulo: "",
    description: "",
    image: "/img/vida-sana/capsulas/nutricion.jpg",
    type: "capsulas",
    typeColor: "bg-[#eb5757]",
    tema: "NUTRICION",
    fecha: "2021-10-01",
    contenido: "https://www.youtube.com/embed/E6Hb6RTxbUs",
  },
  {
    id: "14",
    title: "Higiene del Sueño",
    imageHeader: "",
    subtitulo: "",
    description: "",
    image: "/img/vida-sana/capsulas/sueño.jpg",
    type: "capsulas",
    typeColor: "bg-[#eb5757]",
    tema: "SALUD MENTAL",
    fecha: "2021-10-01",
    contenido: "https://www.youtube.com/embed/Oyo1n4ga9Cg",
  },
  {
    id: "15",
    title: "Cuidado de la Salud Mental",
    imageHeader: "",
    subtitulo: "",
    description: "",
    image: "/img/vida-sana/capsulas/cuidado-mental.jpg",
    type: "capsulas",
    typeColor: "bg-[#eb5757]",
    tema: "SALUD MENTAL",
    fecha: "2021-10-01",
    contenido: "https://www.youtube.com/embed/eyVzS3DGz88",
  },
  {
    id: "16",
    title: "Estrés",
    imageHeader: "",
    subtitulo: "",
    description: "",
    image: "/img/vida-sana/capsulas/estres.jpg",
    type: "capsulas",
    typeColor: "bg-[#eb5757]",
    tema: "SALUD MENTAL",
    fecha: "2021-10-01",
    contenido: "https://www.youtube.com/embed/eH9KqIKAXkw",
  },
  {
    id: "17",
    title: "Salud Mental en Adolescentes",
    imageHeader: "",
    subtitulo: "",
    description: "",
    image: "/img/vida-sana/capsulas/adolecentes.jpg",
    type: "capsulas",
    typeColor: "bg-[#eb5757]",
    tema: "SALUD MENTAL",
    fecha: "2021-10-01",
    contenido: "https://www.youtube.com/embed/rprZmjnM4V8",
  },
  {
    id: "18",
    title: "Cuadros Alérgicos",
    imageHeader: "",
    subtitulo: "",
    description: "",
    image: "/img/vida-sana/capsulas/alergia.jpg",
    type: "capsulas",
    typeColor: "bg-[#eb5757]",
    tema: "BIENESTAR",
    fecha: "2021-10-01",
    contenido: "https://www.youtube.com/embed/nPmin7x0-Fw",
  },
  {
    id: "19",
    title: "Que es una crisis de pánico y como manejarla",
    imageHeader: "",
    subtitulo: "",
    description: "",
    image: "/img/vida-sana/charlas/panico.jpg",
    type: "charlas",
    typeColor: " bg-[#f2994a] ",
    tema: "SALUD MENTAL",
    fecha: "2021-10-01",
    contenido: "https://www.youtube.com/embed/mV83pe-NN2Q",
  },
  {
    id: "20",
    title: "Cáncer de mama",
    imageHeader: "",
    subtitulo: "",
    description: "",
    image: "/img/vida-sana/charlas/cancer-mama.jpg",
    type: "charlas",
    typeColor: "bg-[#f2994a] ",
    tema: "SALUD DE LA MUJER",
    fecha: "2021-10-01",
    contenido: "https://www.youtube.com/embed/liE96-UfLGc",
  },
  {
    id: "21",
    title: "Salvar una vida puede estar en .. ",
    imageHeader: "",
    subtitulo: "",
    description: "",
    image: "/img/vida-sana/charlas/salvar-vida.jpg",
    type: "charlas",
    typeColor: "bg-[#f2994a] ",
    tema: "URGENCIAS",
    fecha: "2021-10-01",
    contenido: "https://www.youtube.com/embed/-s8vEwbA1Nc",
  },
];

// Function to save dataVidaSana as a JSON file
function exportToJsonFile(data: VidaSana[], filename: string) {
  const jsonContent = JSON.stringify(data, null, 2);

  fs.writeFile(filename, jsonContent, "utf8", (err) => {
    if (err) {
      console.error("An error occurred while writing JSON to file.", err);
      return;
    }
    console.log("JSON file has been saved.");
  });
}

// Execute the function to export the data
exportToJsonFile(dataVidaSana, "dataVidaSana.json");
