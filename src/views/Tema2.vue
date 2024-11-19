<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Fundamentos de programación
    .row.bg3.align-items-center.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .row.justify-content-center.align-items-center.bg1.p-4.brad
              .col-lg-auto
                img.img-a.img-t(src='@/assets/curso/temas/11.svg' alt='')
              .col.pt-lg-0.pt-md-4
                p.mb-0 Un algoritmo es una secuencia de pasos lógicos y bien definidos que resuelven un problema específico. En programación, los algoritmos permiten desarrollar soluciones eficientes y estructuradas. Algunas características clave, que pueden ayudar a comprender lo que es un algoritmo, son las siguientes:
            Separador 
            #t_2_1.titulo-segundo.color-acento-contenido
              h2 2.1	Concepto de algoritmo
            .row.justify-content-center.mb-4
              .col-lg-8.my-lg-0.my-3
                p Un algoritmo es una secuencia de pasos lógicos y bien definidos que resuelven un problema específico. En programación, los algoritmos permiten desarrollar soluciones eficientes y estructuradas. Algunas características clave, que pueden ayudar a comprender lo que es un algoritmo, son las siguientes:

                ul.lista-ul.fa-ul
                  li
                    i.fas.fa-check.v1
                    span #[b Precisión:] cada paso debe estar claramente definido.
                  hr

                  li
                    i.fas.fa-check.v1
                    span #[b Finitud:] debe terminar después de un número finito de pasos.
                  hr

                  li
                    i.fas.fa-check.v1
                    span #[b Entrada:] puede tener cero o más entradas.
                  hr

                  li
                    i.fas.fa-check.v1
                    span #[b Salida:] debe producir al menos un resultado.
                  hr

                  li
                    i.fas.fa-check.v1
                    span #[b Eficacia:] debe ser lo suficientemente básico como para ser llevado a cabo por una persona usando lápiz y papel.
                  hr

              .col-lg-4.my-lg-0.my-3
                img.img-a.img-t(src='@/assets/curso/temas/12.png' alt='') 

    Separador 
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2	Variables y tipos de datos
    .row.justify-content-center.mb-4
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/13.png' alt='')          
      .col-lg-8.my-lg-0.my-3
        .row.justify-content-center.align-items-center.bg4.br-d.p-4.brad.mb-4
          .col-lg-auto
            img.img-a.img-t(src='@/assets/curso/temas/14.png' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0 Las variables son contenedores para almacenar datos en la memoria del computador. Cada variable tiene un tipo de dato asociado que determina qué clase de información puede almacenar. Los siguiente son los tipos de datos más comunes:
        .bg6.p-4.brad
          ul.mb-0.lista-ul.fa-ul
            li
              i.fas.fa-check.v1
              span #[b Enteros (int):] números sin parte decimal (ej. 1, -5, 100).
            li
              i.fas.fa-check.v1
              span #[b Flotantes (float):] números con parte decimal (ej. 3.14, -0.01, 2.0).
            li
              i.fas.fa-check.v1
              span #[b Cadenas (string):] secuencias de caracteres (ej. "Hola mundo", "OpenAI").
            li
              i.fas.fa-check.v1
              span #[b Booleanos (bool):] valores de verdadero (True) o falso (False).
            li
              i.fas.fa-check.v1
              span #[b Listas:] colecciones ordenadas de elementos (ej. [1, 2, 3, 4]).
            li.mb-0
              i.fas.fa-check.v1
              span.mb-0 #[b Diccionarios:] colecciones de pares clave-valor (ej. {"nombre": "Juan", "edad": 30}).

    Separador 
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3	Operadores
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-auto
        img.img-a.img-t(src='@/assets/curso/temas/15.png' alt='')
      .col.pt-lg-0.pt-md-4
        p.mb-0 Los operadores son símbolos especiales que realizan acciones específicas sobre uno o más operandos. La Tabla 2 muestra los diferentes tipos que se utilizan comúnmente en la mayoría de los lenguajes de programación. Estos incluyen operadores aritméticos para realizar cálculos matemáticos, operadores de comparación para comparar valores, operadores lógicos para combinar condiciones, operadores de asignación para asignar valores a variables y operadores bit a bit para manipular datos a nivel de bits. 

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-botones
          h5 Tabla 2.
          span Tipos de operadores en programación

        .tabla-a.color-acento-botones.text-center.mb-2 
          table
            caption Fuente: OIT, 2024.
            thead
              tr
                th Tipo de Operador
                th Ejemplos
                th Descripción
            tbody
              tr
                td Aritméticos
                td +, -, *, /, %
                td Realizan operaciones matemáticas básicas
              tr
                td Comparación
                td ==, !=, >, <, >=, <=
                td Comparan valores y devuelven un booleano
              tr
                td Lógicos
                td and, or, not
                td Combinan condiciones booleanas
              tr
                td Asignación
                td =, +=, -=, *=, /=
                td Asignan valores a variables
              tr
                td Bit a bit
                td &, \
                td , ^, ~, <<, >>

    Separador 
    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4	Estructuras de control de flujo                

    p Las estructuras de control de flujo determinan el orden en que se ejecutan las instrucciones en un programa. Son esenciales en programación, ya que permiten dirigir la ejecución del código según condiciones específicas y repetir acciones cuando sea necesario. Las principales son:

    .row.justify-content-center
      .col-lg-4.my-3
        img.img-a.img-t(src='@/assets/curso/temas/19.png', alt='')
      .col-lg-8.my-3
        SlyderF.mb-2(columnas="col-lg-6")
          .bg7.brad1.p-4.h-100
            img.img-t.img-a.mb-4(src='@/assets/curso/temas/16.png' alt='')
            .row.justify-content-center.mb-3
              .col-auto.bg1.px-3.py-1                        
                h5.mb-0.text-center Estructuras secuenciales
            p.mb-0 Son aquellas en las que las instrucciones se ejecutan una tras otra en el orden en que están escritas. Este es el flujo más básico en un programa, donde no hay saltos ni bifurcaciones. 

          .bg7.brad1.p-4.h-100
            img.img-t.img-a.mb-4(src='@/assets/curso/temas/17.png' alt='')
            .row.justify-content-center.mb-3
              .col-auto.bg1.px-3.py-1                        
                h5.mb-0.text-center Estructuras condicionales
            p.mb-0 Permiten ejecutar diferentes bloques de código según se cumplan o no ciertas condiciones. Introducen decisiones en el flujo del programa, habilitando rutas alternativas de ejecución.

          .bg7.brad1.p-4.h-100
            img.img-t.img-a.mb-4(src='@/assets/curso/temas/18.png' alt='')
            .row.justify-content-center.mb-3
              .col-auto.bg1.px-3.py-1                        
                h5.mb-0.text-center Estructuras repetitivas
            p.mb-0 Permiten ejecutar un bloque de código múltiples veces, lo cual es útil para manejar tareas que requieren iteración, como procesar elementos de una lista o realizar operaciones hasta que se cumpla una condición.

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-botones
          h5 Tabla 3.
          span Tipos de estructuras de datos y ejemplos

        .tabla-a.color-acento-botones.mb-2 
          table
            caption Fuente: OIT, 2024.
            thead
              tr
                th Tipo de estructura de control de flujo
                th Ejemplo en lenguaje Python
                th Observación
            tbody
              tr
                td 
                  span Estructuras secuenciales
                  span Ejecución lineal de instrucciones.

                td 
                  span print("Inicio del programa")
                  br
                  span nombre = input("Ingresa tu nombre: ")
                  br
                  span print(f"Hola, {nombre}!")
                  br
                  span print("Fin del programa")

                td En este ejemplo, cada instrucción se ejecuta secuencialmente, desde el inicio hasta el final, siguiendo el orden establecido.
              tr
                td 
                  span Estructuras condicionales
                  span Decisiones basadas en condiciones que alteran el flujo del programa.

                td 
                  span edad = int(input("Ingresa tu edad: "))
                  br
                  span if edad >= 18:
                      br
                      span.ps-3 print("Eres mayor de edad")
                  span else:
                      span.ps-3 print("Eres menor de edad")

                td En este caso, el programa solicita al usuario su edad y luego verifica si es mayor o igual a 18. Si la condición es verdadera (edad >= 18), se ejecuta el bloque dentro del if; de lo contrario, se ejecuta el bloque dentro del else.
              tr
                td 
                  span Estructuras repetitivas
                  span Repetición de bloques de código para realizar tareas iterativas.

                td 
                  span for i in range(5):
                      br
                      span.ps-3 print(f"Iteración {i}")

                td 
                  span En este bucle, el bloque de código dentro del for se ejecuta cinco veces. La función range(5) genera una secuencia de números del 0 al 4, y en cada iteración, la variable i toma uno de estos valores. El programa imprimirá:
                  span Iteración 0
                  span Iteración 1
                  span Iteración 2
                  span Iteración 3
                  span Iteración 4
                  span Este tipo de estructura es fundamental para recorrer colecciones de datos y automatizar procesos repetitivos.


    Separador 
    #t_2_5.titulo-segundo.color-acento-contenido
      h2 2.5	Arreglos
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-auto
        img.img-a.img-t(src='@/assets/curso/temas/21.png' alt='')
      .col.pt-lg-0.pt-md-4
        p.mb-0 Los arreglos son estructuras de datos que almacenan elementos del mismo tipo en posiciones de memoria contiguas. En muchos lenguajes modernos, como Python, se utilizan listas que son más flexibles que los arreglos tradicionales. El siguiente es un ejemplo en ese lenguaje de programación. 
      .col-lg-auto
        img.img-a.img-t(src='@/assets/curso/temas/20.svg' alt='')

    Separador 
    #t_2_6.titulo-segundo.color-acento-contenido
      h2 2.6	Ficheros
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/22.png' alt='')
      .col-lg-5.my-lg-0.my-3
        .bg8.p-3.h-100
          p Los ficheros permiten almacenar datos de forma permanente en el disco duro. Las operaciones básicas con ficheros incluyen:
          ul.lista-ul.fa-ul
            li
              i.fas.fa-check.v1
              span Abrir un fichero
            li
              i.fas.fa-check.v1
              span Leer datos de un fichero
            li
              i.fas.fa-check.v1
              span Escribir datos en un fichero
            li
              i.fas.fa-check.v1
              span Cerrar un fichero   

          p Este es un ejemplo de escritura en un fichero en Python:
          img.img-t(src='@/assets/curso/temas/24.svg' alt='')        

      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/23.png' alt='')     

    Separador 
    #t_2_7.titulo-segundo.color-acento-contenido
      h2 2.7	Funciones
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.my-lg-0.my-3
        p Las funciones son bloques de código reutilizables que realizan una tarea específica. Ayudan a organizar el código, evitar la repetición y mejorar la legibilidad. Ejemplo de función en Python: 
        .row.justify-content-start.align-items-center.mb-4
          .col-lg-auto.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/25.png' alt='')
          .col-lg-5.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/26.svg' alt='')
            
        .bg9.brad.p-3
          p.mb-0 Estos fundamentos de programación son esenciales para comprender cómo se desarrollan las soluciones de software en el contexto del #[i Big Data]. En los próximos capítulos, se percibirá cómo estos conceptos se aplican en lenguajes específicos utilizados en la analítica de datos.      

      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/27.png' alt='')              
</template>

<script>
import SlyderF from '../bootstrap/SlyderF'
export default {
  name: 'Tema2',
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
