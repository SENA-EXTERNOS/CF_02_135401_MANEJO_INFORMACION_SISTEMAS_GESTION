<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Los principales componentes del sistema de información
    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/26.png', alt='')     
      .col-lg-7.my-3
        p(data-aos="fade-down") En la actualidad, los sistemas de información son un recurso indispensable para cualquier organización porque a través de este pueden aportar elementos para tomar decisiones que posibiliten alcanzar los objetivos estratégicos.  

    p(data-aos="fade-down").mb-5 Observe el siguiente video para conocer sobre los sistemas de información y de seguimiento:
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p(data-aos="fade-down").mb-5 Por otro lado, es importante conocer que el código abierto, también conocido como <em>Open Source</em>, es un programa que se distribuye libremente y puede ser usado y modificado por los usuarios sin ninguna restricción. A continuación, presentamos el desarrollo que ha tenido el <i>software</i> de código abierto a través del tiempo.

    LineaTiempoE.color-acento-contenido.mb-5
      .row(titulo="1953" subtitulo="")(data-aos="fade-left")
        .col-lg-2.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/27.png', alt='')  
        .col-lg-10.mb-4.mb-md-4.my-3
          p Richard Stallman es el fundador del movimiento por <i>software</i> libre, en el mundo. 
      .row(titulo="1957" subtitulo="")(data-aos="fade-left")
        .col-lg-2.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/28.png', alt='')  
        .col-lg-10.mb-4.mb-lg-0.my-3
          p Comienzo de todo. La definición de fuente abierta es primero que los computadores y el mismo <i>software</i> surge de la filosofía de la cooperación y sinceridad.
      .row(titulo="1959" subtitulo="")(data-aos="fade-left")
        .col-lg-2.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.png', alt='')  
        .col-lg-10.mb-4.mb-lg-0.my-3
          p Primeros sistemas operativos con código fuente para modificarlo; el <i>software</i> es producido en masa por académicos e investigadores corporativos, y el sistema operativo era distribuido y mantenido por las comunidades de usuarios. 
      .row(titulo="1969" subtitulo="")(data-aos="fade-left")
        .col-lg-2.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/30.png', alt='')  
        .col-lg-10.mb-4.mb-lg-0.my-3
          p Se revela el nacimiento de Linux Torvalds, un sistema operativo completamente libre y gratuito.
      .row(titulo="1980" subtitulo="")(data-aos="fade-left")
        .col-lg-2.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/31.png', alt='')  
        .col-lg-10.mb-4.mb-lg-0.my-3
          p Sistemas operativos primitivos. Se inicia la creación del <i>software</i> privativo, que es cerrado, no hay acceso al código fuente, solo su creador. Imposible su manipulación por parte del usuario.
      .row(titulo="1984" subtitulo="")(data-aos="fade-left")
        .col-lg-2.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/32.png', alt='')  
        .col-lg-10.mb-4.mb-lg-0.my-3
          p Stallman ve la necesidad de modificar el código fuente. Se modifica el código fuente de algunos <i>software</i>, para que sean adaptados de acuerdo con la necesidad de los usuarios.
      .row(titulo="1983" subtitulo="")(data-aos="fade-left")
        .col-lg-2.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/33.png', alt='')  
        .col-lg-10.mb-4.mb-lg-0.my-3
          p Creación del proyecto GNU. Richard Stallman creó el sistema operativo completamente libre.
      .row(titulo="1985" subtitulo="")(data-aos="fade-left")
        .col-lg-2.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/34.png', alt='')  
        .col-lg-10.mb-4.mb-lg-0.my-3
          p Creación de la fundación de <i>software</i> libre (FSF). Se crea la fundación de <i>software</i> libre y <em>copyleft </em>por Richard Stallman.

    .row.justify-content-center.align-items-center  
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal donde encontrará la síntesis, material complementario, entre otros. Adicional, lo invitamos a resolver la actividad didáctica para reforzar los conceptos estudiados.           
</template>

<script>
export default {
  name: 'Tema3',
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
