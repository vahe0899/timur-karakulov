gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".content",
  smooth: 1.5,
  effects: true,
});

gsap.fromTo(
  ".header",
  { opacity: 1 },
  {
    opacity: 0,
    scrollTrigger: {
      trigger: ".header",
      start: "center",
      end: "700",
      scrub: true,
    },
  }
);

let leftItems = gsap.utils.toArray(".column__left .column__item");

leftItems.forEach((item) => {
  gsap.fromTo(
    item,
    { opacity: 0, x: -100 },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item,
        start: "-850",
        end: "-100",
        scrub: true,
      },
    }
  );
});

let rightItems = gsap.utils.toArray(".column__right .column__item");

rightItems.forEach((item) => {
  gsap.fromTo(
    item,
    { opacity: 0, x: 100 },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item,
        start: "-750",
        end: "center",
        scrub: true,
      },
    }
  );
});
