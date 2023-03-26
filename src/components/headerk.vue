<script setup>
 import { RouterView } from 'vue-router'
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>

<nav class="navbar navbar-expand-lg " id="taille">
      <div class="container-fluid"> 
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="espace_btn">
            <li class="nav-item">
            	<!-- <img src="../components/icons/Rectangle 4.png" alt=""> -->
              <RouterLink to="/"> <a class="nav-link active" aria-current="page" href="#" id="padij"> Accueil</a></RouterLink >
          
            </li>
            <li class="nav-item">
              <!-- <img src="../components/icons/Rectangle 3 (1).png" alt=""> -->
              <RouterLink to="/About"> <a class="nav-link active" href="#" id="padik">Contacte</a></RouterLink >

            </li>
       </ul>
        </div>
        <a class="navbar-brand" href="#"><img src="../components/icons/Ellipse1.png" alt=""></a>
    
      </div>
    </nav>

</template>

<style scoped>
*{
 		color:white !important;
 		font-family: 'Snowtop Caps', cursive !important;
 	}
 	nav{
    width:100% !important;

 		background-color:#0F0E17!important;
 	}
   
   
   
 	#espace_btn{
 		width:100% !important;
 		direction: flex;
 		justify-content: space-between;
 	}

 	a{
    text-decoration: none;
 		font-size:40px !important;
/* 		background-color:blue;*/

 	}

 img {
      width:87px !important;
      height:82px !important;
 }

  li{
/*  	background-color:red;*/
  	width:40vh !important;
  	display:flex !important;
  	justify-content:center !important;
  	align-items: center !important;
  	  }
#padij{
  margin-top:20px;
}
#padik{
	 margin-top:18px;
}

@media (min-width:1600px) {
  #taille{
  width:150% !important;
 }

 nav{
  width:150% !important;
 }
 }

</style>



    























