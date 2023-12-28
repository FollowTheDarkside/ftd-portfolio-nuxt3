<template>
<div class="">
    <div class="main-text w-5/6 md:w-1/2 2xl:w-1/3 mx-auto">
        <h1 class="text-3xl pt-5 text-center">Generative Breaking</h1>
        <h3 class="text-1xl mt-4 text-center">2023/11-</h3>
        <div class="flex justify-center" >
            <img 
                class="my-5 rounded-lg"
                src="/image/works/work12/generative-breaking1.webp" 
                alt="ftd"
            />
        </div>
        <p class="my-5">
            Generative Breaking is an attempt to expand new dance expressions from breaking movements using a system that incorporates computer-generated chance, and is a term coined by the author, FTD. 
            Rather than visual expressions that partially use dance, I will explore the creation of dance movements that are impossible in terms of human thinking and skeletal structure, as well as the fun of visuals centered around dance, through an approach similar to that used in generative art.
        </p>
        <p class="my-5">
            I have summarized activities on <NuxtLink class="my-link" to="https://scrapbox.io/generative-breaking/" target="_blank">Scrapbox</NuxtLink>.
        </p>
        <h2 class="text-2xl mt-10 mb-5">Report</h2>
        <div class="flex justify-center mt-5 mb-10">
            <iframe class="rounded-lg w-full h-80 youtube" data-src="https://www.youtube.com/embed/SNfO2hrb5eQ?si=ZV_KvH5gXx0yBSAF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
   
</div>
</template>
<script setup>
useHead({
  title: 'Generative Breaking / FTD',
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
        console.log("work12 mounted...");
        initYoutubeIframe(this);
    }
}
</script>