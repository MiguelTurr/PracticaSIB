<template>

  <!-- FOOTER -->
  <div class="footer">
      
    <!-- REDES SOCIALES -->
    <div class="footer-redes">
        
      <ul class="list-unstyled list-inline">
        <li class="list-inline-item">
            <a
            class="btn-floating btn-fb mx-1"
            onclick="location.href='http://twitter.com';"
            v-b-tooltip.hover title="Twitter"
            >
                <i class="fab fa-twitter-square text-warning"></i>
            </a>
        </li>
        <li class="list-inline-item">
            <a
            class="btn-floating btn-tw mx-1"
            onclick="location.href='http://facebook.com';"
            v-b-tooltip.hover title="Facebook"
            >
                <i class="fab fa-facebook-square text-warning"></i>
            </a>
        </li>
        <li class="list-inline-item">
            <a
            class="btn-floating btn-gplus mx-1"
            onclick="location.href='http://youtube.com';"
            v-b-tooltip.hover title="Youtube"
            >
                <i class="fab fa-youtube-square text-warning"></i>
            </a>
        </li>
      </ul>
    </div>

    <!-- COPYRIGHT -->
    <div class="footer-copyright">
        &copy; 2021 Copyright: Miguel Turrión Gutiérrez
    </div>
  </div>
 
</template>

<style scoped>

.footer {
    padding-top: 1%;
    background: #0f0c29; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #0f0c29, #302b63, #24243e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.footer-redes {
    font-size: 25px;
}

.footer-copyright {
    color:white;
}

a:hover {
  font-size: 20px;
}
</style>