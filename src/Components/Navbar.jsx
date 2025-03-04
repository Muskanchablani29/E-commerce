import React, { useState, useEffect } from 'react';
import { FaSearch, FaUser, FaShoppingCart, FaChevronDown } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Example function to toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Example function to handle dropdown toggle on mobile
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Example function to handle search
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    // Implement your search logic here
  };

  // Example categories for dropdown
  const categories = [
    { name: 'Electronics', path: '/category/electronics' },
    { name: 'Clothing', path: '/category/clothing' },
    { name: 'Home Decor', path: '/category/home-decor' },
    { name: 'Accessories', path: '/category/accessories' }
  ];

  // Example navigation items
  const navItems = [
    { name: 'Home', path: '/home' },
    { name: 'Shop', path: '/shop' },
    { 
      name: 'Categories', 
      path: '#', 
      isDropdown: true,
      dropdownItems: categories
    },
    { name: 'Deals', path: '/deals' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  // Example effect to fetch cart count from API or context
  useEffect(() => {
    // This would typically come from your cart context or API
    setCartCount(3);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Mobile menu toggle */}
        <div 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        
        {/* Logo */}
        <div className="logo">
          <a href="/home">
            <img src="/images/logo.png" alt="Store Logo" />
          </a>
        </div>
        
        {/* Navigation Links */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <li 
              key={index} 
              className={item.isDropdown ? 'nav-item-dropdown' : ''}
            >
              <a 
                href={item.path} 
                className="nav-link"
                onClick={(e) => {
                  if (item.isDropdown) {
                    e.preventDefault();
                    toggleDropdown(index);
                  }
                }}
              >
                {item.name} 
                {item.isDropdown && <FaChevronDown style={{ marginLeft: '5px', fontSize: '12px' }} />}
              </a>
              
              {item.isDropdown && (
                <ul className={`dropdown-menu ${activeDropdown === index ? 'show' : ''}`}>
                  {item.dropdownItems.map((dropItem, idx) => (
                    <li key={idx}>
                      <a href={dropItem.path}>{dropItem.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        
        {/* Right side items */}
        <div className="nav-right">
          {/* Search */}
          <div className="search-container">
            <form onSubmit={handleSearch}>
              <input 
                type="text" 
                className="search-input" 
                placeholder="Search products..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit" className="search-button">
                <FaSearch />
              </button>
            </form>
          </div>
          
          {/* User account */}
          <div className="nav-user">
            <a href="/account" className="nav-icon">
              <FaUser />
            </a>
          </div>
          
          {/* Shopping cart with counter */}
          <div className="nav-cart">
            <a href="/cart" className="nav-icon">
              <FaShoppingCart />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
