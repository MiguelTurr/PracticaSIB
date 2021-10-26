<template>
  <div id="app">

    <!-- BARRA DE NAVEGACIÓN -->
    <app-navegacion></app-navegacion>

    <!-- CUERPO DE LA PÁGINA -->
    <router-view></router-view>

    <!-- PIE DE PÁGINA -->
    <app-footer></app-footer>
  </div>
</template>

<script>

  import AppNavegacion from '@/components/AppNavegacion'
  import AppFooter from '@/components/AppFooter'

  export default {
    components: {
      AppNavegacion,
      AppFooter
    }

  }
</script>

<style>


#app {

  background: #614385;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #516395, #614385);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #516395, #614385); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
