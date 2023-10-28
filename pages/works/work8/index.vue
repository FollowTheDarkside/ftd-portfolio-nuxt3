<template>
<div class="">
    <div class="main-text w-5/6 md:w-1/2 2xl:w-1/3 mx-auto">
        <h1 class="text-3xl pt-5 text-center">路地裏拡張</h1>
        <h3 class="text-1xl mt-4 text-center">2022/09</h3>
        <div class="flex justify-center mt-5 mb-10">
            <iframe class="rounded-lg w-full h-80 youtube" data-src="https://www.youtube.com/embed/haA3ctQk2LQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <p class="my-5">
            A strolling video in which the boundary between reality and virtuality blurs, making it difficult to tell what is real. 
            Based on a single short alleyway, the space perceived by the viewer is expanded by combining conventional video production software as well as programming, 3D scanning, and machine learning methods. 
            This was screened at FRENZ2022.
        </p>
        <p class="my-5">
            現実と仮想の境界が曖昧となり何が本物か分からなくなる散歩映像。 
            1つの短い路地裏をベースとして、 従来の映像制作ソフトのみならずプログラミングや3Dスキャン、機械学習といった手法と組み合わせることで視聴者が認識する空間を拡張する。 
            FRENZ2022にて上映。
        </p>
        <p class="my-5">
            Music:<br>
            星垂る by EIJEY
        </p>
        <p class="m-5">
            <ul class="list-disc">
                <li><NuxtLink class="my-link" to="https://frenz.jp/2022/" target="_blank">FRENZ2022</NuxtLink></li>
                <li><NuxtLink class="my-link" to="https://followthedarkside.medium.com/making-of-%E8%B7%AF%E5%9C%B0%E8%A3%8F%E6%8B%A1%E5%BC%B5-3f9229557cd8" target="_blank">Making of “路地裏拡張”</NuxtLink></li>
            </ul>
        </p>
    </div>
   
</div>
</template>
<script setup>
useHead({
  title: '路地裏拡張 / FTD',
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
        console.log("work8 mounted...");
        initYoutubeIframe(this);
    }
}
</script>