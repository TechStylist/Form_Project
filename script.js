
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#three",
        start: "30% 40%",
        end: "20% 50%",
        scrub: 2,
        pin: true,
    }
});
tl.to("#three h1", {

    opacity: 0


})
tl.to("#photu", {

    rotate: "720deg",
    top: "50%",
    transform: "translate(0%,-50%)",
    ease: Circ.easeInOut,
    scrub: 5,
    transition: "ease-out"

})

tl.to("#photus", {

    left: "52%",
    transform: "translate(0%,-50%)",
    ease: Circ.easeInOut,
    scrub: 2,


})


tl.to(".abcd", {

    transition: ".7s",
    left: "-230%",
    ease: Power3,
    transition: "1s ease-in-out"

})

var tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#four",
        start: "90% 95%",
        end: "70% 65%",
        scrub: 3,
    }
})
tl1.to("#divii ", {
    y: '-50',
    ease: Power3.easeInOut,
    stagger: ".3",
    opacity: 1

}, "a")

tl1.to("#tnx h1 span", {
    y: "-50",
    ease: Power1.easeInOut,
    stagger: ".3",

}, "a")

gsap.timeline({
    scrollTrigger: {
        trigger: "#one",
        start: "100% 100%",
        scrub: 3,
        end: "40% 30%",


    },
})
    .to("#one h1 img", {

        rotate: "-720deg",
        top: "40%",


    })


gsap.to("#fcircle, #tcircle", {
    scrollTrigger: {
        trigger: "#two",
        start: "top 50%",
        end: "20% center",
        scrub: 3
    },
    rotate: "720deg",
    ease: Expo.easeOut
})
gsap.to("#scircle", {
    scrollTrigger: {
        trigger: "#two",
        start: "top 50%",
        end: "20% center",
        scrub: 3
    },
    rotate: "-720deg",
    ease: Expo.easeOut
})
gsap.timeline({
    scrollTrigger: {
        trigger: "#two",
        start: "top 70%",
        end: "20% center",
        scrub: 3
    },
})
    .to("#innercircle", {
        scale: "3.5"
    })
    .to("#innercircle h1", {
        opacity: 1,
        scale: "0.3",
        ease: "power3",
        delay: -1

    })
document.querySelectorAll("#imgbox").forEach(function (elem) {
    elem.addEventListener("mouseover", function (dets) {
        console.log(dets.target.dataset.index)
        gsap.to("#imgb #ig", {

            x: dets.target.dataset.index * -100 + "%"
        })
    })
})

ScrollTrigger.create({
    onUpdate: function (dets) {
        gsap.to("#progress", {
            width: Math.floor(dets.progress * 100) + "%"
        })
    }
})
document.querySelector("#nav i").addEventListener("click", function () {
    document.querySelector("#fullscreenmenu").style.top = "0%"
})
document.querySelector("#right i").addEventListener("click", function () {
    document.querySelector("#fullscreenmenu").style.top = "-100%"
})
document.querySelectorAll("#left a").forEach(function (dets) {
    dets.addEventListener("mouseover", function (dets) {
        gsap.to(".righta", {
            x: dets.target.dataset.index * -100 + "%",
        })
    })
})

gsap.from("#left a", {
    opacity: 0,
    x: -100,
    duration: 15,
    ease: "power3"
})