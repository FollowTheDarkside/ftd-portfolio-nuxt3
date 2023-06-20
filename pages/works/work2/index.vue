<template>
<div class="">
    <div class="main-text w-5/6 md:w-1/2 2xl:w-1/3 mx-auto">
        <h1 class="text-3xl pt-5 text-center">DanceAI Performance at STM32 Summit</h1>
        <h3 class="text-1xl mt-4 text-center">2019/04</h3>
        <div class="flex justify-center" >
            <img 
                class="my-5 rounded-lg"
                src="/image/works/work2/STM32_Summit_2019_demo.webp" 
                alt="ftd"
            />
        </div>
        <p class="my-5">
            At the opening of the STM32 Summit held in Shenzhen, China, 
            a demonstration performance by DanceAI using ORPHE TRACK, a shoe-shaped wearable device, was held. 
            In addition to real-time motion identification, 
            motion data used for deep learning was mapped in 3D space using t-SNE, a dimensionality reduction algorithm, 
            and visualized in conjunction with the performance using openFrameworks.
        </p>
        <p class="my-5">
            中国深センにて開催されたSTM32 Summit のオープニングにて、 
            靴型のウェアラブルデバイスであるORPHE TRACK を用いたDanceAI によるデモパフォーマンスを実施。
            リアルタイムな動作の識別に加え、深層学習に用いたモーションデータを次元削減アルゴリズムのt-SNE で三次元空間にマッピングし、
            openFrameworks を使ってパフォーマンスと連動したビジュアライズも行った。
        </p>
        <p class="m-5">
            <ul class="list-disc">
                <li><NuxtLink class="my-link" to="https://blog.st.com/day-1-stm32-summit-product-demonstrations-partner-showcase-and-application-focus-presentations/" target="_blank">STM32 Summit: product demonstrations, partner showcase and application focus presentations</NuxtLink></li>
                <li><NuxtLink class="my-link" to="https://twitter.com/eatora22/status/1126441944115077120" target="_blank">Performance at rehearsal</NuxtLink></li>
            </ul>
        </p>
    </div>
   
</div>
</template>
<script setup>
useHead({
  title: 'DanceAI Performance at STM32 Summit / FTD',
  meta: [
    {
      name: 'description',
      content: 'Work by FTD',
    },
  ],
});
</script>
