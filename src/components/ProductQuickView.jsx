import { Dialog, Portal, Button, Image, Text, Badge, CloseButton } from "@chakra-ui/react"

const WHATSAPP_NUMBER = "2347065606540" // TODO: your real number

function ProductQuickView({ item, isOpen, onClose }) {
  if (!item) return null

  const handleBuyNow = () => {
    const message = `Hi, I'm interested in the ${item.name} (${item.storage || ""}, ${item.color || ""}) — ₦${Number(item.price).toLocaleString()}`
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const inStock = item.inStock !== false // defaults to true if not set

  return (
    <Dialog.Root open={isOpen} onOpenChange={(e) => !e.open && onClose()} size="lg" placement="center">
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content className="quick-view-content">
            <Dialog.CloseTrigger asChild>
              <CloseButton position="absolute" top="3" right="3" />
            </Dialog.CloseTrigger>

            <Dialog.Body className="quick-view-body">
              <div className="quick-view-image-wrap">
                <Image src={item.image} alt={item.name} className="quick-view-image" />
                <Badge className={`stock-badge ${inStock ? "in-stock" : "out-of-stock"}`}>
                  {inStock ? "In Stock" : "Sold Out"}
                </Badge>
              </div>

              <div className="quick-view-details">
                <Dialog.Title className="quick-view-title">{item.name}</Dialog.Title>

                <Text className="quick-view-price">
                  ₦{Number(item.price).toLocaleString()}
                </Text>

                <div className="quick-view-specs">
                  <div className="spec-row">
                    <span className="spec-label">Condition</span>
                    <span className="spec-value">{item.condition || "UK Used"}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Storage</span>
                    <span className="spec-value">{item.storage || "N/A"}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Color</span>
                    <span className="spec-value">{item.color || "N/A"}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Warranty</span>
                    <span className="spec-value">{item.warranty || "No warranty stated"}</span>
                  </div>
                </div>

                <Button
                  className="quick-view-buy-btn"
                  width="100%"
                  onClick={handleBuyNow}
                  disabled={!inStock}
                >
                  {inStock ? item.action || "Buy Now" : "Currently Unavailable"}
                </Button>
              </div>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}

export default ProductQuickView