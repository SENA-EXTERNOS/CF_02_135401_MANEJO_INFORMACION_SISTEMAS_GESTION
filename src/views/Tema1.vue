<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Los datos
      
    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/2.png', alt='')      
      .col-lg-7
        p(data-aos="fade-down") Un dato se puede representar en un documento, una información de tipo cualitativa o cuantitativa, de forma numérica, alfabética y logarítmica.

        p(data-aos="fade-down") Los datos representan la información que el programador manipula en la elaboración de una solución en el desarrollo de un logaritmo.

    p(data-aos="fade-down").mb-5 Algunos ejemplos de datos se detallan a continuación:
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12.text-center
        .row.justify-content-center.mb-5
          .col-md-4.col-lg-2.col-lg.mb-5.mb-lg-0(data-aos="fade-left")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/3.svg', style="width: 102px")
              .tarjeta.color-acento-contenido1
                .p-4
                  p Datos aportados en una investigación por parte de trabajo de campo.
          .col-md-4.col-lg-2.col-lg.mb-5.mb-lg-0(data-aos="fade-right")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/4.svg', style="width: 102px")
              .tarjeta.color-acento-contenido1
                .p-4
                  p Datos históricos para el desarrollo de una encuesta DANE.
          .col-md-4.col-lg-2.col-lg.mb-5.mb-lg-0(data-aos="fade-left")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/5.svg', style="width: 102px")
              .tarjeta.color-acento-contenido1
                .p-4
                  p Se pueden construir datos de nombres, números telefónicos y direcciones de personas que conocemos.  
          .col-md-4.col-lg-2.col-lg.mb-5.mb-lg-0(data-aos="fade-right")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/6.svg', style="width: 102px")
              .tarjeta.color-acento-contenido1
                .p-4
                  p Datos informáticos como son los bits, registros.
          .col-md-4.col-lg-2.col-lg.mb-5.mb-lg-0(data-aos="fade-left")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/7.svg', style="width: 102px")
              .tarjeta.color-acento-contenido1
                .p-4
                  p Cuando se ingresa al sistema bancario, el pago de salarios de los trabajadores, con decimales.

    .list.mb-5(data-aos="fade-down")
      .list__item
        .list__item__icon
          img(src='@/assets/curso/temas/v.svg', alt='')
      .list__txt
        h3.mb-0 Tipos de datos y su jerarquía

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .cajon.color-acento-botones.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Existen diferentes modelos de datos. Esta clasificación hace referencia al tipo de información que se trabaja y la ventaja que tienen de almacenar varios valores al mismo tiempo, dentro de una variable.        

    p(data-aos="fade-down") Se han creado diferentes tipos de datos con el objetivo de ser utilizados por personas, empresas u organizaciones públicas y privadas, para almacenar información de manera rápida y que sean de fácil acceso. Los diferentes tipos de datos pueden ser clasificados según su utilidad y el área de aplicación. En la siguiente infografía podrá identificarlos:
    p(data-aos="fade-down").mb-5 A continuación, se presentan los principales tipos de datos:

    ImagenInfografica.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.svg', alt='principales tipos de datos')

      .tarjeta.color-acento-botones.p-3(x="32.5%" y="99%" numero="") 
        p.mb-3 Son los que ocupan solamente una casilla de memoria; por lo tanto, una variable sencilla se refiere a un exclusivo costo a la vez. Los datos básicos tienen la posibilidad de separarse.
        h5 Tipos de datos simples
        ul.lista-ul
          li 
            i.fas.fa-angle-right
            p.mb-0 Numéricos: se pueden conocer como enteros y reales; los enteros no tienen decimales.

          li 
            i.fas.fa-angle-right
            p.mb-0 Tipos de datos alfanuméricos: son usados para información compuesta y combinada entre números y letras, entre otros.

          li 
            i.fas.fa-angle-right
            p.mb-0 Tipos de datos lógicos: se representan a través de un computador y de ellos se pueden representar valores lógicos binarios.        


      .tarjeta.color-acento-botones.p-3(x="67.5%" y="99%" numero="")
        p.mb-3 Estos pertenecen a un tipo de datos en particular, que tienen la ventaja de almacenar varios valores al mismo tiempo, dentro de una misma variable.
        h5 Ejemplo de datos estructurados:
        ul.lista-ul
          li 
            i.fas.fa-angle-right
            p.mb-0 Una tabla de Excel

          li 
            i.fas.fa-angle-right
            p.mb-0 Hojas de cálculo

          li 
            i.fas.fa-angle-right
            p.mb-0 Bases de datos de cualquier tipo 

          li 
            i.fas.fa-angle-right
            p.mb-0 Formularios <em>web</em>

          li 
            i.fas.fa-angle-right
            p.mb-0 Fichas estandarizadas de clientes        

    .list.my-5(data-aos="fade-down")
      .list__item
        .list__item__icon
          img(src='@/assets/curso/temas/v.svg', alt='')
      .list__txt
        h3.mb-0 Almacenamiento y manejo de datos

    .color-fondo-text.bg-color.mb-4(data-aos="fade-down")
      .color-fondo-text__texto 
        p Conociendo el concepto de dato y su clasificación, es importante estudiar dos procesos fundamentales: el almacenamiento y el manejo de datos, para recopilar, organizar, distribuir y archivar o conservar la información. Para esto se emplean dispositivos electrónicos habilitados para leer o grabar datos en el soporte de almacenamiento, de forma temporal o permanente. El almacenamiento y el manejo de datos se ha desarrollado bastante desde la era de los sistemas de disco. Todavía hoy se utilizan algunos, pero en la actualidad, todos los datos se conectan a una red y se definen por el <i>software</i> que se maneje. Como se observa en la siguiente pestaña.

    p(data-aos="fade-down").mb-5 A continuación, se describen algunos tipos de almacenamiento de datos que se han usado y que se utilizan hoy en día.

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-4
        img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/9.png', alt='')     
      .col-lg-8
        TabsA.color-acento-botones.mb-5
          .tarjeta.color-acento-botones--borde.p-4(titulo="Memoria RAM")
            p RAM, acrónimo de <em>Random Access Memory</em> o Memoria de Acceso Aleatorio. Es la memoria principal de un dispositivo como una computadora, que contiene programas y datos que se almacenan temporalmente o sea que se considera volátil. 
          .tarjeta.color-acento-botones--borde.p-4(titulo="Memoria ROM")
            p ROM, acrónimo de <em>Read Only Memory</em> o memoria de solo lectura. Es un dispositivo de circuito integrado que permite solo lectura y almacena datos permanentes o sea que no es volátil porque si se apaga el dispositivo, no se elimina la información. 
          .tarjeta.color-acento-botones--borde.p-4(titulo="Casetera de<br> cinta magnética")
            p Es un medio o dispositivo de almacenamiento de información en formato digital, que graba mediante una banda plástica a través de un material magnetizado. Su capacidad de almacenamiento varía según sus características. 
          .tarjeta.color-acento-botones--borde.p-4(titulo="Dispositivo digital<br> de cinta magnética<br> (DDS)")
            p DDS, acrónimo de <em>Digital Data Store</em>, o cinta de almacenamiento de datos digitales. Cinta de almacenamiento de datos digitales que se utiliza para el proceso de información de tipo secuencial y para la elaboración de nómina de grandes empresas. 
          .tarjeta.color-acento-botones--borde.p-4(titulo="Unidad de disco<br> duro portátil")
            p Un dispositivo portátil que permite archivar datos rápida y fácilmente, que se utiliza de forma interna o externa en el dispositivo, con capacidad de almacenamiento eficiente y permite una programación automática para respaldo de archivos. 
          .tarjeta.color-acento-botones--borde.p-4(titulo="CD-ROM")
            p CD-ROM, acrónimo de <em>Compact Disc Read-Only Memory</em> o Disco Compacto con Memoria de Solo Lectura.
            p Tipo de disco compacto, es un elemento óptico que se graba de manera digital y se emplea para el almacenamiento de datos y que sirve para leer CD o discos compactos donde vienen programas, y escuchar música en un dispositivo. 
          .tarjeta.color-acento-botones--borde.p-4(titulo="CD-R/RW")
            p CD-R/RW, acrónimo de <em>Compact Disc - ReWritable</em>. Es un dispositivo CD en el que se puede borrar y volver a grabar en varias oportunidades. 
          .tarjeta.color-acento-botones--borde.p-4(titulo="Blue Ray")
            p BD, acrónimo de <em>Blue Ray Disc</em> Es un dispositivo de disco, óptico, empleado para video de alta definición, con gran capacidad de almacenamiento de datos.  
          .tarjeta.color-acento-botones--borde.p-4(titulo="Unidad de<br> DVD-ROM")
            p Es un disco con capacidad de almacenamiento alta y puede ser utilizado para leer o reproducir datos o información como audio, imágenes, video o texto. Su capacidad de almacenamiento es aproximadamente de 4,7 GB, y sirve para la distribución de <i>software</i>.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Unidad Zip")
            p Dispositivo de almacenamiento de tipo magnético, extraíble o removible, de mediana capacidad con sistema de almacenamiento portátil que se utiliza para transportar archivos de una computadora a otra. Tecnología de almacenamiento de datos, basada en una memoria de alta velocidad que se programa eléctricamente.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Memoria Flash")
            p Dispositivo de almacenamiento con una memoria de alta velocidad programada eléctricamente; un chip de memoria que brinda la posibilidad de escribir y leer datos en distintas ubicaciones al mismo tiempo. 
          .tarjeta.color-acento-botones--borde.p-4(titulo="Tarjeta de memoria")
            p Memoria no volátil, o sea que conserva los datos, inclusive si hay pérdida de energía eléctrica. Se utiliza para almacenamiento de datos de diferentes clases de computadoras como consolas de video juegos, teléfonos celulares y cámaras de fotos entre otros dispositivos. 
          .tarjeta.color-acento-botones--borde.p-4(titulo="Almacenamiento<br> en la nube")
            p Es un modelo de servicio externo para almacenar datos, a través de un sistema de cómputo, administrado de forma remota, con servidores <em>web</em> que se encuentran en la nube y son operados por un tercero.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Teniendo en cuenta que la gestión de datos permite organizar, almacenar, utilizar y mantener los datos recopilados por una organización o persona natural, analicemos varios ejemplos de almacenamiento de datos:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .row.justify-content-center.align-items-end
          .col-md-8.col-lg-6.col-xxl.m-1(data-aos="fade-right")
            .row.align-items-center
              .col-3.col-lg-auto
                figure.p-2
                  img(src='@/assets/curso/temas/10.svg', alt='')
              .col.align-items-center
                p.mb-0 #[b Archivos personales:]  son los documentos generados y recibidos por una persona a lo largo de su actividad económica laboral y que  utiliza en su vida diaria como soporte de evidencias.
            hr
          .col-md-8.col-lg-6.col-xxl.m-1(data-aos="fade-left")
            .row.align-items-center
              .col-3.col-lg-auto
                figure.p-2
                  img(src='@/assets/curso/temas/11.svg', alt='')
              .col.align-items-center
                p.mb-0 #[b Páginas blancas:] son utilizadas en muchos países, y se refiere a una guía que incluye, por orden alfabético, a todos los abonados, como empresas y a particulares con varias líneas telefónicas.
            hr
        .row.justify-content-center.align-items-end
          .col-md-8.col-lg-6.col-xxl.m-1(data-aos="fade-right")
            .row.align-items-center
              .col-3.col-lg-auto
                figure.p-2
                  img(src='@/assets/curso/temas/12.svg', alt='')
              .col.align-items-center
                p.mb-0 #[b Guías telefónicas:] son instrumentos de gran importancia de tipo personal, empresarial y de atención al ciudadano, al servicio de la comunidad y, como se sabe, existen varios tipos de guías telefónicas.
            hr
          .col-md-8.col-lg-6.col-xxl.m-1(data-aos="fade-left")
            .row.align-items-center
              .col-3.col-lg-auto
                figure.p-2
                  img(src='@/assets/curso/temas/13.svg', alt='')
              .col.align-items-center
                p.mb-0 #[b Rolodex:] es un dispositivo de archivo giratorio que se utiliza para almacenar información de contactos comerciales.
            hr
        .row.justify-content-center.align-items-end
          .col-md-8.col-lg-6.col-xxl.m-1(data-aos="fade-right")
            .row.align-items-center
              .col-3.col-lg-auto
                figure.p-2
                  img(src='@/assets/curso/temas/14.svg', alt='')
              .col.align-items-center
                p.mb-0 #[b Lista de contacto:] contiene nombres completos, mensajería instantánea, correo electrónico del programa y la utilización de mensajes de texto para clientes de todo tipo.
            hr
          .col-md-8.col-lg-6.col-xxl.m-1(data-aos="fade-left")
            .row.align-items-center
              .col-3.col-lg-auto
                figure.p-2
                  img(src='@/assets/curso/temas/15.svg', alt='')
              .col.align-items-center
                p.mb-0 #[b Bibliotecas:] son las que prestan un servicio de tipo público en general, y que también sirven a universidades.
            hr
        .row.justify-content-center.align-items-end
          .col-md-8.col-lg-6.col-xxl.m-1(data-aos="fade-right")
            .row.align-items-center
              .col-3.col-lg-auto
                figure.p-2
                  img(src='@/assets/curso/temas/16.svg', alt='')
              .col.align-items-center
                p.mb-0 #[b Páginas amarillas:] son guías para empresas organizadas, teniendo en cuenta el tipo de producto o de servicio.
            hr
          .col-md-8.col-lg-6.col-xxl.m-1(data-aos="fade-left")
            .row.align-items-center
              .col-3.col-lg-auto
                figure.p-2
                  img(src='@/assets/curso/temas/17.svg', alt='')
              .col.align-items-center
                p.mb-0 #[b Registros de transacciones:] son bases de datos utilizadas por empresas de tipo contable, a través de <i>software</i> de contabilidad empresarial para realizar transacciones a sus clientes.
            hr


    .list.my-5(data-aos="fade-down")
      .list__item
        .list__item__icon
          img(src='@/assets/curso/temas/v.svg', alt='')
      .list__txt
        h3.mb-0 Uso de datos y relación 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .cajon.color-acento-botones.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down") En este tema, se introduce un término que cada día es más frecuente: #[i ‘Big data’].

          p(data-aos="fade-down").mb-0 El término #[i ‘Big Data’] proviene originalmente del ámbito de las ciencias de la computación y ha sido típicamente empleado para referirse a <em>sets</em> de datos, cuyo tamaño excede al que pueden manejar el <i>software</i> y <em>hardware</em> estándares; describe un gran volumen de datos disponibles para capturar, almacenar y analizar lo que ayuda a mejorar el desempeño y el posicionamiento de la empresa.

    p(data-aos="fade-down").mb-5 Al respecto, también es pertinente mencionar que, en un principio, muchos autores tomaron las llamadas “Tres Vs” como características que definen qué es <em>‘Big Data</em>’. Para identificarlas, se presenta la siguiente infografía:

    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/18.svg', alt='')    
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
