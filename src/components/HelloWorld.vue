<template>
  <div>
    <div class="kkOJ">
      <div class="KKKlo">
        <div class="llHYh">
          <div class="title">
            <h1>
              "Mastery-box vous propose tout un panel de choix, et tous les
              styles sont avancés quelqu'en soit les saisons"
            </h1>
          </div>
          <div class="logo">Mastery-box</div>
        </div>
        <div class="Pkh">If you have a taste for luxury</div>
      </div>
    </div>

    <!-- <section class="footer">
      <div class="blc-1">
        <div class="center">
          <ul class="UHj">
            <li>À propos de</li>
            <li>Compagnie</li>
            <li>Emplacements</li>
            <li>Contact</li>
            <li>Les heures</li>
          </ul>

          <div class="rgt">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-pinterest-p"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-youtube"></i>
            <i class="fab fa-vk"></i>
          </div>
        </div>
      </div>
      <div class="blc-2">
        <div>
          Mastery-box est
          <a href="https://github.com/TawfikBelaifa/Mystery-Box" target="_blank"
            >Open source sur Github</a
          >, hébergé avec
          <a href="https://www.netlify.com/" target="_blank">Netlify</a> et
          réaliser par Tawfik,
          <a href="https://github.com/TawfikBelaifa" target="_blank"
            >@TawfikBelaifa (Github)</a
          >
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .kkOJ{
    height: 550px;
    width: 100%;
    padding: 80px 0;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0px 83px 0;
}

.KKKlo{
    height: 80%;
    width: 100%;
    margin-bottom: 80px;
    background-image: linear-gradient( 357deg,
        transparent 0,
        rgba(0,0,0,-1.1) 1%, 
        rgba(0,0,0,.5) 1%, 
        rgba(0,0,0,.11) 8%, 
        rgba(0,0,0,.8) 95%, 
        rgba(0,0,0,.8)), 
    url(../../static/Logo-home/3.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.KKKlo .title h1{
    font-family: 'Tangerine', cursive;
    font-size: 40px;
    font-weight: 300;
    color: blanchedalmond;
}

.KKKlo .logo{
    font-family: 'Merienda', cursive;
    font-size: 30px;
    font-weight: bold;
    color: white;
    letter-spacing: 10px;
}

.KKKlo .Pkh{
    font-family:'Julius Sans One', sans-serif ;
    font-size: 12px;
    font-weight: bold;
    color: burlywood;
    letter-spacing: 20px;
}

.llHYh{
    width: 92%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 0px;
    border-bottom: 1px solid darkgray;
    height: 75%;
}
</style>
