<template>
  <div>
    <section class="footer">
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
    </section>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="sass" scoped>

.footer{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 250px;
    width: 100vw;
    background-color: #000;
    color: white;
    font-family: 'Poppins', sans-serif;
}

.blc-1{
    
    display: flex;
    justify-content: space-around;
    padding: 20px;
    font-weight: 1;

}

.blc-1 .center{
    width: 80%;
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
}

.blc-1 .name{
    font-size: 30px;
}

.UHj{
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;
    padding: 20px;
    border-bottom: 1px solid darkgray;
}

.rgt{
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.UHj li{
    cursor: pointer;
}

.blc-1 i{
    cursor: pointer;
    font-size: 25px;
    color: darkgrey;
    margin: 0 10px;
}

.blc-2{
    display: flex;
    justify-content: space-around;
    font-weight: 100;
    margin-bottom: 20px;
    position: relative;
}

.blc-2 i{
    font-size: 20px;
}

.LLki{
    position: absolute;
    right: 50px;
    bottom: 10px;
    height: 50px;
    width: 50px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
}

.LLki a{
    text-decoration: none;
    color: inherit;
}


.LLki:hover{
    opacity: .8;
    color: #fff;
}

.rgt i:hover{
    opacity: .5;
}

.UHj li:hover{
    opacity: .5;
}

.LLki i{
    color: #000;
}

.blc-2 a{
    font-weight: 800;
}
</style>

