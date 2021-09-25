const btn = document.querySelector(".btn")
const video = document.querySelector(".Background-Video")
const fa = document.querySelector(".far")
const preloader = document.querySelector(".preloader")

btn.addEventListener("click",()=>{
    if(btn.classList.contains("pause")){
        btn.classList.remove("pause")
        video.play()
        fa.classList.add("fa-play-circle")
        fa.classList.remove("fa-pause-circle")
    }
    else{
        btn.classList.add("pause")
        video.pause()
        fa.classList.add("fa-pause-circle")
        fa.classList.remove("fa-play-circle")
    }
})

window.addEventListener("load",()=>{
    preloader.style.zIndex=-2;
})
