<template>

  <div class="buscar">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <table class="table tabla-filtros">

        <!-- CARACTERÍSTICAS DE TODOS LOS JUGADORES-->

        <thead>
          <tr>
            <td>
              <h5>Características generales</h5>
            </td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <i class="fas fa-info-circle" v-b-tooltip.hover title="Es el lugar donde se va a colocar el jugador, por defecto buscará un potero."></i> Posición:
              <b-form-group id="input-group-0" label-for="input-0">
                <b-form-select
                  id="input-0"
                  v-model="form.posicion"
                  :options="posiciones"
                  required
                ></b-form-select>
              </b-form-group>
            </td>

            <td>
              <i class="fas fa-info-circle" v-b-tooltip.hover title="Valor."></i> Valor de mercado:
              <b-form-group id="input-group-1" label-for="input-1">
                <b-form-input id="input-1" v-model="form.valor" type="range" min="0" max="35" step="1"></b-form-input>
              </b-form-group>
            </td>

            <td>
              <i class="fas fa-info-circle" v-b-tooltip.hover title="Mide que tan rápido puede correr el jugador."></i> Control balón:
              <b-form-group id="input-group-2" label-for="input-2">
                <b-form-select
                  id="input-2"
                  v-model="form.controlBalon"
                  :options="valoresBusqueda"
                ></b-form-select>
              </b-form-group>
            </td>
          </tr>
          <tr>

            <td>
              <i class="fas fa-info-circle" v-b-tooltip.hover title="El programa tomará los jugadores con edad menor e igual a la indicada."></i> Edad &lt;= {{ form.edad }}:
              <b-form-group id="input-group-3" label-for="input-3">
                <b-form-input id="input-3" v-model="form.edad" type="range" min="18" max="35" step="1"></b-form-input>
              </b-form-group>
            </td>

            <td>
              <i class="fas fa-info-circle" v-b-tooltip.hover title="El programa tomará los jugadores con altura mayor e igual a la indicada."></i> Altura &gt;= {{ form.altura }} cm:
              <b-form-group id="input-group-4" label-for="input-4">
                <b-form-input id="input-4" v-model="form.altura" type="range" min="170" max="220" step="1"></b-form-input>
              </b-form-group>
            </td>

            <td>
              <i class="fas fa-info-circle" v-b-tooltip.hover title="La pierna que usa normalmente el jugador."></i> Pierna:
              <b-form-group id="input-group-5" label-for="input-5">
                <b-form-select
                  id="input-5"
                  v-model="form.pierna"
                  :options="piernaValores"
                ></b-form-select>
              </b-form-group>
            </td>
          </tr>
        </tbody>

        <!-- ATRIBUTOS ESPECÍFICOS-->

        <thead>
          <tr>
            <td>
              <h5>Atributos específicos</h5>
            </td>
          </tr>
        </thead>

        <tbody>

          <tr v-if="form.posicion === 'ST'">
            <td>
              <i class="fas fa-info-circle" v-b-tooltip.hover title="Es el lugar donde se va a colocar el jugador, por defecto buscará un potero."></i> Posición:
              <b-form-group id="input-group-0" label-for="input-0">
                <b-form-select
                  id="input-0"
                  v-model="form.posicion"
                  :options="posiciones"
                  required
                ></b-form-select>
              </b-form-group>
            </td>
          </tr>
          
          <tr v-else-if="form.posicion === 'GK'">
            <td>
              <i class="fas fa-info-circle" v-b-tooltip.hover title="Es el lugar donde se va a colocar el jugador, por defecto buscará un potero."></i> Posición:
              <b-form-group id="input-group-0" label-for="input-0">
                <b-form-select
                  id="input-0"
                  v-model="form.posicion"
                  :options="posiciones"
                  required
                ></b-form-select>
              </b-form-group>
            </td>
          </tr>
        </tbody>
      </table>

      <br>

      <!-- BOTONES -->

      <ul class="list-unstyled list-inline">
        <li class="list-inline-item">
          <b-button type="submit" variant="primary">Buscar</b-button> 
        </li>
        <li class="list-inline-item">
          <b-button type="reset" variant="danger">Reiniciar</b-button>
        </li>
        <li class="list-inline-item">
          <b-button
          type="reset"
          variant="success"
          v-b-tooltip.hover title="Esta opción te recomendará jugadores similares según la posición seleccionada y tus búsquedas anteriores."
          v-on:click="recomendarJugadores">
          Recomendar jugadores
          </b-button>
        </li>
      </ul>
    </b-form>

    <!-- RESULTADO DE LA BÚSQUEDA -->

    <div id="texto-busqueda">Prueba a buscar algún jugador.</div>

    <div v-show="this.totalJugadores != 0">

      <b-table
      hover
      :fields="fields"
      :items="jugadores"
      id="tabla-resultados" 
      :per-page="perPage"
      :current-page="currentPage"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      sort-icon-left></b-table>

      <b-pagination
        v-show="this.totalJugadores > this.perPage"
        v-model="currentPage"
        :total-rows="totalJugadores"
        :per-page="perPage"
        aria-controls="tabla-resultados"
        align="right"
      ></b-pagination>
    </div>
    <br>
  </div>

</template>

<script>
  export default {
    data() {
      return {

        // INFORMACIÓN DE LOS FILTROS

        form: {
          posicion: 'GK',
          edad: '35',
          altura: '170',
          pierna: null,
          nacionalidad: null,
          valor: '0',
          sueldo: '0',
          controlBalon: '0',
        },

        // PARA FILTRAR EN LA TABLA

        sortBy: 'edad',
        sortDesc: false,

        fields: [
          { key: 'nombre', sortable: true },
          //{ key: 'edad', sortable: true },
          { key: 'altura', sortable: true },
          { key: 'pierna', sortable: true },
          { key: 'nacionalidad', sortable: true },
          { key: 'valor', sortable: true },
          { key: 'sueldo', sortable: true },
          { key: 'habilidad', sortable: true },
          { key: 'potencial', sortable: true },
        ],

        // PAGINACIÓN PARA LA TABLA

        perPage: 7,
        currentPage: 1,

        // JUGADORES RECOMENDADOS POR EL SISTEMA

        totalJugadores: 0,
        jugadores: [],

        // POSICIONES DISPONIBLES PARA BUSCAR

        posiciones: [
          { text: 'Portero', value: 'GK'},
          { text: 'Lateral derecho', value: 'RB'},
          { text: 'Carrilero derecho', value: 'RWB'},
          { text: 'Defensa central', value: 'CB'},
          { text: 'Carrilero izquierdo', value: 'LWB'},
          { text: 'Lateral izquierdo', value: 'LB'},
          { text: 'Medio centro', value: 'CM'},
          { text: 'Medio centro defensivo', value: 'CDM'},
          { text: 'Medio centro ofensivo', value: 'CAM'},
          { text: 'Medio derecha', value: 'RM'},
          { text: 'Medio izquierda', value: 'LM'},
          { text: 'Extremo derecha', value: 'RW'},
          { text: 'Extremo izquierda', value: 'LW'},
          { text: 'Media punta', value: 'CF'},
          { text: 'Delantero centro', value: 'ST'}
        ],

        // VALORES PIERNA

        piernaValores: [
          {text: 'Sin definir', value: null},
          'Diestro',
          'Zurdo',
          'Ambidiestro'
        ],

        // NACIONALIDADES

        nacionalidadValores: [
          {text: 'Sin definir', value: null},
        ],

        //

        valoresBusqueda: [
          { text: 'Sin definir', value: '0'},
          { text: '>= 25', value: '25'},
          { text: '>= 50', value: '50'},
          { text: '>= 75', value: '75'}
        ],
        show: true
      }
    },
    methods: {

      // ENVIAR PETICIÓN AL SERVIDOR

      async onSubmit(event) {
        event.preventDefault();

        // COMPROBACIÓN DE LOS FILTROS

        /*if(this.form.edad == '20') {
          return alert("Error");
        }*/

        // CAMBIAR TEXTO DE BUSCANDO

        if(this.totalJugadores == 0) {
          document.getElementById('texto-busqueda').innerHTML = 'Buscando jugadores...';
        }

        // ENVIA PETICIÓN

        const respuesta = await fetch('http://localhost:3000/buscarJugador', {
          method: 'POST',
          body: JSON.stringify(this.form),
          headers: {
            'Content-Type': 'application/json'
          },
        });

        var response = await respuesta.json();
        this.totalJugadores = response.length;

        if(this.totalJugadores != 0) {
          this.jugadores = response;

          document.getElementById('texto-busqueda').innerHTML = 'Resultados totales: '+this.totalJugadores;

        } else {
          document.getElementById('texto-busqueda').innerHTML = 'Sin resultados..';
        }
      },

      // REINICIAR BÚSQUEDA

      onReset(event) {
        event.preventDefault();

        // RESTEAR TEXTO

        document.getElementById('texto-busqueda').innerHTML = 'Prueba a buscar algún jugador.';

        // BORRAR LISTA DE JUGADORES BUSCADOS

        this.totalJugadores = 0;

        // REINICIAR VALORES GENERALES
        this.form.edad = '35';
        this.form.posicion = 'GK';
        this.form.altura = '170';
        this.form.pierna = null;
        this.form.nacionalidad = null;


        this.form.controlBalon = '0';

        // Trick to reset/clear native browser form validation state
        this.show = false;
        this.$nextTick(() => {
          this.show = true
        })
      },

      // RECOMIENDA UN JUGADOR

      recomendarJugadores() {
          
      }
    }
  }
</script>

<style scoped>

thead {
  text-align: left;
}

.tabla-filtros {
  color:white;
}

.tabla-filtros td {
  border-bottom:0px !important;
}

#texto-busqueda {
  text-align: left; 
  color: white;
  font-weight: bold;
}

#tabla-resultados {
  background-color: lightgrey;
  text-align: left;
}

</style>
