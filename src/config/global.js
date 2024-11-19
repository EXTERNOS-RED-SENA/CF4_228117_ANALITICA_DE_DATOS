export default {
  global: {
    componenteFormativo: '<i>Big Data</i>: conceptos, técnicas y herramientas',
    descripcionCurso:
      'Este componente ofrece una introducción al mundo del <i>Big Data</i>, abarcando desde los fundamentos de programación hasta técnicas de análisis. Explora lenguajes como R y Python, analítica de datos, bases de datos relacionales y NoSQL, y herramientas informáticas esenciales. Dirigido a principiantes y técnicos, proporciona una fuente inicial en conceptos, métodos y aplicaciones prácticas del <i>Big Data</i>.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Introducción al <i>Big Data</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición y características del <i>Big Data</i>',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia en el mundo actual',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Procesos asociados al <i>Big Data</i>',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fundamentos de programación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto de algoritmo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Variables y tipos de datos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Operadores',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Estructuras de control de flujo',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Arreglos',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Ficheros',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Funciones',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Lenguajes de Programación para analítica de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Introducción a R y Python',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Antecedentes y evolución',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Entornos de desarrollo integrado (IDE)',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Sintaxis y estructura general',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Estándares de código',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Aplicaciones en analítica de datos',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Generación de reportes',
            hash: 't_3_7',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Analítica de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Introducción y conceptos básicos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Técnicas de análisis de datos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Procesos en la analítica de datos',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Bases de Datos y SQL',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Tipos de bases de datos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Sentencias SQL fundamentales',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Procesos ETL (Extracción, Transformación y Carga)',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Optimización de bases de datos',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Herramientas informáticas para analítica de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Instalación y configuración',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Clasificación y conversión de datos',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Transformación y ordenamiento',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Importación y exportación de datos',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Uso de expresiones regulares',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo: 'Manejo de funciones avanzadas',
            hash: 't_6_6',
          },
          {
            numero: '6.7',
            titulo: 'Limpieza basada en similitudes',
            hash: 't_6_7',
          },
          {
            numero: '6.8',
            titulo:
              'Licencias: <i>software</i> comercial vs. <i>software</i> libre',
            hash: 't_6_8',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Conclusiones y perspectivas futuras',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Reflexiones finales y perspectivas futuras',
            hash: 't_7_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Introducción al <i>BIG DATA</i>',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023c, noviembre 21). La historia de la <i>Big Data</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Qe2JH-TpfiQ',
    },
    {
      tema: '3. Lenguajes de Programación para analítica de datos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022, abril 25). Procesamiento y análisis de datos: introducción.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=1IEb56Z0l0o',
    },
    {
      tema: '3. Lenguajes de Programación para analítica de datos',
      referencia: 'Paradinas, I. (2021, March 9). Curso R base.',
      tipo: 'Portal web',
      link: 'https://bookdown.org/paradinas_iosu/Prueba/',
    },
    {
      tema: '4. Analítica de datos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023a, marzo 24). Fundamentos de la analítica de datos – Introducción.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=wBvDHCTbW8A',
    },
    {
      tema: '4. Analítica de datos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023b, septiembre 5). Limpieza y transformación de datos con Python.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=jL4cm_0X68Y',
    },
  ],
  glosario: [
    {
      termino: 'Algoritmo',
      significado:
        'Secuencia de pasos lógicos y bien definidos para resolver un problema o realizar una tarea.',
    },
    {
      termino: 'Analítica de Datos',
      significado:
        'Proceso de examinar, limpiar, transformar y modelar datos para descubrir información útil y apoyar la toma de decisiones.',
    },
    {
      termino: 'API (<i>Application Programming Interface</i>)',
      significado:
        'Conjunto de reglas y protocolos que permiten que diferentes aplicaciones se comuniquen entre sí.',
    },
    {
      termino: '<i>Big Data</i>',
      significado:
        'Conjuntos de datos extremadamente grandes y complejos que superan la capacidad de las herramientas de procesamiento tradicionales.',
    },
    {
      termino: 'Datos estructurados',
      significado:
        'Datos que siguen un formato predefinido y se organizan fácilmente en bases de datos relacionales.',
    },
    {
      termino: 'Datos no estructurados',
      significado:
        'Datos que no siguen un formato predefinido, como texto libre, imágenes o videos.',
    },
    {
      termino: 'ETL (<i>Extract, Transform, Load</i>)',
      significado:
        'Proceso de extracción, transformación y carga de datos desde múltiples fuentes a un almacén de datos.',
    },
    {
      termino: 'Hadoop',
      significado:
        'Framework de software de código abierto para almacenar y procesar grandes conjuntos de datos en <i>clusters</i> de computadoras.',
    },
    {
      termino: 'Insights',
      significado:
        'Descubrimientos o comprensiones significativas extraídas del análisis de grandes volúmenes de datos. Estos hallazgos revelan patrones, tendencias o relaciones ocultas que permiten a las organizaciones tomar decisiones informadas y estratégicas para mejorar sus operaciones, productos o servicios.',
    },
    {
      termino: '<i>Machine learning</i>',
      significado:
        'Rama de la inteligencia artificial que se centra en el desarrollo de algoritmos que pueden «aprender» de los datos y hacer predicciones.',
    },
    {
      termino: 'NoSQL',
      significado:
        'Sistemas de gestión de bases de datos que proporcionan un mecanismo para almacenar y recuperar datos modelados de formas diferentes a las tablas relacionales.',
    },
    {
      termino: 'Python',
      significado:
        'Lenguaje de programación de alto nivel, interpretado y de propósito general, ampliamente utilizado en análisis de datos y <i>machine learning</i>.',
    },
    {
      termino: 'R',
      significado:
        'Lenguaje de programación y entorno de software libre para computación estadística y gráficos.',
    },
    {
      termino: 'SQL (<i>Structured Query Language</i>)',
      significado:
        'Lenguaje estándar para gestionar y consultar bases de datos relacionales.',
    },
    {
      termino: 'Visualización de datos',
      significado:
        'Representación gráfica de información y datos para facilitar la comprensión y el análisis.',
    },
  ],
  referencias: [
    {
      referencia:
        'De Vries, A. & Meys, J. (2012). R For Dummies. John Wiley & Sons.',
    },
    {
      referencia:
        'Günther, W. A., Rezazade Mehrizi, M. H., Huysman, M. & Feldberg, F. (2017). Debating <i>Big Data</i>: A literature review on realizing value from <i>Big Data</i>. Journal of Strategic Information Systems, 26(3), 191–209. ',
      link: 'https://doi.org/10.1016/j.jsis.2017.07.003',
    },
    {
      referencia:
        'Hurwitz, J. S., Nugent, A., Halper, F. & Kaufman, M. (2013). <i>Big Data</i> For Dummies. John Wiley & Sons.',
    },
    {
      referencia:
        'Institute, O. P. (2023). Python Essentials 1: Beginner Course. Open Education and Development Group LLC.',
    },
    {
      referencia:
        'Jones, H. (2018). Analítica de Datos: Una guía esencial para principiantes en minería de datos, recolección de datos, análisis de <i>Big Data</i> para negocios y conceptos de inteligencia empresarial. Independently Published.',
    },
    {
      referencia:
        'McKinsey, W. (2023). Python para análisis de datos. Anaya Multimedia.',
    },
    {
      referencia:
        'Morales, H. a. H. (2018). Mayer-Schönberger, V. y Cukier, K. (2013). <i>Big Data</i>. La revolución de los datos masivos. Clivajes Revista De Ciencias Sociales, 9, 189. ',
      link: 'https://doi.org/10.25009/clivajes-rcs.v0i9.2536',
    },
    {
      referencia:
        'Oussous, A., Benjelloun, F. Z., Ait Lahcen, A. & Belfkih, S. (2018, October 1). <i>Big Data</i> technologies: A survey. Journal of King Saud University - Computer and Information Sciences. King Saud bin Abdulaziz University. ',
      link: 'https://doi.org/10.1016/j.jksuci.2017.06.001',
    },
    {
      referencia:
        'Shovic, J. C., & Simpson, A. (2019). Python All-in-One For Dummies. John Wiley & Sons.',
    },
    {
      referencia:
        'Wickham, H. & Grolemund, G. (2016). R for Data Science: Import, Tidy, Transform, Visualize, and Model Data. “O’Reilly Media, Inc”.',
    },
  ],
}
