<template>
<div class="container-fluid" id="taille">
  <div class="row">
     <div class="col" id="formulaire">
     <form action="https://formspree.io/f/mwkjnaek" method="POST">
        <br>
        <br>
        <input type="name" name="name" id="" placeholder="Nom :  " atr>

        <br>
        <br>
        <input type="email" name="email" id="" placeholder="Email :">
        <br>
        <br>
         <input type="text" name="message" id="sujet" placeholder="sujet" >
         <br>
         <br>
         <p class="center_text">
         <button type="submit" id="button" class="btn btn-primary">envoyer</button>
         </p>
     </form>
     </div>
     <div class="col">
 <div class="img_div">
     <p class="imgk">
      <img src="../components/icons/Rectangle33.png" alt="">
     </p>
 </div>
   </div>
   <div class="col" id="center">
   
 <div id="map"></div>
 <br>
 <h2>{{ address }}</h2>
  </div>
  </div>
</div>
</template>
<script>
import axios from 'axios';
import L from 'leaflet';


export default {
  data() {
    return {
      address: '',
      latlng: [0, 0],
      zoom: 13,
    };
  },
  mounted() {
    this.getLatlng();
  },
  methods: {
    async getLatlng() {
      const url = 'https://nominatim.openstreetmap.org/search?q=Paris&format=json&limit=1';
      const response = await axios.get(url);
      this.address = response.data[0].display_name;
      this.latlng = [response.data[0].lat, response.data[0].lon];
      this.initMap();
    },
    initMap() {
      const map = L.map('map').setView(this.latlng, this.zoom);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(map);
      L.marker(this.latlng).addTo(map);
    },
  },
};

</script>
<style scoped>
#formulaire{
    background-color:white;
    display: flex;
    justify-content: center;
}
#taille{
 width:150% !important;
 background-color:white;
}
input{
    width:70vh;
    height:7vh;
    border-radius:30px;
    border:1px solid black;
    outline:none;
    margin:20px;
}

 input::placeholder{
    padding-left:10%;
    color: black;
 
 }

 input:focus{
    /* background-color: aqua; */
    padding:17px;
 }
 #sujet{
   height:200px;
 }
 #sujet::placeholder{
    justify-content: flex-start;
    color: black;
 
 }
 .center_text{
  background-color:white;
  display: flex;
  justify-content: center;
 }

 #button{

  height:7vh;
  width:20vh;
  border-radius:30px;
  background-color:white;
  color:black;
  border:1px solid black;
 }


 .img_div{
   display: flex;
   justify-content: center;
   /* align-items: center; */
   background-color:white;
     width: auto;
 }

 img{
   padding-top:20%;
  height:90%; 
  width:200;
  
 }
 .imgk{
   background-color:white;
   /* height:10%; */
 }

 
 #map {
  height:500px;
  width:500px;
}
#center{
  background-color:white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h2{
  text-align: center;
}
 


@media (min-width:1600px) {
  #taille{
  width:150% !important;
  /* background-color:blue; */
 }

 }

 @media(max-width:1600px){
       
   
 }


</style>