var menu = document.querySelector("#nav i");
var cross = document.querySelector("#full i");

var tl = gsap.timeline();

tl.to ("#full" , {
    left: 0,
})

tl.from ("#full h4" , {
    x:150,
    duration: 0.4,
    stagger: 0.28,
    opacity: 0
})

tl.from ("#full i" , {
    opacity: 0
})

tl.pause()

menu.addEventListener ("click" , () => {
    // console.log("Hello Hamburger");
    tl.play()
    
})

cross.addEventListener ("click" , () => {
    console.log("Hello Cross");
    tl.reverse()
})