<template>
<div class="">
    <div class="main-text w-5/6 md:w-1/2 2xl:w-1/3 mx-auto">
        <h1 class="text-3xl pt-5 text-center">時空断裂的東海道五十三次を巡る旅 / Slit Tokaido Scan</h1>
        <h3 class="text-1xl mt-4 text-center">2020/05</h3>
        <div class="flex justify-center mt-5 mb-10">
            <iframe class="rounded-lg w-full h-80 youtube" data-src="https://www.youtube.com/embed/stGOXrW_BLM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <p class="my-5">
            This is a video that travels from Edo (Nihonbashi) at the starting point to 
            Kyoto (Sanjo Ohashi) at the ending point through "53 Stations of the Tokaido" with slit scan.
        </p>
        <p class="my-5">
            起点の江戸（日本橋）から終点の京都（三条大橋）まで、53の宿場を巡りながら時空断裂的に旅する映像です。
        </p>
        <p class="my-5">
            Music:<br>
            Toukaidou set 01 ～ ヒロシゲ36号 by Rin（クロネコラウンジ）
        </p>
        <p class="m-5">
            <ul class="list-disc">
                <li><NuxtLink class="my-link" to="https://hahaeatora.hateblo.jp/entry/2020/05/17/190000" target="_blank">Google Earthで時空断裂的に東海道五十三次を旅してみました</NuxtLink></li>
            </ul>
        </p>
    </div>
   
</div>
</template>
<script setup>
useHead({
  title: '時空断裂的東海道五十三次を巡る旅 / FTD',
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
        console.log("work3 mounted...");
        initYoutubeIframe(this);
    }
}
</script>