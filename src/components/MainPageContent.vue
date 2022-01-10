<template>
    
    <div > 
        

        <title>W3.CSS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <body>

        <header class="w3-container w3-teal">
            <h1>Header new</h1>
        </header>
        

        <!-- <img src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg" alt="Car" style="width:100%"> -->



        <v-card
            id="profiledetails"
            class="mx-auto"
            max-width="450"
            max-height="450"
            tile
        >
            <v-img
            height="100%"
            src="https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-romantic-beautiful-rose-flower-background-design-flower-backgroundplant-backgroundholiday-image_70028.jpg"
            >
            <v-row
                align="end"
                class="fill-height"
            >
        
            <v-col
            align-self="start"
            class="pa-0"
            cols="12"
            >
            
            <div id="myface">
                <v-avatar
                    class="profile"
                    color="grey"
                    size="250"
                    tile
                >
                    <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                </v-avatar>
            </div>
          
            </v-col>
            <v-col class="py-0">
            <v-list-item
                color="rgba(0, 0, 0, .4)"
                dark
            >
                <div id="myprofession">
                    <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        Cheong Yoke Leng
                    </v-list-item-title>
                    <v-list-item-subtitle >
                        <p4 id="detail-subtitle"> Local Pre-School Teacher | Specialised in Chinese <br> Diploma in Early Childhood <br> An Undergraduate in Early Childhood (Chinese) </p4>
                    </v-list-item-subtitle>
                    </v-list-item-content>
                </div>
            </v-list-item>
            </v-col>
            </v-row>
            </v-img>
        </v-card>



        <article class="w3-container">
            <div id='intro-content'>
                <br>
                <p>A car is a wheeled, self-powered motor vehicle used for transportation. Most definitions of the term specify that cars are designed to run primarily on roads. (Wikipedia)</p>
                <br>
            </div>
        </article>

        <footer class="w3-container w3-teal">
        <h5>Footer</h5>
        </footer>
        </body>

    </div> 
</template>

<script>
export default {
  name: 'MainPageContent',

}
</script>

<style scoped>


    #detail-subtitle{
        color: black;
    }

    #intro-content{
        margin-left: 20px;
        font-size: 22px;
        font-family:Georgia, 'Times New Roman', Times, serif;
        color: blue;
    }

    #profiledetails{
        margin-top: 20px;
        height: 400px;
        float: left;
        color: black;
    }


    #profilecard{
        margin-top: 20px;
        margin-left: 20px;
        float: left;
    }

    #myface{
        margin-left: 100px;
        margin-top: 50px;
    }

    #myprofession{
        text-align: center;
        margin-right: 50px;
        color: black;
    }


</style>