<template>
  <vue-p5 class="p5" @setup="setup" @draw="draw"></vue-p5>
</template>

<script>
import VueP5 from 'vue-p5';
export default {
  components: {
      "vue-p5": VueP5
    },
  methods: {
    setup(sketch) {
      
      /**
       *  Code aus eurer Setup Funktion hier
       *  Ihr müsst vor alle p5 Funktionen ein sketch. einfügen
       *  Also aus fill wird sketch.fill
       *  rect -> sketch.rect etc
      */

    },
    draw(sketch) {
      
      /* Eure Draw funktion hier. Hier des gleiche. Immer mit sketch. */
    }
  },
}
</script>

<style>

</style>