gsap.timeline({ defaults: { ease: "power2.out" } })
    .fromTo('.container', { opacity: 0 }, { duration: 1.5, opacity: 1 })
    .to(".element_2", { duration: 1, y: 2, repeat: -1, yoyo: true }, ">")
    .fromTo(".element_5", { rotate: -1, y: 0 }, { duration: 1, rotate: 1, y: -5, repeat: -1, yoyo: true }, "<")
    .to(".element_6", { duration: 1, scaleY: 1.05, y: -3, repeat: -1, yoyo: true }, "<.2")

gsap.timeline({ defaults: { ease: "power2.out" },delay:3,repeat:-1,repeatDelay:2 })
    .to('.element_3',{duration:1,opacity:0})
    .to('.element_4_1',{duration:1,opacity:1},">-.5")
    .to('.element_4_1',{duration:1,opacity:0},">2")
    .to('.element_4_2',{duration:1,opacity:1},">-.5")
    .to('.element_4_2',{duration:1,opacity:0},">2")
    .to('.element_3',{duration:1,opacity:1},">-.5")
    
document.querySelector(".closeBtn").addEventListener("click", () => {
    gsap.timeline({ defaults: { ease: "power2.out" } })
        .to(".container", { duration: 1.5, scale: .5, opacity: 0 })
        .to([".closeBtn", '#purple-info-handler'], { opacity: 0, duration: .4 }, "<")
});