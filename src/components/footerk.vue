<template>
<footer>
    <div class="container-fluid"  id="buttonk">
   
   <button type="button"  id="btnk"></button> 
    
</div>
    <div class="container-fluid" id="background-color">
         <div class="rows">

           <p class="color_white">tous les droits sont réservés 2023</p>
         </div>
        
        <ul id="row">
             <li><a href="#">	<img src="../components/icons/Rectangle8.png" alt=""></a></li>
             <li><a href="#">	<img src="../components/icons/Rectangle9.png" alt=""></a></li>
          </ul>
        </div>
</footer>




</template>



<style scoped>
.color_white{
    color: white;
    font-family: 'Snowtop Caps', cursive !important;
}
.container-fluid{
    width:100% !important;
    height:20vh !important;
    background-color:#187177 !important;
    display: flex !important;
    justify-content: space-around !important;
    align-items: center !important;
}


#row{
    width:30%;
    display: flex !important;
    flex-direction:row !important;
    /* background-color:blue;  */
    justify-content: space-around;
    
}

#color_orange{
    width:100% !important;
 height:10vh !important; 
 background-color:red;
}

li,a{
    list-style:none;
    text-decoration:none;
}
#buttonk{
    height:3vh !important;
    background-color: #CB8B2B !important;
}

#btnk{
    display:block;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: 1px solid #D9D9D9;
  background-color: #D9D9D9;
}



@media (min-width:1600px) {
    .container-fluid{
  width:150% !important;
 }

 header{
  width:150% !important;
 }
 }



</style>

<script setup>
</script>