import { useRef, useEffect, useState } from "react"
import Banner from "../banner"
import HeroCarousel from "../HeroCarousel"
import Product from "../ProductView"
import BrandsGrid from "../BrandsGrid"
import CustomerReviews from "../CustomerReviews"
import {
  PhoneDataFile,
  IphoneFile,
  OppoFile,
  VivoFile,
  GioneeFile,
  RedmiFile,
  HonorFile,
} from "../ProductData"
import SEOContent from "../SEOContent"

const GAP = 14
const ARROW_SPACE = 80 // reserved width for the left/right arrow buttons

function SliderRow({ items, label}) {
  const scrollRef = useRef(null)
  const wrapperRef = useRef(null)
  const [visibleWidth, setVisibleWidth] = useState(null)

  useEffect(() => {
    function recalc() {
      const wrapper = wrapperRef.current
      const track = scrollRef.current
      if (!wrapper || !track) return
      const firstCard = track.firstElementChild
      if (!firstCard) return

      const cardWidth = firstCard.offsetWidth
      const available = wrapper.clientWidth - ARROW_SPACE
      const cardsThatFit = Math.max(1, Math.floor((available + GAP) / (cardWidth + GAP)))
      setVisibleWidth(cardsThatFit * (cardWidth + GAP) - GAP)
    }

    recalc()
    window.addEventListener('resize', recalc)
    return () => window.removeEventListener('resize', recalc)
  }, [items])

  const scroll = (direction) => {
    const { current } = scrollRef
    if (!current || !visibleWidth) return
    current.scrollBy({
      left: direction === 'left' ? -visibleWidth : visibleWidth,
      behavior: 'smooth',
    })
  }

  return (
    <div className="slider-section">
      {label && (
  <div className="slider-header">
    <h3 className="slider-title">{label}</h3>
  </div>
)}
     

      <div className="slider-wrapper" ref={wrapperRef}>
        <button className="slider-arrow slider-arrow-left" onClick={() => scroll('left')} aria-label="Scroll left">‹</button>
        <div
          className="slider-container"
          ref={scrollRef}
          style={visibleWidth ? { maxWidth: `${visibleWidth}px`, margin: '0 auto' } : undefined}
        >
          {items.map(item => <Product key={item.id} item={item} />)}
        </div>
        <button className="slider-arrow slider-arrow-right" onClick={() => scroll('right')} aria-label="Scroll right">›</button>
      </div>
    </div>
  )
}

function Home() {
  return (
    <div className="HomePage">
      <Banner />
         <HeroCarousel />
      <div className="products-section">
        <h2 className="products-heading">Available Stock</h2>
        <SliderRow items={PhoneDataFile} label="Samsung" />
        <SliderRow items={IphoneFile} label="IPhone" />
        <SliderRow items={OppoFile} label="Oppo" />
        <SliderRow items={VivoFile} label="Vivo" />
        <SliderRow items={GioneeFile} label="Gionee" />
        <SliderRow items={RedmiFile} label="Redmi" />
        <SliderRow items={HonorFile} label="Honor" />
        <BrandsGrid />


      </div>
      <CustomerReviews />
        
       <SEOContent />
    </div>
  )
}



export default Home