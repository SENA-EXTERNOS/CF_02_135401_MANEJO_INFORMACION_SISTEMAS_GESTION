<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 El #[em software] de código abierto y sus características 
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/19.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El código abierto es un modelo de producción descentralizado que permite a cualquier persona cambiar y compartir tecnología, gracias a su diseño público. El término se originó en el contexto del desarrollo de software, para indicar que el #[em software] cumple con ciertos criterios para su distribución gratuita. En la actualidad, el término "ruta de código abierto” se refiere a un conjunto más amplio de valores basados en los principios del libre intercambio de información, la creación rápida de prototipos y el desarrollo colaborativo. 

    p(data-aos="fade-down").mb-5 Al hablar sobre las principales características del <i>software</i> de código abierto, se pueden destacar las siguientes:

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/20.png', alt='')     
      .col-lg-8.my-3
        SlyderF.mb-5.text-center(columnas="col-lg-6 col-xl-4")
          .tarjeta-avatar
            img(src='@/assets/curso/temas/21.svg', style="width: 102px")
            .tarjeta.color-acento-contenido1
              .p-4
                p Acceso al código fuente
          .tarjeta-avatar
            img(src='@/assets/curso/temas/22.svg', style="width: 102px")
            .tarjeta.color-acento-contenido1
              .p-4
                p El acceso es gratuito
          .tarjeta-avatar
            img(src='@/assets/curso/temas/23.svg', style="width: 102px")
            .tarjeta.color-acento-contenido1
              .p-4
                p Posibilidad de evitar monopolios de <i>software</i> propietario
          .tarjeta-avatar
            img(src='@/assets/curso/temas/24.svg', style="width: 102px")
            .tarjeta.color-acento-contenido1
              .p-4
                p Modelo de avance

    .list.mb-5(data-aos="fade-down")
      .list__item
        .list__item__icon
          img(src='@/assets/curso/temas/v.svg', alt='')
      .list__txt
        h3.mb-0 Herramientas de #[em software] código abierto 

      
    p(data-aos="fade-down") Evidentemente, es necesario revisar las herramientas de código abierto. Estas corresponden a todos aquellos #[em software] desarrollados y distribuidos bajo una licencia que permite a cualquier persona ver el código y acceder libremente, sin restricciones. 
      br
      br
      |Detrás de este concepto hay dos movimientos que son: #[b el intercambio de ideas] y #[b la colaboración entre los expertos] en la evolución de la informática y la tecnología.

      
    p(data-aos="fade-down").mb-5 Detrás de este concepto, hay dos movimientos que son: el intercambio de ideas y la colaboración entre los expertos en la evolución de la informática y la tecnología.
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              h4.mb-0 Las herramientas de código abierto representan una ventaja con respecto a otras opciones, ya sean gratuitas o de pago.
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Algunas herramientas básicas de código abierto:
                .row.justify-content-center.align-items-center        
                  .col-lg-6
                    ul.lista-ul
                      li 
                        i.fas.fa-angle-right.v
                        p.mb-0 <em>LibreOffice</em>
                      li 
                        i.fas.fa-angle-right.v
                        p.mb-0 <em>Gimp</em>
                      li 
                        i.fas.fa-angle-right.v
                        p.mb-0 <em>Mozilla Firefox </em>
                      li 
                        i.fas.fa-angle-right.v
                        p.mb-0 <em>WordPress</em>
                      li 
                        i.fas.fa-angle-right.v
                        p.mb-0 <em>Wunderlist</em>
                  
                  .col-lg-6
                    ul.lista-ul
                      li 
                        i.fas.fa-angle-right.v
                        p.mb-0 <em>Shotcut</em>
                      li 
                        i.fas.fa-angle-right.v
                        p.mb-0 <em>CCleaner</em>
                      li 
                        i.fas.fa-angle-right.v
                        p.mb-0 <em>Thunderbird</em>
                      li 
                        i.fas.fa-angle-right.v
                        p.mb-0 <em>Audacity</em>
                      li 
                        i.fas.fa-angle-right.v
                        p.mb-0 <em>PDFCreator  </em>

    p(data-aos="fade-down") Cuando se habla de código abierto se debe hacer mención a la línea de comandos, que es una herramienta que permite dar instrucciones al computador, a través de comandos en forma de texto.

    p(data-aos="fade-down").mb-5 Una línea de comando se conoce como interfaz gráfica y se utiliza para acceder a servidores, para descargar e instalar aplicaciones y herramientas, y para ejecutar archivos, entre otros.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              h4.mb-0 Se conocen varios tipos de comandos, entre los cuales se encuentran los siguientes:
            .col-lg-8
              .bloque-texto-a__texto.p-4
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right.v
                    p.mb-0 Bash  
                  li 
                    i.fas.fa-angle-right.v
                    p.mb-0 Zsh (Z-Shell)
                  li 
                    i.fas.fa-angle-right.v
                    p.mb-0 PowerShell utilizado con Windows 7 en adelante

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-6
        .cajon.color-secundario.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down") A continuación, algunos interpretadores de comando:
          .row.justify-content-center.align-items-center        
            .col-lg-4
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  p.mb-0 /bin/sh
                li 
                  i.fas.fa-angle-right
                  p.mb-0 /bin/bash 
            .col-lg-4
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  p.mb-0 /bin/tcsh
                li 
                  i.fas.fa-angle-right
                  p.mb-0 /bin/c|sh
            .col-lg-4
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  p.mb-0 /bin/ksh
                li 
                  i.fas.fa-angle-right
                  p.mb-0 /bin/zsh

    .row.justify-content-center.align-items-center        
      .col-lg-10
        .tarjeta.color-acento-contenido.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/25.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 ¿Qué es la línea de comandos?
                  p.mb-0 Para profundizar un poco más sobre este tema, lo invitamos a ver el video “¿Qué es la línea de comandos?”
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=pqbzLgYYjdc" target="_blank")
                    span Descargar
                    i.fas.fa-download                
</template>

<script>
export default {
  name: 'Tema2',
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
