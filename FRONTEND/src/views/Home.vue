<template>
  <div id="home">
    <b-img :src="image" class="prueba"></b-img>
    <div id="texto-img">
      <span id="texto-grande">Football Player Match</span>
      <br>
      <span id="texto-menor">¿Estás interesado en fichar algún jugador?</span>
      <br>
      <span id="texto-menor">Tenemos más de 20.000 jugadores en nuestra base de datos.</span>
      <br>
      <br>
      <span id="texto-menor">Fácil y rápido de usar, con respuestas increibles.</span>

    </div>
  </div>
</template>

<script>
    import image from "@/assets/home-fondo.jpg"
    
    export default {
        data: function () {
            return {
                image: image
            }
        }
    }
</script>

<style scoped>

#home {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 450px;
}

.prueba {
  width: 100%;
  height: 450px;
}

#texto-img {
  position: absolute;
  top: 10%;
  left: 60%;
  font-weight: bold;
  color: white;
}

#texto-grande {
  font-size:50px;
}

#texto-menor {
  font-size: 15px;
}

</style>