import "./App.css"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLayoutEffect } from "react"
import loader from "./assets/loader"

function App() {
  gsap.registerPlugin(ScrollTrigger)

  loader()

  useLayoutEffect(() => {
    return () => {
      // Section images

      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".one",
          start: "0 0",
          scrub: 2,
          pin: true,
        },
      })

      tl1
        .fromTo(
          ".first-img__1",
          { xPercent: 100, opacity: 0 },
          { opacity: 1, xPercent: 0, duration: 3 },
        )
        .fromTo(
          ".first-img__2",
          { xPercent: -100, opacity: 0 },
          { opacity: 1, xPercent: 0, duration: 3 },
        )
        .fromTo(
          ".first-img__3",
          { xPercent: 100, opacity: 0 },
          { opacity: 1, xPercent: 0, duration: 3 },
        )

      // Section text

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".two",
          start: "bottom bottom",
          pin: true,
          scrub: 2,
        },
      })

      tl2.fromTo(
        ".text",
        {
          opacity: 0.5,
          x: -200,
          stagger: 0.25,
        },
        {
          x: 50,
          opacity: 1,
          stagger: 0.25,
        },
      )

      // Section one image

      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".three",
          start: "0 0",
          scrub: 2,
          pin: true,
        },
      })

      tl3
        .fromTo(
          ".three__1",
          { opacity: 0, x: -500 },
          { opacity: 1, x: 0, rotation: 30 },
        )
        .fromTo(
          ".three__2",
          { opacity: 0, x: 500 },
          { opacity: 1, x: 0, rotation: -20 },
        )
        .fromTo(
          ".three__3",
          { opacity: 0, y: -500 },
          { opacity: 1, y: 0, rotation: 10 },
        )

      // Section slider

      const box = document.querySelector(".four")
      let box_items = gsap.utils.toArray(".four-img")

      gsap.to(box_items, {
        xPercent: -100 * (box_items.length - 1),
        ease: "sine.out",
        scrollTrigger: {
          trigger: box,
          pin: true,
          scrub: 3,
          start: "-150 0",
          snap: 1 / (box_items.length - 1),
          end: "+=" + box.offsetWidth,
        },
      })
    }
  })

  return (
    <main className="container">
      <section className="loader">
        <div className="loader__title">
          zagir<span>.</span>
        </div>
        <div className="loader__item loader__item-1"></div>
        <div className="loader__item loader__item-2"></div>
        <div className="loader__item loader__item-3"></div>
      </section>

      <section className="hero">
        <h1>Листай!</h1>
      </section>

      <section className="one">
        <div className="one__img">
          <img src="./1.jpg" alt="" className="first-img first-img__1" />
          <img src="./2.jpg" alt="" className="first-img first-img__2" />
          <img src="./3.jpg" alt="" className="first-img first-img__3" />
        </div>
      </section>

      <section className="two">
        <h2 className="text">
          IN TEMPOR ADIPISICING ALIQUIP EST AUTE SUNT ET LABORUM.
        </h2>
        <h2 className="text">
          EX DOLOR ANIM IN VELIT ALIQUA REPREHENDERIT EST NISI EU.
        </h2>
        <h2 className="text">
          EXERCITATION DOLOR ALIQUIP LABORIS IN ALIQUA ALIQUIP EA INCIDIDUNT QUI
          PARIATUR EST MAGNA EXCEPTEUR NOSTRUD.
        </h2>
        <h2 className="text">
          NULLA DO EXERCITATION VENIAM EXCEPTEUR NISI SIT MOLLIT AD ANIM LABORUM
          NOSTRUD.
        </h2>
      </section>

      <section className="three">
        <img src="./blog-1.jpg" alt="" className="three__1" />
        <img src="./blog-2.jpg" alt="" className="three__2" />
        <img src="./blog-3.jpg" alt="" className="three__3" />
      </section>

      <section className="four">
        <div className="four-container">
          <img src="./blog-1.jpg" alt="" className="four-img four__1" />
          <img src="./blog-2.jpg" alt="" className="four-img four__2" />
          <img src="./blog-3.jpg" alt="" className="four-img four__3" />
          <img src="./blog-1.jpg" alt="" className="four-img four__1" />
          <img src="./blog-2.jpg" alt="" className="four-img four__2" />
          <img src="./blog-3.jpg" alt="" className="four-img four__3" />
          <img src="./blog-1.jpg" alt="" className="four-img four__1" />
          <img src="./blog-2.jpg" alt="" className="four-img four__2" />
          <img src="./blog-3.jpg" alt="" className="four-img four__3" />
        </div>
      </section>
    </main>
  )
}

export default App
