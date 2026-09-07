import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"

// Edit this array to change your 3 slides — swap image, text, colors, and link freely.
// "highlight" is the first word/phrase of the headline (colored red), "title" is the rest (black).
const slides = [
  {
    id: 1,
    highlight: "UNFOLD",
    title: "WHAT'S NEXT",
    subtitle: "Discover the Galaxy Fold Series, bigger screens, smarter multi-tasking, endless possibilities.",
    ctaText: "Shop Now",
    ctaLink: "/category/samsung",
    image: "/img/samsung-galaxy-z-fold6.jpg",
    bg: "linear-gradient(120deg, #fff 40%, #ff5f3d 55%, #ff8a00 100%)",
  },
  {
    id: 2,
    highlight: "GO",
    title: "PRO ON CAMERA",
    subtitle: "The iPhone lineup with the best cameras yet — capture every moment in stunning detail.",
    ctaText: "Shop Now",
    ctaLink: "/category/iphone",
    image: "/img/apple-iphone-15.jpg",
    bg: "linear-gradient(120deg, #fff 40%, #1e293b 55%, #0f172a 100%)",
  },
  {
    id: 3,
    highlight: "UP TO 30%",
    title: "OFF SELECT PHONES",
    subtitle: "Tested UK used devices at unbeatable prices. Warrantied, honest, ready to use.",
    ctaText: "Shop Now",
    ctaLink: "/",
    image: "/img/samsung-galaxy-s24-ultra-5g-sm-s928-stylus.jpg",
    bg: "linear-gradient(120deg, #f4f4f4 40%, #dcdcdc 100%)",
  },
]

const AUTO_ADVANCE_MS = 5000

function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)

  const goTo = (index) => {
    setCurrent((index + slides.length) % slides.length)
  }

  const startTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, AUTO_ADVANCE_MS)
  }

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [])

  const handleManualNav = (fn) => {
    fn()
    startTimer() // reset the auto-advance clock after a manual click
  }

  return (
    <div
      className="hero-carousel"
      onMouseEnter={() => clearInterval(timerRef.current)}
      onMouseLeave={startTimer}
    >
      <div
        className="hero-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div className="hero-slide" key={slide.id} style={{ background: slide.bg }}>
            <div className="hero-slide-text">
              <h2 className="hero-headline">
                <span className="hero-highlight">{slide.highlight}</span>
                <br />
                {slide.title}
              </h2>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <div className="hero-cta-row">
                <Link to={slide.ctaLink} className="hero-cta-btn">{slide.ctaText}</Link>
                <span className="hero-terms">T&Cs Apply</span>
              </div>
            </div>
            <div className="hero-slide-image">
              <img src={slide.image} alt={slide.title} />
            </div>
          </div>
        ))}
      </div>

      <button className="hero-arrow hero-arrow-left" onClick={() => handleManualNav(() => goTo(current - 1))} aria-label="Previous slide">‹</button>
      <button className="hero-arrow hero-arrow-right" onClick={() => handleManualNav(() => goTo(current + 1))} aria-label="Next slide">›</button>

      <div className="hero-dots">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            className={`hero-dot ${i === current ? "active" : ""}`}
            onClick={() => handleManualNav(() => goTo(i))}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroCarousel