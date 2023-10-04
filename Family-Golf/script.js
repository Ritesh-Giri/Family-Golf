var cursor = document.querySelector(".cursor");
var blur = document.querySelector(".cursor-blur");
document.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x - 12.5 + "px";
  cursor.style.top = dets.y - 12.5 + "px";
  blur.style.left = dets.x - 200 + "px";
  blur.style.top = dets.y - 200 + "px";
});

var h4all = document.querySelectorAll("nav li");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    cursor.style.scale = 4;
    cursor.style.backgroundColor = "transparent";
    cursor.style.border = "1px solid white";
  });
  elem.addEventListener("mouseleave", function () {
    cursor.style.scale = 1;
    cursor.style.backgroundColor = "#99C328";
    cursor.style.border = "0px solid #99C328";
  });
});
gsap.to("header", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "120px",
  scrollTrigger: {
    trigger: "header",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});
gsap.to(".page-2", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: ".page-2",
    scroller: "body",
    start: "-50%",
    end: "-100%",
    scrub: 2,
  },
});

gsap.from(".about-us, .about-us img", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".about-us",
    scroller: "body",
    start: "top 70%",
    end: "top 58%",
    scrub: 3,
  },
});
gsap.from(".card", {
  y: 50,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 80%",
    end: "top 58%",
    scrub: 1,
  },
});
gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});
