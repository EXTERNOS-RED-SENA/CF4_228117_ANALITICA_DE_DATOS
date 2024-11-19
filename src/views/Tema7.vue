<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Conclusiones y perspectivas futuras 

    .row.bg3.align-items-center
      .px-lg-5.px-4

        p A lo largo de este componente se ha explorado el vasto y dinámico mundo del #[i Big Data], desde sus conceptos fundamentales hasta las herramientas y técnicas más avanzadas utilizadas en la analítica de datos. Al llegar al final de nuestro viaje, es importante recapitular los puntos clave y reflexionar sobre el futuro de este campo en constante evolución.

        p.mb-5 La exploración inició con los fundamentos de la programación, sentando las bases para comprender cómo se manipulan y procesan los datos a gran escala. Se abordaron elementos como algoritmos, variables, estructuras de control y otros conceptos esenciales que forman el núcleo de cualquier sistema de procesamiento de datos.


      .row.justify-content-center.mb-4
        .col-lg-4.my-lg-0.my-3
          img.img-a.img-t(src='@/assets/curso/temas/91.png' alt='')       
        .col-lg-8.my-lg-0.my-3
          .bg4.brad.p-3.mb-4
            p Luego, se presentaron lenguajes de programación específicamente diseñados para la analítica de datos, con un enfoque particular en R y Python. Estos lenguajes, con sus robustas bibliotecas y comunidades activas, han revolucionado la forma en que abordamos los desafíos del #[i Big Data].

            p.mb-0 Posteriormente, se trató la analítica de datos con mayor detalle, desde las técnicas básicas hasta los métodos avanzados de machine learning. Se aprendió cómo transformar datos brutos en insights accionables, un proceso que es tanto un arte como una ciencia.

          .row.justify-content-center.align-items-center.mb-4
            .col-lg-auto
              img.img-a.img-t(src='@/assets/curso/temas/31.png' alt='')
            .col.pt-lg-0.pt-md-4
              p.mb-0 El recorrido continuó con una inmersión en el mundo de las bases de datos, explorando tanto los sistemas relacionales tradicionales como las nuevas soluciones NoSQL diseñadas para manejar la escala y la variedad del #[i Big Data].
          p Finalmente, se consideraron herramientas informáticas utilizadas para su análisis, proporcionando una visión completa del ecosistema del #[i Big Data].

    Separador 
    #t_7_1.titulo-segundo.color-acento-contenido
      h2 7.1 Reflexiones finales y perspectivas futuras

    p El campo del #[i Big Data] está en constante evolución, impulsado por avances tecnológicos y nuevas necesidades empresariales. A medida que se avanza, es posible anticipar varias tendencias y desafíos:

    .row.justify-content-center.mb-4
      .col-lg-4.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/92.png' alt='')    
      .col-lg-5.my-lg-0.my-3        
        .bg4.brad.p-3.h-100.j1
          ul.mb-0.lista-ul.fa-ul
            li
              i.fas.fa-check.v1
              span Inteligencia artificial y aprendizaje automático: estas tecnologías seguirán integrándose más profundamente en los procesos de análisis de datos, permitiendo insights más profundos y predicciones más precisas.

            li
              i.fas.fa-check.v1
              span Privacidad y ética de los datos: con el aumento del escrutinio público y la regulación gubernamental, la gestión ética de los datos y la protección de la privacidad se volverán aún más sensibles.

            li
              i.fas.fa-check.v1
              span Edge computing: el procesamiento de datos en el borde de la red, más cerca de donde se generan los datos, ganará importancia, especialmente con el crecimiento del Internet de las Cosas (IoT).
        
      .col-lg-3.my-lg-0.my-3
        .bg13.brad.p-3.h-100.j1
          ul.mb-0.lista-ul.fa-ul
            li
              i.fas.fa-check.v1
              span Automatización del análisis de datos: herramientas que automatizan aspectos del proceso de análisis de datos se volverán más sofisticadas, permitiendo a los analistas centrarse en tareas de mayor valor.

            li
              i.fas.fa-check.v1
              span Datos en tiempo real: la capacidad de analizar y actuar sobre los datos en tiempo real se volverá cada vez más importante en muchos sectores.

    .row.justify-content-center
      .col-lg-10    
        p.my-5 El #[i Big Data] ha transformado la forma en que las organizaciones toman decisiones y operan. A medida que avanzamos, la capacidad de manejar, analizar y extraer valor de grandes volúmenes de datos se volverá aún más crítica. Los profesionales que puedan combinar habilidades técnicas con pensamiento estratégico y comprensión del negocio estarán bien posicionados para liderar en esta nueva era.
        .row.justify-content-center.align-items-center.bg4.br-d.p-4.brad
          .col-lg-auto
            img.img-a.img-t(src='@/assets/curso/temas/93.png' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0 El viaje en el mundo del #[i Big Data] es continuo. Las herramientas y técnicas que se han apreciado en este componente formativo son solo el comienzo. A medida que surgen nuevos desafíos y oportunidades, es necesario mantener la curiosidad, adaptarse y estar siempre dispuestos a aprender. En conclusión, el #[i Big Data] es todo un cambio fundamental en cómo entendemos e interactuamos con el mundo que nos rodea. Al dominar los conceptos, técnicas y herramientas que se han discutido, las personas quedan equipadas para navegar este nuevo paisaje de datos y desbloquear los insights que darán forma al futuro.


</template>

<script>
import SlyderF from '../bootstrap/SlyderF'
export default {
  name: 'Tema7',
  components: { SlyderF },
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
