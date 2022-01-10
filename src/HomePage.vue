<template>


  <div> 
    
    <div class = "container1">
      <div id = "subcontainer1"> 
        <exp-card> </exp-card>
      </div>

      <div id = "subcontainer2">
        <main-carousel> </main-carousel>
      </div>
    </div>

    <div class =" container2">
      <main-page-content> </main-page-content>
    </div>
    
  </div>

  
</template>

<script>
// Add into APP.vue import MainNavigationBar from './components/MainNavigationBar.vue'
import ExpCard from './components/ExpCard.vue'
import MainCarousel from './components/MainCarousel.vue'
import MainPageContent from './components/MainPageContent.vue'

export default {
  name: 'HomePage',
  components: {
        //MainNavigationBar: MainNavigationBar,
        ExpCard: ExpCard,
        MainCarousel: MainCarousel,
        MainPageContent: MainPageContent,
}
}
</script>


<style scoped>

  .container1{
    float:left;
    margin-left: 10px;
  }

  .container2{
    float:left;
    margin-top: 50px;
  }

  
  #subcontainer1{
    float: left;
    max-width: 30%;
    min-width: 25%;
  }

  #subcontainer2{
    float: left;
    max-width: 60%;
    min-width: 600px;
    margin-left: 20px;
  }


</style>

