<template>
<div class="">
    <div class="main-text w-5/6 md:w-1/2 2xl:w-1/3 mx-auto">
        <h1 class="text-3xl pt-5 text-center">BreakGAN feat. BBOY STEEZ</h1>
        <h3 class="text-1xl mt-4 text-center">2020/10</h3>
        <div class="flex justify-center mt-5 mb-10">
            <iframe class="rounded-lg w-full h-80 youtube" data-src="https://www.youtube.com/embed/tQmTFtPibCE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <p class="my-5">
            This is a video of a dance battle between a human dancer and an AI dancer. 
            AI learns pre-taken "BBOY STEEZ" dance footage. 
            A network called "GAN" is used for deep learning. 
            <NuxtLink class="my-link" to="https://youtu.be/x_3rIJVfVds" target="_blank">AI can generate new dance videos by learning a large amount of data.</NuxtLink>
        </p>
        <p class="my-5">
            <NuxtLink class="my-link" to="https://youtu.be/tudpECfk434" target="_blank">The video played by AI is determined based on the features of the human dancer's video captured from the webcam in real-time.</NuxtLink> 
            A machine learning model for skeleton detection was used to achieve this functionality.
        </p>
        <p class="my-5">
            The concept of this work is to make people aware of new possibilities through AI. 
            Breakdance(Breaking) has a high degree of freedom in dance, and originality is very important. 
            In GAN, there are moments that create movements that make the creator who is also a bboy feel fresh. 
            I thought that dance battle is also a communication between myself and the other party, and it fits the concept of this work. 
            I hope that the expression of dance can be expanded through AI.
        </p>
        <p class="my-5">
            In this work, the light and the projected image are controlled according to the audio. 
            If you want to know the technical details, please also check the following articles(Japanese).
        </p>
        <p class="my-5">
            こちらの映像は人間のダンサーと機械学習の技術を使って生成したAIのダンサーとのダンスバトルをイメージして制作しました。 
            人間のダンサーには世界的にも有名なブレイクダンサーであるBBOY STEEZさん（THE FLOORRIORZ）にご協力いただき、
            AIのダンサーもSTEEZさんのダンス映像を学習して生み出されました。 詳細は以下のnote記事をご参照ください。
        </p>
        <p class="my-5">
            [Credit]<br>
            Dancer: STEEZ (THE FLOORRIORZ / TAKE NOTICE)<br>
            Producer, Deep Learning, Visual Control: Naoyuki Hirasawa (Designium / DanceAI Project)<br>
            Lighting Design: Kuan-Ying Wu (Designium)<br>
            Videographer, Beatmaker: Jun Aoyama<br>
        </p>
        <p class="m-5">
            <ul class="list-disc">
                <li><NuxtLink class="my-link" to="https://note.com/thedesignium/n/n76db44572887" target="_blank">【作品解説】ダンスと機械学習をテーマにした映像「BreakGAN feat. BBOY STEEZ」を制作しました</NuxtLink></li>
                <li><NuxtLink class="my-link" to="https://prtimes.jp/main/html/rd/p/000000011.000043186.html" target="_blank">【人間 vs AIのダンスバトル！】デザイニウム、機械学習をつかった映像作品「BreakGAN feat. BBOY STEEZ」を公開</NuxtLink></li>
            </ul>
        </p>
    </div>
   
</div>
</template>
<script setup>
useHead({
  title: 'BreakGAN feat. BBOY STEEZ / FTD',
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
        console.log("work5 mounted...");
        initYoutubeIframe(this);
    }
}
</script>