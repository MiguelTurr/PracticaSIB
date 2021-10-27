<template>
    <b-navbar type="dark">
      <b-navbar-brand>
        <img id="img-logo" src="@/assets/logo-nav.png" alt="logo">
      </b-navbar-brand>

      <b-navbar-nav class="m-auto">
      </b-navbar-nav>

      <b-navbar-nav>
        <b-nav-item to="/"><i class="fas fa-home"></i><br>Inicio</b-nav-item>
        <b-nav-item to="/buscar"><i class="fas fa-search-dollar"></i><br>Búsqueda de jugadores</b-nav-item>
        <b-nav-item to="/perfil"><i class="fas fa-address-card"></i><br>Perfil</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
</template>

<style>

#img-logo {
  margin-left: 10%;
  width: 80px;
  height: 60px;
}

.navbar {
  background: #0f0c29; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #0f0c29, #302b63, #24243e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.nav-link {
  font-size: 17px;
  font-weight: bold;
}
</style>