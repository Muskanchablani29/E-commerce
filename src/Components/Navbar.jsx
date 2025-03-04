import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import "./Navbar.css";

const categories = [
  "All", "Grocery", "Jewellery", "Fashion", "Kids", "Bags", "Footwear", "Electronics"
];

export default function Navbar() {
  const [cartCount, setCartCount] = useState(3);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <nav className="navbar">
      <div className="top-section">
        {/* Logo */}
        <div className="logo">Zippy Cart</div>
        
        {/* Search Bar */}
        <input
          type="text"
          className="search-bar"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        {/* Cart Icon */}
        <div className="cart-container">
          <ShoppingCart className="cart-icon" size={28} />
          {cartCount > 0 && (
            <span className="cart-count">{cartCount}</span>
          )}
        </div>
      </div>
      
      {/* Navigation Links */}
      <ul className="nav-links">
        {categories.map((category) => (
          <li key={category} className="nav-item">
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
}
