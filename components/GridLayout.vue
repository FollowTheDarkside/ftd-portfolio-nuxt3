<template>
    <div class="pt-10 grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <NuxtLink class="work-focus" id="work9" to="/works/work9">
            <nuxt-img preload class="" src="/image/works/work9/work9-2.jpg" alt="work9" />
            <nuxt-img preload class="" src="/image/works/work9/work9-1.jpg" alt="work9" />
        </NuxtLink>
        <NuxtLink class="work-focus" id="work8" to="/works/work8">
            <nuxt-img preload class="" src="/image/works/work8/work8-2.jpg" alt="work8" />
            <nuxt-img preload class="" src="/image/works/work8/work8-1.jpg" alt="work8" />
        </NuxtLink>
        <NuxtLink class="work-focus" id="work7" to="/works/work7">
            <nuxt-img preload class="" src="/image/works/work7/work7-2.jpg" alt="work7" />
            <nuxt-img preload class="" src="/image/works/work7/work7-1.jpg" alt="work7" />
        </NuxtLink>
        <NuxtLink class="work-focus" id="work6" to="/works/work6">
            <nuxt-img preload class="" src="/image/works/work6/work6-2.jpg" alt="work6" />
            <nuxt-img preload class="" src="/image/works/work6/work6-1.jpg" alt="work6" />
        </NuxtLink>
        <NuxtLink class="work-focus" id="work5" to="/works/work5">
            <nuxt-img preload class="" src="/image/works/work5/work5-2.jpg" alt="work5" />
            <nuxt-img preload class="" src="/image/works/work5/work5-1.jpg" alt="work5" />
        </NuxtLink>
        <NuxtLink class="work-focus" id="work4" to="/works/work4">
            <nuxt-img preload class="" src="/image/works/work4/work4-2.jpg" alt="work4" />
            <nuxt-img preload class="" src="/image/works/work4/work4-1.jpg" alt="work4" />
        </NuxtLink>
        <NuxtLink class="work-focus" id="work3" to="/works/work3">
            <nuxt-img preload class="" src="/image/works/work3/work3-2.jpg" alt="work3" />
            <nuxt-img preload class="" src="/image/works/work3/work3-1.jpg" alt="work3" />
        </NuxtLink>
        <NuxtLink class="work-focus" id="work2" to="/works/work2">
            <nuxt-img preload class="" src="/image/works/work2/work2-2.jpg" alt="work2" />
            <nuxt-img preload class="" src="/image/works/work2/work2-1.jpg" alt="work2" />
        </NuxtLink>
        <NuxtLink class="work-focus" id="work1" to="/works/work1">
            <nuxt-img preload class="" src="/image/works/work1/work1-2.jpg" alt="work1" />
            <nuxt-img preload class="" src="/image/works/work1/work1-1.jpg" alt="work1" />
        </NuxtLink>
    </div>
</template>

<style lang="scss" scoped>
$defaultSize: 90%;
$notFocusSize: 80%;
.work-focus {
    //background-color: rgba(240, 0, 0, 0.5);
	position: relative;
	cursor: pointer;
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
    this.$nextTick(function() {
        console.log("TOP: DOM update completed...");
         // Wait for page transition
        setTimeout(function() {
            // console.log("setTimeout...");
            let works = document.querySelectorAll(".work-focus");

            // Add Work Thumbnail Animation
            works.forEach(function(work) {
                work.addEventListener('mouseenter', function() {
                    //console.log("work-id:", work.id);
                    // Set hover animation
                    for (let i = 0; i < work.children.length; i++) {
                        //console.log("tagName:",work.children[i].tagName)
                        if(work.children[i].tagName == "IMG"){
                            work.children[i].classList.add("focused");
                            // Make the image before enter invisible
                            if(i>0)work.children[i].classList.add("notdisp");
                        }
                    }
                    // Set not hover animation
                    works.forEach(function(w) {
                        if(w.id != work.id){
                            for (let i = 0; i < w.children.length; i++) {
                                if(work.children[i].tagName == "IMG"){
                                    //console.log(i, work.children[i].tagName);
                                    w.children[i].classList.add("notfocused");
                                }
                            }
                        }
                        
                    });
                }, { passive: true });

                work.addEventListener('mouseleave', function() {
                    // Set hover animation
                    for (let i = 0; i < work.children.length; i++) {
                        if(work.children[i].tagName == "IMG"){
                            work.children[i].classList.remove("focused");
                            // Make the image before enter invisible
                            if(i>0)work.children[i].classList.remove("notdisp");
                        }
                    }
                    // Set not hover animation
                    works.forEach(function(w) {
                        if(w.id != work.id){
                            for (let i = 0; i < w.children.length; i++) {
                                if(work.children[i].tagName == "IMG"){
                                    //console.log(i, work.children[i].tagName);
                                    w.children[i].classList.remove("notfocused");
                                }
                            }
                        }
                        
                    });
                }, { passive: true });
            });
        }, 600); // Wait for page transition
    })
  },
  unmounted() {
    console.log("TOP unmounted...");
  },
  methods: {
    // addWorkThumbnailAnimation(isMouseEntered){
    //     let eventType = isMouseEntered ? "mouseenter" : "mouseleave";
    //     let works = document.querySelectorAll(".work-focus");
    //     works.forEach(function(work) {
    //         work.addEventListener(eventType, function() {
    //             console.log("work-id:", work.id);
    //             // Set hover animation
    //             for (let i = 0; i < work.children.length; i++) {
    //                 if (isMouseEntered) {
    //                     work.children[i].classList.add("focused");
    //                     if(i>0)work.children[i].classList.add("notdisp");
    //                 } else {
    //                     work.children[i].classList.remove("focused");
    //                     if(i>0)work.children[i].classList.remove("notdisp");
    //                 }
    //             }

    //             // Set not hover animation
    //             works.forEach(function(w) {
    //                 if(w.id != work.id){
    //                     for (let i = 0; i < w.children.length; i++) {
    //                         if (isMouseEntered) {
    //                             w.children[i].classList.add("notfocused");
    //                         } else {
    //                             w.children[i].classList.remove("notfocused");
    //                         }
                            
    //                     }
    //                 }
    //             });
    //         }, { passive: true });
    //     });
    // },
  }
}
</script>