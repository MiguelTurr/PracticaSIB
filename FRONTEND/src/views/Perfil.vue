<template>

  <div class="perfil">

    <br>

    <ul class="list-unstyled list-inline">

      <li class="list-inline-item">
        <b-button variant="primary" v-on:click="mostrarFavoritos">Mostrar favoritos</b-button> 
      </li>

      <li class="list-inline-item">
        <b-button variant="danger" v-on:click="eliminarFavoritos">Eliminar favoritos</b-button>
      </li>
    </ul>
        
    <div v-show="this.favoritosTotales != 0">

      <b-table
      hover
      :fields="fields"
      :items="jugadoresFavoritos"
      id="tabla-resultados" 
      :per-page="perPage"
      :current-page="currentPage"
      @row-clicked="verInfoJugador"
      ></b-table>

      <b-pagination
        v-show="this.favoritosTotales > this.perPage"
        v-model="currentPage"
        :total-rows="totalJugadores"
        :per-page="perPage"
        aria-controls="tabla-resultados"
        align="right"
      ></b-pagination>
    </div>

  </div>

</template>

<script>

  export default {

    data() {
      return {

        favoritosTotales: 0,
        jugadoresFavoritos: [],

        perPage: 15,
        currentPage: 1,

      }
    },

    methods: {

      // MUESTRA LOS FAVORITOS DEL USUARIO
      async mostrarFavoritos() {

        // ENVIA PETICIÓN
        const respuesta = await fetch('http://localhost:3000/favoritosUsuario', {
          method: 'POST',
          body: JSON.stringify({ usuario: 'PepeCortez' }),
          headers: {
            'Content-Type': 'application/json'
          },
        });

        var response = await respuesta.json();
        this.favoritosTotales = response.lenght;

        if(this.favoritosTotales != 0) {
           console.log("a");
           
        } else {
           console.log("a");
        }
      },

      // ELIMINA TODOS LOS FAVORITOS DEL USUARIO
      async eliminarFavoritos() {

        // ENVIA PETICIÓN
        const respuesta = await fetch('http://localhost:3000/borrarBusquedas', {
          method: 'POST',
          body: JSON.stringify({ usuario: 'PepeCortez' }),
          headers: {
            'Content-Type': 'application/json'
          },
        });

        var response = await respuesta.json();

        // MENSAJE DE QUE SE HA AÑADIDO CORRECTAMENTE
        if(response.correcto == true) {

          this.$bvModal.msgBoxOk('Se han eliminado todos tus favoritos.', {
            title: 'Confirmación',
            size: 'sm',
            buttonSize: 'sm',
            okVariant: 'success',
            headerClass: 'p-2 border-bottom-0',
            footerClass: 'p-2 border-top-0',
            centered: true
          });
        }
      }
    }
  }
</script>

