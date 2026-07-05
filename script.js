const characters = {
    narrador: { nombre: "Narrador", img: "assets/img/narrador.png" },
    gomez: { nombre: "Insp. Gómez", img: "assets/img/inspector.png" },
    isabel: { nombre: "Dra. Isabel", img: "assets/img/dra_isabel_herrera.png" },
    ana: { nombre: "Ana Torres", img: "assets/img/ana_torres.png" },
    laura: { nombre: "Laura", img: "assets/img/laura_morales.png" },
    hector: { nombre: "Hector", img: "assets/img/chef.png" },
    victor: { nombre: "Víctor", img: "assets/img/victor_ramirez.png" },
    elena: { nombre: "Elena", img: "assets/img/elena_cruz.png" },
    martin: { nombre: "Martín", img: "assets/img/martin_silva.png" },
    luis: { nombre: "Luis", img: "assets/img/luis_mendoza.png" },
    ernesto: { nombre: "Ernesto", img: "assets/img/mayordomo.png" },
    voz_misteriosa: { nombre: "Voz misteriosa", img: "assets/img/voz_misteriosa.png" },
    sistema: { nombre: "Sistema UDH", img: "assets/img/narrador.png" },
    hombre: { nombre: "Hombre Misterioso", img: "assets/img/voz_misteriosa.png" },
};

const story = {
    //TEMPORADA 1 - CAP 1
    s1_c1_e1: { char: "narrador", text: "Lluvia incesante sobre la estación de policía.", next: "s1_c1_e2" },
    s1_c1_e2: { char: "gomez", text: "Bueno, parece que hoy será una noche tranquila ese teléfono no ha sonado los últimos 30 minutos.", next: "s1_c1_e3" },
    s1_c1_e3: { char: "ana", text: "Sí, eso parece.", next: "s1_c1_e4" },
    s1_c1_e4: { char: "ana", text: "Por cierto inspector... dejé los informes que pidió en su escritorio, los recogí esta mañana.", next: "s1_c1_e5" },
    s1_c1_e5: { char: "luis", text: "Deberías descansar Ana, no todo tiene que ser trabajo todo el tiempo.", next:"s1_c1_e6"},
    s1_c1_e6: { char: "ana", text: "Habla por ti, pero algo me dice que la calma no durará mucho.", next: "s1_c1_e7" },
    s1_c1_e7: { char: "gomez", text: "¡Basta! Se portan como un par de niños en lugar de agentes.", next: "s1_c1_e8" },
    s1_c1_e8: { char: "luis", text: "(Levanta las manos en rendición) De acuerdo... me callo", next: "s1_c1_e9" },
    s1_c1_e9: { char: "ana", text: "Risita burlona", next: "s1_c1_e10" },
    s1_c1_e10: { char: "gomez", text: "Aunque sea... lo dicho... parece que será una noche tranquila", next: "s1_c2_e1", chapter: 1 },

    //TEMPORADA 1 - CAP 2
    s1_c2_e1: { char: "luis", text: "(tono burlón) Sí, así que por qué no te relajas Ana?", next: "s1_c2_e2", chapter: 2 },
    s1_c2_e2: { char: "ana", text: "No te confíes tanto, quién sabe qué pueda pasar en estos días.", next: "s1_c2_e3" },
    s1_c2_e3: { char: "sistema", text: "(sonido de teléfono sonando).", next: "s1_c2_e4" },
    s1_c2_e4: { char: "gomez", text: "(contesta) ¿Quién habla?", next: "s1_c2_e5" },
    s1_c2_e5: { char: "voz_misteriosa", text: "Soy la voz de la venganza. Y ahora, el juego comienza.", next: "s1_c2_e6" },
    s1_c2_e6: { char: "gomez", text: "¿Quién eres? ¿Dónde estás?", next: "s1_c2_e7" },
    s1_c2_e7: { char: "ana", text: "Inspector, están rastreando la llamada...", next: "s1_c2_e8" },
    s1_c2_e8: { char: "luis", text: "La señal se pierde... está usando un bloqueador de rastreo.", next: "s1_c2_e9" },
    s1_c2_e9: { char: "voz_misteriosa", text: "Pronto lo sabrán todo. Pero primero, deben encontrar el cuerpo.", next: "s1_c2_e10" },
    s1_c2_e10: { char: "gomez", text: "¡Espera! ¡No cuelgues!", next: "s1_c3_e1", chapter: 2 },

    //TEMPORADA 1 - CAP 3
    s1_c3_e1: { char: "narrador", text: "La llamada se corta abruptamente. Una nueva amenaza ha llegado a la unidad.", next: "s1_c3_e2", chapter: 3 },
    s1_c3_e2: { char: "ana", text: "Debo revisar los antecedentes de esa voz. Algo me resulta familiar.", next: "s1_c3_e3" },
    s1_c3_e3: { char: "isabel", text: "¿Cuerpo? ¿De quién habla esta persona?", next: "s1_c3_e4" },
    s1_c3_e4: { char: "gomez", text: "No lo sabemos aún. Pero pronto lo descubriremos. Alerten a todas las unidades.", next: "s1_c3_e5" },
    s1_c3_e5: { char: "luis", text: "Señor, reportan un cuerpo encontrado en la mansión Morales.", next: "s1_c3_e6" },
    s1_c3_e6: { char: "gomez", text: "¿La mansión Morales? Reúnan al equipo. Nos vamos inmediatamente.", next: "s1_c3_e7" },
    s1_c3_e7: { char: "narrador", text: "La unidad se moviliza hacia la escena del crimen.", next: "s1_c3_e8" },
    s1_c3_e8: { char: "ana", text: "¿Crees que la voz misteriosa está detrás de esto?", next: "s1_c3_e9" },
    s1_c3_e9: { char: "gomez", text: "Todo indica que sí. Y eso significa que esto es solo el principio.", next: "s1_c3_e10" },
    s1_c3_e10: { char: "narrador", text: "La investigación está a punto de comenzar de verdad.", next: "s1_c4_e1", chapter: 3 },

    //TEMPORADA 1 - CAP 4
    s1_c4_e1: { char: "narrador", text: "En la mansión Morales, la escena es caótica. Policías por todas partes.", next: "s1_c4_e2", chapter: 4 },
    s1_c4_e2: { char: "gomez", text: "(llama a la puerta) ¿Hay alguien aquí?", next: "s1_c4_e3" },
    s1_c4_e3: { char: "laura", text: "(abriendo la puerta, asustada) Gracias por venir oficiales. Encontramos a mi padre...", next: "s1_c4_e4" },
    s1_c4_e4: { char: "ana", text: "Laura Morales, correcto? Necesitamos que nos cuentes exactamente qué pasó.", next: "s1_c4_e5" },
    s1_c4_e5: { char: "laura", text: "Estábamos cenando cuando escuchamos un disparo. Corrimos a la oficina de mi padre pero ya era demasiado tarde.", next: "s1_c4_e6" },
    s1_c4_e6: { char: "luis", text: "¿Vieron al atacante?", next: "s1_c4_e7" },
    s1_c4_e7: { char: "laura", text: "No... todo sucedió muy rápido. Solo escuchamos la voz de mi padre gritando y luego... silencio.", next: "s1_c4_e8" },
    s1_c4_e8: { char: "isabel", text: "(Examinando el cuerpo) La causa de muerte es un disparo a quemarropa en el pecho.", next: "s1_c4_e9" },
    s1_c4_e9: { char: "gomez", text: "¿Signos de entrada forzada?", next: "s1_c4_e10" },
    s1_c4_e10: { char: "luis", text: "Ninguno, inspector. Las puertas y ventanas están cerradas desde adentro.", next: "s1_c5_e1", chapter: 4 },

    //TEMPORADA 1 - CAP 5 - FINAL DE TEMPORADA
    s1_c5_e1: { char: "ana", text: "Esto es un asesinato desde adentro. El asesino está en esta casa.", next: "s1_c5_e2", chapter: 5 },
    s1_c5_e2: { char: "gomez", text: "Interrogaremos a todo el personal de la mansión. Nadie se mueve.", next: "s1_c5_e3" },
    s1_c5_e3: { char: "martin", text: "Yo encontré algo en el jardín trasero.", next: "s1_c5_e4" },
    s1_c5_e4: { char: "luis", text: "Es un casquillo. Probablemente del arma homicida.", next: "s1_c5_e5" },
    s1_c5_e5: { char: "isabel", text: "Enviaré esto al laboratorio para análisis balístico.", next: "s1_c5_e6" },
    s1_c5_e6: { char: "gomez", text: "Reúnanme a todos los sospechosos en la sala de estar. Es hora de hacer preguntas.", next: "s1_c5_e7" },
    s1_c5_e7: { char: "narrador", text: "Los primeros interrogatorios revelan secretos oscuros en la mansión Morales.", next: "s1_c5_e8" },
    s1_c5_e8: { char: "voz_misteriosa", text: "Pronto, inspector. Pronto descubrirá que ninguno de ellos dice la verdad.", next: "s1_c5_e9" },
    s1_c5_e9: { char: "gomez", text: "¿Vuelves a llamar? ¿Quién eres realmente?", next: "s1_c5_e10" },
    s1_c5_e10: { char: "narrador", text: "La pantalla se oscurece. El primer acto ha terminado.", next: "s2_c1_e1", chapter: 5 },

    //TEMPORADA 2 - CAP 1
    s2_c1_e1: { char: "narrador", text: "Dos días después de los eventos en la mansión Morales...", next: "s2_c1_e2", chapter: 1 },
    s2_c1_e2: { char: "gomez", text: "Los análisis del laboratorio han llegado. Tenemos resultados.", next: "s2_c1_e3" },
    s2_c1_e3: { char: "isabel", text: "El casquillo encontrado en el jardín pertenece a un arma de hace 30 años.", next: "s2_c1_e4" },
    s2_c1_e4: { char: "ana", text: "¿30 años? Eso es muy específico. Debe significar algo.", next: "s2_c1_e5" },
    s2_c1_e5: { char: "luis", text: "Revisé los archivos de la policía. Hace exactamente 30 años hubo un caso sin resolver.", next: "s2_c1_e6" },
    s2_c1_e6: { char: "gomez", text: "¿Relacionado con los Morales?", next: "s2_c1_e7" },
    s2_c1_e7: { char: "luis", text: "Sí. La desaparición de Carlos Morales, el hermano menor de James Morales.", next: "s2_c1_e8" },
    s2_c1_e8: { char: "ana", text: "Esto no es coincidencia. El asesino está conectado con el pasado de esta familia.", next: "s2_c1_e9" },
    s2_c1_e9: { char: "gomez", text: "Torres, investiga todo sobre ese caso. Quiero saber qué sucedió hace 30 años.", next: "s2_c1_e10" },
    s2_c1_e10: { char: "narrador", text: "Las pistas apuntan hacia un secreto familiar muy bien guardado.", next: "s2_c2_e1", chapter: 1 },

    //TEMPORADA 2 - CAP 2
    s2_c2_e1: { char: "ana", text: "Encontré documentos sobre la desaparición de Carlos Morales.", next: "s2_c2_e2", chapter: 2 },
    s2_c2_e2: { char: "gomez", text: "¿Qué dicen los informes?", next: "s2_c2_e3" },
    s2_c2_e3: { char: "ana", text: "Carlos desapareció después de una fuerte discusión con James. Testigos dijeron que se fue furioso.", next: "s2_c2_e4" },
    s2_c2_e4: { char: "isabel", text: "¿Y nunca se encontró su cuerpo?", next: "s2_c2_e5" },
    s2_c2_e5: { char: "ana", text: "Nunca. El caso fue cerrado hace años sin resolver. Oficialmente se considera una desaparición.", next: "s2_c2_e6" },
    s2_c2_e6: { char: "luis", text: "¿Crees que está vivo? ¿Que ha estado esperando 30 años para vengarse?", next: "s2_c2_e7" },
    s2_c2_e7: { char: "gomez", text: "Es posible. Interrogaremos a Laura de nuevo. Debe saber algo sobre su tío.", next: "s2_c2_e8" },
    s2_c2_e8: { char: "laura", text: "(en el interrogatorio) Mis padres nunca hablaban de tío Carlos. Era como si nunca hubiera existido.", next: "s2_c2_e9" },
    s2_c2_e9: { char: "ana", text: "¿Nunca te preguntaste por qué?", next: "s2_c2_e10" },
    s2_c2_e10: { char: "laura", text: "Claro que sí. Pero cada vez que lo mencionaba, mi padre me ordenaba dejar de hacer preguntas.", next: "s2_c3_e1", chapter: 2 },

    //TEMPORADA 2 - CAP 3
    s2_c3_e1: { char: "gomez", text: "Hay algo que James Morales escondía. Algo que lo llevó a la muerte.", next: "s2_c3_e2", chapter: 3 },
    s2_c3_e2: { char: "ana", text: "Necesitamos revisar los documentos financieros de la familia. Quizás encontremos algo.", next: "s2_c3_e3" },
    s2_c3_e3: { char: "isabel", text: "Acabo de recibir los resultados del análisis del cuerpo. Hay algo inusual en su sangre.", next: "s2_c3_e4" },
    s2_c3_e4: { char: "gomez", text: "¿Qué tipo de inusualidad?", next: "s2_c3_e5" },
    s2_c3_e5: { char: "isabel", text: "Rastros de un sedante desconocido. James fue envenenado horas antes del disparo.", next: "s2_c3_e6" },
    s2_c3_e6: { char: "luis", text: "Entonces el asesinato fue premeditado. Alguien quería asegurase de que no pudiera defenderse.", next: "s2_c3_e7" },
    s2_c3_e7: { char: "ana", text: "El personal de la mansión. Debo revisar quién tenía acceso a las comidas de James.", next: "s2_c3_e8" },
    s2_c3_e8: { char: "hector", text: "(en interrogatorio) Yo preparé la cena, pero alguien más llevó el plato a su oficina.", next: "s2_c3_e9" },
    s2_c3_e9: { char: "ernesto", text: "Fue Elena quien llevó la cena. Siempre lo hace.", next: "s2_c3_e10" },
    s2_c3_e10: { char: "narrador", text: "Elena Cruz, el ama de llaves, se convierte en el foco principal de la investigación.", next: "s2_c4_e1", chapter: 3 },

    //TEMPORADA 2 - CAP 4
    s2_c4_e1: { char: "gomez", text: "Elena Cruz. Sabemos que llevaste la cena a James Morales.", next: "s2_c4_e2", chapter: 4 },
    s2_c4_e2: { char: "elena", text: "(nerviosa) Sí, así es. Eso es parte de mi trabajo.", next: "s2_c4_e3" },
    s2_c4_e3: { char: "ana", text: "¿Viste algo en la bandeja? ¿Algo que no fuera normal?", next: "s2_c4_e4" },
    s2_c4_e4: { char: "elena", text: "No... bueno, Hector colocó su bebida favorita. Un vino especial que acostumbraba a beber.", next: "s2_c4_e5" },
    s2_c4_e5: { char: "luis", text: "¿Quién pidió que fuera vino especial?", next: "s2_c4_e6" },
    s2_c4_e6: { char: "elena", text: "No sé... Ernesto dijo que James lo había pedido.", next: "s2_c4_e7" },
    s2_c4_e7: { char: "gomez", text: "¿Ernesto? Interrogaremos al mayordomo nuevamente.", next: "s2_c4_e8" },
    s2_c4_e8: { char: "ernesto", text: "(sudando) Yo solo... yo solo seguía órdenes.", next: "s2_c4_e9" },
    s2_c4_e9: { char: "ana", text: "¿Órdenes de quién?", next: "s2_c4_e10" },
    s2_c4_e10: { char: "ernesto", text: "De alguien que llamó la mañana anterior. Dijo que era un amigo de James... dijo que era una sorpresa.", next: "s2_c5_e1", chapter: 4 },

    //TEMPORADA 2 - CAP 5 - FINAL DE TEMPORADA
    s2_c5_e1: { char: "gomez", text: "¿Reconoces la voz?", next: "s2_c5_e2", chapter: 5 },
    s2_c5_e2: { char: "ernesto", text: "Tengo miedo, inspector. Tengo mucho miedo. Esa voz... no era normal. Era como si perteneciera a un fantasma.", next: "s2_c5_e3" },
    s2_c5_e3: { char: "luis", text: "¿Un fantasma? Ernesto, necesitamos que seas claro.", next: "s2_c5_e4" },
    s2_c5_e4: { char: "ernesto", text: "Hace años, cuando era joven, trabajaba para la familia. Recuerdo a Carlos Morales. Esa voz... era igual a la suya.", next: "s2_c5_e5" },
    s2_c5_e5: { char: "ana", text: "¿Estás diciendo que crees que fue Carlos quien ordenó el envenenamiento?", next: "s2_c5_e6" },
    s2_c5_e6: { char: "gomez", text: "Eso es lo que está diciendo. Y si Carlos está vivo... es nuestro principal sospechoso.", next: "s2_c5_e7" },
    s2_c5_e7: { char: "narrador", text: "La voz misteriosa llama nuevamente.", next: "s2_c5_e8" },
    s2_c5_e8: { char: "voz_misteriosa", text: "Ahora comprenden, inspector. Soy Carlos Morales. Y esto es solo el principio.", next: "s2_c5_e9" },
    s2_c5_e9: { char: "gomez", text: "¿Dónde estás? Nos encontraremos cara a cara.", next: "s2_c5_e10" },
    s2_c5_e10: { char: "narrador", text: "La llamada se corta. Un nuevo rostro aparece entre las sombras. El acto dos ha llegado a su fin.", next: "s3_c1_e1", chapter: 5 },

    //TEMPORADA 3 - CAP 1
    s3_c1_e1: { char: "narrador", text: "Carlos Morales. Desaparecido durante 30 años. Ahora aparece como el principal sospechoso.", next: "s3_c1_e2", chapter: 1 },
    s3_c1_e2: { char: "gomez", text: "Emitan una orden de búsqueda inmediata. Carlos Morales es considerado armado y peligroso.", next: "s3_c1_e3" },
    s3_c1_e3: { char: "luis", text: "Encontramos un lugar en las afueras de la ciudad. Un almacén abandonado con señales de ocupación reciente.", next: "s3_c1_e4" },
    s3_c1_e4: { char: "ana", text: "¿Está confirmado que Carlos estaba ahí?", next: "s3_c1_e5" },
    s3_c1_e5: { char: "luis", text: "Hay registros de movimiento. Alguien ha estado viviendo allí durante años.", next: "s3_c1_e6" },
    s3_c1_e6: { char: "isabel", text: "Necesitamos más información sobre dónde ha estado Carlos todos estos años.", next: "s3_c1_e7" },
    s3_c1_e7: { char: "ana", text: "Investigué hospitales psiquiátricos. Encontré registro de un paciente sin identificar que fue ingresado hace 30 años.", next: "s3_c1_e8" },
    s3_c1_e8: { char: "gomez", text: "¿Cuándo fue liberado?", next: "s3_c1_e9" },
    s3_c1_e9: { char: "ana", text: "Hace cinco años. Sin antecedentes de dónde fue después.", next: "s3_c1_e10" },
    s3_c1_e10: { char: "narrador", text: "La historia de Carlos Morales comienza a tomar forma. Un hombre roto por 30 años de dolor.", next: "s3_c2_e1", chapter: 1 },

    //TEMPORADA 3 - CAP 2
    s3_c2_e1: { char: "ana", text: "Revise los archivos del hospital. Carlos fue admitido después de un colapso nervioso.", next: "s3_c2_e2", chapter: 2 },
    s3_c2_e2: { char: "gomez", text: "¿Colapso nervioso? ¿Por qué?", next: "s3_c2_e3" },
    s3_c2_e3: { char: "ana", text: "Según los registros, fue encontrado en las calles sin memoria. Tardó años en recordar quién era.", next: "s3_c2_e4" },
    s3_c2_e4: { char: "luis", text: "Entonces, cuando recuperó su memoria, supo lo que James había hecho.", next: "s3_c2_e5" },
    s3_c2_e5: { char: "isabel", text: "¿Qué pudo haber hecho James para que su propio hermano fuera abandonado así?", next: "s3_c2_e6" },
    s3_c2_e6: { char: "gomez", text: "Eso es lo que vamos a descubrir. Necesitamos los documentos de entonces. Revisen los archivos de la policía.", next: "s3_c2_e7" },
    s3_c2_e7: { char: "luis", text: "Encontré algo. Un informe de desaparición, pero hay páginas arrancadas.", next: "s3_c2_e8" },
    s3_c2_e8: { char: "ana", text: "¿Alguien destruyó las pruebas? Eso significa que alguien en la policía estaba implicado.", next: "s3_c2_e9" },
    s3_c2_e9: { char: "gomez", text: "¿Quién era el oficial a cargo del caso?", next: "s3_c2_e10" },
    s3_c2_e10: { char: "luis", text: "El Comisario González. Murió hace cinco años, justo cuando Carlos fue liberado del hospital.", next: "s3_c3_e1", chapter: 2 },

    //TEMPORADA 3 - CAP 3
    s3_c3_e1: { char: "gomez", text: "González y James Morales. Estaban conectados desde el principio.", next: "s3_c3_e2", chapter: 3 },
    s3_c3_e2: { char: "ana", text: "Investigue sus finanzas. Encontré múltiples transferencias entre ambos durante años.", next: "s3_c3_e3" },
    s3_c3_e3: { char: "luis", text: "¿Sobornos?", next: "s3_c3_e4" },
    s3_c3_e4: { char: "ana", text: "Sí. James pagaba para que la policía ignorara el paradero de Carlos.", next: "s3_c3_e5" },
    s3_c3_e5: { char: "isabel", text: "Entonces, ¿por qué James permitió que Carlos fuera institucionalizado?", next: "s3_c3_e6" },
    s3_c3_e6: { char: "ana", text: "Porque no sabía dónde estaba. Carlos desapareció durante tres días. Cuando lo encontraron, estaba inconsciente en un callejón.", next: "s3_c3_e7" },
    s3_c3_e7: { char: "gomez", text: "¿Y qué pasó durante esos tres días?", next: "s3_c3_e8" },
    s3_c3_e8: { char: "ana", text: "No hay registros. Es como si esos tres días no existieran.", next: "s3_c3_e9" },
    s3_c3_e9: { char: "narrador", text: "El verdadero crimen aún permanece oculto en la oscuridad del pasado.", next: "s3_c3_e10" },
    s3_c3_e10: { char: "voz_misteriosa", text: "Pronto, inspector. Pronto sabrán lo que sucedió durante esos tres días perdidos.", next: "s3_c4_e1", chapter: 3 },

    //TEMPORADA 3 - CAP 4
    s3_c4_e1: { char: "luis", text: "Encontramos a alguien. Un hombre que afirma haber sido testigo de lo sucedido hace 30 años.", next: "s3_c4_e2", chapter: 4 },
    s3_c4_e2: { char: "gomez", text: "¿Dónde lo encontraste?", next: "s3_c4_e3" },
    s3_c4_e3: { char: "luis", text: "Estaba buscando refugio en las ruinas cerca del almacén donde vivía Carlos.", next: "s3_c4_e4" },
    s3_c4_e4: { char: "gomez", text: "Traerlo a la estación. Quiero interrogarlo personalmente.", next: "s3_c4_e5" },
    s3_c4_e5: { char: "ana", text: "Inspector, el hombre dice que vio a James Morales golpear a Carlos hace 30 años.", next: "s3_c4_e6" },
    s3_c4_e6: { char: "gomez", text: "¿Por qué?", next: "s3_c4_e7" },
    s3_c4_e7: { char: "ana", text: "Fue por dinero. Carlos había robado fondos de la empresa de James. James lo enfrentó en la calle.", next: "s3_c4_e8" },
    s3_c4_e8: { char: "luis", text: "La pelea fue violenta. Carlos fue golpeado hasta perder el conocimiento.", next: "s3_c4_e9" },
    s3_c4_e9: { char: "isabel", text: "Y entonces James lo dejó ahí, asumiendo que moriría.", next: "s3_c4_e10" },
    s3_c4_e10: { char: "narrador", text: "Pero Carlos no murió. En cambio, despertó con amnesia en un hospital psiquiátrico. 30 años después, finalmente recuerda.", next: "s3_c5_e1", chapter: 4 },

    //TEMPORADA 3 - CAP 5 - FINAL DE TEMPORADA
    s3_c5_e1: { char: "gomez", text: "Entonces, Carlos mató a James como venganza. Es un caso cerrado.", next: "s3_c5_e2", chapter: 5 },
    s3_c5_e2: { char: "ana", text: "Pero hay algo que no cuadra, inspector. El testimonio del testigo es demasiado conveniente.", next: "s3_c5_e3" },
    s3_c5_e3: { char: "luis", text: "¿Qué quieres decir?", next: "s3_c5_e4" },
    s3_c5_e4: { char: "ana", text: "Ese hombre trabajaba para la policía hace 30 años. Fue quien transportó a Carlos al hospital.", next: "s3_c5_e5" },
    s3_c5_e5: { char: "gomez", text: "¿Está sugiriendo que está mintiendo?", next: "s3_c5_e6" },
    s3_c5_e6: { char: "ana", text: "Digo que podría estar ocultando la verdad completa. ¿Qué sucedió realmente durante el traslado?", next: "s3_c5_e7" },
    s3_c5_e7: { char: "isabel", text: "La voz misteriosa está usando a este hombre. Está jugando con nosotros.", next: "s3_c5_e8" },
    s3_c5_e8: { char: "voz_misteriosa", text: "Tienen razón. Este hombre es solo una pieza del rompecabezas. El verdadero jugador aún está oculto.", next: "s3_c5_e9" },
    s3_c5_e9: { char: "gomez", text: "¿Quién eres realmente? ¿Eres Carlos o alguien más?", next: "s3_c5_e10" },
    s3_c5_e10: { char: "narrador", text: "La verdad es mucho más compleja de lo que imaginaban. El tercer acto ha llegado a su fin. Las mentiras están por desmoronarse.", next: "s4_c1_e1", chapter: 5 },

    //TEMPORADA 4 - CAP 1
    s4_c1_e1: { char: "narrador", text: "Una semana después. La investigación ha tomado un giro inesperado.", next: "s4_c1_e2", chapter: 1 },
    s4_c1_e2: { char: "ana", text: "He estado revisando los archivos del hospital psiquiátrico una vez más.", next: "s4_c1_e3" },
    s4_c1_e3: { char: "gomez", text: "¿Y?", next: "s4_c1_e4" },
    s4_c1_e4: { char: "ana", text: "El paciente que dijimos era Carlos Morales... en realidad no tenía ese nombre en los registros.", next: "s4_c1_e5" },
    s4_c1_e5: { char: "luis", text: "¿Entonces quién era?", next: "s4_c1_e6" },
    s4_c1_e6: { char: "ana", text: "Solo lo llamaban 'Paciente X'. No había identificación, sin registros dentales, nada.", next: "s4_c1_e7" },
    s4_c1_e7: { char: "isabel", text: "Eso significa que podrían ser dos personas diferentes. Carlos y el Paciente X.", next: "s4_c1_e8" },
    s4_c1_e8: { char: "gomez", text: "¿Entonces dónde ha estado Carlos todos estos años?", next: "s4_c1_e9" },
    s4_c1_e9: { char: "luis", text: "Acabo de recibir una llamada anónima. Alguien ha dejado un paquete para nosotros.", next: "s4_c1_e10" },
    s4_c1_e10: { char: "narrador", text: "Adentro del paquete hay documentos antiguos y una foto. Una foto que cambiará todo.", next: "s4_c2_e1", chapter: 1 },

    //TEMPORADA 4 - CAP 2
    s4_c2_e1: { char: "gomez", text: "¿Qué hay en la foto?", next: "s4_c2_e2", chapter: 2 },
    s4_c2_e2: { char: "luis", text: "Es una foto familiar. James, Carlos... y una tercera persona. Una mujer.", next: "s4_c2_e3" },
    s4_c2_e3: { char: "ana", text: "¿Quién es ella?", next: "s4_c2_e4" },
    s4_c2_e4: { char: "luis", text: "La foto tiene una nota en el reverso: 'La verdadera víctima'.", next: "s4_c2_e5" },
    s4_c2_e5: { char: "ana", text: "Investiga esa mujer. Necesito saber quién es y qué relación tenía con la familia Morales.", next: "s4_c2_e6" },
    s4_c2_e6: { char: "luis", text: "He encontrado un registro. Era la prometida de Carlos. Se llamaba Mariana Gómez.", next: "s4_c2_e7" },
    s4_c2_e7: { char: "gomez", text: "Gómez... ese es mi apellido. ¿Hay alguna conexión?", next: "s4_c2_e8" },
    s4_c2_e8: { char: "luis", text: "Podría ser una coincidencia, pero... Mariana desapareció hace 30 años, la misma noche que Carlos.", next: "s4_c2_e9" },
    s4_c2_e9: { char: "ana", text: "¿Desapareció? ¿O fue asesinada?", next: "s4_c2_e10" },
    s4_c2_e10: { char: "narrador", text: "El crimen original no era solo sobre un hermano desaparecido. Era sobre amor, traición y muerte.", next: "s4_c3_e1", chapter: 2 },

    //TEMPORADA 4 - CAP 3
    s4_c3_e1: { char: "ana", text: "Encontré más registros. Mariana Gómez fue encontrada un mes después, en el río.", next: "s4_c3_e2", chapter: 3 },
    s4_c3_e2: { char: "gomez", text: "¿Ahogada?", next: "s4_c3_e3" },
    s4_c3_e3: { char: "ana", text: "Sí. El caso fue cerrado como accidental. Pero hay inconsistencias en el informe de la autopsia.", next: "s4_c3_e4" },
    s4_c3_e4: { char: "isabel", text: "¿Qué tipo de inconsistencias?", next: "s4_c3_e5" },
    s4_c3_e5: { char: "ana", text: "Hay signos de lucha. Magulladuras en los brazos y el cuello. Fue asesinada antes de caer al río.", next: "s4_c3_e6" },
    s4_c3_e6: { char: "luis", text: "¿Y quién investigó el caso entonces?", next: "s4_c3_e7" },
    s4_c3_e7: { char: "ana", text: "El Comisario González. El mismo hombre que suprimió la desaparición de Carlos.", next: "s4_c3_e8" },
    s4_c3_e8: { char: "gomez", text: "González estaba protegiendo a James Morales desde el principio.", next: "s4_c3_e9" },
    s4_c3_e9: { char: "luis", text: "¿Entonces James asesinó a Mariana? ¿Pero por qué?", next: "s4_c3_e10" },
    s4_c3_e10: { char: "voz_misteriosa", text: "Porque James estaba enamorado de ella. Y cuando ella eligió a Carlos, enloqueció.", next: "s4_c4_e1", chapter: 3 },

    //TEMPORADA 4 - CAP 4
    s4_c4_e1: { char: "gomez", text: "¿Eres Carlos? ¿Finalmente te presentas?", next: "s4_c4_e2", chapter: 4 },
    s4_c4_e2: { char: "voz_misteriosa", text: "Soy lo que James Morales creó. Soy el fantasma de todo lo que perdí.", next: "s4_c4_e3" },
    s4_c4_e3: { char: "ana", text: "¿Dónde estás ahora?", next: "s4_c4_e4" },
    s4_c4_e4: { char: "voz_misteriosa", text: "Estoy en el único lugar que James nunca se atrevió a volver. La mansión. Nuestro hogar.", next: "s4_c4_e5" },
    s4_c4_e5: { char: "gomez", text: "Iremos hacia allá. Esto termina hoy.", next: "s4_c4_e6" },
    s4_c4_e6: { char: "luis", text: "Inspector, tenemos movimiento en la mansión Morales. Hay alguien adentro.", next: "s4_c4_e7" },
    s4_c4_e7: { char: "gomez", text: "Rodeen el perímetro. Nadie entra ni sale.", next: "s4_c4_e8" },
    s4_c4_e8: { char: "narrador", text: "La policía llega a la mansión. La confrontación final está por comenzar.", next: "s4_c4_e9" },
    s4_c4_e9: { char: "gomez", text: "¡Carlos Morales! ¡Sal con las manos levantadas!", next: "s4_c4_e10" },
    s4_c4_e10: { char: "narrador", text: "El silencio es ensordecedor. Dentro de la mansión, las luces se apagan.", next: "s4_c5_e1", chapter: 4 },

    //TEMPORADA 4 - CAP 5 - FINAL DE TEMPORADA
    s4_c5_e1: { char: "luis", text: "Inspector, encontramos a alguien en la sala de estar.", next: "s4_c5_e2", chapter: 5 },
    s4_c5_e2: { char: "gomez", text: "¿Carlos?", next: "s4_c5_e3" },
    s4_c5_e3: { char: "narrador", text: "El hombre que está sentado en el sillón es un extraño. Su rostro es diferente al de cualquier fotografía antigua de Carlos.", next: "s4_c5_e4" },
    s4_c5_e4: { char: "ana", text: "¿Quién eres?", next: "s4_c5_e5" },
    s4_c5_e5: { char: "hombre", text: "(con acento desconocido) Soy alguien que Carlos conoció hace años. Alguien que se convirtió en su mejor amigo.", next: "s4_c5_e6" },
    s4_c5_e6: { char: "gomez", text: "Explícate. ¿Dónde está Carlos?", next: "s4_c5_e7" },
    s4_c5_e7: { char: "hombre", text: "Carlos está muerto. Murió hace cinco años. Pero antes de morir, me pidió que terminara lo que él no pudo.", next: "s4_c5_e8" },
    s4_c5_e8: { char: "luis", text: "¿Matar a James Morales?", next: "s4_c5_e9" },
    s4_c5_e9: { char: "hombre", text: "Era lo único que lo mantenía vivo. El deseo de venganza. Ahora que está hecho, puedo descansar.", next: "s4_c5_e10" },
    s4_c5_e10: { char: "narrador", text: "El misterio se profundiza. La voz misteriosa no era Carlos. Era alguien actuando en su nombre. Pero la verdad aún permanece oculta. El cuarto acto ha terminado.", next: "s5_c1_e1", chapter: 5 },

    //TEMPORADA 5 - CAP 1
    s5_c1_e1: { char: "narrador", text: "La noche del juicio final ha llegado. Todos los actores se reúnen para la verdad absoluta.", next: "s5_c1_e2", chapter: 1 },
    s5_c1_e2: { char: "gomez", text: "Tu nombre es... ¿Cuál es tu nombre?", next: "s5_c1_e3" },
    s5_c1_e3: { char: "hombre", text: "Mi nombre no importa. Fui solo una herramienta. Un soldado de Carlos Morales.", next: "s5_c1_e4" },
    s5_c1_e4: { char: "ana", text: "¿Qué sucedió en el hospital psiquiátrico? ¿Quién era el Paciente X?", next: "s5_c1_e5" },
    s5_c1_e5: { char: "hombre", text: "Carlos. Pero no era solo un paciente. Los médicos lo usaron en experimentos. Lo torturaron mentalmente durante años.", next: "s5_c1_e6" },
    s5_c1_e6: { char: "isabel", text: "¿Por orden de quién?", next: "s5_c1_e7" },
    s5_c1_e7: { char: "hombre", text: "De James Morales. Pagaba para que mantuvieran a Carlos encerrado y sufriendo.", next: "s5_c1_e8" },
    s5_c1_e8: { char: "gomez", text: "¿Y Mariana? ¿James la asesinó?", next: "s5_c1_e9" },
    s5_c1_e9: { char: "hombre", text: "James descubrió que Mariana planeaba ayudar a Carlos a escapar. Él no podía permitirlo.", next: "s5_c1_e10" },
    s5_c1_e10: { char: "narrador", text: "La historia completa finalmente sale a la luz. Un crimen que abarcaba 30 años de mentiras.", next: "s5_c2_e1", chapter: 1 },

    //TEMPORADA 5 - CAP 2
    s5_c2_e1: { char: "ana", text: "¿Cómo conociste a Carlos si pasó 30 años en el hospital?", next: "s5_c2_e2", chapter: 2 },
    s5_c2_e2: { char: "hombre", text: "Yo trabajaba en el hospital. Era enfermero. Vi cómo destruían la mente de un hombre inocente cada día.", next: "s5_c2_e3" },
    s5_c2_e3: { char: "luis", text: "¿Y qué te hizo ayudarlo?", next: "s5_c2_e4" },
    s5_c2_e4: { char: "hombre", text: "La humanidad. Cuando fue liberado hace cinco años, lo ayudé a escapar. Le di un lugar donde vivir. Lo ayudé a descubrir la verdad.", next: "s5_c2_e5" },
    s5_c2_e5: { char: "gomez", text: "¿Y cuando murió?", next: "s5_c2_e6" },
    s5_c2_e6: { char: "hombre", text: "Me hizo prometer que terminaría lo que él empezó. Que haría que James pagara por todo lo que le había hecho.", next: "s5_c2_e7" },
    s5_c2_e7: { char: "ana", text: "¿Entonces mataste a James para honrar esa promesa?", next: "s5_c2_e8" },
    s5_c2_e8: { char: "hombre", text: "No lo maté por odio. Lo hice por justicia. Por Carlos. Por Mariana. Por todos los que sufrieron.", next: "s5_c2_e9" },
    s5_c2_e9: { char: "gomez", text: "La ley no funciona de esa manera. Lo arrestamos por el asesinato de James Morales.", next: "s5_c2_e10" },
    s5_c2_e10: { char: "hombre", text: "(sonríe) Lo sé. Estoy en paz con eso.", next: "s5_c3_e1", chapter: 2 },

    //TEMPORADA 5 - CAP 3
    s5_c3_e1: { char: "narrador", text: "Las investigaciones continúan. Se abren casos antiguos. Se reexaminan las pruebas.", next: "s5_c3_e2", chapter: 3 },
    s5_c3_e2: { char: "ana", text: "Hemos encontrado documentos que prueban que el Comisario González y James Morales conspiraron juntos.", next: "s5_c3_e3" },
    s5_c3_e3: { char: "isabel", text: "¿Qué hay sobre el hospital psiquiátrico?", next: "s5_c3_e4" },
    s5_c3_e4: { char: "ana", text: "Los médicos a cargo fueron pagados para mantener a Carlos en condiciones inhumanas.", next: "s5_c3_e5" },
    s5_c3_e5: { char: "luis", text: "¿Todos ellos están vivos?", next: "s5_c3_e6" },
    s5_c3_e6: { char: "ana", text: "La mayoría han fallecido de causas naturales. Pero hay un director del hospital que aún vive.", next: "s5_c3_e7" },
    s5_c3_e7: { char: "gomez", text: "¿Podemos inculparlo?", next: "s5_c3_e8" },
    s5_c3_e8: { char: "ana", text: "Con las pruebas que tenemos, sí. Él también será procesado por negligencia grave y complicidad en tortura.", next: "s5_c3_e9" },
    s5_c3_e9: { char: "isabel", text: "La justicia finalmente llega. Treinta años después.", next: "s5_c3_e10" },
    s5_c3_e10: { char: "narrador", text: "Pero la justicia no trae de vuelta a los muertos. No cura las heridas del pasado.", next: "s5_c4_e1", chapter: 3 },

    //TEMPORADA 5 - CAP 4
    s5_c4_e1: { char: "laura", text: "(en una entrevista) No sabía nada sobre mi tío. Mi padre nunca habló de él.", next: "s5_c4_e2", chapter: 4 },
    s5_c4_e2: { char: "gomez", text: "¿Qué harás ahora?", next: "s5_c4_e3" },
    s5_c4_e3: { char: "laura", text: "Donaré la mansión a una organización que ayuda a personas con problemas de salud mental. Es lo menos que puedo hacer.", next: "s5_c4_e4" },
    s5_c4_e4: { char: "ana", text: "¿Y tu vida?", next: "s5_c4_e5" },
    s5_c4_e5: { char: "laura", text: "Tengo que aprender a vivir sabiendo la verdad sobre quién era mi padre. No será fácil.", next: "s5_c4_e6" },
    s5_c4_e6: { char: "gomez", text: "Caso Clasificado: Asesinato en la Mansión Morales. Resuelto.", next: "s5_c4_e7" },
    s5_c4_e7: { char: "luis", text: "Pero las preguntas sobre la corrupción policial aún quedan abiertas.", next: "s5_c4_e8" },
    s5_c4_e8: { char: "ana", text: "Habrá investigaciones internas. Se exhumarán más casos antiguos. La verdad seguirá emergiendo.", next: "s5_c4_e9" },
    s5_c4_e9: { char: "narrador", text: "Una puerta se cierra, pero muchas más se abren.", next: "s5_c4_e10" },
    s5_c4_e10: { char: "narrador", text: "El sistema está roto, pero ahora todos lo saben.", next: "s5_c5_e1", chapter: 4 },

    //TEMPORADA 5 - CAP 5 - EPÍLOGO FINAL
    s5_c5_e1: { char: "narrador", text: "Seis meses después. Una noche lluviosa en la estación de policía. Similar a aquella en que todo comenzó.", next: "s5_c5_e2", chapter: 5 },
    s5_c5_e2: { char: "gomez", text: "Gómez aquí. ¿Alguna novedad?", next: "s5_c5_e3" },
    s5_c5_e3: { char: "luis", text: "Inspector, ha llegado un paquete. Sin remitente.", next: "s5_c5_e4" },
    s5_c5_e4: { char: "gomez", text: "¿De nuevo? Abre el paquete. Cuidadosamente.", next: "s5_c5_e5" },
    s5_c5_e5: { char: "luis", text: "Contiene fotos. Fotos de otra desaparición antigua. De otro caso sin resolver.", next: "s5_c5_e6" },
    s5_c5_e6: { char: "ana", text: "¿Quién las envió?", next: "s5_c5_e7" },
    s5_c5_e7: { char: "luis", text: "Hay una nota. Dice: 'Este es el siguiente caso. La verdad aún debe emerger'.", next: "s5_c5_e8" },
    s5_c5_e8: { char: "gomez", text: "Parece que nuestro trabajo nunca termina. Mientras haya secretos, habrá casos que resolver.", next: "s5_c5_e9" },
    s5_c5_e9: { char: "narrador", text: "La lluvia sigue cayendo. La ciudad nunca duerme. Y ni la policía tampoco.", next: "s5_c5_e10" },
    s5_c5_e10: { char: "narrador", text: "FIN DE LA SAGA COMPLETA - CASO CLASIFICADO: ASESINATO EN LA MANSIÓN MORALES", isEnd: true, chapter: 5 },
};

// Fragmentos de preview (uno por temporada - primer capítulo)
const previewScenes = [
    "s1_c1_e1",  // Temporada 1
    "s2_c1_e1",  // Temporada 2
    "s3_c1_e1",  // Temporada 3
    "s4_c1_e1",  // Temporada 4
    "s5_c1_e1"   // Temporada 5
];

let currentId = "s1_c1_e1";
let currentSeason = 1;
let currentChapter = 1;
let history = [];
let previewIndex = 0;
let menuOpen = false;
let settingsOpen = false;
let quickActionsOpen = false;
let subtitlesEnabled = true;

function startLoading() {
    document.getElementById('screen-welcome').classList.add('hidden');
    document.getElementById('screen-loading').classList.remove('hidden');

    let p = 0;
    const bar = document.getElementById('progressBar');

    const interval = setInterval(() => {
        p += 10;
        bar.style.width = p + '%';

        if (p >= 100) {
            clearInterval(interval);
            document.getElementById('screen-loading').classList.add('hidden');
            document.getElementById('screen-game').classList.remove('hidden');
            document.getElementById('policeLights').classList.add('police-active');
            render();
        }
    }, 80);
}

function startPreview() {
    document.getElementById('screen-welcome').classList.add('hidden');
    document.getElementById('screen-preview').classList.remove('hidden');
    document.getElementById('previewPoliceLights').classList.add('police-active');
    previewIndex = 0;
    renderPreview();
}

function closePreview() {
    document.getElementById('screen-preview').classList.add('hidden');
    document.getElementById('screen-welcome').classList.remove('hidden');
    document.getElementById('previewPoliceLights').classList.remove('police-active');
    previewIndex = 0;
}

function renderPreview() {
    if (previewIndex >= previewScenes.length) {
        previewIndex = previewScenes.length - 1;
    }

    const sceneId = previewScenes[previewIndex];
    const data = story[sceneId];
    if (!data) return;

    const char = characters[data.char];
    const season = previewIndex + 1;

    document.getElementById('previewCharSpeech').innerText = data.text;
    document.getElementById('previewSceneInfo').innerText = `TEMPORADA ${String(season).padStart(2, '0')}`;
    document.getElementById('previewCounter').innerText = `Fragmento ${season} de 5`;

    if (data.char === 'narrador' || data.char === 'sistema') {
        document.getElementById('previewCharAvatar').style.display = 'none';
        document.getElementById('previewCharName').innerText = data.char === 'sistema' ? "SISTEMA UDH" : "CENTRAL UDH";
    } else {
        document.getElementById('previewCharAvatar').style.display = 'block';
        if (char) {
            document.getElementById('previewAvatarImg').src = char.img;
            document.getElementById('previewCharName').innerText = char.nombre;
        }
    }

    document.getElementById('previewPrevBtn').disabled = previewIndex === 0;
    document.getElementById('previewNextBtn').disabled = previewIndex === previewScenes.length - 1;
}

function previewNext() {
    if (previewIndex < previewScenes.length - 1) {
        previewIndex++;
        renderPreview();
    }
}

function previewPrev() {
    if (previewIndex > 0) {
        previewIndex--;
        renderPreview();
    }
}

function render() {
    const data = story[currentId];
    if (!data) return;
    
    const char = characters[data.char];

    document.getElementById('charSpeech').innerText = data.text;

    // Actualizar temporada y capítulo actual basada en el ID
    const seasonMatch = currentId.match(/s(\d+)_c(\d+)/);
    if (seasonMatch) {
        currentSeason = parseInt(seasonMatch[1]);
        currentChapter = parseInt(seasonMatch[2]);
        document.getElementById('seasonInfo').innerText = `TEMPORADA ${currentSeason}`;
        document.getElementById('chapterInfo').innerText = `CAP. ${currentChapter}`;
    }

    if (data.char === 'narrador' || data.char === 'sistema') {
        document.getElementById('charAvatar').style.display = 'none';
        document.getElementById('charName').innerText = data.char === 'sistema' ? "SISTEMA UDH" : "CENTRAL UDH";
    } else {
        document.getElementById('charAvatar').style.display = 'block';
        if (char) {
            document.getElementById('avatarImg').src = char.img;
            document.getElementById('charName').innerText = char.nombre;
        }
    }

    document.getElementById('prevBtn').disabled = history.length === 0;
    document.getElementById('nextBtn').innerText = data.isEnd ? "FINALIZAR" : "CONTINUAR";
}

function nextScene() {
    const data = story[currentId];
    if (!data) return;

    if (data.isEnd) {
        // Final de la saga
        location.reload();
    } else if (data.next) {
        history.push(currentId);
        currentId = data.next;
        render();
    }
}

function prevScene() {
    if (history.length > 0) {
        currentId = history.pop();
        render();
    }
}

function togglePatrol() {
    document.getElementById('policeLights').classList.toggle('police-active');
}

// ============================================
// FUNCIONES DEL MENÚ HAMBURGUESA
// ============================================

function toggleMenu() {
    const gameMenu = document.getElementById('gameMenu');
    menuOpen = !menuOpen;
    
    if (menuOpen) {
        gameMenu.classList.remove('hidden');
        settingsOpen = false;
        quickActionsOpen = false;
        const settingsPanel = document.getElementById('settingsPanel');
        const quickActionsPanel = document.getElementById('quickActionsPanel');
        const temporadasSection = document.getElementById('temporadasSection');
        if (settingsPanel) settingsPanel.classList.add('hidden');
        if (quickActionsPanel) quickActionsPanel.classList.add('hidden');
        if (temporadasSection) temporadasSection.classList.remove('hidden');
    } else {
        gameMenu.classList.add('hidden');
    }
}

function toggleSettings() {
    const settingsPanel = document.getElementById('settingsPanel');
    const temporadasSection = document.getElementById('temporadasSection');
    settingsOpen = !settingsOpen;
    
    if (settingsOpen) {
        if (settingsPanel) settingsPanel.classList.remove('hidden');
        if (temporadasSection) temporadasSection.classList.add('hidden');
        quickActionsOpen = false;
    } else {
        if (settingsPanel) settingsPanel.classList.add('hidden');
        if (temporadasSection) temporadasSection.classList.remove('hidden');
    }
}

function toggleQuickActions() {
    const quickActionsPanel = document.getElementById('quickActionsPanel');
    const settingsPanel = document.getElementById('settingsPanel');
    quickActionsOpen = !quickActionsOpen;
    
    if (quickActionsOpen) {
        if (quickActionsPanel) quickActionsPanel.classList.remove('hidden');
        if (settingsPanel) settingsPanel.classList.add('hidden');
        settingsOpen = false;
    } else {
        if (quickActionsPanel) quickActionsPanel.classList.add('hidden');
        if (settingsPanel) settingsPanel.classList.remove('hidden');
        settingsOpen = true;
    }
}

function backToMain() {
    const settingsPanel = document.getElementById('settingsPanel');
    const quickActionsPanel = document.getElementById('quickActionsPanel');
    const temporadasSection = document.getElementById('temporadasSection');
    settingsOpen = false;
    quickActionsOpen = false;
    
    if (settingsPanel) settingsPanel.classList.add('hidden');
    if (quickActionsPanel) quickActionsPanel.classList.add('hidden');
    if (temporadasSection) temporadasSection.classList.remove('hidden');
}

function goToWelcome() {
    toggleMenu();
    document.getElementById('screen-game').classList.add('hidden');
    document.getElementById('screen-welcome').classList.remove('hidden');
    document.getElementById('policeLights').classList.remove('police-active');
    currentId = "s1_c1_e1";
    history = [];
}

function restartGame() {
    backToMain();
    currentId = "s1_c1_e1";
    history = [];
    render();
}

function goToSeason(season) {
    toggleMenu();
    
    const seasonStart = {
        1: "s1_c1_e1",
        2: "s2_c1_e1",
        3: "s3_c1_e1",
        4: "s4_c1_e1",
        5: "s5_c1_e1"
    };
    
    currentId = seasonStart[season];
    history = [];
    currentSeason = season;
    currentChapter = 1;
    render();
}

function toggleMusic() {
    if (typeof window.playMusic === 'function') {
        window.playMusic();
    } else if (typeof window.stopMusic === 'function') {
        window.stopMusic();
    }
}

function toggleSubtitles() {
    subtitlesEnabled = !subtitlesEnabled;
    const charSpeech = document.getElementById('charSpeech');
    
    if (charSpeech) {
        if (subtitlesEnabled) {
            charSpeech.style.display = 'block';
        } else {
            charSpeech.style.display = 'none';
        }
    }
}

// Cerrar menú al hacer clic fuera
document.addEventListener('click', (e) => {
    const gameMenu = document.getElementById('gameMenu');
    if (!gameMenu) return;
    
    const menuButtons = document.querySelectorAll('button[onclick*="toggleMenu"]');
    let isMenuButton = false;
    
    menuButtons.forEach(btn => {
        if (btn.contains(e.target)) isMenuButton = true;
    });
    
    if (menuOpen && !gameMenu.contains(e.target) && !isMenuButton) {
        if (document.getElementById('screen-game').classList.contains('hidden') === false) {
            toggleMenu();
        }
    }
});

// Cerrar menú con tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
        if (menuOpen) {
            toggleMenu();
        } else if (!document.getElementById('screen-preview').classList.contains('hidden')) {
            closePreview();
        }
    }
    
    // Flecha izquierda para anterior
    if (e.code === 'ArrowLeft') {
        if (!document.getElementById('screen-preview').classList.contains('hidden')) {
            previewPrev();
        } else if (!document.getElementById('screen-game').classList.contains('hidden')) {
            prevScene();
        }
    }
    
    // Espacio para siguiente
    if (e.code === 'Space') {
        e.preventDefault();
        if (!document.getElementById('screen-preview').classList.contains('hidden')) {
            previewNext();
        } else if (!document.getElementById('screen-game').classList.contains('hidden')) {
            nextScene();
        }
    }
});
