<template>
<div class="">
    <div class="main-text w-5/6 md:w-1/2 2xl:w-1/3 mx-auto">
        <h1 class="text-3xl pt-5 text-center">CONTACT</h1>
        <p class="mt-10 mb-5">
          Please email me for video production, development, and writing requests. 
          I am also open to contact for collaborative productions and research.
        </p>
        <p class="mb-10">
          映像制作や開発、執筆のご依頼はこちらから。 共同制作・研究のご連絡もお待ちしております
          （参考：<NuxtLink class="my-link" to="https://elite-amphibian-dde.notion.site/49020f2e00a74494b8c1f364c1a0976d" target="_blank">ご依頼について</NuxtLink>）。
        </p>
        <!-- <div class="flex justify-center">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScAjBGyT6kReNQoFJbpY1Cp68Kex-ryzh9MOZi5kHJMDZdM7Q/viewform?embedded=true" width="640" height="840" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
        </div> -->
        <form ref="contactForm" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScAjBGyT6kReNQoFJbpY1Cp68Kex-ryzh9MOZi5kHJMDZdM7Q/formResponse" method="POST" target="hidden_iframe" @submit.prevent="formSubmited">
          <label class="form-label form-required" for="field-name">Name</label>
          <input class="form-input w-full p-1 mb-5" id="field-name" type="text" name="entry.305137816" required="required" placeholder="follow the darkside">
          <label class="form-label form-required" for="field-mail">Mail Address</label>
          <input ref="fieldMail" class="form-input w-full p-1 mb-5" id="field-mail" type="text" name="entry.545792903" required="required" placeholder="darkside@mail.co.jp">
          <label class="form-label form-required" for="field-message">Message</label>
          <textarea class="form-input w-full h-32 p-1 mb-5" id="field-message" name="entry.1999744091" required="required" placeholder="IT'S UP TO YOU!"></textarea>
          <div class="flex justify-center">
            <button ref="formBtn" class="form-submit text-center px-5 py-1" id="form-btn" type="submit" name="button">Send</button>
          </div>
        </form>
        <iframe class=""  name="hidden_iframe" id="hidden-iframe"></iframe>
    </div>
</div>
</template>

<style lang="scss" scoped>
.form-label{
  color: rgba(100, 100, 100, 1);
  font-weight: 300;
}
.form-input{
  background-color: rgba(240, 240, 240, 0.75);
  border-radius: 0.5rem;
  cursor: text;
  caret-color: rgba(100, 100, 100, 1);
  //transition: .3s ease-out;
  &:focus{
    border-color: rgba(100, 100, 100, 1);
    //border-width: 1px;
    outline: none;
  }
}
.form-submit{
  color: rgba(240, 240, 240, 1);
  background-color: rgba(200, 200, 200, 1);
  border-radius: 1.0rem;
  //font-weight: 500;
  transition: .3s ease-out;
  &:hover{
    background-color: rgba(100, 100, 100, 1);
  }
}
.btn-disabled {
  pointer-events: none;
}
.form-required::after {
  content: " *";
  color: rgba(255, 100, 100, 1);
  vertical-align: middle;
}
#hidden-iframe{
  display: none;
}
</style>

<script setup>
useHead({
  title: 'FOLLOW THE DARKSIDE',
  meta: [
    {
      name: 'description',
      content: 'Contact Page',
    },
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
        }
    },
    computed: {
    },
    mounted () {
        //console.log("CONTACT mounted....");
    },
    methods: {
        formSubmited(){
            console.log("Form submited...");

            // Go to top page
            // const router = useRouter();
            // router.push('/top');

            // Validation for mail address
            const fMail = this.$refs.fieldMail
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const btn = this.$refs.formBtn

            if (emailPattern.test(fMail.value)){
              // Disable submit button
              btn.innerText = "Done";
              btn.style.backgroundColor = 'rgba(200, 200, 200, 0.5)'; 
              btn.disabled = true;
              btn.classList.add("btn-disabled");
              //document.getElementById("hidden-iframe").style.display = "none"; // Prevent display of post-send screen in iframe

              // Form submit
              this.$refs.contactForm.submit();
            } else {
              let btn = this.$refs.formBtn
              btn.innerText = "Invalid";
              btn.style.backgroundColor = 'rgba(240, 40, 40, 1.0)'; 
            }
        },
    }
}
</script>