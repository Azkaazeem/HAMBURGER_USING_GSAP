var tl = gsap.timeline();

tl.to ("#full" , {
    left: 0,
})

tl.from ("#full h4" , {
    x:150,
    duration: 0.7,
    stagger: 0.28,
    opacity: 0
})

tl.from ("#full i" , {
    opacity: 0
})