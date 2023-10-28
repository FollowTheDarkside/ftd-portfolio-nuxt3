<template>
<div class="">
    <div class="main-text w-5/6 md:w-1/2 2xl:w-1/3 mx-auto">
        <h1 class="text-3xl pt-5 text-center">THE FRESHEST AI</h1>
        <h3 class="text-1xl mt-4 text-center">2021/08</h3>
        <div class="flex justify-center mt-5 mb-10">
            <iframe class="rounded-lg w-full h-80 youtube" data-src="https://www.youtube.com/embed/RVjdmTPlrQI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <p class="my-5">
            Breakin' is a popular street dance worldwide. One of the reasons it has been so spread is the value of originality. 
            As dancers compete with each other for originality, the range of dance styles has expanded, and breakin' has grown as a culture. 
        </p>
        <p class="my-5">
            We developed "DanceAI", which inspires such dancers to reevaluate their individual originality and facilitates their growth. 
            By training a large amount of the dancers' original movements, DanceAI can provide real-time feedback on the dancers' movements. 
            With this feedback, dancers can dig deeper into their own style.
        </p>
        <p class="my-5">
            ブレイクダンスは世界的に普及した人気のあるダンスである。 ここまで大きくなった要因として挙げられるのがオリジナリティーという価値観である。 
            ダンサーたちがお互いのオリジナリティーを競い合うことでスタイルの幅が広がり、ブレイクダンスはカルチャーとしても成長してきた。 
        </p>
        <p class="my-5"> 
            そんなダンサーに個々のオリジナリティーを見つめ直し、より成長するきっかけを与えるために開発されたのがダンスAIである。 
            ダンスAIに各ダンサーの創造した動きを大量に機械学習させることで、AIはダンサーの動きに対してリアルタイムでフィードバックしてくれる。 
            そのフィードバックを受けてダンサーは自分自身のスタイルを深く掘り下げることができる。
        </p>
        <p class="my-5">
            このシステムでのポイントは学習データの動きを正しく認識できることではない。 
            AIがダンサー自身が感じるものと異なるフィードバックをした時に、ダンサーには何故こうなったのか考えるきっかけを与えることができる。 
            赤の他人ではないダンサー自身のダンスを学習したAIであるからこそ、ダンサーは自身の固定概念に囚われず自分のオリジナリティーと向き合うことができるのではないかと私たちは考えている。 
        </p>
        <p class="my-5">
            しかし、オリジナリティーにとっては動きだけでなくキャラクターや音楽性も非常に重要であり、今作の手段だけで十分だとは言えない。 
            オリジナリティーをより深く追求するために私たちは何ができるだろうか。
        </p>
        <p class="my-5">
            [Credit]<br>
            Dancer: KAZUKI ROCK (BODY CARNIVAL), SHADE (ARIYA)<br>
            Producer, Director, Developer: Naoyuki Hirasawa a.k.a FollowTheDarkside<br>
            Developer: Hiroya Satake a.k.a Silent<br>
            Developer: Junya Kobayashi a.k.a Chikob<br>
            Videographer, Beatmaker: Jun Aoyama<br>
            Researcher: Daichi Shimizu a.k.a. Daichi
        </p>
        <p class="m-5">
            <ul class="list-disc">
                <li><NuxtLink class="my-link" to="https://adaa.jp/ja/winners/winners2021.html" target="_blank">2021アジアデジタルアート大賞展FUKUOKA エンターテインメント（産業応用）部門 優秀賞</NuxtLink></li>
            </ul>
        </p>
    </div>
</div>
</template>
<script setup>
useHead({
  title: 'THE FRESHEST AI / FTD',
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
        console.log("work6 mounted...");
        initYoutubeIframe(this);
    }
}
</script>