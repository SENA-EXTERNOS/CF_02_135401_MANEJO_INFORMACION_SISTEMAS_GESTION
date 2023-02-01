<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Apreciado aprendiz, bienvenido a este componente formativo, donde podrá aprender sobre elementos claves de los reportes de datos, según sistemas de gestión. Cuando se trabaja con bases de datos, el procesamiento de la información es una etapa fundamental. Este componente formativo contiene temas como datos, tipos de datos, jerarquías, almacenamiento, manejo de datos, uso de datos y relaciones; también se tratarán temas como #[em software] de código abierto, características, herramientas, comandos, instalaciones, operación, visualización y métricas, seguimiento, paquetes, manejos, modelamiento y algunos de los principales componentes del sistema de información.

    p(data-aos="fade-down") Con el aprendizaje de estas temáticas, usted va a adquirir la capacidad de aportar su conocimiento y eficacia en diferentes sectores productivos y empresariales, para la transformación de estrategias de recolección de la información.          

    p(data-aos="fade-down").mb-5 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)            
                      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
