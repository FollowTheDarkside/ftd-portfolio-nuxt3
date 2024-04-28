<template>
    <div class="pt-10 grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3" id="grid-layout" ref="gridLayout">
        <NuxtLink class="work-focus" id="work13" to="/works/work13">
            <nuxt-img preload class="" src="/image/works/work13/work13-2.webp" alt="work13" />
            <nuxt-img preload class="" src="/image/works/work13/work13-1.webp" alt="work13" />
        </NuxtLink>
        <NuxtLink class="work-focus" id="work12" to="/works/work12">
            <nuxt-img preload class="" src="/image/works/work12/work12-2.webp" alt="work12" />
            <nuxt-img preload class="" src="/image/works/work12/work12-1.webp" alt="work12" />
        </NuxtLink>
        <NuxtLink class="work-focus" id="work11" to="/works/work11">
            <nuxt-img preload class="" src="/image/works/work11/work11-2.webp" alt="work11" />
            <nuxt-img preload class="" src="/image/works/work11/work11-1.webp" alt="work11" />
        </NuxtLink>
        <NuxtLink class="work-focus" id="work10" to="/works/work10">
            <nuxt-img preload class="" src="/image/works/work10/work10-2.webp" alt="work10" />
            <nuxt-img preload class="" src="/image/works/work10/work10-1.webp" alt="work10" />
        </NuxtLink>
        <NuxtLink class="work-focus" id="work9" to="/works/work9">
            <nuxt-img preload class="" src="/image/works/work9/work9-2.webp" alt="work9" />
            <nuxt-img preload class="" src="/image/works/work9/work9-1.webp" alt="work9" />
        </NuxtLink>
        <NuxtLink class="work-focus" id="work8" to="/works/work8">
            <nuxt-img preload class="" src="/image/works/work8/work8-2.webp" alt="work8" />
            <nuxt-img preload class="" src="/image/works/work8/work8-1.webp" alt="work8" />
        </NuxtLink>
        <NuxtLink class="work-focus" id="work7" to="/works/work7">
            <nuxt-img preload class="" src="/image/works/work7/work7-2.webp" alt="work7" />
            <nuxt-img preload class="" src="/image/works/work7/work7-1.webp" alt="work7" />
        </NuxtLink>
        <NuxtLink class="work-focus" id="work6" to="/works/work6">
            <nuxt-img preload class="" src="/image/works/work6/work6-2.webp" alt="work6" />
            <nuxt-img preload class="" src="/image/works/work6/work6-1.webp" alt="work6" />
        </NuxtLink>
        <NuxtLink class="work-focus" id="work5" to="/works/work5">
            <nuxt-img preload class="" src="/image/works/work5/work5-2.webp" alt="work5" />
            <nuxt-img preload class="" src="/image/works/work5/work5-1.webp" alt="work5" />
        </NuxtLink>
        <NuxtLink class="work-focus" id="work4" to="/works/work4">
            <nuxt-img preload class="" src="/image/works/work4/work4-2.webp" alt="work4" />
            <nuxt-img preload class="" src="/image/works/work4/work4-1.webp" alt="work4" />
        </NuxtLink>
        <NuxtLink class="work-focus" id="work3" to="/works/work3">
            <nuxt-img preload class="" src="/image/works/work3/work3-2.webp" alt="work3" />
            <nuxt-img preload class="" src="/image/works/work3/work3-1.webp" alt="work3" />
        </NuxtLink>
        <NuxtLink class="work-focus" id="work2" to="/works/work2">
            <nuxt-img preload class="" src="/image/works/work2/work2-2.webp" alt="work2" />
            <nuxt-img preload class="" src="/image/works/work2/work2-1.webp" alt="work2" />
        </NuxtLink>
        <NuxtLink class="work-focus" id="work1" to="/works/work1">
            <nuxt-img preload class="" src="/image/works/work1/work1-2.webp" alt="work1" />
            <nuxt-img preload class="" src="/image/works/work1/work1-1.webp" alt="work1" />
        </NuxtLink>
    </div>
</template>

<style lang="scss" scoped>
$defaultSize: 90%;
$notFocusSize: 80%;
#grid-layout{
    opacity: 0.0;
    transition: .6s ease-out;
}
.work-focus {
    //background-color: rgba(240, 0, 0, 0.5);
	position: relative;
	cursor: pointer;
    -webkit-touch-callout: none;
    -moz-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
    .focused{
        top: 0%;
        left: 0%;
        width: 100%;
        height: 100%;
        margin-bottom: 0%;
        transition: .3s ease-out;
    }
    .notfocused{
        top: calc((100% - $notFocusSize)/2);
        left: calc((100% - $notFocusSize)/2);
        width: $notFocusSize;
        height: $notFocusSize;
        margin-bottom: calc(100% - $notFocusSize);
        filter: contrast(.75);
    }
    .notdisp{
        opacity: 0.0;
    }
    img{
        top: calc((100% - $defaultSize)/2);
        margin-bottom: calc(100% - $defaultSize);
        left: calc((100% - $defaultSize)/2);
        width: $defaultSize;
        height: $defaultSize;
        border-radius: 0.5rem;
        opacity: 1.0;
    }
    img:nth-of-type(1) {
        position: relative;
        //opacity: 1.0;
        transition: .3s ease-out;
    }
    img:nth-of-type(2) {
        position: absolute;
        //opacity: 1.0;
        transition: .3s ease-out;
    }
}
</style>

<script>
export default {
  components: {},
  props: [],
  data () {
    return {
        loading: true,
    }
  },
  computed: {
  },
  mounted () {
    console.log("TOP mounted...");

    // const nuxtApp = useNuxtApp()
    // nuxtApp.hook('page:finish', () => {
    //     console.log("page:finish...")
    // })

    // Wait for DOM update to complete
    this.$nextTick(() => {
        console.log("TOP: DOM update completed...");
        //let works = document.querySelectorAll(".work-focus");
        const works = this.$el.querySelectorAll(".work-focus");

        // Add Work Thumbnail Animation
        works.forEach(work => {
            // Add mouse event
            work.addEventListener('mouseenter', () => {
                //console.log("work-id:", work.id);
                this.setWorkThumbnailAnimation(true, work, works);
            }, { passive: true });
            work.addEventListener('mouseleave', () => {
                this.setWorkThumbnailAnimation(false, work, works);
            }, { passive: true });

            // Add touch event
            work.addEventListener('touchstart', e => {
                e.preventDefault();
                this.setWorkThumbnailAnimation(true, work, works);
            }, { passive: true });
            work.addEventListener('touchend', e => {
                e.preventDefault();
                this.setWorkThumbnailAnimation(false, work, works);
            }, { passive: true });
        });

        // Allow enough time for works thumbnail display
        setTimeout(() => {
            //let grid = document.getElementById("grid-layout");
            const grid = this.$refs.gridLayout;
            if (grid !== null) {
                grid.style.opacity = 1.0;
            }
        }, 1200);
    })
  },
  unmounted() {
    console.log("TOP unmounted...");
  },
  methods: {
    setWorkThumbnailAnimation(isAdded, work, works){
        // Set hover animation
        for (let i = 0; i < work.children.length; i++) {
            //console.log("tagName:",work.children[i].tagName)
            if(work.children[i].tagName == "IMG"){
                if(isAdded){
                    work.children[i].classList.add("focused");
                    // Make the image before enter invisible
                    if(i>0)work.children[i].classList.add("notdisp");
                }else{
                    work.children[i].classList.remove("focused");
                    // Make the image before enter invisible
                    if(i>0)work.children[i].classList.remove("notdisp");
                }
            }
        }

        // Set not hover animation
        works.forEach(function(w) {
            if(w.id != work.id){
                for (let i = 0; i < w.children.length; i++) {
                    if(work.children[i].tagName == "IMG"){
                        //console.log(i, work.children[i].tagName);
                        if(isAdded){
                            w.children[i].classList.add("notfocused");
                        }else{
                            w.children[i].classList.remove("notfocused");
                        }
                    }
                }
            }
        });
        
    },
  }
}
</script>