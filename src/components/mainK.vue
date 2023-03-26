<template>
 
<div class="container-fluid" id="text_img">
    <div class="img-fluid">
     <img src="../components/icons/Rectangle61.png" alt="">
    </div>
    <div class="texte">
      <p>
         <h1>Conception Web Pro pour des projets en ligne performants : Votre partenaire idéal.</h1>
      </p>

    </div>
</div>

   
<div class="container-fluid"  id="teck" >
   <div class="rows">
   <p>
   Je suis un développeur web junior de 21 ans, compétent en HTML, CSS, JavaScript et utilisant Bootstrap et Vue.js. <br> 
   Je suis passionné par le développement web et j'aime créer des sites web innovants. <br>
    Je suis prêt à relever de nouveaux défis et à apprendre de nouvelles compétences pour satisfaire les besoins de mes clients. <br>
   </p>
</div>
<div class="rows" id="rowsk"> 
   <p>
      <img src="../components/icons/Frame1.png" alt="">

   </p>
</div>
</div>

</template>
<script setup>
</script>


<style scoped>
 #text_img{
    background-color:#FFFFFF;
    display: flex;

    justify-content: space-around;

    height:60vh;
    align-items: center;
 }

 .texte{
    display: flex;
    flex-direction: column;
 }

 #teck{
   display: flex !important;
   flex-direction: row !important;
   justify-content: space-around;
   background-color:#FFFFFF;
   align-items: center;
 }

 #rowsk{
   /* background-color:blue; */
  
  padding:10px;

}

h1{
   font-size:2rem;
}

@media (max-width:1600px){
   h1{
   font-size:1rem;
}
}


 @media (min-width:1600px) {
    .container-fluid{
  width:150% !important;
 }

 #text_img{
  width:150% !important;
 }
 #buttonk{
    width:150% !important;
 }


 #teck{
   width:150%!important; 
  
 }
 }



</style>