gsap.registerPlugin(ScrollTrigger);

// define const
const textThis = document.getElementById("textThis");
const textIs = document.getElementById("textIs");
const textEpic = document.getElementById("textEpic");
const textGsap = document.getElementById("textGsap");
const container = document.querySelector(".section");

// Initially hide all texts except the first one
gsap.set([textIs, textEpic, textGsap], { autoAlpha: 0 });

// create timeline
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: container,
    start: "top top",
    end: "+=1000",
    scrub: 1,
    pin: true,
  },
});

// define animation
tl.to(container, { backgroundColor: "#0000FF", ease: "none" })
  .to(textThis, { autoAlpha: 0, duration: 1 }, 0.5)
  .to(container, { backgroundColor: "#FFA500", ease: "none" }, 1)
  .fromTo(textIs, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 }, 1)
  .to(textIs, { autoAlpha: 0, duration: 1 }, 2)
  .to(container, { backgroundColor: "#008000", ease: "none" }, 2.5)
  .fromTo(textEpic, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 }, 2.5)
  .to(textEpic, { autoAlpha: 0, duration: 1 }, 3.5)
  .to(container, { backgroundColor: "#FF0000", ease: "none" }, 4)
  .fromTo(textGsap, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 }, 4);
