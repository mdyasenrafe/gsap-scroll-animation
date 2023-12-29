gsap.registerPlugin(ScrollTrigger);

// Select the text elements
const textThis = document.getElementById("textThis");
const textIs = document.getElementById("textIs");
const textEpic = document.getElementById("textEpic");
const textGsap = document.getElementById("textGsap");
const container = document.querySelector(".container");

// Initially hide all texts except the first one
gsap.set([textIs, textEpic, textGsap], { autoAlpha: 0 });

// Create a timeline for the text animations with synchronized background color changes
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: container,
    start: "top top",
    end: "+=4000", // Adjust as necessary for your content length
    scrub: 1,
    pin: true,
  },
});

// Timeline for 'This' and blue background
tl.to(container, { backgroundColor: "blue", ease: "none" }).to(
  textThis,
  { autoAlpha: 0, duration: 1 },
  0.5
);

// Timeline for 'IS' and orange background
tl.to(container, { backgroundColor: "orange", ease: "none" }, 1)
  .fromTo(textIs, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 }, 1)
  .to(textIs, { autoAlpha: 0, duration: 1 }, 2);

// Timeline for 'EPIC' and green background
tl.to(container, { backgroundColor: "green", ease: "none" }, 2)
  .fromTo(textEpic, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 }, 2)
  .to(textEpic, { autoAlpha: 0, duration: 1 }, 3);

// Timeline for 'GSAP' and black background
tl.to(container, { backgroundColor: "red", ease: "none" }, 3).fromTo(
  textGsap,
  { autoAlpha: 0 },
  { autoAlpha: 1, duration: 1 },
  3
);
