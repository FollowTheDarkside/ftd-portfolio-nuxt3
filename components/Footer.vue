<template>
<div class="my-footer">
  <div class="table-cell text-left text-sm">
    <a class="cursor-pointer opacity-0 hover:opacity-100 duration-150" id="button-transform">TF</a>
  </div>
  <div class="table-cell text-center text-sm">
    <p>©2023 FollowTheDarkside</p>
  </div>
  <div class="table-cell text-right text-sm">
    <a class="hover:text-gray-400 duration-150" id="button-transparent">TP</a>
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
#button-transparent{
  cursor: pointer;
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

    document.getElementById("button-transparent").addEventListener("click",function () {
      // console.log("button-transparent clicked...");
      const contents = document.getElementsByClassName("main-text");
      for(let i = 0; i < contents.length; i++) {
        contents[i].classList.toggle("transparent");
      }
      const sketches = document.getElementsByClassName("sketch");
      for(let i = 0; i < sketches.length; i++) {
        sketches[i].classList.toggle("clear");
      }
    }, { passive: true });

    // Set background visual transform interaction
    let btnTf = document.getElementById("button-transform");
    btnTf.addEventListener("mousedown", () => {
      this.$bus.$emit("TRANSFORM", true);
    }, { passive: true });
    btnTf.addEventListener("mouseup", () => {
      this.$bus.$emit("TRANSFORM", false);
    }, { passive: true });
  },
  destroyed() {
  },
  methods: {
  }
}
</script>