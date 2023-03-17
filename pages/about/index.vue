<template>
<div class="">
    <div class="main-text w-5/6 md:w-1/2 2xl:w-1/3 mx-auto">
        <h1 class="text-3xl pt-5 text-center">ABOUT</h1>
        <!-- at Center -->
        <div id="icon-area" >
            <!-- Simple icon & For opacity interaction -->
            <!-- <img 
                id="profile-icon"
                class="w-1/2 md:w-1/2 xl:w-1/3 my-5 rounded-lg"
                src="~/assets/image/ftd-mirror.jpg" 
                alt="ftd"
            /> -->
            <!-- For simple gif interaction -->
            <!-- <img class="w-1/2 md:w-1/2 xl:w-1/3 my-5 rounded-lg" 
                src="/image/about/000001.jpg" 
                alt="ftd-icon" 
                onmouseover="this.src='/image/about/FTD-icon-displace.gif'" 
                onmouseout="this.src='/image/about/000001.jpg'"
            /> -->
            <!-- For gif hover interaction -->
            <nuxt-img preload class="w-1/2 md:w-1/2 xl:w-1/3 my-5 rounded-lg" 
                src="/image/about/FTD-icon-displace.gif"
                alt="ftd-icon" 
            />
            <nuxt-img preload class="w-1/2 md:w-1/2 xl:w-1/3 my-5 rounded-lg" 
                src="/image/about/FTD-icon-000001.jpg" 
                alt="ftd-icon" 
            />
        </div>
        <p class="text-center mb-16">
            FTD<br>
            Naoyuki Hirasawa<br>
            Creative Coder / Visual Artist / Writer / BBOY
        </p>
        <!-- at Left -->
        <!-- <div >
            <img 
                class="w-1/2 md:w-1/2 my-5 rounded-lg"
                src="~/assets/image/ftd-mirror.jpg" 
                alt="ftd"
            />
        </div>
        <p class="mb-16">
            FTD a.k.a Naoyuki Hirasawa<br>
            Creative Coder / Visual Artist / Writer / BBOY
        </p> -->
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
            ポートフォリオ：<NuxtLink class="my-link" to="https://elite-amphibian-dde.notion.site/FTD-3bf5570278204a18b7d52bf519f3d1cb" target="_blank">詳細版</NuxtLink> / <NuxtLink class="my-link" to="https://note.com/hahaeatora/n/n2fac607bffbd" target="_blank">ライター版</NuxtLink>
        </p>
        <h2 class="text-2xl">Reel</h2>
        <div class="flex justify-center mt-5 mb-10">
            <!-- <iframe class="rounded-lg" width="560" height="315" src="https://www.youtube.com/embed/4r089uitIDU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
            <iframe class="rounded-lg w-full h-80" src="https://www.youtube.com/embed/4r089uitIDU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <h2 class="text-2xl">Link</h2>
        <p class="my-5">
            SNS: <NuxtLink class="my-link" to="https://twitter.com/eatora22" target="_blank">Twitter</NuxtLink> / <NuxtLink class="my-link" to="https://www.instagram.com/followthedarkside/" target="_blank">Instagram</NuxtLink><br>
            Video: <NuxtLink class="my-link" to="https://www.youtube.com/c/FTD22" target="_blank">YouTube</NuxtLink> / <NuxtLink class="my-link" to="https://vimeo.com/user118759981" target="_blank">Vimeo</NuxtLink><br>
            Writing: <NuxtLink class="my-link" to="https://hahaeatora.hateblo.jp/" target="_blank">HatenaBlog</NuxtLink> / <NuxtLink class="my-link" to="https://note.com/hahaeatora/" target="_blank">note</NuxtLink> / <NuxtLink class="my-link" to="https://followthedarkside.medium.com/" target="_blank">Medium</NuxtLink> / <NuxtLink class="my-link" to="https://qiita.com/FollowTheDarkside" target="_blank">Qiita</NuxtLink><br>
            Code: <NuxtLink class="my-link" to="https://github.com/FollowTheDarkside" target="_blank">GitHub</NuxtLink><br>
        </p>
    </div>
   
</div>
</template>
<style lang="scss" scoped>
// #profile-icon{
//     cursor: pointer;
//     //background: rgba(250, 0, 250, 0.9);
//     //border-radius: 0.5rem;
//     opacity: 1.0;
//     display: block;
//     transition: .3s ease-out;
// }
// [v-cloak] {
//   display: none;
// }
#icon-area {
    display: flex;
    justify-content: center;
	position: relative;
	//height: 100%;
    img{
        display: block;
        //position: absolute;
        aspect-ratio: 1 / 1;
        opacity: 1;
        transition: .3s ease-out;
    }
    img:nth-of-type(1) {
        left: 0%;
        position: relative;
	    //opacity: 0.0;
    }
    img:nth-of-type(2) {
        //left: 0%;
        position: absolute;
	    //opacity: 0;
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
        }
    },
    computed: {
    },
    mounted () {
        //console.log("ABOUT mounted....");
        this.$nextTick(() =>  {
            setTimeout(() =>  {
                // // Set icon image interaction (Effects that gradually disappear while the mouse is pressed)
                // let icon = document.getElementById("profile-icon");
                // icon.addEventListener("mousedown", () => {
                //     this.timerID = setInterval(this.reduceIconOpacity.bind(this), 100);
                // }, { passive: true });
                // icon.addEventListener("mouseup", () => {
                //     clearInterval(this.timerID);
                // }, { passive: true });

                // Set icon image interaction (Play GIF on hover)
                let icon = document.getElementById("icon-area");
                if(icon.children.length>0){
                    //console.log("img2:", icon.lastElementChild)
                    let iconImg = icon.lastElementChild;
                    iconImg.addEventListener("mouseenter", () => {
                        //console.log("enter...")
                        for (let i = 0; i < icon.children.length; i++) {
                            if(icon.children[i].tagName == "IMG"){
                                if(i==0){
                                    icon.children[i].src = "/image/about/FTD-icon-displace.gif"
                                    clearTimeout(this.timerID);
                                }else{
                                    icon.children[i].classList.add("notdisp");
                                }
                            }
                        }
                    }, { passive: true });
                    iconImg.addEventListener("mouseleave", () => {
                        //console.log("leave...")
                        for (let i = 0; i < icon.children.length; i++) {
                            if(icon.children[i].tagName == "IMG"){
                                if(i==0){
                                    this.timerID = setTimeout(() =>  {
                                        icon.children[i].src = "/image/about/000001.jpg"
                                    }, 300); // img transition time
                                }else{
                                    icon.children[i].classList.remove("notdisp");
                                }
                            }
                        }
                    }, { passive: true });
                }
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
    }
}
</script>