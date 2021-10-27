<template>

  <div class="buscar">

    <div v-if="verPerfil">

      <table class="table tabla-perfil">

        <tbody>
          <tr>
            <td>
            </td>
            <td>
                <b-img :src="image" fluid alt="Jugador"></b-img>
                <br>
                {{this.jugadorPerfil.nombre}} ({{this.jugadorPerfil.nacionalidad}})
                <br>
                {{this.jugadorPerfil.fechaNacimiento}} ({{this.jugadorPerfil.edad}} años)
                <br>
                {{this.jugadorPerfil.altura}} cm
                <br>
                <b-button
                variant="danger"
                v-b-tooltip.hover title="Puedes marcar este jugador como favorito."
                v-on:click="marcarComoFavorito">
                <i class="fas fa-heart"></i>
                </b-button>
            </td>
            <td>
            </td>
          </tr>

          <br>

          <tr>
            <td>
              <h3>{{this.jugadorPerfil.equipo}}</h3>
              <br>
              Sueldo: {{this.jugadorPerfil.sueldo}} / mes
              <br>
              Contrato hasta: {{this.jugadorPerfil.contrato}}
              <br>
              Clausula de rescisión: {{this.jugadorPerfil.clausula}}
              <br>
              Valor del mercado: {{this.jugadorPerfil.valor}}
            </td>
            <td>
              <h3>Habilidad</h3>
              <br>
              {{this.jugadorPerfil.pierna}}
              <br>
              Habilidad general: {{this.jugadorPerfil.habilidad}} / 100
              <br>
              Potencial: {{this.jugadorPerfil.potencial}} / 100
              <br>
              <span style="color:yellow;"><i class="fas fa-star"></i> {{this.jugadorPerfil.recomendacion}}</span>
            </td>
            <td>
              <h3>Mentalidad</h3>
              <br>

              <ul class="list-unstyled">
                <li>
                  Agresividad
                  <br>
                  <span class="bp3-tag p">{{this.jugadorPerfil.agresividad}}</span>
                </li>
                <li>
                  Posición
                  <br>
                  <span class="bp3-tag p">{{this.jugadorPerfil.posicionamiento}}</span>
                </li>
                <li>
                  Compostura
                  <br>
                  <span class="bp3-tag p">{{this.jugadorPerfil.compostura}}</span>
                </li>
                <li>
                  Penaltis
                  <br>
                  <span class="bp3-tag p">{{this.jugadorPerfil.penaltis}}</span> 
                </li>
              </ul>

            </td>
          </tr>

          <br>

          <tr>
            <td>
              <h3>Físico</h3>
              <br>

              <ul class="list-unstyled">
                <li>
                  Aceleración
                  <br>
                  <span class="bp3-tag p">{{this.jugadorPerfil.aceleracion}}</span> 
                </li>
                <li>
                  Velocidad
                  <br>
                  <span class="bp3-tag p">{{this.jugadorPerfil.velocidad}}</span> 
                </li>
                <li>
                  Agilidad
                  <br>
                  <span class="bp3-tag p">{{this.jugadorPerfil.agilidad}}</span> 
                </li>
                <li>
                  Salto
                  <br>
                  <span class="bp3-tag p">{{this.jugadorPerfil.salto}}</span> 
                </li>
                <li>
                  Resistencia
                  <br>
                  <span class="bp3-tag p">{{this.jugadorPerfil.resistencia}}</span> 
                </li>
              </ul>

            </td>

            <td>
              <h3>Técnico</h3>
              <br>

              <ul class="list-unstyled">
                <li>
                  Finalización
                  <br>
                  <span class="bp3-tag p">{{this.jugadorPerfil.finalizacion}}</span> 
                </li>
                <li>
                  Regates
                  <br>
                  <span class="bp3-tag p">{{this.jugadorPerfil.regates}}</span> 
                </li>
                <li>
                  Remate
                  <br>
                  <span class="bp3-tag p">{{this.jugadorPerfil.remate}}</span> 
                </li>
                <li>
                  Tiro libre
                  <br>
                  <span class="bp3-tag p">{{this.jugadorPerfil.tiroFalta}}</span> 
                </li>
                <li>
                  Pases cortos
                  <br>
                  <span class="bp3-tag p">{{this.jugadorPerfil.pasesCortos}}</span> 
                </li>
                <li>
                  Pases largos
                  <br>
                  <span class="bp3-tag p">{{this.jugadorPerfil.pasesLargos}}</span> 
                </li>
                <li>
                  Control de balón
                  <br>
                  <span class="bp3-tag p">{{this.jugadorPerfil.control}}</span> 
                </li>
                <li>
                  Disparo lejano
                  <br>
                  <span class="bp3-tag p">{{this.jugadorPerfil.disparoLejano}}</span> 
                </li>
                <li>
                  Marcaje
                  <br>
                  <span class="bp3-tag p">{{this.jugadorPerfil.marcaje}}</span> 
                </li>
              </ul>
            </td>

            <td>
              <h3>Portero</h3>
              <br>

              <ul class="list-unstyled">
                <li>
                  Estirada
                  <br>
                  <span class="bp3-tag p">{{this.jugadorPerfil.poteroSalto}}</span> 
                </li>
                <li>
                  Parada
                  <br>
                  <span class="bp3-tag p">{{this.jugadorPerfil.porteroParada}}</span> 
                </li>
                <li>
                  Saque
                  <br>
                  <span class="bp3-tag p">{{this.jugadorPerfil.poteroGolpeo}}</span> 
                </li>
                <li>
                  Colocacción
                  <br>
                  <span class="bp3-tag p">{{this.jugadorPerfil.porteroPosicion}}</span> 
                </li>
                <li>
                  Reflejos
                  <br>
                  <span class="bp3-tag p">{{this.jugadorPerfil.porteroPosicion}}</span> 
                </li>
              </ul>
            </td>
          </tr>

          <br>

          <tr>
            <td>
            </td>
            <td>
                <b-button
                variant="primary"
                v-b-tooltip.hover title="Vuelve a la sección de búsqueda pulsando aquí."
                v-on:click="volverBusqueda">
                <i class="fas fa-undo-alt"></i>
                </b-button>
            </td>
            <td>
            </td>
          </tr>

        </tbody>
      </table>
    </div>

    <div v-else>
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
                <i class="fas fa-info-circle" v-b-tooltip.hover title="Es el precio mínimo que se debe pagar para que el club acepte una oferta por el jugador. El programa tomará los jugadores que tengan un valor menor o igual al indicado."></i> Valor de mercado: <br>{{ new Intl.NumberFormat("de-DE").format(form.valor * 1000000) }}€
                <b-form-group id="input-group-1" label-for="input-1">
                  <b-form-input id="input-1" v-model="form.valor" type="range" min="0" max="150" step="1"></b-form-input>
                </b-form-group>
              </td>

              <td>
                <i class="fas fa-info-circle" v-b-tooltip.hover title="Es el dinero que recibirá el jugador al mes. El programa tomará los jugadores con sueldo menor e igual al indicado."></i> Sueldo: <br>{{ new Intl.NumberFormat("de-DE").format(form.sueldo * 1000) }}€
                <b-form-group id="input-group-2" label-for="input-2">
                  <b-form-input id="input-2" v-model="form.sueldo" type="range" min="0" max="600" step="1"></b-form-input>
                </b-form-group>
              </td>
            </tr>
            <br>
            <tr>
              <td>
                <i class="fas fa-info-circle" v-b-tooltip.hover title="El programa tomará los jugadores con edad menor e igual a la indicada."></i> Edad: <br> {{ form.edad }} años
                <b-form-group id="input-group-3" label-for="input-3">
                  <b-form-input id="input-3" v-model="form.edad" type="range" min="18" max="45" step="1"></b-form-input>
                </b-form-group>
              </td>

              <td>
                <i class="fas fa-info-circle" v-b-tooltip.hover title="El programa tomará los jugadores con altura mayor e igual a la indicada."></i> Altura: <br> {{ form.altura }} cm
                <b-form-group id="input-group-4" label-for="input-4">
                  <b-form-input id="input-4" v-model="form.altura" type="range" min="160" max="220" step="1"></b-form-input>
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
            <br>
            <tr>
              <td>
                <i class="fas fa-info-circle" v-b-tooltip.hover title="Es el estado al que pertenece una persona que ha nacido en una nación determinada."></i> Nacionalidad:
                <b-form-group id="input-group-6" label-for="input-6">
                  <b-form-select
                    id="input-6"
                    v-model="form.nacionalidad"
                    :options="nacionalidadValores"
                  ></b-form-select>
                </b-form-group>
              </td>

            </tr>
          </tbody>

          <br>

          <!-- ATRIBUTOS ESPECÍFICOS-->

          <thead>
            <tr>
              <td>
                <h5>Atributos específicos <i class="fas fa-question-circle" v-b-tooltip.hover title="Los atributos están definidos entre valores de 0 a 100. Cada posición puede tener unos atributos específicos."></i></h5>
              </td>
            </tr>
          </thead>

          <br>  

          <!-- ATRIBUTOS MENTALES -->

          <tbody>

            <tr>
              <td>
                <i class="fas fa-info-circle" v-b-tooltip.hover title="Cualidad que mide la cantidad de veces y frecuencia que el jugador hace empujones, entradas y entradas fuertes."></i> Agresividad:
                <b-form-group id="input-group-12" label-for="input-12">
                  <b-form-select
                    id="input-12"
                    v-model="form.agresividad"
                    :options="valoresBusqueda"
                    required
                  ></b-form-select>
                </b-form-group>
              </td>
              <td>
                <i class="fas fa-info-circle" v-b-tooltip.hover title="Capacidad del jugador, de no ponerse nervioso y fallar en un pase o disparo a puerta."></i> Compostura:
                <b-form-group id="input-group-13" label-for="input-13">
                  <b-form-select
                    id="input-13"
                    v-model="form.compostura"
                    :options="valoresBusqueda"
                    required
                  ></b-form-select>
                </b-form-group>
              </td>
              <td>
                <i class="fas fa-info-circle" v-b-tooltip.hover title="Capacidad de un jugador para detectar espacios abiertos y moverse a buenas posiciones que ofrecen una ventaja de ataque."></i> Posicionamiento:
                <b-form-group id="input-group-14" label-for="input-14">
                  <b-form-select
                    id="input-14"
                    v-model="form.posicionamiento"
                    :options="valoresBusqueda"
                    required
                  ></b-form-select>
                </b-form-group>
              </td>
            </tr>
          </tbody> 

          <!-- ATRIBUTOS DE PORTERO-->
          <tbody v-if="form.posicion === 'GK'">

            <tr>
              <td>
                <i class="fas fa-info-circle" v-b-tooltip.hover title="Capacidad del portero de alcanzar balones por el aire."></i> Estirada:
                <b-form-group id="input-group-7" label-for="input-7">
                  <b-form-select
                    id="input-7"
                    v-model="form.porteroSalto"
                    :options="valoresBusqueda"
                    required
                  ></b-form-select>
                </b-form-group>
              </td>

              <td>
                <i class="fas fa-info-circle" v-b-tooltip.hover title="Mide qué tan limpiamente atrapa la pelota y la mantiene entre sus manos, sin que se le escape."></i> Parada:
                <b-form-group id="input-group-8" label-for="input-8">
                  <b-form-select
                    id="input-8"
                    v-model="form.porteroParada"
                    :options="valoresBusqueda"
                    required
                  ></b-form-select>
                </b-form-group>
              </td>

              <td>
                <i class="fas fa-info-circle" v-b-tooltip.hover title="Utilizado para medir la longitud y la precisión de los saques, ya sea con las manos o desde el suelo."></i> Saque:
                <b-form-group id="input-group-9" label-for="input-9">
                  <b-form-select
                    id="input-9"
                    v-model="form.porteroGolpeo"
                    :options="valoresBusqueda"
                    required
                  ></b-form-select>
                </b-form-group>
              </td>

            </tr>
            <br>
            <tr>
              <td>
                <i class="fas fa-info-circle" v-b-tooltip.hover title="Capacidad del portero de posicionarse correctamente al detener disparos."></i> Colocacción:
                <b-form-group id="input-group-10" label-for="input-10">
                  <b-form-select
                    id="input-10"
                    v-model="form.porteroPosicion"
                    :options="valoresBusqueda"
                    required
                  ></b-form-select>
                </b-form-group>
              </td>

              <td>
                <i class="fas fa-info-circle" v-b-tooltip.hover title="Agilidad del portero para detener un tiro."></i> Reflejos:
                <b-form-group id="input-group-11" label-for="input-11">
                  <b-form-select
                    id="input-11"
                    v-model="form.porteroReflejos"
                    :options="valoresBusqueda"
                    required
                  ></b-form-select>
                </b-form-group>
              </td>
            </tr>
          </tbody>

          <br>         

          <thead>

            <!-- BOTONES -->

            <tr style="text-align:center;">
              <td>
                <ul class="list-unstyled list-inline">
                  <li class="list-inline-item">
                    <b-button type="submit" variant="primary">Buscar</b-button> 
                  </li>
                  <li class="list-inline-item">
                    <b-button type="reset" variant="danger">Reiniciar</b-button>
                  </li>
                </ul>
              </td>

              <td>
              </td>

              <td >
                <ul class="list-unstyled list-inline">

                  <li class="list-inline-item">
                    <b-button
                    variant="success"
                    v-b-tooltip.hover title="Esta opción te recomendará jugadores similares según la posición seleccionada y tus búsquedas anteriores."
                    v-on:click="recomendarJugadores">
                    Recomendar
                    </b-button>
                  </li>

                  <li class="list-inline-item">
                    <b-button
                    variant="warning"
                    v-b-tooltip.hover title="Esta opción te recomendará jugadores similares según la posición seleccionada y tus búsquedas anteriores."
                    v-on:click="recomendarJugadores">
                    Recomendar
                    </b-button>
                  </li>
                </ul>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
            </tr>
          </tbody>

        </table>

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
        sort-icon-left
        @row-clicked="verInfoJugador"
        ></b-table>

        <b-pagination
          v-show="this.totalJugadores > this.perPage"
          v-model="currentPage"
          :total-rows="totalJugadores"
          :per-page="perPage"
          aria-controls="tabla-resultados"
          align="right"
        ></b-pagination>
      </div>
    </div>
    <br>
  </div>

</template>

<script>

  import image from "@/assets/foto-perfil.jpeg"

  export default {
    data() {
      return {

        // INFORMACIÓN DE LOS FILTROS

        form: {
          posicion: 'GK',
          edad: '45',
          altura: '160',
          pierna: null,
          nacionalidad: null,
          valor: '150',
          sueldo: '600',

          finalizacion: '0',
          regates: '0',
          remate: '0',
          tiroFalta: '0',
          pasesCortos: '0',
          pasesLargos:  '0',
          control: '0',
          disparoLejano: '0',
          marcaje: '0',

          agresividad: '0',
          posicionamiento: '0',
          penaltis: '0',
          compostura: '0',

          aceleracion: '0',
          velocidad: '0',
          agilidad: '0',
          salto: '0',
          resistencia: '0',

          porteroSalto: '0',
          porteroParada: '0',
          porteroGolpeo: '0',
          porteroPosicion: '0',
          porteroReflejos: '0'
        },

        // PARA FILTRAR EN LA TABLA

        sortBy: 'edad',
        sortDesc: false,

        fields: [
          { key: 'nombre', sortable: true },
          { key: 'edad', sortable: true },
          { key: 'altura', sortable: true },
          { key: 'equipo', sortable: true },
          { key: 'nacionalidad', sortable: true },
          { key: 'valor', sortable: true },
          { key: 'sueldo', sortable: true },
          { key: 'contrato', sortable: true },
          { key: 'clausula', sortable: true },
          { key: 'pierna', sortable: true },
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
          { text: 'Afganistán', value: 'Afghanistan'},
          { text: 'Albania', value: 'Albania'},
          { text: 'Argelia', value: 'Algeria'},
          { text: 'Andorra', value: 'Andorra'},
          { text: 'Angola', value: 'Angola'},
          { text: 'Anguilla', value: 'Anguilla'},
          { text: 'Antártida', value: 'Antarctica'},
          { text: 'Antigua y Barbuda', value: 'Antigua & Barbuda'},
          { text: 'Argentina', value: 'Argentina'},
          { text: 'Armenia', value: 'Armenia'},
          { text: 'Aruba', value: 'Aruba'},
          { text: 'Australia', value: 'Australia'},
          { text: 'Austria', value: 'Austria'},
          { text: 'Azerbaiyán', value: 'Azerbaijan'},
          { text: 'Bahamas', value: 'Bahamas'},
          { text: 'Baréin', value: 'Bahrain'},
          { text: 'Banglades', value: 'Bangladesh'},
          { text: 'Barbados', value: 'Barbados'},
          { text: 'Bielorrusia', value: 'Belarus'},
          { text: 'Bélgica', value: 'Belgium'},
          { text: 'Belice', value: 'Belize'},
          { text: 'Benin', value: 'Benin'},
          { text: 'Bermudas', value: 'Bermuda'},
          { text: 'Butan', value: 'Bhutan'},
          { text: 'Bolivia', value: 'Bolivia'},
          { text: 'Bosnia-Herzegovina', value: 'Bosnia Herzegovina'},
          { text: 'Botsuana', value: 'Botswana'},
          { text: 'Brasil', value: 'Brazil'},
          { text: 'Brunei', value: 'Brunei Darussalam'},
          { text: 'Bulgaria', value: 'Bulgaria'},
          { text: 'Burkina Faso', value: 'Burkina Faso'},
          { text: 'Burundi', value: 'Burundi'},
          { text: 'Camboya', value: 'Cambodia'},
          { text: 'Camerún', value: 'Cameroon'},
          { text: 'Canadá', value: 'Canada'},
          { text: 'Cabo Verde', value: 'Cape Verde'},
          { text: 'Islas Caimán', value: 'Cayman Islands'},
          { text: 'República Centroafricana', value: 'Central African Republic'},
          { text: 'Chad', value: 'Chad'},
          { text: 'Chile', value: 'Chile'},
          { text: 'China', value: 'China'},
          { text: 'Colombia', value: 'Colombia'},
          { text: 'Comoras', value: 'Comoros'},
          { text: 'Congo', value: 'Congo'},
          { text: 'República Democrática del Congo', value: 'DR Congo'},
          { text: 'Islas Cook', value: 'Cook Islands'},
          { text: 'Costa Rica', value: 'Costa Rica'},
          { text: 'Costa de Marfil', value: 'Ivory Coast'},
          { text: 'Croacia', value: 'Croatia'},
          { text: 'Cuba', value: 'Cuba'},
          { text: 'Chipre', value: 'Cyprus'},
          { text: 'Chequia', value: 'Czechia'},
          { text: 'Dinamarca', value: 'Denmark'},
          { text: 'Yibuti', value: 'Djibouti'},
          { text: 'Dominica', value: 'Dominica'},
          { text: 'República Dominicana', value: 'Dominican Republic'},
          { text: 'Ecuador', value: 'Ecuador'},
          { text: 'Egipto', value: 'Egypt'},
          { text: 'El Salvador', value: 'El Salvador'},
          { text: 'Guinea Ecuatorial', value: 'Equatorial Guinea'},
          { text: 'Eritrea', value: 'Eritrea'},
          { text: 'Estonia', value: 'Estonia'},
          { text: 'Escocia', value: 'Scotland'},
          { text: 'Etiopía', value: 'Ethiopia'},
          { text: 'Islas Feroe', value: 'Faroe Islands'},
          { text: 'Fiyi', value: 'Fiji'},
          { text: 'Finlandia', value: 'Finland'},
          { text: 'Francia', value: 'France'},
          { text: 'Guayana Francesa', value: 'French Guiana'},
          { text: 'Polinesia Francesa', value: 'French Polynesia'},
          { text: 'Gales', value: 'Wales'},
          { text: 'Gabón', value: 'Gabon'},
          { text: 'Gambia', value: 'Gambia'},
          { text: 'Georgia', value: 'Georgia'},
          { text: 'Alemania', value: 'Germany'},
          { text: 'Ghana', value: 'Ghana'},
          { text: 'Gibraltar', value: 'Gibraltar'},
          { text: 'Grecia', value: 'Greece'},
          { text: 'Groenlandia', value: 'Greenland'},
          { text: 'Granada', value: 'Grenada'},
          { text: 'Guadalupe', value: 'Guadeloupe'},
          { text: 'Guam', value: 'Guam'},
          { text: 'Guatemala', value: 'Guatemala'},
          { text: 'Guernsey', value: 'Guernsey'},
          { text: 'Guinea', value: 'Guinea'},
          { text: 'Guinea-Bisau', value: 'Guinea-Bissau'},
          { text: 'Guyana', value: 'Guyana'},
          { text: 'Haití', value: 'Haiti'},
          { text: 'Honduras', value: 'Honduras'},
          { text: 'Hong Kong', value: 'Hong Kong'},
          { text: 'Hungría', value: 'Hungary'},
          { text: 'Islandia', value: 'Iceland'},
          { text: 'India', value: 'India'},
          { text: 'Indonesia', value: 'Indonesia'},
          { text: 'Irán', value: 'Iran'},
          { text: 'Iraq', value: 'Iraq'},
          { text: 'Irlanda', value: 'Ireland'},
          { text: 'Israel', value: 'Israel'},
          { text: 'Italia', value: 'Italy'},
          { text: 'Inglaterra', value: 'England'},
          { text: 'Irlanda', value: 'Republic of Ireland'},
          { text: 'Jamaica', value: 'Jamaica'},
          { text: 'Japón', value: 'Japan'},
          { text: 'Jersey', value: 'Jersey'},
          { text: 'Jordania', value: 'Jordan'},
          { text: 'Kazajistán', value: 'Kazakhstan'},
          { text: 'Kenia', value: 'Kenya'},
          { text: 'Kiribati', value: 'Kiribati'},
          { text: 'Corea del Sur', value: 'Korea Republic'},
          { text: 'Kosovo', value: 'Kosovo'},
          { text: 'Kuwait', value: 'Kuwait'},
          { text: 'Kirguistán', value: 'Kyrgyzstan'},
          { text: 'Letonia', value: 'Latvia'},
          { text: 'Líbano', value: 'Lebanon'},
          { text: 'Lesoto', value: 'Lesotho'},
          { text: 'Liberia', value: 'Liberia'},
          { text: 'Liechtenstein', value: 'Liechtenstein'},
          { text: 'Lituania', value: 'Lithuania'},
          { text: 'Luxemburgo', value: 'Luxembourg'},
          { text: 'Macao', value: 'Macao'},
          { text: 'República de Macedonia', value: 'North Macedonia'},
          { text: 'Madagascar', value: 'Madagascar'},
          { text: 'Malaui', value: 'Malawi'},
          { text: 'Malasia', value: 'Malaysia'},
          { text: 'Maldivas', value: 'Maldives'},
          { text: 'Malí', value: 'Mali'},
          { text: 'Malta', value: 'Malta'},
          { text: 'Martinica', value: 'Martinique'},
          { text: 'Mauritania', value: 'Mauritania'},
          { text: 'Mauricio', value: 'Mauritius'},
          { text: 'Mayotte', value: 'Mayotte'},
          { text: 'México', value: 'Mexico'},
          { text: 'Moldavia', value: 'Moldova'},
          { text: 'Monaco', value: 'Monaco'},
          { text: 'Mongolia', value: 'Mongolia'},
          { text: 'Montenegro', value: 'Montenegro'},
          { text: 'Montserrat', value: 'Montserrat'},
          { text: 'Marruecos', value: 'Morocco'},
          { text: 'Mozambique', value: 'Mozambique'},
          { text: 'Birmania', value: 'Myanmar'},
          { text: 'Namibia', value: 'Namibia'},
          { text: 'Nauru', value: 'Nauru'},
          { text: 'Nepal', value: 'Nepal'},
          { text: 'Holanda', value: 'Netherlands'},
          { text: 'Nueva Caledonia', value: 'New Caledonia'},
          { text: 'Nueva Zelanda', value: 'New Zealand'},
          { text: 'Nicaragua', value: 'Nicaragua'},
          { text: 'Niger', value: 'Niger'},
          { text: 'Nigeria', value: 'Nigeria'},
          { text: 'Niue', value: 'Niue'},
          { text: 'Noruega', value: 'Norway'},
          { text: 'Omán', value: 'Oman'},
          { text: 'Pakistán', value: 'Pakistan'},
          { text: 'Palaos', value: 'Palau'},
          { text: 'Panamá', value: 'Panama'},
          { text: 'Papúa Nueva Guinea', value: 'Papua New Guinea'},
          { text: 'Paraguay', value: 'Paraguay'},
          { text: 'Perú', value: 'Peru'},
          { text: 'Filipinas', value: 'Philippines'},
          { text: 'Islas Pitcairn', value: 'Pitcairn'},
          { text: 'Polonia', value: 'Poland'},
          { text: 'Portugal', value: 'Portugal'},
          { text: 'Puerto Rico', value: 'Puerto Rico'},
          { text: 'Qatar', value: 'Qatar'},
          { text: 'Rumania', value: 'Romania'},
          { text: 'Rusia', value: 'Russia'},
          { text: 'Ruanda', value: 'Rwanda'},
          { text: 'Reunion', value: 'Réunion'},
          { text: 'San Cristóbal y Nieves', value: 'Saint Kitts and Nevis'},
          { text: 'Santa Lucía', value: 'Saint Lucia'},
          { text: 'Samoa', value: 'Samoa'},
          { text: 'San Marino', value: 'San Marino'},
          { text: 'Santo Tomé y Príncipe', value: 'Sao Tome and Principe'},
          { text: 'Arabia Saudita', value: 'Saudi Arabia'},
          { text: 'Senegal', value: 'Senegal'},
          { text: 'Serbia', value: 'Serbia'},
          { text: 'Seychelles', value: 'Seychelles'},
          { text: 'Sierra Leona', value: 'Sierra Leone'},
          { text: 'Singapur', value: 'Singapore'},
          { text: 'Eslovaquia', value: 'Slovakia'},
          { text: 'Eslovenia', value: 'Slovenia'},
          { text: 'Islas Salomón', value: 'Solomon Islands'},
          { text: 'Somalia', value: 'Somalia'},
          { text: 'Sudáfrica', value: 'South Africa'},
          { text: 'Sudán del Sur', value: 'South Sudan'},
          { text: 'España', value: 'Spain'},
          { text: 'Sri Lanka', value: 'Sri Lanka'},
          { text: 'Estado de Palestina', value: 'Palestine'},
          { text: 'Sudán', value: 'Sudan'},
          { text: 'Surinam', value: 'Suriname'},
          { text: 'Svalbard y Jan Mayen', value: 'Svalbard and Jan Mayen'},
          { text: 'Suazilandia', value: 'Swaziland'},
          { text: 'Suecia', value: 'Sweden'},
          { text: 'Suiza', value: 'Switzerland'},
          { text: 'Taiwán', value: 'Taiwan, Province of China'},
          { text: 'Tayikistán', value: 'Tayikistan'},
          { text: 'Tanzania', value: 'Tanzania'},
          { text: 'Tailandia', value: 'Thailand'},
          { text: 'Timor Oriental', value: 'Timor-Leste'},
          { text: 'Togo', value: 'Togo'},
          { text: 'Tokelau', value: 'Tokelau'},
          { text: 'Tonga', value: 'Tonga'},
          { text: 'Trinidad y Tobago', value: 'Trinidad and Tobago'},
          { text: 'Túnez', value: 'Tunisia'},
          { text: 'Turquía', value: 'Turkey'},
          { text: 'Turkmenistán', value: 'Turkmenistan'},
          { text: 'Islas Turcas y Caicos', value: 'Turks and Caicos Islands'},
          { text: 'Tuvalu', value: 'Tuvalu'},
          { text: 'Uganda', value: 'Uganda'},
          { text: 'Ucrania', value: 'Ukraine'},
          { text: 'Emiratos Árabes Unidos', value: 'United Arab Emirates'},
          { text: 'Estados Unidos', value: 'United States'},
          { text: 'Uruguay', value: 'Uruguay'},
          { text: 'Uzbekistán', value: 'Uzbekistan'},
          { text: 'Vanuatu', value: 'Vanuatu'},
          { text: 'Venezuela', value: 'Venezuela'},
          { text: 'Vietnam', value: 'Vietnam'},
          { text: 'Wallis y Futuna', value: 'Wallis and Futuna'},
          { text: 'Yemen', value: 'Yemen'},
          { text: 'Zambia', value: 'Zambia'},
          { text: 'Zimbabue', value: 'Zimbabwe'},
          { text: 'Åland', value: 'Åland Islands'}
        ],

        //

        valoresBusqueda: [
          { text: 'Sin definir', value: '0'},
          { text: 'Bajo, medio o alto', value: '25'},
          { text: 'Medio o alto', value: '50'},
          { text: 'Alto', value: '75'}
        ],
        show: true,

        // JUGADOR PERFIL

        verPerfil: false,
        jugadorPerfil: [],
        image: image
      }
    },
    methods: {

      // ENVIAR PETICIÓN AL SERVIDOR

      async onSubmit(event) {
        event.preventDefault();

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
        this.form.edad = '45';
        this.form.posicion = 'GK';
        this.form.altura = '160';
        this.form.pierna = null;
        this.form.nacionalidad = null;
        this.form.valor = '150';
        this.form.sueldo = '600';

        // ATRIBUTOS ESPECÍFICOS

        this.form.finalizacion = '0';
        this.form.regates = '0';
        this.form.remate = '0';
        this.form.tiroFalta = '0';
        this.form.pasesCortos = '0';
        this.form.pasesLargos = '0';
        this.form.control = '0';
        this.form.disparoLejano = '0';
        this.form.marcaje = '0';

        this.form.agresividad = '0';
        this.form.posicionamiento = '0';
        this.form.penaltis = '0';
        this.form.compostura = '0';

        this.form.aceleracion = '0';
        this.form.velocidad = '0';
        this.form.agilidad = '0';
        this.form.salto = '0';
        this.form.resistencia = '0';

        this.form.porteroSalto = '0';
        this.form.porteroParada = '0';
        this.form.porteroGolpeo = '0';
        this.form.porteroPosicion = '0';
        this.form.porteroReflejos = '0';

        // Trick to reset/clear native browser form validation state
        this.show = false;
        this.$nextTick(() => {
          this.show = true
        })
      },

      // RECOMIENDA UN JUGADOR

      async recomendarJugadores() {

        // ENVIA PETICIÓN

        const respuesta = await fetch('http://localhost:3000/recomendarJugadores', {
          method: 'POST',
          body: JSON.stringify({ posicion: this.form.posicion, usuario: 'PepeCortez' }),
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
          document.getElementById('texto-busqueda').innerHTML = 'Visita los perfiles de los jugadores para poder hacerte alguna recomendación.';
        }
      },

      // AL HACER CLICK EN UNA FILA DE LA TABLA DE JUGADORES RECOMENDADOS

      async verInfoJugador(item) {

        // OBTENEMOS EL NOMBRE DEL JUGADOR DE LA TABLA
        var jugadorNombre = item.nombre;

        // ENVIA PETICIÓN

        const respuesta = await fetch('http://localhost:3000/infoJugador', {
          method: 'POST',
          body: JSON.stringify({ nombre: jugadorNombre, usuario: 'PepeCortez' }),
          headers: {
            'Content-Type': 'application/json'
          },
        });

        var response = await respuesta.json();

        this.verPerfil = true;
        this.jugadorPerfil = response;
      },

      // REGRESAR A LA BÚSQUEDA DE JUGADORES

      volverBusqueda() {
        this.verPerfil = false;
        this.jugadorPerfil = [];
      },

      //

      async marcarComoFavorito() {

        // OBTENEMOS EL NOMBRE DEL JUGADOR DE LA TABLA
        var jugadorNombre = this.jugadorPerfil.nombre;

        // ENVIA PETICIÓN
        const respuesta = await fetch('http://localhost:3000/addFavorito', {
          method: 'POST',
          body: JSON.stringify({ jugador: jugadorNombre, usuario: 'PepeCortez' }),
          headers: {
            'Content-Type': 'application/json'
          },
        });

        var response = await respuesta.json();

        // MENSAJE DE QUE SE HA AÑADIDO CORRECTAMENTE
        if(response.correcto == true) {

          this.$bvModal.msgBoxOk('Se ha añadido el jugador a favoritos', {
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

.img-fluid {
  width: 10%;
  height: 10%;
}

.tabla-perfil {
  color: white;
  font-weight: bold;
}

.tabla-perfil td {
  border-bottom:0px !important;
}

#caja {
}

.bp3-tag {
	display: -ms-inline-flexbox;
	display: inline-flex;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-direction: row;
	flex-direction: row;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	position: relative;
	border: 0;
	min-width: 1rem;
	max-width: 100%;
	min-height: 1rem;
	padding: 0 .3rem;
	line-height: 1.3rem;
	text-transform: uppercase
}


.p {
	min-width: 7rem;
	text-align: center;
	justify-content: center;
  background: green;
	padding-top: 0;
	padding-bottom: 0
}
</style>
