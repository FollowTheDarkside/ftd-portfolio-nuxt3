<template>
  <div class="">
    <Navbar class=""/>
    <slot class=""/>
    <Visual />
    <Footer />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  /* filter: blur(1rem); */
}

.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  /* filter: blur(1rem); */
}
</style>

<script>
export default {
    methods: {
    }
}
</script>