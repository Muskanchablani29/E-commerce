import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import LoadingSpinner from './Components/LoadingSpinner';
import RedirectPage from "./Components/RedirectPage";

// Lazy load components with meaningful chunk names
const Home = lazy(() => import(/* webpackChunkName: "home" */ './Components/Home'));
const Products = lazy(() => import(/* webpackChunkName: "products" */ './Components/Products'));
const About = lazy(() => import(/* webpackChunkName: "about" */ './Components/About'));
const Contact = lazy(() => import(/* webpackChunkName: "contact" */ './Components/Contact'));
const Cart = lazy(() => import(/* webpackChunkName: "cart" */ './Components/Cart'));

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <Sidebar />
          <div className="content-area">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                {/* Redirect root path to home */}
                <Route path="/" element={<RedirectPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
