<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Lenguajes de Programación para analítica de datos

    .row.justify-content-center.align-items-center.bg4.br-d.p-4.brad.mb-4
      .col-lg-auto
        img.img-a.img-t(src='@/assets/curso/temas/28.png' alt='')
      .col.pt-lg-0.pt-md-4
        p.mb-0 R y Python  se han convertido en las lenguas francas del análisis de datos. En este capítulo, se exploran estos poderosos lenguajes de programación, sus características distintivas, y cómo se utilizan en el contexto de la analítica de datos, proporcionando una plataforma para el procesamiento y análisis de grandes conjuntos de datos.

    Separador 
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1	Introducción a R y Python
    .row.justify-content-center.mb-4
      .col-lg-8.my-lg-0.my-3
        p En el vasto campo de la analítica de datos y el #[i Big Data], dos lenguajes de programación se han destacado por su versatilidad, potencia y amplia adopción: R y Python. Estos lenguajes ofrecen un conjunto robusto de herramientas y bibliotecas específicamente diseñadas para el procesamiento, análisis y visualización de datos a gran escala.

        p R, originalmente desarrollado para el análisis estadístico, se ha convertido en una herramienta indispensable para los científicos de datos y estadísticos. Su enfoque en la manipulación de datos, el análisis estadístico avanzado y la creación de gráficos de alta calidad lo hace ideal para proyectos que requieren un análisis profundo y una visualización detallada de los resultados.

        .bg9.brad.p-3
          p.mb-0 Python, por otro lado, es un lenguaje de propósito general que ha ganado una enorme popularidad en el campo de la ciencia de datos. Su sintaxis clara y legible, junto con su amplia gama de bibliotecas especializadas como NumPy, Pandas y Scikit-learn, lo convierten en una excelente opción para proyectos que abarcan desde el procesamiento de datos hasta el aprendizaje automático y la inteligencia artificial.
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/29.png' alt='')    

    Separador 
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2	Antecedentes y evolución

    p La historia de R se remonta a 1993, cuando Ross Ihaka y Robert Gentleman de la Universidad de Auckland, Nueva Zelanda, decidieron crear un lenguaje de programación más accesible para el análisis estadístico. Basado en el lenguaje S, R se diseñó para ser un entorno de software libre y de código abierto para computación estadística y gráficos. A lo largo de los años, R ha evolucionado gracias a las contribuciones de una comunidad global de desarrolladores y estadísticos, lo que ha resultado en un ecosistema rico en paquetes y funcionalidades para casi cualquier tarea imaginable en el análisis de datos.

    .row.justify-content-center.mb-4
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/30.png' alt='')       
      .col-lg-8.my-lg-0.my-3
        .bg4.brad.p-3.mb-4
          p.mb-0 Python, por su parte, fue creado por el informático neerlandés Guido van Rossum y lanzado por primera vez en 1991. Aunque inicialmente no estaba diseñado específicamente para la ciencia de datos, su flexibilidad y facilidad de uso lo llevaron a ser adoptado rápidamente por la comunidad científica. El punto de inflexión para Python en el campo de la analítica de datos llegó con el desarrollo de bibliotecas como NumPy en 2006 y Pandas en 2008. Estas bibliotecas proporcionaron a Python las capacidades de cálculo numérico y manipulación de datos necesarias para competir con R en el análisis de datos.
        .row.justify-content-center.align-items-center
          .col-lg-auto
            img.img-a.img-t(src='@/assets/curso/temas/31.png' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0 La evolución de ambos lenguajes ha sido impulsada por las crecientes demandas del #[i Big Data]  y la analítica avanzada. R ha mantenido su fortaleza en el análisis estadístico y la visualización de datos, mientras que Python ha ampliado su alcance para incluir aprendizaje automático, procesamiento de lenguaje natural y análisis de redes sociales, entre otros campos
          
    Separador 
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3	Entornos de desarrollo integrado (IDE)             
    .row.justify-content-center.align-items-center.bg2.p-4.brad.text-white.mb-5
      .col-lg-auto
        img.img-a.img-t(src='@/assets/curso/temas/32.png' alt='')
      .col.pt-lg-0.pt-md-4
        p.mb-0 Los entornos de desarrollo integrado (IDE) son herramientas fundamentales que facilitan la escritura, prueba y depuración de código. Para R y Python, existen varios IDE populares que ofrecen características específicas para el análisis de datos. 
    p Para R, uno de los IDE más utilizado es RStudio. RStudio proporciona una interfaz intuitiva que incluye un editor de código, una consola R, un entorno para gestionar variables y un visor de gráficos. Además, RStudio ofrece herramientas para la creación de documentos dinámicos (R Markdown) y el desarrollo de aplicaciones web interactivas (Shiny).

    p.mb-4 Para Python, hay varias opciones populares:

    SlyderF.mb-2(columnas="col-lg-6")
      .bg7.brad1.p-4.h-100
        img.img-t.img-a.mb-4(src='@/assets/curso/temas/33.png' alt='')
        .row.justify-content-center.mb-3
          .col-auto.bg1.px-3.py-1                        
            h5.mb-0.text-center Jupyter Notebook
        p.mb-0 Un entorno basado en web que permite crear y compartir documentos que contienen código en vivo, ecuaciones, visualizaciones y texto narrativo. Es especialmente útil para la exploración de datos y la creación de informes interactivos.

      .bg7.brad1.p-4.h-100
        img.img-t.img-a.mb-4(src='@/assets/curso/temas/34.png' alt='')
        .row.justify-content-center.mb-3
          .col-auto.bg1.px-3.py-1                        
            h5.mb-0.text-center PyCharm
        p.mb-0 Un IDE completo desarrollado por JetBrains, que ofrece análisis de código, un depurador gráfico, y soporte integrado para desarrollo web y científico.


      .bg7.brad1.p-4.h-100
        img.img-t.img-a.mb-4(src='@/assets/curso/temas/35.png' alt='')
        .row.justify-content-center.mb-3
          .col-auto.bg1.px-3.py-1                        
            h5.mb-0.text-center Spyder
        p.mb-0 Un IDE diseñado específicamente para científicos, ingenieros y analistas de datos. Combina la simplicidad de un editor de texto con la flexibilidad de un entorno de desarrollo completo.

      .bg7.brad1.p-4.h-100
        img.img-t.img-a.mb-4(src='@/assets/curso/temas/36.png' alt='')
        .row.justify-content-center.mb-3
          .col-auto.bg1.px-3.py-1                        
            h5.mb-0.text-center Visual Studio Code
        p.mb-0 Un editor de código fuente ligero pero potente que se ha vuelto muy popular entre los desarrolladores de Python gracias a sus extensiones y su rendimiento.                         

    Separador 
    #t_3_4.titulo-segundo.color-acento-contenido
      h2 3.4	Sintaxis y estructura general 

    p La sintaxis de R y Python, aunque diferente, está diseñada para ser intuitiva y facilitar el análisis de datos. Veamos algunas comparaciones:

    .row.justify-content-center.mb-4
      .col-lg-5.my-lg-0.my-3
        .bg4.brad.p-3.h-100
          p #[b R:] R utiliza una sintaxis que puede parecer única al principio, pero que está optimizada para operaciones vectoriales y matriciales comunes en estadísticas.       
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/37.svg' alt='') 

          .row.justify-content-start.align-items-center.mb-4
            .col-lg-auto.my-lg-0.my-3
              img.img-a.img-t(src='@/assets/curso/temas/38.png' alt='')
            .col.my-lg-0.my-3
              p.mb-0 En este ejemplo, vemos cómo R puede leer datos de un archivo CSV, proporcionar un resumen estadístico, crear un gráfico y ajustar un modelo lineal, todo en unas pocas líneas de código.           
      .col-lg-7.my-lg-0.my-3
        .bg6.brad.p-3.h-100
          p #[b Python:] Python utiliza una sintaxis más general que enfatiza la legibilidad y la simplicidad.
          .row.justify-content-start.align-items-center.mb-4
            .col.my-lg-0.my-3
              img.img-a.img-t(src='@/assets/curso/temas/39.svg' alt='')
            .col.my-lg-0.my-3
              img.img-a.img-t(src='@/assets/curso/temas/40.png' alt='')      
          p Este código de Python realiza las mismas operaciones que el ejemplo de R, pero utiliza bibliotecas específicas (pandas para manejo de datos, matplotlib para gráficos, scipy para estadísticas) que deben importarse explícitamente.

    Separador 
    #t_3_5.titulo-segundo.color-acento-contenido
      h2 3.5	Estándares de código

    p Tanto en R como en Python, seguir estándares de código es muy importante para mantener la legibilidad y facilitar la colaboración. Estos estándares incluyen convenciones para nombrar variables, formato del código, y estructura general de los scripts.

    p.mb-4 Para R, el estilo de código de Tidyverse es ampliamente adoptado. Algunas de sus recomendaciones incluyen:

    .row.justify-content-center.mb-4
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/41.png' alt='')       
      .col-lg-8.my-lg-0.my-3
        .bg10.brad.p-3.mb-4
          ul.mb-0.lista-ul.fa-ul
            li
              i.fas.fa-check.v1
              span Usar snake_case para nombres de variables y funciones.
            li
              i.fas.fa-check.v1
              span Limitar la longitud de las líneas a 80 caracteres.
            li.mb-0
              i.fas.fa-check.v1
              span.mb-0 Usar espacios alrededor de operadores y después de comas.
  
        p Para Python, el PEP 8 (Python Enhancement Proposal 8) es el estándar de estilo más aceptado. Algunas de sus guías son:
        .bg4.brad.p-3.mb-4
          ul.mb-0.lista-ul.fa-ul
            li
              i.fas.fa-check.v1
              span Usar snake_case para nombres de funciones y variables.
            li
              i.fas.fa-check.v1
              span Usar CamelCase para nombres de clases.
            li
              i.fas.fa-check.v1
              span Utilizar 4 espacios para la indentación.
            li.mb-0
              i.fas.fa-check.v1
              span.mb-0 Limitar la longitud de las líneas a 79 caracteres.

        p Seguir estos estándares mejora la legibilidad del código, facilitando la colaboración y el mantenimiento a largo plazo de los proyectos de análisis de datos.  

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-botones
          h5 Tabla 4.
          span Comparación de características clave entre R y Python

        .tabla-a.color-acento-botones.text-center.mb-2 
          table
            caption Fuente: OIT, 2024.
            thead
              tr
                th Característica
                th R
                th Python
            tbody
              tr
                td Enfoque principal
                td Análisis estadístico y visualización
                td Programación general y ciencia de datos
              tr
                td Curva de aprendizaje
                td Empinada para no estadísticos
                td Más suave, sintaxis intuitiva
              tr
                td Velocidad de ejecución
                td Puede ser lento con grandes conjuntos de datos
                td En general más rápido, especialmente con NumPy
              tr
                td Visualización
                td Excelente (ggplot2)
                td Muy buena (matplotlib, seaborn)
              tr
                td.fast-italic Muy buena (matplotlib, seaborn)
                td Bueno
                td Excelente (scikit-learn, TensorFlow)
              tr
                td Comunidad y ecosistema
                td Grande, enfocado en estadísticas
                td Muy grande y diverso
              tr
                td Integración con otros sistemas
                td Limitada
                td Excelente

    Separador 
    #t_3_6.titulo-segundo.color-acento-contenido
      h2 3.6	Aplicaciones en analítica de datos 

    .row.justify-content-center.align-items-center.bg4.p-4.brad.mb-4
      .col-lg-auto
        img.img-a.img-t(src='@/assets/curso/temas/42.png' alt='')
      .col.pt-lg-0.pt-md-4
        p.mb-0 Tanto R como Python tienen aplicaciones extensas en el campo de la analítica de datos y el #[i Big Data]. Algunas áreas donde estos lenguajes sobresalen incluyen:

    .row.justify-content-center
      .col-lg-4.my-3
        img.img-a.img-t(src='@/assets/curso/temas/43.png', alt='')
      .col-lg-8.my-3
        SlyderF.mb-2(columnas="col-lg-6")
          .bg12.brad1.p-4.h-100
            img.img-t.img-a.mb-4(src='@/assets/curso/temas/44.png' alt='')
            .row.justify-content-center.mb-3
              .col-auto.bg11.px-3.py-1                        
                h5.mb-0.text-center Limpieza y preprocesamiento de datos 

            p.mb-0 Ambos lenguajes ofrecen potentes herramientas para manejar datos desordenados, inconsistentes o faltantes. En R, el paquete tidyr es especialmente útil, mientras que, en Python, pandas ofrece funcionalidades similares.


          .bg12.brad1.p-4.h-100
            img.img-t.img-a.mb-4(src='@/assets/curso/temas/44.png' alt='')
            .row.justify-content-center.mb-3
              .col-auto.bg11.px-3.py-1                        
                h5.mb-0.text-center Análisis exploratorio de datos (EDA)
            p.mb-0 R tiene una larga historia en EDA con paquetes como ggplot2 para visualización. Python, con bibliotecas como matplotlib y seaborn, también ofrece capacidades robustas de visualización.

          .bg12.brad1.p-4.h-100
            img.img-t.img-a.mb-4(src='@/assets/curso/temas/44.png' alt='')
            .row.justify-content-center.mb-3
              .col-auto.bg11.px-3.py-1                        
                h5.mb-0.text-center Modelado estadístico

            p.mb-0 R es particularmente fuerte en este aspecto, con una amplia gama de paquetes para casi cualquier tipo de análisis estadístico imaginable. Python, aunque inicialmente menos orientado a la estadística, ha cerrado la brecha con bibliotecas como statsmodels.

          .bg12.brad1.p-4.h-100
            img.img-t.img-a.mb-4(src='@/assets/curso/temas/44.png' alt='')
            .row.justify-content-center.mb-3
              .col-auto.bg11.px-3.py-1                        
                h5.mb-0.text-center.fst-italic Machine learning
 
            p.mb-0 mientras que R tiene paquetes como caret para machine learning, Python ha tomado la delantera en este campo con bibliotecas como scikit-learn, TensorFlow y PyTorch.


          .bg12.brad1.p-4.h-100
            img.img-t.img-a.mb-4(src='@/assets/curso/temas/44.png' alt='')
            .row.justify-content-center.mb-3
              .col-auto.bg11.px-3.py-1                        
                h5.mb-0.text-center.fst-italic Machine learning 
            p.mb-0 mientras que R tiene paquetes como caret para machine learning, Python ha tomado la delantera en este campo con bibliotecas como scikit-learn, TensorFlow y PyTorch.

          .bg12.brad1.p-4.h-100
            img.img-t.img-a.mb-4(src='@/assets/curso/temas/44.png' alt='')
            .row.justify-content-center.mb-3
              .col-auto.bg11.px-3.py-1                        
                h5.mb-0.text-center.fast-italic #[i Big Data] 
            p.mb-0 Ambos lenguajes se han adaptado para manejar grandes volúmenes de datos. R tiene paquetes como data.table y dplyr para procesamiento eficiente, mientras que Python puede integrarse fácilmente con frameworks de #[i Big Data] como Apache Spark a través de PySpark.

          .bg12.brad1.p-4.h-100
            img.img-t.img-a.mb-4(src='@/assets/curso/temas/44.png' alt='')
            .row.justify-content-center.mb-3
              .col-auto.bg11.px-3.py-1                        
                h5.mb-0.text-center Reportes y dashboards
 
            p.mb-0 R sobresale en la creación de informes dinámicos con R Markdown y aplicaciones web intera

    Separador 
    #t_3_7.titulo-segundo.color-acento-contenido
      h2 3.7	Generación de reportes 

    .row.justify-content-center.mb-4     
      .col-lg-8.my-lg-0.my-3
        p La capacidad de generar reportes claros y reproducibles es requerida en el análisis de datos. Tanto R como Python ofrecen herramientas poderosas para este propósito.

        p En R, R Markdown es la herramienta por excelencia para la creación de informes dinámicos. Permite combinar narrativa en texto plano con bloques de código R, cuya salida (texto, tablas, gráficos) se integra perfectamente en el documento final. R Markdown puede generar reportes en varios formatos, incluyendo HTML, PDF y documentos de Word. El siguiente es un ejemplo de un documento R Markdown.
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/51.png' alt='')  

    .row.justify-content-center.mb-4     
      .col-lg-6.my-lg-0.my-3
        img.img-a.img-t.mb-4(src='@/assets/curso/temas/52.png' alt='')  
        .bg13.brad.p-3
          img.img-a.img-t(src='@/assets/curso/temas/54.svg' alt='')  

      .col-lg-6.my-lg-0.my-3
        .bg4.brad.p-3
          p A su vez, se presenta el ejemplo en Python.
          img.img-a.img-t(src='@/assets/curso/temas/53.svg' alt='')   

    p Ambas herramientas promueven la reproducibilidad de la investigación y facilitan la comunicación de resultados complejos de manera clara y estructurada.

    p Hasta este punto se puede resaltar que tanto R como Python son herramientas poderosas para la analítica de datos, cada una con sus fortalezas particulares. La elección entre ellas a menudo depende de factores como el contexto específico del proyecto, la experiencia previa del equipo, y las necesidades particulares de análisis y visualización. En muchos casos, los profesionales de datos optan por utilizar ambos lenguajes, aprovechando lo mejor de cada uno según la tarea en cuestión.


</template>

<script>
import SlyderF from '../bootstrap/SlyderF'
export default {
  name: 'Tema3',
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
