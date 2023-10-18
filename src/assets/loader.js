import gsap from "gsap"
import { useLayoutEffect } from "react"

const loader = () => {
  const tl = gsap.timeline()

  useLayoutEffect(() => {
    return () => {
      tl.set("body", { overflow: "hidden" })
        .set(".loader__item", {
          yPercent: -100,
        })
        .set(".loader__title", {
          opacity: 0,
        })
        .to(".loader__item", {
          yPercent: 0,
          duration: 0.5,
          stagger: 0.25,
        })
        .to(".loader__item", {
          yPercent: 100,
          duration: 0.5,
          stagger: 0.25,
        })
        .to(".loader__title", {
          opacity: 1,
          scale: 1.2,
          duration: 1,
        })
        .set(".loader__item", {
          yPercent: -100,
        })
        .to(".loader__title", {
          opacity: 0,
          scale: 0.8,
          duration: 1,
        })
        .to(".loader", {
          yPercent: -100,
        })
        .set("body", { overflowY: "auto" })
    }
  })
}

export default loader
