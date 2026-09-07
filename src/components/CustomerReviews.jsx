// Replace these with real customer reviews as you collect them.
// "initials" is used for the avatar circle if you don't have a customer photo.
const reviews = [
  {
    id: 1,
    name: "Chidinma A.",
    initials: "CA",
    rating: 5,
    product: "Samsung Galaxy S24 Ultra",
    text: "Phone came exactly as described, battery health was great and it's been solid for 3 months now. Fast response on WhatsApp too.",
  },
  {
    id: 2,
    name: "Tunde O.",
    initials: "TO",
    rating: 5,
    product: "iPhone 15 Pro",
    text: "Was skeptical about buying a used phone online but the condition was way better than I expected. Would buy again.",
  },
  {
    id: 3,
    name: "Ifeoma N.",
    initials: "IN",
    rating: 4,
    product: "Samsung Galaxy A35",
    text: "Good price and quick delivery. Minor scratch they didn't mention but nothing that affects use. Overall happy with it.",
  },
  {
    id: 4,
    name: "Emeka K.",
    initials: "EK",
    rating: 5,
    product: "Samsung Galaxy Z Fold 6",
    text: "Honestly the best phone dealer I've bought from in Lagos. Straight to the point, no time wasting, device works perfectly.",
  },
  {
    id: 5,
    name: "Blessing U.",
    initials: "BU",
    rating: 5,
    product: "Vivo Y55",
    text: "Bought this for my mum, she loves it. Warranty gave me peace of mind since it's her first smartphone.",
  },
]

function Stars({ count }) {
  return (
    <div className="review-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? "star filled" : "star"}>★</span>
      ))}
    </div>
  )
}

function CustomerReviews() {
  return (
    <section className="reviews-section">
      <div className="reviews-header">
        <h2 className="reviews-heading">What Our Customers Say</h2>
      </div>

      <div className="reviews-container">
        {reviews.map((review) => (
          <div className="review-card" key={review.id}>
            <Stars count={review.rating} />
            <p className="review-text">"{review.text}"</p>
            <div className="review-footer">
              <div className="review-avatar">{review.initials}</div>
              <div className="review-meta">
                <span className="review-name">{review.name}</span>
                <span className="review-product">Bought: {review.product}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews