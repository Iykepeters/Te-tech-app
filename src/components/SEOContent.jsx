import { Link } from "react-router-dom"

function SEOContent() {
  return (
    <section className="seo-block">
      <div className="seo-block-inner">
        <h2 className="seo-heading">Quality UK Used & New Mobile Phones in Nigeria</h2>

        <p>
          Nwachief Te-Tech Communications is your trusted source for quality
          UK used and brand new mobile phones in Nigeria. We test every device
          before it reaches you, price fairly, and back every purchase with a
          warranty — because buying a used phone should never feel like a
          gamble. Browse our current stock of{" "}
          <Link to="/category/samsung">Samsung</Link>,{" "}
          <Link to="/category/iphone">iPhone</Link>,{" "}
          <Link to="/category/oppo">Oppo</Link>,{" "}
          <Link to="/category/vivo">Vivo</Link>,{" "}
          <Link to="/category/gionee">Gionee</Link>,{" "}
          <Link to="/category/redmi">Redmi</Link>, and{" "}
          <Link to="/category/honor">Honor</Link> devices, all tested and
          ready to use.
        </p>

        <h3 className="seo-subheading">Why Buy From Nwachief Te-Tech Communications</h3>
        <p>
          Every phone we sell goes through a condition check before listing,
          so you know exactly what you're getting — battery health, screen
          condition, and functionality are all verified. We offer a warranty
          on every device, honest pricing with no hidden fees, and fast,
          responsive support if anything ever goes wrong after purchase.
          Whether you're a student looking for an affordable first
          smartphone, a professional upgrading to a flagship device, or a
          parent buying a phone for your child, we have options across every
          budget. Learn more about our mission and values on our{" "}
          <Link to="/about">About Us</Link> page.
        </p>

        <h3 className="seo-subheading">Start Your Own Mobile Phone Business</h3>
        <p>
          Beyond retail, we mentor aspiring entrepreneurs who want to start
          their own mobile phone business. Through our supply chain network
          and hands-on guidance, we help new distributors get established
          profitably — from sourcing devices to pricing them competitively
          in their own market.
        </p>
      </div>
    </section>
  )
}

export default SEOContent