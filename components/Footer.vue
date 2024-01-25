<template>
<div class="my-footer">
  <div class="table-cell text-left text-sm">
    <a class="btn-footer cursor-pointer opacity-0 active:opacity-100 duration-150" id="button-transform" ref="buttonTransform">TF</a>
  </div>
  <div class="table-cell text-center text-sm">
    <p>©2024 FollowTheDarkside</p>
  </div>
  <div class="table-cell text-right text-sm">
    <a class="btn-footer cursor-pointer opacity-0 active:opacity-100 duration-150" id="button-transparent" ref="buttonTransparent">TP</a>
  </div>
</div>
</template>

<style lang="scss" scoped>
.my-footer{
    color: rgba(25, 25, 25, 0.75);
    //background-color: rgba(250, 250, 250, 0.5);
    //box-shadow: 0px -2px 2px 1px rgba(0, 0, 0, 0.2);
    background-color: rgba(25, 25, 25, 0.05);
    //border-top: 1px solid rgba(25, 25, 25, 0.25);
    box-shadow: 0px -2px 2px 2px rgba(25, 25, 25, 0.05);
    position: absolute;
    bottom: 0;
    padding: 25px 15px;
    // margin-top: 120px;
    // text-align: center;
    display: table; 
    width: 100%;
}
.btn-footer{
  -webkit-touch-callout: none;
  -moz-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
}
</style>

<script>
export default {
  components: {},
  props: [],
  data () {
    return {
    }
  },
  computed: {
  },
  mounted () {
    console.log("Fotter mounted...");

    const btnTp = this.$refs.buttonTransparent;
    btnTp.addEventListener("click", () => {
      // console.log("button-transparent clicked...");
      this.toggleContentsTransparent()
    }, { passive: true });

    // Set background visual transform interaction
    let btnTf = this.$refs.buttonTransform;
    btnTf.addEventListener("mousedown", () => {
      this.$bus.$emit("TRANSFORM", true);
    }, { passive: true });
    btnTf.addEventListener("mouseup", () => {
      this.$bus.$emit("TRANSFORM", false);
    }, { passive: true });
    btnTf.addEventListener("touchstart", e => {
      e.preventDefault();
      this.$bus.$emit("TRANSFORM", true);
    }, { passive: true });
    btnTf.addEventListener("touchend", e => {
      e.preventDefault();
      this.$bus.$emit("TRANSFORM", false);
    }, { passive: true });
  },
  destroyed() {
  },
  methods: {
    toggleContentsTransparent(){
      const contents = document.getElementsByClassName("main-text");
      for(let i = 0; i < contents.length; i++) {
        contents[i].classList.toggle("transparent");
      }
      const sketches = document.getElementsByClassName("sketch");
      for(let i = 0; i < sketches.length; i++) {
        sketches[i].classList.toggle("clear");
      }
    },
  }
}
</script>