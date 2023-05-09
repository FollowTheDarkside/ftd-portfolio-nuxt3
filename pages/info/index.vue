<template>
<div class="">
    <div class="main-text w-5/6 md:w-1/2 2xl:w-1/3 mx-auto">
        <h1 class="text-3xl pt-5 text-center">INFO</h1>
        <h2 class="text-2xl my-5">Writings</h2>
        <p class="mb-10">
            <span class="date-text">2023/05</span><br>
            <NuxtLink class="my-link" to="https://sanpoo.jp/article/kotobukicho-midnight-sanpo/" target="_blank">深夜の横浜寿町を散歩する / サンポー</NuxtLink><br>
            <span class="date-text">2023/02</span><br>
            <NuxtLink class="my-link" to="https://sanpoo.jp/article/shonan-sea-sanpo/" target="_blank">湘南の海を全部歩く / サンポー</NuxtLink><br>
            <span class="date-text">2022/08</span><br>
            <NuxtLink class="my-link" to="https://sanpoo.jp/article/nishinari-midnight-sanpo/" target="_blank">深夜の西成あいりん地区を散歩する / サンポー</NuxtLink><br>
            <span class="date-text">2022/07</span><br>
            <NuxtLink class="my-link" to="https://sanpoo.jp/article/negishi-yukashitsu-sanpo/" target="_blank">【床質散歩】ダンサー目線で根岸駅から新杉田駅まで歩く / サンポー</NuxtLink><br>
            <span class="date-text">2020-21</span><br>
            <NuxtLink class="my-link" to="https://note.com/thedesignium/m/ma25e9a7c5880" target="_blank">BBOYエンジニア TECHブログ / デザイニウム</NuxtLink><br>
            <span class="date-text">2020/02</span><br>
            <NuxtLink class="my-link" to="https://www.jstage.jst.go.jp/article/pjsai/JSAI2020/0/JSAI2020_3D5OS22b03/_article/-char/ja/" target="_blank">ブレイクダンスにおける深層学習を用いたダンサーの情動状態の可視化と文化支援</NuxtLink><br>
            <span class="date-text">2019/02</span><br>
            <NuxtLink class="my-link" to="https://www.jstage.jst.go.jp/article/pjsai/JSAI2019/0/JSAI2019_2C1J1203/_article/-char/ja" target="_blank">深層学習を利用したブレイクダンスにおける新しい価値の創出・評価システムの開発</NuxtLink><br>
            <span class="date-text">2018/07</span><br>
            <NuxtLink class="my-link" to="https://ipsj.ixsq.nii.ac.jp/ej/index.php?active_action=repository_view_main_item_detail&page_id=13&block_id=8&item_id=190839&item_no=1" target="_blank">深層学習を利用したブレイクダンスにおける動作の判別・可視化システムの開発とその応用</NuxtLink><br>
        </p>
        <h2 class="text-2xl mb-5">Media / Presentation</h2>
        <p class="mb-10">
            <span class="date-text">2022/12</span><br>
            <NuxtLink class="my-link" to="http://www.sigskl.org/activity/pg146.html" target="_blank">第38回身体知研究会 招待講演「Introduction to DanceAI Project」</NuxtLink><br>
            <span class="date-text">2020/05</span><br>
            <NuxtLink class="my-link" to="https://www.youtube.com/watch?v=8poKOxl6j8U&t=1640s" target="_blank">TensorFlow.js Community Show & Tell #2</NuxtLink><br>
            <span class="date-text">2019/08</span><br>
            <NuxtLink class="my-link" to="https://www.aps-web.jp/magazine/8118/" target="_blank">APS - 走り始めた“AIシューズ”。STM32マイコンが楽しさを加速。</NuxtLink><br>
            <span class="date-text">2018/12</span><br>
            <NuxtLink class="my-link" to="https://www.sigdance.site/cypher-session-vol-1" target="_blank">SIGDance - Cypher Session vol. 1</NuxtLink><br>
            <span class="date-text">2018/07</span><br>
            <NuxtLink class="my-link" to="https://tomoruba.eiicon.net/articles/531" target="_blank">TOMORUBA - 【イベントレポート】 デジタルヘルスケア先進国・イスラエルのキーパーソンたちが集結！OKIとの共創によって生み出される世界観とは？</NuxtLink><br>
        </p>
        <h2 class="text-2xl mb-5">Exibition</h2>
        <p class="mb-10">
            <span class="date-text">2019/11</span><br>
            <NuxtLink class="my-link" to="https://collab.t-kougei.ac.jp/5th-exhibition/" target="_blank">カラボギャラリー第5回企画展-色と対話する展-Talking with Color</NuxtLink><br>
        </p>
        <h2 class="text-2xl mb-5">Develop / Tool</h2>
        <p class="mb-10">
            <NuxtLink class="my-link" to="https://github.com/FollowTheDarkside/touchdesigner-utils" target="_blank">TouchDesigner Utils</NuxtLink><br>
            <NuxtLink class="my-link" to="https://github.com/FollowTheDarkside/vite-ts-web-sketches" target="_blank">vite-ts-web-sketches</NuxtLink><br>
            <NuxtLink class="my-link" to="https://github.com/FollowTheDarkside/SensorDataRecorder" target="_blank">Sensor Data Recorder</NuxtLink><br>
            <NuxtLink class="my-link" to="https://github.com/FollowTheDarkside/Orphe-Music-Controller-Sample" target="_blank">Orphe Music Controller Sample</NuxtLink><br>
        </p>
    </div>
</div>
</template>
<style lang="scss" scoped>
.date-text{
  font-size: 0.75rem;
}
</style>
<script setup>
useHead({
  title: 'FOLLOW THE DARKSIDE',
  meta: [
    {
      name: 'description',
      content: 'Info Page',
    },
  ],
});
</script>