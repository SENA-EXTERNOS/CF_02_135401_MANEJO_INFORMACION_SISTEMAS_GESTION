export default {
  global: {
    componenteFormativo: 'El reporte de datos según Sistemas de Gestión',
    descripcionCurso:
      'Los reportes son estructuras que se fundamentan en la obtención de información almacenada en la base de datos de una empresa. Su objetivo es el de ayudar a personas y organizaciones sobre la utilización de los datos dentro de los límites de políticas y normas, para tomar decisiones y medidas que maximicen el beneficio para la empresa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Los datos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'El <i>software</i> de código abierto y sus características',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Los principales componentes del sistema de información',
        desarrolloContenidos: true,
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
      tema: '<i>software</i> de código abierto',
      referencia:
        'Solano, L., et al. (s.f.). <i>Las tecnologías de información como base de la competitividad en las organizaciones.</i> Departamento de Publicaciones Universidad Externado de Colombia. ',
      tipo: 'Libro',
      link:
        'https://www-digitaliapublishing-com.bdigital.sena.edu.co/visor/82877',
    },
    {
      tema: 'Herramientas de código abierto y línea de comando',
      referencia: 'Datadamia. (2021). <i>¿Qué es la línea de comandos?</i> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=pqbzLgYYjdc',
    },
    {
      tema: 'Sistema de información',
      referencia:
        'imesi net. (2016). MME y SOM - 1.1. <i>Componentes de un sistema informático</i> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=eAnize4bCmA',
    },
    {
      tema: 'Importancia de los sistemas de información.',
      referencia:
        'Ospino Sumoza, G. R.; y Hamidian Fernández, B. F. (2015). <i>¿Por qué los sistemas de información son esenciales?</i> ',
      tipo: 'Ensayo',
      link: 'http://servicio.bc.uc.edu.ve/derecho/revista/idc38/art07.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Almacenamiento',
      significado:
        'es un conjunto de componentes electrónicos habilitados para leer o grabar datos en el soporte de almacenamiento de datos de forma temporal o permanente.',
    },
    {
      termino: 'Bases de datos',
      significado:
        'depósito de almacenamiento de información estructurada y relacionada.',
    },
    {
      termino: 'Código abierto',
      significado:
        'es un modelo de trabajo colaborativo en el desarrollo de <i>software</i>, que surgió con el fin de mejorar la propuesta del creador.',
    },
    {
      termino: '<em>Hardware</em>',
      significado: 'componentes físicos de una computadora.',
    },
    {
      termino: 'Línea de comando',
      significado:
        'es una interfaz que permite dar órdenes al sistema operativo por medio de texto simple.',
    },
    {
      termino: 'Manejo de datos',
      significado:
        'es el tratamiento que le da la organización a la información recopilada.',
    },
    {
      termino: 'Programador',
      significado:
        'también conocidos como desarrolladores de <i>software</i>, implementa prototipos virtuales para crear programas informáticos para diferentes fines, entre los que se encuentra el comercial. En el caso de los sistemas de gestión, crean programas que permitan hacer seguimiento al funcionamiento interno de la organización.',
    },
    {
      termino: 'Sistemas de gestión',
      significado:
        'es una herramienta que permite controlar, planificar, organizar y automatizar las tareas de una empresa.',
    },
    {
      termino: '<em>Software</em>',
      significado:
        'componentes lógicos de una computadora o dispositivo (programas).',
    },
    {
      termino: 'Transformación digital',
      significado:
        'es el cambio que realiza una organización al digitalizar su información para ser más funcional y moderna.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bellido Quintero, E. (2016). <i>Equipos de interconexión y servicios de red</i>. IC Editorial. Digitalia.',
      link: 'https://www-digitaliapublishing-com.bdigital.sena.edu.co/a/86836',
    },
    {
      referencia:
        'Carbonell Soto, L., y Villagrá Arnedo, C. (2004). <i>Introducción a las bases de datos Access 2003</i>. Publicaciones de la Universidad de Alicante. ',
      link:
        'https://www-digitaliapublishing-com.bdigital.sena.edu.co/visor/705',
    },
    {
      referencia: 'Marqués, M. (2011).<i> Bases de datos</i>. ',
      link:
        'https://bdigital.uvhm.edu.mx/wp-content/uploads/2020/05/Bases-de-Datos.pdf',
    },
    {
      referencia:
        'Niño, Y. (s.f.). <i>Prototipo de un Sistema para Medir la Contribución de los Desarrolladores en Proyectos Orientados a Objetos de Código Abierto</i> (Tesis de maestría, Universidad Nacional de Colombia). Repositorio UNAL. ',
      link:
        'https://repositorio.unal.edu.co/bitstream/handle/unal/7415/299787.2011.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Toral, M. Sergio. (2010). <i>Gestión del conocimiento mediante comunidades de práctica virtuales: aplicación a proyectos de <i>software</i> de código abierto</i> (Tesis doctoral, Universidad de Sevilla). ',
      link:
        'https://idus.us.es/bitstream/handle/11441/23800/M_TD-PROV4.pdf?sequence=1',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
