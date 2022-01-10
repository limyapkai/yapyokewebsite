<template>
  <section>
    <header> Pricing Page </header>
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsHeroAlt :hero-alt="heroAlt" />
        <SectionsPricing />
        <SectionsBrands />
        <SectionsTestimonials />
        <hero-alt></hero-alt>
        <pricing></pricing>
        <brands></brands>
        <testimonials> </testimonials>
        
      </v-col>
    </v-row>
  </section>
</template>

<script>
import HeroAlt from '../sections/HeroAlt.vue'
import Pricing from '../sections/Pricing.vue'
import Brands from '../sections/Brands.vue'
import Testimonials from '../sections/Testimonials.vue'


export default {
  components: {
      Brands: Brands,
      Testimonials: Testimonials,
      Pricing: Pricing,
      HeroAlt: HeroAlt,
  },
  data() {
    return {
      heroAlt: [
        {
          src: 'pexels-andrea-piacquadio-3884440.jpg',
          heading: ' Pricing ',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Pricing and Plans',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem',
        },
      ],
    }
  },
}
</script>
