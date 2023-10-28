<template>
<div class="">
    <div class="main-text w-5/6 md:w-1/2 2xl:w-1/3 mx-auto">
        <h1 class="text-3xl pt-5 text-center">BreakGAN</h1>
        <h3 class="text-1xl mt-4 text-center">2020/06</h3>
        <div class="flex justify-center mt-5 mb-10">
            <iframe class="rounded-lg w-full h-80 youtube" data-src="https://www.youtube.com/embed/WRGNWCJfY1U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <p class="my-5">
            This video is generatede by AI (machine learning).
        </p>
        <p class="my-5">
            PGGAN (Progressive Growing of GANs) learnd my dance style and generated images. 
            Creativity is important for breakdance (bboying, breakin'). 
            AI may help create new movements and silhouettes for bboys and bgirls.
        </p>
        <p class="my-5">
            DrumsRNN generated the drum beat. 
            I created <NuxtLink class="my-link" to="https://twitter.com/eatora22/status/1266252076255858690" target="_blank">a tool</NuxtLink> on browser using DrumsRNN (by TensorFlow.js) & Tone.js & p5.js for this work. 
            Drums are very important in dance music. 
            Freestyle with fresh music will help you realize new possibilities.
        </p>
        <p class="my-5">
            I'm not trying to replace human creativity with AI. 
            I use machine learning to pursue fresher creativity. 
        </p>
        <p class="my-5">
            I also used TouchDesigner and Adobe Premiere Pro to improve the quality of the video work. 
            The quality of the work will be improved by increasing the learning data and using different models.
        </p>
        <p class="my-5">
            こちらの映像と音楽は機械学習の技術を使って制作されたものです。 
            特に映像についてはBBOYでもある私が実際に踊っている様子をAIが学習して生成されました。 
            詳細は以下のnote記事をご参照ください。
        </p>
        <p class="m-5">
            <ul class="list-disc">
                <li><NuxtLink class="my-link" to="https://note.com/thedesignium/n/nb319920b15f8" target="_blank">【作品解説】PGGANを使って新しいダンス表現を模索する話【BreakGAN】</NuxtLink></li>
            </ul>
        </p>
    </div>
   
</div>
</template>
<script setup>
useHead({
  title: 'BreakGAN / FTD',
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
        console.log("work4 mounted...");
        initYoutubeIframe(this);
    }
}
</script>