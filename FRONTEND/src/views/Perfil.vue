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

    <span v-show="this.mostrarAlerta" class="text-white">
      No tienes ningún jugador como favorito.
    </span>
        
    <div v-show="this.favoritosTotales != 0">

      <b-table
      hover
      :items="jugadoresFavoritos"
      id="tabla-fav" 
      :per-page="perPage"
      :current-page="currentPage"
      ></b-table>

      <b-pagination
        v-show="this.favoritosTotales > this.perPage"
        v-model="currentPage"
        :total-rows="favoritosTotales"
        :per-page="perPage"
        aria-controls="tabla-fav"
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

        //

        mostrarAlerta: false,
      }
    },

    methods: {

      // MUESTRA LOS FAVORITOS DEL USUARIO
      async mostrarFavoritos() {

        // ENVIA PETICIÓN
        const respuesta = await fetch('http://localhost:3000/verFavorito', {
          method: 'POST',
          body: JSON.stringify({ usuario: 'PepeCortez' }),
          headers: {
            'Content-Type': 'application/json'
          },
        });

        var response = await respuesta.json();
        this.favoritosTotales = response.length;

        if(this.favoritosTotales != 0) {
          this.jugadoresFavoritos = response;
           
        } else {
          this.mostrarAlerta = true;
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

        // MENSAJE DE QUE SE HAN ELIMINADO CORRECTAMENTE
        if(response.correcto == true) {

          this.favoritosTotales = 0;

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

<style scoped>

#tabla-fav {
  background-color: lightgrey;
}
</style>
