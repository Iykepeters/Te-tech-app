import { useState } from "react"
import { Button, Card, Image, Text, Badge } from "@chakra-ui/react"
import ProductQuickView from "./ProductQuickView"

const WHATSAPP_NUMBER = "2347065606540" // TODO: your real number

function Product(props) {
  const [showQuickView, setShowQuickView] = useState(false)
  const inStock = props.item.inStock !== false

  const handleBuyNow = (e) => {
    e.stopPropagation()
    const message = `Hi, I'm interested in the ${props.item.name} — ₦${Number(props.item.price).toLocaleString()}`
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="Product-View-Container">
      <div className="Product-View-Wrapper">
    <Card.Root className="Product-View-Card" width="190px" onClick={() => setShowQuickView(true)}>
          <div className="Product-Img-Wrap">
            <Image className="Product-Img" src={props.item.image} alt={props.item.name} />
            <Badge className={`stock-badge ${inStock ? "in-stock" : "out-of-stock"}`}>
              {inStock ? "In Stock" : "Sold Out"}
            </Badge>
          </div>

          <Card.Title className="product-card-title">{props.item.name}</Card.Title>

          <Card.Body gap="2">
            <Text className="product-card-price">
              ₦{Number(props.item.price).toLocaleString()}
            </Text>

            <Button variant="solid" width="100%" onClick={handleBuyNow} disabled={!inStock}>
              {inStock ? props.item.action || "Buy Now" : "Sold Out"}
            </Button>

            <Button
              variant="ghost"
              width="100%"
              onClick={(e) => { e.stopPropagation(); setShowQuickView(true) }}
            >
              Quick View
            </Button>
          </Card.Body>
        </Card.Root>
      </div>

      <ProductQuickView
        item={props.item}
        isOpen={showQuickView}
        onClose={() => setShowQuickView(false)}
      />
    </div>
  )
}

export default Product