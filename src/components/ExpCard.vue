<template>
  <v-card
    min-width="200"
    max-width= "500"
    class="mx-auto"
  >

    <v-container fluid style="margin: 0px; padding: 0px; width: 100%">
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="#385F73"
            dark
          >
            <v-card-title class="text-h5">
              Are you a Pre-School Teacher?
            </v-card-title>

            <v-card-subtitle>Visit our flagship site to find out more about inquiry projects that you can do!</v-card-subtitle>

            <v-card-actions>
              <v-btn text>
                Click Here
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-h5"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    v-if="item.artist === 'Ellie Goulding'"
                    class="ml-2 mt-3"
                    fab
                    icon
                    height="40px"
                    right
                    width="40px"
                  >
                    <v-icon>mdi-play</v-icon>
                  </v-btn>

                  <v-btn
                    v-else
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                  >
                    See Limited Designs
                  </v-btn>
                </v-card-actions>
              </div>

              <div id="small-coaster"> 
                <v-avatar class="ma-3" size="150" tile>
                  <v-img :src="item.src"></v-img>
                </v-avatar>


              </div>

            </div>
          </v-card>
        </v-col>
      </v-row>

    </v-container>
  </v-card>
</template>

<script>
  export default {
    name: 'ExpCard',
    data: () => ({
      items: [

         {
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Yours Truly',
          artist: 'Custom Premium Coaster',
        },

        {
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Flowers in the Air',
          artist: 'Selected Air-Dried Flowers',
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Crystals Mythical',
          artist: 'Made with Swarovski Crystal Elements',
        },
      ],
    }),
  }
</script>

<style scoped>

.mx-auto{   
    margin-top: 120px;
    margin-left: 20px;
}
  #small-coaster{
    margin-left: 15px;
    padding-bottom: 12px;
    padding-top: 12px;
  }


</style>