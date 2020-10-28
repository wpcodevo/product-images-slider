const slider = document.querySelector(".glide");

new Glide(slider, {
  type: "carousel",
  startAt: 0,
  perview: 1,
  animationDuration: 800,
  animationTimingFunc: "linear",
}).mount();
