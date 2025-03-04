import React from 'react';
import './Sidebar.css';
import Home from './Home';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Categories</h2>
            <ul>
                <li><a href="#">Electronics</a></li>
                <li><a href="#">Fashion</a></li>
                <li><a href="#">Home & Garden</a></li>
                <li><a href="#">Sports</a></li>
                <li><a href="#">Toys</a></li>
            </ul>

            <div className="filter-section">
                <h2>Filter by</h2>

                <label>Price Range</label>
                <div>
                    <input type="checkbox" id="low-price" name="price" value="low" />
                    <label htmlFor="low-price">Under $50</label>
                </div>
                <div>
                    <input type="checkbox" id="mid-price" name="price" value="mid" />
                    <label htmlFor="mid-price">$50 - $100</label>
                </div>
                <div>
                    <input type="checkbox" id="high-price" name="price" value="high" />
                    <label htmlFor="high-price">Over $100</label>
                </div>

                <label>Brands</label>
                <div>
                    <input type="checkbox" id="brand1" name="brand" value="brand1" />
                    <label htmlFor="brand1">Brand A</label>
                </div>
                <div>
                    <input type="checkbox" id="brand2" name="brand" value="brand2" />
                    <label htmlFor="brand2">Brand B</label>
                </div>
                <div>
                    <input type="checkbox" id="brand3" name="brand" value="brand3" />
                    <label htmlFor="brand3">Brand C</label>
                </div>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <>
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div className="content">
                <Home />
            </div>
        </div>
        </>
    );
};

export default App;
