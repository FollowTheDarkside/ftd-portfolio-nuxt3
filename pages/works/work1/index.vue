<template>
<div class="">
    <div class="main-text w-5/6 md:w-1/2 2xl:w-1/3 mx-auto">
        <h1 class="text-3xl pt-5 text-center">Dance AI for Beginners</h1>
        <h3 class="text-1xl mt-4 text-center">2018/10</h3>
        <div class="flex justify-center mt-5 mb-10">
            <iframe class="rounded-lg w-full h-80" src="https://www.youtube.com/embed/fN873xzIX9s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <p class="my-5">
            In the break dance (bboying) which is spreading widely in recent years, 
            we developed a system which automatically discriminates the motion and feeds back the result. 
            This system incorporates an AI that uses deep learning of actions in a natural environment using shoes incorporating an acceleration sensor (Smart Footwear Orphe), 
            and classifies skills and steps of a dancer in real time You can evaluate its proficiency degree. 
        </p>
        <p class="my-5">
            Now that dance has become compulsory at the educational site, 
            it will be helpful to leaders who are not familiar with dancing. 
            Through this system we aim to spread the dance to the general public and further expand the expression by dancers.
        </p>
        <p class="my-5">
            近年広く普及しつつあるブレイクダンスにおいて、動作を自動的に判別してその結果をフィードバックするシステムを開発した。 
            このシステムには、加速度センサーを組み込んだ靴（スマートフットウェア Orphe）を使用し自然な環境下での動作を深層学習させたAIが組み込まれており、 
            リアルタイムでダンサーの技やステップを分類したりその熟達度を評価したりすることができる。 
        </p>
        <p class="my-5">
            教育現場でダンスが必修化された昨今、ダンスに詳しくない指導者の手助けにもなるであろう。 
            このシステムを通して一般社会へのダンスの普及やダンサーの表現をより拡張することを目指していく。
        </p>
        <p class="my-5">
            [Credit]<br>
            Director, Developer : Naoyuki Hirasawa<br>
            Researcher : Daichi Shimizu<br>
            Special Thanks: Junya Chikob, Tomoya Kotegawa, Tomohiro Matsuba, Jun Aoyama<br>
        </p>
        <p class="m-5">
            <ul class="list-disc">
                <li><NuxtLink class="my-link" to="https://followthedarkside.medium.com/dance-ai-classifies-and-visualizes-the-movements-of-breakdance-by-deep-learning-3a525300035" target="_blank">Dance AI Recognizes The Movements of Breakdance by Deep Learning</NuxtLink></li>
                <li><NuxtLink class="my-link" to="https://adaa.jp/ja/winners/winners2018.html" target="_blank">2018アジアデジタルアート大賞展FUKUOKA エンターテインメント（産業応用）部門 入賞</NuxtLink></li>
            </ul>
        </p>
    </div>
   
</div>
</template>
<script setup>
useHead({
  title: 'Dance AI for Beginners / FTD',
  meta: [
    {
      name: 'description',
      content: 'Work by FTD',
    },
  ],
});
</script>
