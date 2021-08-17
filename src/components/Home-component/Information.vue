<template>
  <div class="bloc_G_CA center_1">
    <div class="bloc_1_CA">
      <div class="lgo"><i class="far fa-calendar-check"></i></div>
      <div class="txt-gras">SERVICE CLIENT 24H/24 ET 7J/7</div>
      <div class="Gyg">Appelez-nous à tout moment</div>
    </div>
    <div class="bloc_1_CA">
      <div class="lgo"><i class="fas fa-laptop"></i></div>
      <div class="txt-gras">RETOURS EN LIGNE FACILES</div>
      <div class="Gyg">Envoyer dans les 15 jours</div>
    </div>
    <div class="bloc_1_CA">
      <div class="lgo"><i class="fas fa-truck-moving"></i></div>
      <div class="txt-gras">LIVRAISON GRATUITE DANS LE MONDE</div>
      <div class="Gyg">Livraison en 72H</div>
    </div>
  </div>
</template>

<script>
export default {
    name:"Information"
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Advent+Pro:wght@100&family=Merienda&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Merienda&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Merienda&family=Tangerine&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Encode+Sans+SC:wght@100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200&display=swap');

.header{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient( 357deg
                                        ,transparent 0,rgba(0,0,0,-1.1) 1%, 
                                        rgba(0,0,0,.5) 1%,
                                        rgba(0,0,0,.61) 8%, 
                                        rgba(0,0,0,.8) 95%,
                                        rgba(0,0,0,.8)), 
                                        url(../../../static/Logo-home/1.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
}

.mini-nmeSite h1{
    font-family: 'Merienda', cursive;
    font-size: 14px;
    font-weight: 100;
    color: bisque;
    text-transform: uppercase;
}

.nmeSite h1{
    font-family: 'Merienda', cursive;
    font-size: 60px;
    letter-spacing: 7px;
    font-weight: 100;
    color: white;
    margin: 0;
    text-align: center;
}

.header .wel{
    font-family: 'Tangerine', cursive;
    font-size: 80px;
    color: rgb(241, 156, 52);
    text-align: center;
}


.top{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    z-index: 1;
    background-color: #000;
}

.JiiH{
    display: flex;
    list-style: none;
    padding: 0;
}

.JiiH li{
    padding: 10px 40px;
    color: blanchedalmond;
    text-transform: uppercase;
    font-family: 'Julius Sans One', sans-serif;
    margin: 0 5px;
    transition: .5s;
    cursor: pointer;
}

.JiiH .entour{
    border: 1px solid blanchedalmond;
}

.JiiH li:hover{
    background-color: rgba(255, 255, 255, .1);
}

.center-Head .slogan{
    font-family: 'Julius Sans One', sans-serif;
    font-size: 24px;
    color: rgb(173, 137, 93);
    text-align: center;
    letter-spacing: 30px;
}

a{
    text-decoration: none;
}

.ctn{
    display: grid;
}

.contain-accueil{
    margin-top: -8px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}



.bloc_G_CA{
    margin: 40px 0;
    display: flex;
    justify-content: space-around;
    width: 100%;
    background-image: linear-gradient( 357deg
                                        ,transparent 0,rgba(0,0,0,-1.1) 1%, 
                                        rgba(0,0,0,.5) 1%,
                                        rgba(0,0,0,.61) 8%, 
                                        rgba(0,0,0,.8) 95%,
                                        rgba(0,0,0,.8)), 
                                        url(../../../static/Logo-home/1.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    padding: 30px;
}

.bloc_1_CA{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 200px;
    border: 1px solid lightblue;
    padding: 40px 50px;
    font-family: 'Titillium Web', sans-serif;
    border: none;
    
}

.bloc_1_CA:nth-child(2n){
    border-left: 1px solid blanchedalmond;
    border-right: 1px solid blanchedalmond;
}

.bloc_1_CA .lgo{
    font-size: 45px;
    color: rgb(223, 153, 49);
    
}

.txt-gras{
    font-family: 'Titillium Web', sans-serif;
    font-weight: bold;
    font-size: 20px;
    color: burlywood;
    text-align: center;
}

.Gyg{   
    color: white;
    text-align: center;
}

.addBox-shadow{
    background: rgba(0,0,0,1);
}


</style>