<template>
        <div class="contain_Polk">
            <div  class="ctn_Tous">
                <div class="container-3D" v-for="Api in Api" v-bind:key="Api.id">
                    <div class="JHgb">
                        <div class="front">
                            <div class="front-contain">
                                <div class="Hujk_1">
                                    <div class="img_"><img :src="Api.img" alt=""></div>
                                    <div class="name_">{{Api.name}}</div>
                                    <div class="prix_">{{Api.price}}£</div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="back">
                            <div class="back-contain">
                                <div class="contain-start">
                                    <span v-for="n in 5" class="" :class="{bgspan: n <= Api.starrating }" v-bind:key="n"></span>
                                </div>
                                <div class="Work">
                                    {{Api.description}}
                                </div>
                                <div class="contact">
                                    autre couleur : {{Api.color}}
                                </div>
                                <div class="localisation">
                                    <div class="Voir_arct"><button class="btn_vue_artc">Voir article</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  

            <div class="slid_">
            <div class="Lmpl">
                <div class="kOpmk">
                    <div class="left">
                        0
                    </div>
                    <div class="lldok">
                        <div class="vlr">
                            <span>0</span>
                        </div>
                        <input type="range" min="0" max="200" step="10" class="range_slid" v-model="price_choice">
                    </div>
                    
                    <div class="right">
                        200
                    </div>
                </div>
            </div>
            <div class="MBHi">
                <h1>Ventes Spécial</h1>
                <div class="LLLki">
                    Etiam viverra sit amet nulla pretium varius. 
                    In pulvinar dolor leo, eget tempus ante accumsan vitae. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed sit amet imperdiet magna. 
                    Maecenas nec nibh sit amet arcu accumsan aliquet quis vel nulla. 
                    Integer quis odio convallis, molestie enim sed.
                    Etiam viverra sit amet nulla pretium varius. 
                    In pulvinar dolor leo, eget tempus ante accumsan vitae. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                   
                </div>
                <div class="LLLki" style="font-weight:bold;">
                    Filtrer par prix
                </div>

                <div class="LLLki">
                    Prix max 200£
                </div>
            </div>
        </div>  
        </div>


    
</template>

<script>
export default {
    name:"produc",
    data: () => {
        return{
            price_choice:0
        }
       
    },
    computed:{
        Api(){
            $('.vlr span').html(this.price_choice)
            $('.vlr span').css('left', ((this.price_choice / 2) ) + "%")
            return this.$store.state.DataUs.filter((DataUs) => DataUs.price >= this.price_choice)
        }
    }, 
}
</script>

<style scoped>

.lIKOO{
    widows: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
}
    .Hujk{
    
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: none;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    padding: 80px 0;
    margin: 69px 0;
    position: relative;
    background-image: linear-gradient( 357deg
                        ,transparent 0,
                        rgba(0,41,82,-1.1) 1%, 
                        rgba(0,41,82,.5) 1%, 
                        rgba(0,41,81,.61) 8%, 
                        rgba(0,41,82,.8) 95%, 
                        rgba(0,41,82,.8)), 
                        url(../../../static/Logo-home/1.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    width: 1038px;
    min-height: 665px;
}

.Hujk_1 img{
    width: 150px;
    padding: 20px;
    background: rgba(0,41,82, 0.25);;
    clip-path: polygon(0 14%, 100% 0, 100% 84%, 0% 100%);
}

.Hujk_1{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    PADDING: 10px 30px;
    height: 345px;
    position: relative;
}

.container-3D:before{
    content: '';
    height: 42px;
    width: 1px;
    background: #000;
    position: absolute;
    top: 95.5%;
    left: 50%;
}

.Hujk_1 .name_{
    font-family: 'Julius Sans One', sans-serif;
    font-size: 19px;
    margin: 10px 0;
    color: blanchedalmond;
    text-align: center;
    border-bottom: 1px solid blanchedalmond;
}

.Hujk_1 .prix_ {
    font-family: 'Julius Sans One', sans-serif;
    font-weight: bold;
    color: white;
    padding: 10px;
    border: 4px solid burlywood;
    clip-path: polygon(0 14%, 100% 0, 100% 84%, 0% 100%);
}

.Voir_arct{
    width: 100%;

}

.Voir_arct .btn_vue_artc{
    padding: 10px 30px;
    margin: 10px 0;
    background: blanchedalmond;
    width: 100%;
    font-family: 'Julius Sans One', sans-serif;
    cursor: pointer;
    transition: .3s;
    border: 1px solid #000;
}

.btn_vue_artc:hover{
    opacity: .5;
}

.Hujk::before{
    content: 'Produit Populaires';
    position: absolute;
    left: 50%;
    top: -20px;
    transform: translate(-49.9%);
    height: auto;
    width: auto;
    border: 1px solid #000;
    color: #000;
    background: blanchedalmond;
    padding: 10px 20px;
    font-family: 'Julius Sans One', sans-serif;
}

/* */

.container-3D{
    height: 445px;
    width: 300px;
    perspective: 1300px;
    padding: 0px 20px 0 20px;
    border: 1px solid;
    transition: 1s all;
}

.front-contain, .back-contain{
    display: flex;
    justify-content: center;
    align-self: center;
    transform: translateZ(100px);
    backface-visibility: hidden;
    flex-direction: column;
    width: 100%;
    
}

.JHgb{
    display: flex;
    justify-content: center;
    position: relative;
    height: 100%;
    width: 100%;
    transition: 2s ease-in-out;
    transform-style: preserve-3d;
}

.container-3D:hover .JHgb:hover{
    transform: rotateY(180deg);
}

.front{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    PADDING: 10px 30px;
    background:#001d3d;
    height: 462px;
    position: relative;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    z-index: 1;
    clip-path: polygon(0 14%, 100% 0, 100% 84%, 0% 100%);
    width: 300px;
}


 .back{
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    PADDING: 40px 30px;
    background: #001d3d;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    z-index: 1;
    transform: rotateY(180deg);
    height: 462px;
    clip-path: polygon(0 0, 99% 18%, 100% 100%, 0 85%);
}


 .front .name{
    font-size: 28px;
    font-weight: 300;
    margin-bottom: 40px;
    font-family: 'Cinzel Decorative', cursive;
    text-align: center;
}
.front .work{
    font-size: 30px;
    font-weight: 300;
    text-transform: uppercase;
}


.back .Work{
    font-size: 14px;
    font-weight: 300;
    margin: 10px 0;
    font-family: 'Julius Sans One', sans-serif;
    border-bottom: 1px solid blanchedalmond;
    border-top: 1px solid blanchedalmond;
    padding: 15px 0;
    color: blanchedalmond;
}

.back .text, .back .taile{
    font-family: 'Julius Sans One', sans-serif;
    font-size: 17px;
    text-align: center;
}

.back .contact{
    font-size: 12px;
    font-weight: 600;
    margin: 10px 0;
    font-family: 'Julius Sans One', sans-serif;
    color: cyan;
}

.color{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 15px;
}
.color div{
    height: 25px;
    width: 25px;
    border:none;
    border-radius: 50%;
}
.color .red{
    background: crimson;
}

.color .green{
    background: green;
}

.color .Blue{
    background: blue;
}

.color .White{
    background: white;
}

.color .Black{
    background: black;
}

.back-contain span{
    height: 15px;
    width: 15px;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    border: 1px solid #000;
}

.bgspan{
    background-color: gold;
}

.contain-start {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-justify: distribute;
}

    .ctn_Tous{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 40px;
        
    }
 
  


  

  .range_slid{
      -webkit-appearance: none;
      height: 5px;
      width: 100%;
      background-color: #fff;
  }

  .vlr{
      width: 200px;
  }
  .vlr span{
    position: absolute;
    top: -59px;
    height: 50px;
    width: 50px;
    z-index: 2;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(-50%);
    color: #fff;
    font-weight: bold;
}

.vlr span::after{
    content: '';
    position: absolute;
    height: 50px;
    width: 50px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(45deg);
    z-index: -1;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-left-radius: 50%;
    background-color: #234263;
}

.range_slid::-webkit-slider-thumb{
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    background-color: #fff;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

.lldok{
    position: relative;
}

.MBHi{
    height: 535px;
    width: 300px;
    background: #001d3d;
    padding: 20px;
    clip-path: polygon(0 14%, 100% 0, 100% 84%, 0% 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.MBHi h1{
    color: blanchedalmond;
    text-transform: uppercase;
    font-family: 'Julius Sans One', sans-serif;
}

.MBHi .LLLki{
    color: #fff;
    text-transform: uppercase;
    font-family: 'Julius Sans One', sans-serif;
    font-size: 13px;
    margin: 15px 0;
}

    .kOpmk{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }

   .Lmpl{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 300px;
        background-color: #001d3d;
        padding: 20px;
        font-family:'Julius Sans One', sans-serif ;
        position: relative;
        border: 1px solid #000;
        color:white;
    }

.slid_{
    background-color: #234263;
}

  .range_slid{
      -webkit-appearance: none;
      height: 5px;
      width: 100%;
      background-color: #fff;
  }

  .vlr{
      width: 200px;
  }
  .vlr span{
    position: absolute;
    top: -59px;
    height: 50px;
    width: 50px;
    z-index: 2;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(-50%);
    color: #fff;
    font-weight: bold;
}

.vlr span::after{
    content: '';
    position: absolute;
    height: 50px;
    width: 50px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(45deg);
    z-index: -1;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-left-radius: 50%;
    background-color: #234263;
}

.range_slid::-webkit-slider-thumb{
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    background-color: #fff;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

.lldok{
    position: relative;
}



</style>