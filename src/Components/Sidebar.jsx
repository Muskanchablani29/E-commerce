import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
    const [activeCategory, setActiveCategory] = useState(null);
    const [priceRange, setPriceRange] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);

    const categories = [
        { id: 'electronics', name: 'Electronics', icon: '📱', count: 1250 },
        { id: 'fashion', name: 'Fashion', icon: '👕', count: 890 },
        { id: 'home-garden', name: 'Home & Garden', icon: '🏠', count: 650 },
        { id: 'sports', name: 'Sports & Fitness', icon: '⚽', count: 420 },
        { id: 'beauty', name: 'Beauty & Care', icon: '💄', count: 380 },
        { id: 'books', name: 'Books & Media', icon: '📚', count: 290 }
    ];

    const handlePriceChange = (value) => {
        setPriceRange(prev => 
            prev.includes(value) 
                ? prev.filter(p => p !== value)
                : [...prev, value]
        );
    };

    const handleBrandChange = (value) => {
        setSelectedBrands(prev => 
            prev.includes(value) 
                ? prev.filter(b => b !== value)
                : [...prev, value]
        );
    };

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>Explore</h2>
                <p>Find your perfect products</p>
            </div>

            <div className="categories-section">
                <h3 className="section-title">
                    <span className="title-icon">🏷️</span>
                    Categories
                </h3>
                <ul className="categories-list">
                    {categories.map((category) => (
                        <li key={category.id} className="category-item">
                            <a 
                                href={`#${category.id}`}
                                className={`category-link ${activeCategory === category.id ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                <span className="category-icon">{category.icon}</span>
                                <span className="category-name">{category.name}</span>
                                <span className="category-count">{category.count}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="filter-section">
                <h3 className="section-title">
                    <span className="title-icon">💰</span>
                    Price Range
                </h3>
                <div className="filter-group">
                    <div className="filter-option">
                        <input 
                            type="checkbox" 
                            id="price-under-25" 
                            value="under-25"
                            checked={priceRange.includes('under-25')}
                            onChange={() => handlePriceChange('under-25')}
                        />
                        <label htmlFor="price-under-25">
                            <span className="checkmark"></span>
                            Under $25
                        </label>
                    </div>
                    <div className="filter-option">
                        <input 
                            type="checkbox" 
                            id="price-25-50" 
                            value="25-50"
                            checked={priceRange.includes('25-50')}
                            onChange={() => handlePriceChange('25-50')}
                        />
                        <label htmlFor="price-25-50">
                            <span className="checkmark"></span>
                            $25 - $50
                        </label>
                    </div>
                    <div className="filter-option">
                        <input 
                            type="checkbox" 
                            id="price-50-100" 
                            value="50-100"
                            checked={priceRange.includes('50-100')}
                            onChange={() => handlePriceChange('50-100')}
                        />
                        <label htmlFor="price-50-100">
                            <span className="checkmark"></span>
                            $50 - $100
                        </label>
                    </div>
                    <div className="filter-option">
                        <input 
                            type="checkbox" 
                            id="price-over-100" 
                            value="over-100"
                            checked={priceRange.includes('over-100')}
                            onChange={() => handlePriceChange('over-100')}
                        />
                        <label htmlFor="price-over-100">
                            <span className="checkmark"></span>
                            Over $100
                        </label>
                    </div>
                </div>
            </div>

            <div className="filter-section">
                <h3 className="section-title">
                    <span className="title-icon">⭐</span>
                    Brand Quality
                </h3>
                <div className="filter-group">
                    <div className="filter-option">
                        <input 
                            type="checkbox" 
                            id="brand-premium" 
                            value="premium"
                            checked={selectedBrands.includes('premium')}
                            onChange={() => handleBrandChange('premium')}
                        />
                        <label htmlFor="brand-premium">
                            <span className="checkmark"></span>
                            Premium Brands
                        </label>
                    </div>
                    <div className="filter-option">
                        <input 
                            type="checkbox" 
                            id="brand-popular" 
                            value="popular"
                            checked={selectedBrands.includes('popular')}
                            onChange={() => handleBrandChange('popular')}
                        />
                        <label htmlFor="brand-popular">
                            <span className="checkmark"></span>
                            Popular Brands
                        </label>
                    </div>
                    <div className="filter-option">
                        <input 
                            type="checkbox" 
                            id="brand-budget" 
                            value="budget"
                            checked={selectedBrands.includes('budget')}
                            onChange={() => handleBrandChange('budget')}
                        />
                        <label htmlFor="brand-budget">
                            <span className="checkmark"></span>
                            Budget Friendly
                        </label>
                    </div>
                </div>
            </div>

            <div className="sidebar-footer">
                <button className="clear-filters-btn">
                    <span>Clear All Filters</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
