useLayoutEffect(() => {
  return () => {
    tl.from(".one", {
      scrollTrigger: {
        trigger: ".one",
        start: "0 0",
        scrub: true,
        pin: true,
      },
    })
      .from(".first-img__1", {
        scrollTrigger: {
          trigger: ".one",
          start: "-150 0",
          scrub: true,
        },
        xPercent: -50,
        opacity: 0,
      })
      .to(".first-img__1", {
        scrollTrigger: {
          trigger: ".one",
          start: "-150 0",
          scrub: true,
        },
        xPercent: 0,
        opacity: 1,
      })
      .from(".first-img__2", {
        scrollTrigger: {
          trigger: ".one",
          start: "-150 0",
          scrub: true,
        },
        xPercent: 50,
        opacity: 0,
      })
      .to(".first-img__2", {
        scrollTrigger: {
          trigger: ".one",
          start: "-150 0",
          scrub: true,
        },
        xPercent: 0,
        opacity: 1,
      })
      .from(".first-img__3", {
        scrollTrigger: {
          trigger: ".one",
          start: "-150 0",
          scrub: true,
        },
        xPercent: -50,
        opacity: 0,
      })
      .to(".first-img__3", {
        scrollTrigger: {
          trigger: ".one",
          start: "-150 0",
          scrub: true,
        },
        xPercent: 0,
        opacity: 1,
      })
      .from(".two", {
        scrollTrigger: {
          trigger: ".two",
          start: "0 0",
          pin: true,
          scrub: true,
        },
      })
      .from(".text", {
        scrollTrigger: {
          trigger: ".two",
          start: "0 0",
          scrub: true,
        },
        opacity: 0.5,
        x: -100,
        stagger: 0.25,
      })
      .to(".text", {
        scrollTrigger: {
          trigger: ".two",
          start: "0 0",
          scrub: true,
        },
        x: 50,
        opacity: 1,
        stagger: 0.25,
      })
  }
})

useLayoutEffect(() => {
  return () => {
    tl.from(".one", {
      scrollTrigger: {
        trigger: ".one",
        start: "0 0",
        scrub: true,
        pin: true,
      },
    })
      .from(".first-img", {
        scrollTrigger: {
          trigger: ".one",
          start: "-150 0",
          scrub: true,
        },
        opacity: 0,
        stagger: 0.25,
      })
      .from(".first-img__1", {
        scrollTrigger: {
          trigger: ".one",
          start: "-150 0",
          scrub: true,
        },
        xPercent: 100,
      })
      .from(".first-img__2", {
        scrollTrigger: {
          trigger: ".one",
          start: "-150 0",
          scrub: true,
        },
        xPercent: -100,
      })
      .from(".first-img__3", {
        scrollTrigger: {
          trigger: ".one",
          start: "-150 0",
          scrub: true,
        },
        xPercent: 200,
      })
      .to(".first-img", {
        scrollTrigger: {
          trigger: ".one",
          start: "-150 0",
          scrub: true,
        },
        opacity: 1,
        stagger: 0.25,
      })
      // .from(".first-img__1", {
      //   scrollTrigger: {
      //     trigger: ".one",
      //     start: "-150 0",
      //     scrub: true,
      //   },
      //   xPercent: -50,
      //   opacity: 0,
      // })
      // .from(".first-img__2", {
      //   scrollTrigger: {
      //     trigger: ".one",
      //     start: "-150 0",
      //     scrub: true,
      //   },
      //   xPercent: 50,
      //   opacity: 0,
      // })
      // .from(".first-img__3", {
      //   scrollTrigger: {
      //     trigger: ".one",
      //     start: "-150 0",
      //     scrub: true,
      //   },
      //   xPercent: -50,
      //   opacity: 0,
      // })
      .from(".two", {
        scrollTrigger: {
          trigger: ".two",
          start: "0 0",
          pin: true,
          scrub: true,
        },
      })
      .from(".text", {
        scrollTrigger: {
          trigger: ".two",
          start: "0 0",
          scrub: true,
        },
        opacity: 0.5,
        x: -100,
        stagger: 0.25,
      })
      .to(".text", {
        scrollTrigger: {
          trigger: ".two",
          start: "0 0",
          scrub: true,
        },
        x: 50,
        opacity: 1,
        stagger: 0.25,
      })
  }
})
