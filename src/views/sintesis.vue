<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.mb-5
      .col-lg-4.my-lg-0.my-3.j1
        img.img-fluid.img-a(src='@/assets/curso/temas/3.png')
      .col-lg-8.my-lg-0.my-3
        .bg2.text-white.p-3.brad.j1.h-100
          p El siguiente diagrama proporciona una visión general sintetizada de los principales temas abordados en este componente sobre Big Data. Este mapa está diseñado para ayudar al lector a visualizar la interconexión entre los diversos componentes que conforman el ecosistema del Big Data.

          p En el origen del diagrama se encuentra el concepto principal de Big Data, del cual se ramifican aprendizajes fundamentales: fundamentos de Programación, analítica de datos, bases de datos, tipos y fuentes de datos, y herramientas informáticas. Cada una de estas áreas se desglosa a su vez en subtemas clave, reflejando la estructura y el contenido del componente.

    p.mb-5 Este diagrama sirve como una guía visual para navegar por los conceptos presentados en el texto, permitiendo al lector comprender rápidamente la amplitud y profundidad de los temas cubiertos, así como sus interrelaciones. Al revisar este mapa, el aprendiz podrá apreciar cómo los diferentes aspectos del Big Data se integran para formar un campo de estudio cohesivo y multifacético. Se invita a explorar este diagrama como un complemento al contenido detallado del componente, utilizándolo como una referencia rápida y un recordatorio visual de conceptos clave en el mundo del Big Data.
    .row.justify-content-center
      .col-lg-10.bgs.p-4.brad
        figure
          img.img-a.img-t(src="@/assets/curso/temas/sintesis.svg", alt="alt")
    .row.justify-content-center.mt-2.mb-5
      .col-lg-10          
        figcaption Fuente: OIT, 2024.
    .row.justify-content-center        
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
