<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Introducción al #[i Big Data]
      
    p En este capítulo inicial, se introduce el concepto fundamental del #[i Big Data] y su papel transformador en la sociedad contemporánea. Se exploran las características distintivas que definen al #[i Big Data], conocidas como las «5 V», y se examina cómo este fenómeno está revolucionando la forma en que organizaciones y personas toman decisiones en diversos sectores.   

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Definición y características del #[i Big Data]
    
    .row.bg3.align-items-center.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .row.justify-content-center.mb-4
              .col-lg-8.my-lg-0.my-3
                p El término #[i Big Data] se refiere a conjuntos de datos extremadamente grandes y complejos que superan la capacidad de las herramientas de procesamiento de datos tradicionales. Estos conjuntos de datos se caracterizan por lo que se conoce como las «5 V»:

                ul.lista-ul.fa-ul
                  li
                    i.fas.fa-check.v1
                    span #[b Volumen:] cantidades masivas de datos, que van desde terabytes hasta petabytes y más.
                  hr

                  li
                    i.fas.fa-check.v1
                    span #[b Velocidad:] la rapidez con la que se generan y procesan los datos.
                  hr

                  li
                    i.fas.fa-check.v1
                    span #[b Variedad:] diversos tipos de datos estructurados, semiestructurados y no estructurados.
                  hr

                  li
                    i.fas.fa-check.v1
                    span #[b Veracidad:] la confiabilidad y precisión de los datos.
                  hr

                  li
                    i.fas.fa-check.v1
                    span #[b Valor:] la capacidad de convertir los datos en información útil para la toma de decisiones.
                  hr

              .col-lg-4.my-lg-0.my-3
                img.img-a.img-t(src='@/assets/curso/temas/4.png' alt='') 

            .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
              .bloque-texto-g__img(
                :style="{'background-image': `url(${require('@/assets/curso/temas/6.png')})`}"
              )
              .bloque-texto-g__texto.p-4
                p.mb-0 La siguiente tabla ilustra las diferencias clave entre el análisis de datos tradicional y el #[i Big Data], destacando la evolución en la capacidad de procesamiento y gestión de la información. Mientras que el análisis tradicional se enfoca en volúmenes menores de datos estructurados y procesados por lotes, el #[i Big Data] se caracteriza por su capacidad para manejar cantidades masivas de datos de diferentes tipos (estructurados, semiestructurados y no estructurados) en tiempo real. Esta evolución ha impulsado el desarrollo de nuevas tecnologías como Hadoop, Spark y bases de datos NoSQL, que permiten el análisis a gran escala y la extracción de información valiosa para la toma de decisiones.

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-botones
          h5 Tabla 1.
          span Principales estructuras de datos, casos de uso y limitaciones.

        .tabla-a.color-acento-botones.mb-2 
          table
            caption Fuente: OIT, 2024.
            thead
              tr
                th Aspecto
                th Análisis tradicional
                th.fst-italic Big Data

            tbody
              tr
                td Volumen de datos
                td Gigabytes
                td Terabytes a #[i Petabytes]
              tr
                td Velocidad de procesamiento
                td Por lotes (#[i batch])
                td En tiempo real
              tr
                td Tipos de datos
                td Principalmente estructurados
                td Estructurados, semiestructurados y no estructurados
              tr
                td Escalabilidad
                td Vertical (mejor #[i hardware])
                td Horizontal (más nodos)
              tr
                td Tecnología principal
                td Bases de datos relacionales
                td  Hadoop, Spark, NoSQL

        figcaption.mb-5 Fuente: OIT, 2024. 

    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2	Importancia en el mundo actual                                                                                
    .row.justify-content-center.mb-4
      .col-lg-5.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/7.png' alt='')     
      .col-lg-7.my-lg-0.my-3
        p El #[i Big Data] ha revolucionado la forma en que las organizaciones toman decisiones y operan en diversos sectores. En el ámbito de los negocios, permite una mejor comprensión del comportamiento del cliente, la optimización de operaciones y el desarrollo de nuevos productos. En el sector salud, facilita la medicina personalizada, la investigación de enfermedades y la mejora de los sistemas de atención médica. A nivel gubernamental, el #[i Big Data] ayuda en la planificación urbana, la seguridad pública y la prestación de servicios eficientes. Finalmente, en el campo científico, impulsa descubrimientos en áreas como la genómica, la climatología y la física de partículas.


    .row.bg3.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center          
          .col-lg-12
            Separador 
            #t_1_3.titulo-segundo.color-acento-contenido
              h2 1.3 Procesos asociados al #[i Big Data]
            
            p El manejo del #[i Big Data] implica varios procesos clave para poder extraer información valiosa de grandes volúmenes de datos.

            .row.justify-content-center.mb-5 
              .col-lg-10
                .titulo-sexto.color-acento-botones
                  h5 Figura 1.
                  span Ecosistema del #[i Big Data]
                
                .bgfig.p-5.brad.mb-2
                  img.img-a.img-t(src='@/assets/curso/temas/8.svg' alt='') 
                figcaption Fuente: OIT, 2024. 

            .row.justify-content-center
              .col-lg-4.my-3
                img.img-a.img-t(src='@/assets/curso/temas/9.png', alt='')
              .col-lg-8.my-3
                SlyderF.mb-2(columnas="col-lg-12")
                  .bg4.brad1.p-4.h-100
                    img.img-t.mb-2(src='@/assets/curso/temas/10.svg' alt='')
                    p.mb-0 En primer lugar, la recolección se encarga de capturar datos de diversas fuentes, como sensores, redes sociales, transacciones online, etc. Estos datos pueden ser estructurados (como tablas de bases de datos) o no estructurados (como texto, imágenes y videos).
                  .bg5.brad1.p-4.h-100
                    img.img-t.mb-2(src='@/assets/curso/temas/10.svg' alt='')
                    p.mb-0 “Una vez recopilados, los datos deben ser almacenados de forma eficiente. Para ello, se utilizan sistemas distribuidos y bases de datos NoSQL, que permiten manejar grandes volúmenes de información de manera escalable y flexible. “
                  .bg4.brad1.p-4.h-100
                    img.img-t.mb-2(src='@/assets/curso/temas/10.svg' alt='')
                    p.mb-0 El siguiente paso es el procesamiento de los datos, que implica la aplicación de técnicas de procesamiento paralelo y distribuido para transformarlos en un formato adecuado para el análisis. Esto puede incluir la limpieza de datos, la transformación de formatos y la agregación de información.
                  .bg5.brad1.p-4.h-100
                    img.img-t.mb-2(src='@/assets/curso/temas/10.svg' alt='')
                    p.mb-0 Posteriormente, se realiza el análisis de los datos, empleando técnicas avanzadas como el aprendizaje automático y la inteligencia artificial para identificar patrones, tendencias y anomalías. Este análisis permite obtener insights representativos para la toma de decisiones.
                  .bg4.brad1.p-4.h-100
                    img.img-t.mb-2(src='@/assets/curso/temas/10.svg' alt='')
                    p.mb-0 Finalmente, los resultados del análisis se presentan mediante visualizaciones gráficas que facilitan la comprensión de la información. Estas visualizaciones pueden incluir gráficos, mapas, dashboards, etc., que permiten comunicar los hallazgos de forma clara y concisa.
                  .bg5.brad1.p-4.h-100
                    img.img-t.mb-2(src='@/assets/curso/temas/10.svg' alt='')
                    p.mb-0 Conviene recordar que el #[i Big Data] ha transformado la forma en que se maneja y analiza la información en la actualidad, generando nuevas oportunidades y desafíos en múltiples campos de la actividad humana a medida que se avanza en la era digital. La capacidad de aprovechar el #[i Big Data] de manera efectiva se ha convertido en una habilidad clave para profesionales y organizaciones, permitiéndoles extraer insights valiosos y útiles de grandes cantidades de datos desestructurados y complejos. Esta habilidad es esencial para tomar decisiones informadas y estratégicas en diversas industrias, como la salud, la educación, las finanzas y el marketing. 
                  .bg4.brad1.p-4.h-100
                    img.img-t.mb-2(src='@/assets/curso/temas/10.svg' alt='')
                    p.mb-0 No obstante, lo anterior, también se plantean desafíos, como la necesidad de contar con expertos/as en análisis de datos y la preocupación por la privacidad y la seguridad de los datos. Por lo tanto, es fundamental que los profesionales y las organizaciones inviertan en el desarrollo de habilidades y tecnologías para aprovechar el potencial del #[i Big Data] y enfrentar los desafíos que plantea. Para aquellos/as que inician en el estudio de los temas relacionados con el #[i Big Data], se recomienda seguir aprendiendo sobre matemáticas, estadística y programación, ya que estas habilidades son fundamentales para el análisis de datos. Además, es importante estar al tanto de las últimas tendencias y herramientas en el campo del #[i Big Data], y tener una mentalidad analítica y curiosa para poder encontrar nuevas posibilidades y miradas sobre los datos. 
              
                                                          
</template>

<script>
import SlyderF from '../bootstrap/SlyderF'
export default {
  name: 'Tema1',
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
