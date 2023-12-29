gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector(".container");
const textThis = document.getElementById("textThis");
const textIs = document.getElementById("textIs");
const textEpic = document.getElementById("textEpic");
const textGsap = document.getElementById("textGsap");

// Create a timeline for the text animations with synchronized background color changes
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    scrub: true,
    start: "top top",
    pin: true,
    end: () => `+=${container.offsetWidth}`,
  },
});

// Animate 'This' with blue background
tl.to(
  textThis,
  { opacity: 1, duration: 1, backgroundColor: "blue", ease: "none" },
  0
)
  .to(textThis, { opacity: 0, duration: 1, ease: "none" }, 1)
  // Animate 'IS' with orange background
  .to(
    textIs,
    { opacity: 1, duration: 1, backgroundColor: "orange", ease: "none" },
    1
  )
  .to(textIs, { opacity: 0, duration: 1, ease: "none" }, 2)
  // Animate 'EPIC' with green background
  .to(
    textEpic,
    { opacity: 1, duration: 1, backgroundColor: "green", ease: "none" },
    2
  )
  .to(textEpic, { opacity: 0, duration: 1, ease: "none" }, 3)
  // Animate 'GSAP' with black background
  .to(
    textGsap,
    { opacity: 1, duration: 1, backgroundColor: "black", ease: "none" },
    3
  );

// Ensure the background color changes are applied to the container
tl.to(container, { backgroundColor: "blue" }, 0)
  .to(container, { backgroundColor: "orange" }, 1)
  .to(container, { backgroundColor: "green" }, 2)
  .to(container, { backgroundColor: "black" }, 3);
