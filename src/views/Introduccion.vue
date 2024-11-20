<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-4
      .col-lg-9.my-lg-0.my-3
        .brad.p-3.mb-4
          p En la era digital, los datos se han convertido en el nuevo oro. Cada día, se generan y se consumen cantidades asombrosas de información, desde las interacciones en redes sociales hasta las transacciones financieras y los registros médicos. Este diluvio de datos ha dado lugar al fenómeno conocido como Big Data, un campo que promete revolucionar la forma en que se entienden y se toman decisiones en prácticamente todos los aspectos de la vida.

          p Pero ¿qué es exactamente el Big Data y por qué es tan importante? Este componente formativo le acercará al fascinante mundo del Big Data, explorando cómo las organizaciones y los individuos pueden aprovechar esta avalancha de información para obtener insights valiosos, mejorar la eficiencia y resolver problemas complejos. Desde predicciones meteorológicas más precisas hasta tratamientos médicos personalizados, el Big Data está transformando industrias enteras y abriendo nuevas posibilidades.

          .row.justify-content-center.align-items-center.bg1.p-4.brad
            .col-lg-auto
              img.img-a.img-t(src='@/assets/curso/temas/1.png' alt='')
            .col.pt-lg-0.pt-md-4
              p.mb-0 A lo largo de estas páginas, será guiado a través de los conceptos fundamentales, las técnicas y las herramientas esenciales del Big Data. Utilizando ejemplos y códigos, se descubrirá cómo los datos masivos están dando forma al futuro y cómo se puede ser parte de esta revolución tecnológica.
      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/2.png' alt='')

    h5.mb-5 ¡Se invita a apreciar el siguiente video de apertura al presente componente!
    .row.justify-content-center.align-items-center        
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/X85RU6SvWgo?si=tPixrnhRZgzDbco2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
