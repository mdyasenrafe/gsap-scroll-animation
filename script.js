// Ensure ScrollTrigger is registered
gsap.registerPlugin(ScrollTrigger);

// Select the elements
const section = document.querySelector("section");
const textThis = document.querySelector("#textToAnimate"); // Ensure you use the ID to select the text
const textIs = document.createElement("h1"); // Create a new h1 element for 'IS'
textIs.textContent = "IS";
textIs.className = "text-6xl font-bold opacity-0"; // Initially invisible
section.appendChild(textIs); // Append it to the section

// Background color animation
gsap.fromTo(
  section,
  {
    backgroundColor: "#0000FF", // start color
  },
  {
    backgroundColor: "#FFA500", // end color
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  }
);

// Fade out 'THIS'
gsap.fromTo(
  textThis,
  {
    opacity: 1,
  },
  {
    opacity: 0,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: section,
      start: "top center",
      end: "bottom top",
      scrub: true,
    },
  }
);

// Fade in 'IS'
gsap.fromTo(
  textIs,
  {
    opacity: 0,
  },
  {
    opacity: 1,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: section,
      start: "top center",
      end: "bottom top",
      scrub: true,
    },
  }
);
