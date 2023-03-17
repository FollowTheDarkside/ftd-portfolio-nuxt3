<template>
<header class="header" id="head_wrap">
    <div class="inner">
        <div id="mobile-head">
            <h1 class="logo">
                <NuxtLink to="/">FTD</NuxtLink>
            </h1>
            <div id="nav-toggle"> 
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
        <nav id="global-nav">
            <ul>
                <li class=""><NuxtLink to="/">TOP</NuxtLink></li>
                <li class=""><NuxtLink to="/about">ABOUT</NuxtLink></li>
                <li class=""><NuxtLink to="/info">INFO</NuxtLink></li>
                <li class=""><NuxtLink to="/contact">CONTACT</NuxtLink></li>
            </ul>
        </nav>
    </div> 
</header>
</template>

<style lang="scss" scoped>
$mobileSize: 768px; // tailwind's md size
$baseBackgroundColor: rgba(250,250,250,0.5); // base color
$baseTextColor: rgba(50,50,50,1.0); // main color
$baseFontWeight: 200;

@media (min-width: ($mobileSize)) {
    #head_wrap {
        background: ($baseBackgroundColor);
        box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.2);
        top: 0;
        position: fixed;
        width: 100%;
        // margin: 100px auto 0;
        line-height: 1;
        z-index: 999;
        height: 100px;
        text-decoration: none;
        .inner {
            width: 100%;
            margin: 0 auto;
            // &:after {
            //     content: "";
            //     clear: both;
            //     display: block;
            // }
            position: relative;
        }
        .logo {
            color: ($baseTextColor);
            float: left;
            font-size: 48px;
            font-weight: ($baseFontWeight);
            margin-top: 24px;
            margin-left: 30px;
            transition: .3s ease-out;
            @media (min-width: ($mobileSize)) {
                &:hover {
                    // color: rgba(150,150,150,1.0);
                    margin-left: 20px;
                    letter-spacing: 10px;
                }
            }
        }
    }
}
#global-nav {
    position: absolute;
    right: 0;
    top: 0;
    ul {
        list-style: none;
        font-size: 24px;
        margin-top: 7px;
        margin-right: 30px;
        display: inline-flex;
        @media (max-width: ($mobileSize)) {
            display: block;
            margin-right: 0px;
        }
        li{
            padding: 20px 10px;
            a {
                padding: 2px;
                box-sizing: border-box;
                font-weight: ($baseFontWeight);
                position: relative;
                /* underline animation */
                @media (min-width: ($mobileSize)) {
                    &::after {
                        position: absolute;
                        left: 0;
                        content: '';
                        width: 100%;
                        height: 1px;
                        background: #000000;
                        bottom: -1px;
                        transform: scale(0, 1);
                        transform-origin: center top;
                        transition: transform 0.3s ease-out;
                    }
                    &:hover::after {
                        transform: scale(1, 1);
                    }
                }
                
            }
        }
    }
} 

/***************  For Mobile ***************/
/* Toggle Button */
#nav-toggle {
    display: none;
    position: absolute;
    right: 12px;
    top: 16px;
    width: 34px;
    height: 36px;
    cursor: pointer;
    z-index: 101;
    div {
        position: relative;
    }
}
@media (max-width: ($mobileSize)) {
    #head_wrap {
        top: 0;
        position: fixed;
        margin-top: 0;
        width: 100%;
        padding: 0;
        z-index: 990;
        .inner {
            width: 100%;
            padding: 0;
        }
        /* Fixed reset */
        .fixed {
            padding-top: 0;
            background: transparent;
        }
    }
    #mobile-head {
        background: ($baseBackgroundColor);
        box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.2);
        width: 100%;
        height: 56px;
        z-index: 999;
        position: relative;
    }
    #head_wrap.fixed .logo,
    #head_wrap .logo {
        position: absolute;
        left: 15px;
        top: 10px;
        color: ($baseTextColor);
        font-size: 26px;
        font-weight: ($baseFontWeight);
    }
    #global-nav {
        position: absolute;
        top: -500px; // Placed off-screen when not open
        background: rgba(250, 250, 250, 0.9);
        width: 100%;
        text-align: center;
        transition: .6s ease-in-out;
        ul {
            list-style: none;
            position: static;
            right: 0;
            bottom: 0;
            font-size: 20px;
            font-weight: normal;
            // text-decoration: underline;
            // text-decoration-color: $baseTextColor;
            margin-top: 20px+56px;
            li {
                float: none;
                position: static;
            }
        }
    }
    #head_wrap #global-nav ul li a,
    #head_wrap.fixed #global-nav ul li a {
        width: 100%;
        display: block;
        padding: 5px 0;
    }
    #nav-toggle {
        display: block;
    }
    /* #nav-toggle animation */
    #nav-toggle {
        span {
        display: block;
        position: absolute;
        height: 1px;
        width: 100%;
        background: ($baseTextColor);
        left: 0;
        transition: .3s ease-out;
            &:nth-child(1) {
            top: 2px;
            }
            &:nth-child(2) {
            top: 11px;
            }
            &:nth-child(3) {
            top: 20px;
            }
        }
    }
    .open {
        #nav-toggle {
            span {
                /* to icon for close */
                &:nth-child(1) {
                    width: 50%;
                    left: 25%;
                    top: 11px;
                }
                &:nth-child(2) {
                    width: 50%;
                    left: 25%;
                    opacity: 0;
                }
                &:nth-child(3) {
                    width: 50%;
                    left: 25%;
                    top: 11px;
                }
            }
        }
    } 

    /* #global-nav slide animation */
    .open #global-nav {
        // (global-nav top) + (mobile-head height) - (global-nav ul margin-top)
        -moz-transform: translateY(500px+56px-56px);
        -webkit-transform: translateY(500px);
        transform: translateY(500px);
    }
}
</style>

<script>
export default {
  mounted(){
    console.log("Navbar mounted...");

    // // Fix nav when scrolling specified width
    // window.addEventListener("scroll",function () {
    //     let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    //     var h = document.getElementById("head_wrap");
    //     if(scrollPos > 350){
    //         h.classList.add("fixed");
    //     }else{
    //         h.classList.remove("fixed");
    //     }
    // },
    //     { passive: true } // for smooth scrolling
    // );

    // Nav Toggle Button
    document.getElementById("nav-toggle").addEventListener("click",function () {
        document.getElementById("head_wrap").classList.toggle("open");
    }, { passive: true });
    document.getElementById("global-nav").addEventListener("click",function () {
        document.getElementById("head_wrap").classList.toggle("open");
    }, { passive: true });
  },
};
</script>