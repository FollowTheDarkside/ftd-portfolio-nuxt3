<template>
<div class="">
    <div class="main-text w-4/5 md:w-3/4 xl:w-2/3 mx-auto">
        <!-- <h1 class="text-3xl my-5 text-center">TOP</h1> -->
        <GridLayout/>
    </div>
</div>
</template>

<style lang="scss" scoped>
</style>

<script>
import GridLayout from "../components/GridLayout.vue";
export default {
//   name: "App",
    components: {
    GridLayout,
    },
    props: [],
    data () {
        return {
        }
    },
    computed: {
    },
    mounted () {
    },
}
</script>