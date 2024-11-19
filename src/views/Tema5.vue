<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Bases de Datos y SQL  

    .row.justify-content-center.align-items-center.bg4.br-d.p-4.brad.mb-4
      .col-lg-auto
        img.img-a.img-t(src='@/assets/curso/temas/28.png' alt='')
      .col.pt-lg-0.pt-md-4
        p.mb-0 Las bases de datos son el fundamento de cualquier sistema de gestión de datos. En este capítulo, se examinan los diferentes tipos de bases de datos, desde sistemas relacionales tradicionales hasta soluciones NoSQL modernas, y se explora cómo estas tecnologías se adaptan para manejar los desafíos únicos del #[i Big Data].

    Separador 
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1	Tipos de bases de datos

    p Las bases de datos son sistemas organizados para almacenar, gestionar y recuperar información de manera eficiente. En el contexto del #[i Big Data], entender los diferentes tipos de bases de datos es fundamental para seleccionar la solución más adecuada para cada caso de uso específico. Los principales tipos de bases de datos se presentan en siguiente tabla:   

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-botones
          h5 Tabla 6. 
          span Clasificación de bases de datos

        .tabla-a.color-acento-botones
          table
            caption Fuente: OIT, 2024.
            thead
              tr
                th(colspan='2') Descripción y características
                th Ejemplo

            tbody
              tr
                td Las #[b bases de datos relacionales] han sido el estándar en el almacenamiento de datos estructurados durante décadas. Se basan en el modelo relacional, que organiza los datos en tablas con filas y columnas, estableciendo relaciones entre ellas. 
                td Utilizan SQL (#[i Structured Query Language]) para consultas y manipulación de datos.
                td MySQL, PostgreSQL, Oracle, Microsoft SQL Server.

              tr
                td(rowspan='4') Las #[b bases de datos NoSQL] (Not Only SQL) surgieron como respuesta a las limitaciones de las bases de datos relacionales en el manejo de grandes volúmenes de datos no estructurados o semiestructurados, típicos en aplicaciones web y móviles modernas. 
                  br 
                  br 
                  span Se caracterizan por:
                  br
                  br
                  ul.mb-0.lista-ul.fa-ul
                    li
                      i.fas.fa-check.v1
                      span Alta escalabilidad horizontal.

                    li
                      i.fas.fa-check.v1
                      span Flexibilidad en el esquema de datos.

                    li
                      i.fas.fa-check.v1
                      span Rendimiento optimizado para operaciones de lectura/escritura a gran escala.

                td #[b Bases de datos de documentos:] Almacenan datos en documentos similares a JSON.
                td MongoDB, CouchDB.
              tr
                td #[b Bases de datos de clave-valor:] Almacenan datos como pares de clave-valor, ofreciendo alta velocidad y escalabilidad.
                td Redis, Amazon DynamoDB.
              tr
                td #[b Bases de datos de columnas:] Optimizadas para consultas en grandes conjuntos de datos, almacenan datos por columnas en lugar de por filas.
                td Cassandra, HBase.
              tr
                td #[b Bases de datos de grafos:] Diseñadas para datos interconectados, utilizan nodos y aristas para representar y almacenar datos.
                td Neo4j, Amazon Neptune

              tr
                td Las #[b bases de datos NewSQL] son un intento de combinar las ventajas de las bases de datos relacionales (ACID, SQL) con la escalabilidad de las bases de datos NoSQL.
                td Soporte para transacciones ACID.
                  br
                  span Escalabilidad horizontal similar a NoSQL. 
                  br
                  span Uso de SQL como lenguaje principal de consulta.
                td Google Spanner, CockroachDB, NuoDB.  

    .row.bg3.align-items-center
      .px-lg-5.px-4
        Separador 
        #t_5_2.titulo-segundo.color-acento-contenido
          h2 5.2	Sentencias SQL fundamentales

        .row.justify-content-center.mb-5
          .col-lg-8.my-lg-0.my-3
            .bgi.p-3.brad.j1.h-100
              p.mb-0 SQL (#[i Structured Query Language]) es el lenguaje estándar para interactuar con bases de datos relacionales. Aunque las bases de datos NoSQL no utilizan SQL directamente, muchas han adoptado lenguajes de consulta similares. Comprender SQL es fundamental para trabajar con datos estructurados e incluso no estructurados. Las sentencias SQL se dividen en varios tipos como se procura sintetizar a continuación. 

          .col-lg-4.my-lg-0.my-3.j1
            img.img-a.img-t(src='@/assets/curso/temas/63.png' alt='')  


    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-botones
          h5 Tabla 7. 
          span Grupos de sentencias clave en SQL

        .tabla-a.color-acento-botones
          table
            caption Fuente: OIT, 2024.
            thead
              tr
                th Tipo de sentencias
                th Ejemplo de sentencia
                th de 

            tbody
              tr
                td(rowspan='3') #[b Sentencias DDL (#[i Data Definition Language])]
                  br
                  br
                  span Utilizadas para definir y modificar la estructura de la base de datos
 
                td CREATE: Crea nuevas tablas, vistas, índices, etc.
                td CREATE TABLE empleados (
                  br
                  span id INT PRIMARY KEY,
                  br
                  span nombre VARCHAR(50),
                  br
                  span salario DECIMAL(10, 2)
                  br
                  span );

              tr
                td ALTER: Modifica la estructura de objetos existentes.
                td ALTER TABLE empleados ADD COLUMN departamento VARCHAR(50);
              tr
                td DROP: Elimina objetos de la base de datos.
                td DROP TABLE empleados;

              tr
                td(rowspan='4') #[b Sentencias DML (#[i Data Manipulation Language])]
                  br
                  br
                  span Utilizadas para manipular los datos dentro de las tablas.  
                td SELECT: Recupera datos de una o más tablas.
                td SELECT nombre, salario FROM empleados WHERE salario > 50000;
              tr
                td INSERT: Agrega nuevos registros a una tabla.
                td INSERT INTO empleados (id, nombre, salario) VALUES (1, ‘Juan Pérez’, 60000);
              tr
                td UPDATE: Modifica registros existentes.
                td UPDATE empleados SET salario = 65000 WHERE id = 1;
              tr
                td DELETE: Elimina registros de una tabla.
                td DELETE FROM empleados WHERE id = 1;

              tr
                td(rowspan='2') #[b Sentencias DCL (#[i Data Control Language])] 
                  br
                  br
                  span Utilizadas para controlar el acceso a los datos.                
                td GRANT: Otorga permisos a usuarios
                td GRANT SELECT, INSERT ON empleados TO usuario1;
              tr
                td REVOKE: Revoca permisos a usuarios
                td REVOKE INSERT ON empleados FROM usuario1;

              tr
                td #[b Sentencias TCL (#[i Transaction Control Language])]
                  br
                  span Utilizadas para gestionar las transacciones en la base de datos.                 
                td BEGIN o START TRANSACTION: Inicia una transacción.
                  br
                  span COMMIT: Guarda los cambios de una transacción.
                  br
                  span ROLLBACK: Deshace los cambios de una transacción.

                td BEGIN;
                  br
                  span UPDATE cuentas SET balance = balance - 100 WHERE id = 1;
                  span UPDATE cuentas SET balance = balance + 100 WHERE id = 2;
                  br
                  span COMMIT;


    Separador 
    #t_5_3.titulo-segundo.color-acento-contenido
      h2 5.3	Procesos ETL (Extracción, Transformación y Carga) 
    .row.bg15.align-items-center.mb-5
      .px-lg-5.px-4
        .bgw.brad.p-5.my-5
          SlyderA(tipo="b")
            .row.justify-content-center
              .col-lg-6.my-2
                p La #[b primera fase] del proceso es la extracción, que consiste en obtener datos desde diferentes fuentes, tales como bases de datos relacionales, sistemas CRM o ERP, archivos planos en formatos como CSV o JSON, API web, redes sociales, o incluso logs de servidores. Este paso presenta ciertos desafíos, como el manejo de formatos variados, la interacción con sistemas heredados, y la gestión de grandes volúmenes de datos, todo mientras se asegura la integridad de la información extraída.
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/65.png', alt='')                       
            .row.justify-content-center
              .col-lg-6.my-2
                p Una vez que los datos han sido extraídos, comienza la #[b fase de transformación]. Aquí, la información se limpia, se valida y se convierte a un formato uniforme. Este paso incluye tareas como la corrección de errores y la eliminación de duplicados, la estandarización de datos para asegurar coherencia (por ejemplo, unificar el formato de fechas), y la validación para cumplir con las reglas del negocio. Además, los datos pueden enriquecerse con información adicional, y se pueden realizar agregaciones para resumir grandes volúmenes de información en datos más manejables.
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/66.png', alt='')    
            .row.justify-content-center
              .col-lg-6.my-2
                p Finalmente, #[b la última etapa es la carga], donde los datos transformados se integran en el sistema de destino, que podría ser un almacén de datos, una base de datos operacional o un data mart específico para un departamento. Durante este proceso, es fundamental optimizar el rendimiento, garantizar la integridad de los datos, y decidir entre realizar actualizaciones incrementales o cargas completas. Además, se deben implementar mecanismos de logging y auditoría para mantener un registro del proceso de carga. 
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/67.png', alt='') 

    p Para facilitar todo este ciclo ETL, existen diversas herramientas especializadas. Entre las más destacadas se encuentran Apache NiFi, una solución de código abierto que automatiza el flujo de datos; Talend, una plataforma integral para la integración de datos; y AWS Glue, un servicio en la nube que proporciona ETL gestionado. Otras opciones populares incluyen Informatica PowerCenter, una solución empresarial, y Pentaho Data Integration, una herramienta de código abierto ampliamente utilizada.                                                            

    Separador 
    #t_5_4.titulo-segundo.color-acento-contenido
      h2 5.4	Optimización de bases de datos

    .row.justify-content-center
      .col-lg-4.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/68.png' alt='')      
      .col-lg-8.my-lg-0.my-3
        p Por su parte, la optimización de bases de datos es una actividad requerida para asegurar el rendimiento y la eficiencia, especialmente cuando se trata con grandes volúmenes de datos. Algunas estrategias clave incluyen la creación de índices en las columnas más consultadas para acelerar las búsquedas, el uso de particionamiento para dividir tablas grandes en fragmentos más pequeños y manejables, y la desnormalización, que en ciertos casos puede duplicar datos para evitar joins complejos. Además, la optimización de consultas SQL y la implementación de estrategias de caché para acceder rápidamente a datos recurrentes son fundamentales. Por último, las operaciones de mantenimiento regular, como la recolección de estadísticas y la reconstrucción de índices, son esenciales para mantener la base de datos en óptimas condiciones.
        .bgi.p-3.brad.j1
          p.mb-0 A manera de resumen, se puede indicar que la gestión de bases de datos y los procesos ETL son fundamentales para cualquier persona que trabaja con datos. A medida que los volúmenes de información crecen, la habilidad para seleccionar, diseñar y optimizar bases de datos se convierte en una competencia clave para quienes trabajan en el campo del #[i Big Data].


                                      
</template>

<script>
import AcordionA from '../bootstrap/AcordionA'
export default {
  name: 'Tema5',
  components: { AcordionA },
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
