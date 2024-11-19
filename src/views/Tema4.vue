<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Analítica de datos
    .row.justify-content-center
      .col-lg-4.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/55.png' alt='')
      .col-lg-5.my-lg-0.my-3
        .bg14.p-3.brad.j1.h-100
          p.mb-0 La analítica de datos es el arte y la ciencia de transformar datos en insights accionables. Este capítulo introduce las técnicas fundamentales de análisis de datos, mencionando desde métodos estad ísticos básicos hasta técnicas avanzadas de machine learning, explorando cómo estas herramientas permiten descubrir patrones y tendencias en grandes conjuntos de datos.
      .col-lg-3.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/56.png' alt='')
    
    Separador 
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1	Introducción y conceptos básicos

    p La analítica de datos es el proceso de examinar, limpiar, transformar y modelar datos con el objetivo de descubrir información útil, informar conclusiones y apoyar la toma de decisiones. En la era del #[i Big Data], la analítica de datos se ha convertido en una disciplina estratégica para las organizaciones de todos los tamaños y sectores.

    p.mb-5 La analítica de datos abarca una amplia gama de técnicas y enfoques, desde el análisis descriptivo simple hasta métodos predictivos y prescriptivos avanzados. A medida que el volumen y la complejidad de los datos disponibles han aumentado, también lo han hecho las herramientas y metodologías para analizarlos. Algunos conceptos clave en analítica de datos se presentan a continuación.

    .row.justify-content-center.mb-4
      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/57.png' alt='')       
      .col-lg-9.my-lg-0.my-3
        .bg12.brad.p-4.mb-4.h-100.j1
          ul.mb-0.lista-ul.fa-ul
            li
              i.fas.fa-check.v1
              span #[b Datos estructurados vs. no estructurados:] los datos estructurados siguen un formato predefinido y se organizan fácilmente en bases de datos relacionales. Los datos no estructurados, como texto, imágenes o videos, no tienen una estructura predefinida y requieren técnicas especiales para su análisis.

            li
              i.fas.fa-check.v1
              span #[b Minería de datos:] el proceso de descubrir patrones y relaciones en grandes conjuntos de datos utilizando métodos de la intersección de la estadística, el aprendizaje automático y los sistemas de bases de datos.

            li
              i.fas.fa-check.v1
              span #[b Aprendizaje automático:]  un subconjunto de la inteligencia artificial que se centra en el desarrollo de algoritmos que pueden «aprender» de los datos y hacer predicciones o tomar decisiones.

            li
              i.fas.fa-check.v1
              span #[b Visualización de datos:] la presentación gráfica de información y datos que facilita la comprensión de tendencias, valores atípicos y patrones en los datos.

            li
              i.fas.fa-check.v1
              span #[b Análisis predictivo:] el uso de datos históricos, técnicas estadísticas y de aprendizaje automático para hacer predicciones sobre eventos futuros o comportamientos.

            li.mb-0
              i.fas.fa-check.v1
              span.mb-0 #[b Análisis en tiempo real:] el análisis de datos tan pronto como se generan o reciben, permitiendo decisiones y acciones inmediatas.
 
    Separador 
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2	Técnicas de análisis de datos 

    .row.justify-content-center.mb-4
      .col-lg-9.my-lg-0.my-3
        p Las técnicas de análisis de datos son numerosas y variadas, abarcando desde métodos estadísticos tradicionales hasta algoritmos de aprendizaje automático avanzados. Algunas de las técnicas más comunes incluyen:
        .row.justify-content-center
          .col-lg-7.my-lg-0.my-3        
            .bg4.brad.p-3.h-100.j1
              ul.mb-0.lista-ul.fa-ul
                li
                  i.fas.fa-check.v1
                  span #[b Análisis de regresión:] se utiliza para examinar la relación entre variables dependientes e independientes. Los tipos comunes incluyen regresión lineal, logística y polinomial.

                li
                  i.fas.fa-check.v1
                  span #[b Análisis de series temporales:] se centra en datos que se recopilan a lo largo del tiempo, buscando tendencias, estacionalidad y otros patrones temporales.

                li
                  i.fas.fa-check.v1
                  span #[b Análisis de conglomerados (clustering):] agrupa objetos similares en categorías o grupos, útil para la segmentación de clientes o la identificación de patrones de comportamiento.

                li
                  i.fas.fa-check.v1
                  span #[b Análisis de texto y procesamiento del lenguaje natural (NLP):] se utiliza para extraer información significativa de grandes volúmenes de texto no estructurado.
            
          .col-lg-5.my-lg-0.my-3
            .bg13.brad.p-3.h-100.j1
              ul.mb-0.lista-ul.fa-ul
                li
                  i.fas.fa-check.v1
                  span #[b Análisis de redes sociales:] examina las relaciones entre entidades en una red, útil para comprender la difusión de información o la influencia en las redes sociales.

                li
                  i.fas.fa-check.v1
                  span #[b Análisis de sentimientos:] una aplicación específica del NLP que busca determinar la actitud o emoción expresada en un texto.

                li
                  i.fas.fa-check.v1
                  span #[b Técnicas de reducción de dimensionalidad:] como el Análisis de Componentes Principales (PCA), que se utiliza para reducir la complejidad de los datos manteniendo sus características esenciales.
        
      .col-lg-3.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/58.png' alt='')  

    .row.bg3.align-items-center
      .px-lg-5.px-4
        Separador 
        #t_4_3.titulo-segundo.color-acento-contenido
          h2 4.3	Procesos en la analítica de datos

        p El proceso de analítica de datos típicamente sigue un flujo de trabajo que incluye varias etapas. Aunque puede haber variaciones dependiendo del contexto específico, un proceso general incluye los pasos que se ilustran en la siguiente figura.

        .row.justify-content-center.mb-5 
          .col-lg-10
            .titulo-sexto.color-acento-botones
              h5 Figura 3.
              span Proceso general de la analítica de datos
            
            .bgfig.p-5.brad.mb-2
              img.img-a.img-t(src='@/assets/curso/temas/59.svg' alt='') 
            figcaption Fuente: OIT, 2024.     


    .row.justify-content-center.mb-4
      .col-lg-5.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/60.png' alt='')       
      .col-lg-7.my-lg-0.my-3
        .bg12.brad.p-4.mb-4.h-100.j1
          p Primero, se define con precisión el problema que se busca resolver mediante el análisis (1). Luego, se recopilan los datos relevantes de diversas fuentes, como bases de datos, APIs, encuestas o experimentos (2). Una vez obtenidos, los datos se someten a un proceso de limpieza y preprocesamiento, donde se corrigen errores, se eliminan duplicados y se preparan para el análisis, etapa que suele requerir un esfuerzo considerable (3).

          p.mb-0 Posteriormente, se realiza una exploración y visualización de los datos para comprender sus características, identificar patrones y relaciones entre variables (4). Con esta base, se procede al modelado de datos, utilizando técnicas estadísticas o de aprendizaje automático, para construir modelos que describan o predigan fenómenos (5). La calidad y precisión de estos modelos se evalúa mediante métricas y técnicas de validación (6).

    .row.justify-content-center.mb-4
      .col-lg-8.my-lg-0.my-3   
        p Finalmente, se interpretan los resultados del análisis, traduciéndolos en información útil para la toma de decisiones (7), y se comunican de forma clara y concisa a través de visualizaciones e informes (8). El proceso culmina con la implementación de las recomendaciones derivadas del análisis y el monitoreo continuo de los resultados para asegurar su validez y utilidad a lo largo del tiempo (9).
        .row.justify-content-center.align-items-center
          .col-lg-auto
            img.img-a.img-t(src='@/assets/curso/temas/62.svg' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0 De forma complementaria, la siguiente tabla resume los desafíos comunes que se encuentran en cada etapa del proceso de analítica de datos. Desde la definición inicial del problema hasta la implementación final de las soluciones, cada fase presenta obstáculos específicos que deben ser abordados para asegurar el éxito del análisis. Comprender estos desafíos puede ayudar a los analistas y demás técnicos de datos a anticipar y planificar estrategias para superarlos de manera efectiva. 
  
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/61.png' alt='')       
         
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-botones
          h5 Tabla 5. 
          span Desafíos comunes en las etapas del proceso de analítica de datos

        .tabla-a.color-acento-botones.text-center
          table
            caption Fuente: OIT, 2024.
            thead
              tr
                th Etapa
                th Desafíos comunes

            tbody
              tr
                td Definición del problema
                td Falta de claridad en los objetivos, preguntas mal formuladas
              tr
                td Recolección de datos
                td Acceso limitado a datos, datos incompletos o sesgados
              tr
                td Limpieza de datos
                td Datos inconsistentes, valores atípicos, formatos incompatibles
              tr
                td Exploración de datos
                td Conjuntos de datos muy grandes, relaciones complejas entre variables
              tr
                td Modelado
                td Selección del modelo apropiado, #[i overfitting, underfitting.]
              tr
                td Evaluación
                td Elección de métricas apropiadas, validación en datos del mundo real
              tr
                td Interpretación
                td Correlación vs. causalidad, sesgo de confirmación
              tr
                td Comunicación
                td Explicar resultados técnicos a audiencias no técnicas
              tr
                td Implementación
                td Resistencia al cambio, integración con sistemas existentes



</template>

<script>
import SlyderF from '../bootstrap/SlyderF'
export default {
  name: 'Tema4',
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
