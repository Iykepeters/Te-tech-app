import { useState } from "react"
import { Link } from "react-router-dom"
import { categories, categoryMap } from "./categoryMap"

const Nav = ({ isOpen, toggleSidebar }) => {
  const [expandedCategory, setExpandedCategory] = useState(null)

  const toggleCategory = (slug) => {
    setExpandedCategory(expandedCategory === slug ? null : slug)
  }

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>✕</button>

      <ul className="sidebar-links">
        <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
        <li><Link to="/about" onClick={toggleSidebar}>About Us</Link></li>

        {categories.map((cat) => (
          <li key={cat.slug} className="category-item">
            <button
              className="category-toggle"
              onClick={() => toggleCategory(cat.slug)}
            >
              {cat.label}
              <span className={`caret ${expandedCategory === cat.slug ? "open" : ""}`}>▾</span>
            </button>

            <ul className={`brand-sublist ${expandedCategory === cat.slug ? "open" : ""}`}>
              {cat.brands.map((brandSlug) => (
                <li key={brandSlug}>
                  <Link to={`/category/${brandSlug}`} onClick={toggleSidebar}>
                    {categoryMap[brandSlug].label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Nav