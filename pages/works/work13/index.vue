<template>
<div class="">
    <div class="main-text w-5/6 md:w-1/2 2xl:w-1/3 mx-auto">
        <h1 class="text-3xl pt-5 text-center">Acacia's secret</h1>
        <h3 class="text-1xl mt-4 text-center">2024/04</h3>
        <div class="flex justify-center mt-5 mb-10">
            <iframe class="rounded-lg w-full h-80 youtube" data-src="https://www.youtube.com/embed/1xZXFLml8es?si=f399xQFmEL7uCOEd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <p class="my-5">
            I made the music video for "Acacia's secret" from Aftergrow's new album "Acacia=Akasha".
        </p>
        <p class="m-5">
            <ul class="list-disc">
                <li><NuxtLink class="my-link" to="https://aftr0008.tumblr.com/" target="_blank">Acacia=Akasha</NuxtLink></li>
            </ul>
        </p>
    </div>
   
</div>
</template>
<script setup>
useHead({
  title: "Acacia's secret / FTD",
  meta: [
    {
      name: 'description',
      content: 'Work by FTD',
    },
  ],
});
</script>
<script>
export default {
    mounted () {
        console.log("work13 mounted...");
        initYoutubeIframe(this);
    }
}
</script>