<template>
<div class="">
    <div class="main-text w-5/6 md:w-1/2 2xl:w-1/3 mx-auto">
        <h1 class="text-3xl pt-5 text-center">渋谷Processingさんぽ</h1>
        <h3 class="text-1xl mt-4 text-center">2023/06</h3>
        <div class="flex justify-center" >
            <img 
                class="my-5 rounded-lg"
                src="/image/works/work10/work10-zine1.webp" 
                alt="ftd"
            />
        </div>
        <div class="flex justify-center" >
            <img 
                class="my-5 rounded-lg"
                src="/image/works/work10/work10-zine2.webp" 
                alt="ftd"
            />
        </div>
        <p class="my-5">
            The author, who is not fond of crowds, took a walk in the streets of Shibuya. 
            I made a zine of the records and my own interpretation of the city, using the "Processing / p5.js" programming language, and decorated it in a nice way.
        </p>
        <p class="my-5">
            人混みが苦手な作者が渋谷の街を散歩しました。
            その記録と街に対する勝手な解釈を「Processing / p5.js」というプログラミング言語で、良い感じに装飾しZINE にまとめています。        </p>
        <p class="m-5">
            <ul class="list-disc">
                <li><NuxtLink class="my-link" to="https://www.hikarie8.com/cube/2023/05/pcd-tokyo-2023.shtml" target="_blank">Processing Community Day Tokyo 2023</NuxtLink></li>
            </ul>
        </p>
        <div class="flex justify-center mt-20 mb-5">
            <iframe class="rounded-lg w-full h-80" src="https://www.youtube.com/embed/xVDSdsx7wm8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
   
</div>
</template>
<script setup>
useHead({
  title: '渋谷Processingさんぽ / FTD',
  meta: [
    {
      name: 'description',
      content: 'Work by FTD',
    },
  ],
});
</script>
