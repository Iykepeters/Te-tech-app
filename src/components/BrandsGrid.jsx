import { Link } from "react-router-dom"
import { categoryMap } from "./categoryMap"

// Add a `logo` path here once you have real logo images saved to
// public/img/brands/ — until then, brands without one fall back to a
// clean styled text treatment so nothing looks broken.
const brandLogos = {
  samsung: "/img/Samsung_Orig_Wordmark_BLACK_RGB.png",
  iphone:  "/img/iPhone-Symbol.png",
  oppo:    "/img/Oppo-LogoGreen.png",
  vivo:    "/img/Vivo-Logo.png ",
  gionee:  "/img/Gionee-Logo.png",
  redmi:   "/img/Redmi Logo.png",
  honor:   "/img/HuaweiHonorLogo.jfif",
  infinix: "/img/InfinixLogo.png",
  nokia:   "/img/NokiaLogo.png",
  GooglePixel: "/img/GooglePixel.png"  ,
  Tecno: "/img/TecnoLogo.png",
  HTC: "/img/HtcLogo.png",
  Realme: "/img/realme logo.png",
  Asus: "img/AsusLogo.png"
}

function BrandsGrid() {
  const brandSlugs = Object.keys(categoryMap)

  return (
    <section className="brands-section">
      <h2 className="brands-heading">Shop by Brand</h2>

      <div className="brands-grid">
        {brandSlugs.map((slug) => {
          const brand = categoryMap[slug]
          const logo = brandLogos[slug]

          return (
            <Link to={`/category/${slug}`} className="brand-tile" key={slug}>
              <div className="brand-tile-logo">
                {logo ? (
                  <img src={logo} alt={brand.label} />
                ) : (
                  <span className="brand-tile-textlogo">{brand.label}</span>
                )}
              </div>
              <span className="brand-tile-label">{brand.label}</span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default BrandsGrid