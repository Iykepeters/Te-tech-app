import { Routes, Route } from "react-router-dom"
import Sidebar from "./Sidebar"
import Home from "./pages/Home"
import About from "./pages/About"
import Category from "./pages/Category"
import Footer from "./Footer.jsx"
import './index.css'

function App() {
  return (
    <div className="Fullpage">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/category/:brand" element={<Category />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App