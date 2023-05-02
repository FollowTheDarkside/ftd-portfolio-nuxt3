<template>
<div class="">
    <div class="main-text w-5/6 md:w-1/2 2xl:w-1/3 mx-auto">
        <h1 class="text-3xl pt-5 text-center">ABOUT</h1>
        <div id="icon-area" >
            <nuxt-img preload  
                id="profile-icon"
                class="w-1/2 md:w-1/2 xl:w-1/3 my-5 rounded-lg"
                src="/image/about/ftd-mirror.jpg" 
                alt="ftd-icon"
            />
        </div>
        <p class="text-center mb-16">
            FTD<br>
            Naoyuki Hirasawa<br>
            Creative Coder / Visual Artist / Writer / BBOY
        </p>
        <h2 class="text-2xl">Biography</h2>
        <p class="my-5">
            FTD is a Kanagawa-based artist and bboy. 
            While making use of his career as a breakdancer and engineer, 
            he pursues a unique expression that is not bound by tools or environments.
            In recent years, he has been exploring for new visual expressions using programming and machine learning techniques.
        </p>
        <p class="mb-10">
            神奈川を拠点として活動するアーティストでありBBOY。
            ダンサーやエンジニアとしてのキャリアを活かしつつ、
            ツールや環境に囚われない独自の表現を追求している。
            近年はプログラミングや機械学習の技術を用いた新しいビジュアル表現を模索中。
        </p>
        <p class="mb-10">
            <span class="text-sm">Related:</span><br>
            <NuxtLink class="my-link" to="https://scrapbox.io/ftd-works-and-expt/" target="_blank">Other Works</NuxtLink> / <NuxtLink class="my-link" to="https://note.com/hahaeatora/n/n2fac607bffbd" target="_blank">ライター情報</NuxtLink> / <NuxtLink class="my-link" to="https://elite-amphibian-dde.notion.site/FTD-3bf5570278204a18b7d52bf519f3d1cb" target="_blank">経歴など</NuxtLink>
        </p>
        <h2 class="text-2xl">Reel</h2>
        <div class="flex justify-center mt-5 mb-10">
            <iframe class="rounded-lg w-full h-80" src="https://www.youtube.com/embed/4r089uitIDU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <h2 class="text-2xl">Link</h2>
        <p class="my-5">
            <span class="text-sm">SNS: </span><NuxtLink class="my-link" to="https://twitter.com/eatora22" target="_blank">Twitter</NuxtLink> / <NuxtLink class="my-link" to="https://www.instagram.com/followthedarkside/" target="_blank">Instagram</NuxtLink><br>
            <span class="text-sm">Video: </span><NuxtLink class="my-link" to="https://www.youtube.com/c/FTD22" target="_blank">YouTube</NuxtLink> / <NuxtLink class="my-link" to="https://vimeo.com/user118759981" target="_blank">Vimeo</NuxtLink><br>
            <span class="text-sm">Writing: </span><NuxtLink class="my-link" to="https://hahaeatora.hateblo.jp/" target="_blank">HatenaBlog</NuxtLink> / <NuxtLink class="my-link" to="https://note.com/hahaeatora/" target="_blank">note</NuxtLink> / <NuxtLink class="my-link" to="https://followthedarkside.medium.com/" target="_blank">Medium</NuxtLink> / <NuxtLink class="my-link" to="https://qiita.com/FollowTheDarkside" target="_blank">Qiita</NuxtLink><br>
            <span class="text-sm">Code: </span><NuxtLink class="my-link" to="https://github.com/FollowTheDarkside" target="_blank">GitHub</NuxtLink><br>
        </p>
    </div>
   
</div>
</template>
<style lang="scss" scoped>
#icon-area {
    display: flex;
    justify-content: center;
	position: relative;
	//height: 100%;
    #profile-icon{
        cursor: pointer;
        -webkit-touch-callout: none;
        -moz-touch-callout: none;
        -webkit-user-select: none;
        user-select: none;
        //pointer-events: none;
        //background: rgba(250, 0, 250, 0.9);
        //border-radius: 0.5rem;
        opacity: 1.0;
        display: block;
        aspect-ratio: 1 / 1;
        transition: .3s ease-out;
        transform: translateX(0);
    }
    .notdisp{
        opacity: 0.0;
    }
}
</style>
<script setup>
useHead({
  title: 'FOLLOW THE DARKSIDE',
  meta: [
    {
      name: 'description',
      content: 'About Page',
    },
  ],
  script: [
    {
    }
  ],
});
</script>
<script>
export default {
    components: {
    },
    props: [],
    data () {
        return {
            iconOpacity: 1.0,
            timerID: 0,
            iconPosX: 0,
        }
    },
    computed: {
    },
    mounted () {
        //console.log("ABOUT mounted....");
        this.$nextTick(() =>  {
            setTimeout(() =>  {
                // Set icon image interaction
                let icon = document.getElementById("profile-icon");
                icon.addEventListener("mousedown", e => {
                    let posX = e.pageX;
                    let clientRect = icon.getBoundingClientRect();
                    let clientCenterX = (clientRect.right+clientRect.left)/2+window.pageXOffset;
                    let clickedRightOfElment = posX > clientCenterX ? true : false;
                    this.moveIcon(clickedRightOfElment);
                }, { passive: true });
                icon.addEventListener("touchstart", e => {
                    e.preventDefault();
                    let posX = e.touches[0].pageX;
                    let clientRect = icon.getBoundingClientRect();
                    let clientCenterX = (clientRect.right+clientRect.left)/2+window.pageXOffset;
                    let clickedRightOfElment = posX > clientCenterX ? true : false;
                    this.moveIcon(clickedRightOfElment);
                }, { passive: true });
                icon.oncontextmenu = () => {
                    return false;
                };
            }, 600); // Wait for page transition
        });
    },
    methods: {
        reduceIconOpacity(){
            //console.log("iconOpacity:",this.iconOpacity);
            this.iconOpacity -= 0.1;
            if(this.iconOpacity < 0)this.iconOpacity=0.0;
            document.getElementById("profile-icon").style.opacity = this.iconOpacity; 
        },
        moveIcon(clickedRightOfElment){
            let disp = window.innerWidth / 5;
            this.iconPosX += clickedRightOfElment ? -disp : disp;
            document.getElementById("profile-icon").style.transform = 'translateX(' + (this.iconPosX) + 'px)';
        },
    }
}
</script>