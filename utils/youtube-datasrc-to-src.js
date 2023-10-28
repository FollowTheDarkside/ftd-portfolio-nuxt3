export function youtubeDatasrcToSrc(tmp) {
    console.log("youtube...");
    console.log("tmp.$el:",tmp.$el)
    let iframes = tmp.$el.querySelectorAll('.youtube');
    iframes.forEach(function(iframe){
        if(iframe.getAttribute('data-src')) {
            iframe.setAttribute('src', iframe.getAttribute('data-src'));
        }
    });
}

export function initYoutubeIframe(componentInstance) {
    console.log("initYoutubeIframe...");
    let iframes = componentInstance.$el.querySelectorAll('.youtube');
    iframes.forEach(function(iframe){
        // Lazy loading by changing src attribute to data-src
        if(iframe.getAttribute('data-src')) {
            iframe.setAttribute('src', iframe.getAttribute('data-src'));
        }
        // Display youtube iframe
        if(!iframe.classList.contains('disp')){
            iframe.classList.add("disp");
        }
    });
}