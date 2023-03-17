<template>
  <section class="sketch">
    <canvas class="sketch__canvas" ref="canvas"></canvas>
  </section>
</template>

<script>
import Sketch from "./js/Sketch";

export default {
  name: 'sketch',
  components: {},
  props: [],
  data () {
    return {
    }
  },
  computed: {
  },
  mounted () {
    // Pass the canvas element
    if(!this.sketch){
      this.sketch = new Sketch({$canvas: this.$refs.canvas});
    }
    this.$bus.$emit("TRANSITION", this.$route.name);
  },
  watch: {
    "$route.name": function(_new, _old){
      this.$bus.$emit("TRANSITION", _new);

      // Remove background blur when moving pages
      const sketches = document.getElementsByClassName("sketch");
      for(let i = 0; i < sketches.length; i++) {
        sketches[i].classList.remove("clear");
      }
    }
  },
  unmounted() {
    // If assuming to create or destroy a canvas, write a process to stop processing here
  },
  methods: {
  }
}
</script>

<style>
  .sketch{
    width: 100vw;
    min-height: 100vh;
    position: fixed;
    top: 0;
    z-index: -1;
    filter: blur(0.2rem);
    transition: .3s ease-out;
  }
  .sketch.clear{
    filter: blur(0.0rem);
  }
</style>