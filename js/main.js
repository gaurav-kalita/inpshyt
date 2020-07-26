// gsap registration
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

// gsap codes for landing page text changes
 gsap.timeline()
    .to(".center-div h1", {
    duration: 2,
    text: {
        value: "WE ARE THE HELPING HANDS YOU ARE LOOKING FOR IN THESE HARD TIMES",
        // delimiter: "  "
        padSpace:true,
    },
    ease: "power4",  
    repeat: -1,
    yoyo: true,
    repeatDelay: 6,
});

// gsap codes for quotes text changes
gsap.timeline()
.to(".teamInpshyt p", {
duration: 2,
text: {
    value: " “This feeling will pass. The fear is real but the danger is not.”― Cammie McGovern",
    padSpace:true,
},
ease: "power4",  
repeat: -1,
yoyo: true,
repeatDelay: 6,
});

// gsap animation for teamInpsight page 
gsap.to(".teamInpshyt .heading",{
    scrollTrigger: {
        trigger: ".teamInpshyt",
        toggleActions: "restart pause none pause"
    },
    x:100,
    duration:1,
});
gsap.to(".teamInpshyt .content",{
    scrollTrigger: {
        trigger: ".teamInpshyt",
        toggleActions: "restart pause none pause"
    },
    y:-50,
    duration:1,
});

// Parallex Animation 

gsap.to(".parallex-head", {
    yPercent: -150,
    ease: "none",
    scrollTrigger: {
      trigger: ".parallex-text",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true
    }, 
  });
  
  gsap.to(".parallex-text", {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
    trigger: ".parallex-text",
    start: "center 600px", // the default values
      // end: "bottom top",
      scrub: true
    }, 
  });

