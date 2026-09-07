import { useParams, Link } from "react-router-dom"
import Product from "../ProductView"
import { categoryMap } from "../categoryMap"

function Category() {
  const { brand } = useParams()
  const entry = categoryMap[brand]

  if (!entry) {
    return (
      <div className="category-not-found">
        <h2>We couldn't find that category</h2>
        <p>The brand or category you're looking for doesn't exist.</p>
        <Link to="/" className="back-home-link">← Back to Home</Link>
      </div>
    )
  }

  return (
    <div className="CategoryPage">
      <div className="category-header">
        <h1 className="category-title">{entry.label}</h1>
        <p className="category-count">{entry.data.length} products available</p>
      </div>

      <div className="category-grid">
        {entry.data.map(item => (
          <div className="category-grid-item" key={item.id}>
            <Product item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category