import { Link } from "react-router-dom"

const WHATSAPP_NUMBER = "2347065606540" // TODO: your real number, no + or spaces
const PHONE_DISPLAY = "+234 706 560 6540" // TODO: your real number, formatted for display
const EMAIL = "info@tetechcommunications.com" // TODO: your real email
const ADDRESS = "Shop 12, Computer Village, Ikeja, Lagos, Nigeria" // TODO: your real address

function Footer() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I have a question about your phones.")}`

  return (
    <footer className="site-footer">
      <div className="footer-inner">

        <div className="footer-col">
          <h3 className="footer-logo">NWACHIEF TE-TECH</h3>
          <p className="footer-tagline">
            Quality UK used and brand new mobile phones in Nigeria — tested,
            fairly priced, and warrantied.
          </p>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">FB</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X">X</a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="footer-list">
            <li>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                WhatsApp: {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`tel:${WHATSAPP_NUMBER}`}>Call: {PHONE_DISPLAY}</a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li className="footer-address">{ADDRESS}</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/category/samsung">Samsung</Link></li>
            <li><Link to="/category/iphone">iPhone</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Warranty & Returns</h4>
          <p className="footer-policy">
            Every device comes with a warranty covering hardware faults
            present at the time of purchase. If your phone develops a fault
            within the warranty period, contact us on WhatsApp and we'll sort
            it out — repair, replacement, or refund, depending on the issue.
          </p>
          <p className="footer-policy">
            Devices must be returned in the same condition they were sold in,
            with all original accessories, within the stated return window.
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Nwachief Te-Tech Communications. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer