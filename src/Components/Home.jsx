import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="home-container">
      {/* Cursor follower */}
      <div 
        className="cursor-follower"
        style={{
          left: mousePosition.x,
          top: mousePosition.y
        }}
      ></div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="mesh-gradient"></div>
          <div className="floating-elements">
            <div className="element element-1"></div>
            <div className="element element-2"></div>
            <div className="element element-3"></div>
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <div className="badge-icon">⚡</div>
              <span>Premium E-Commerce Platform</span>
            </div>
            <h1 className="hero-title">
              <span className="title-line">Next-Generation</span>
              <span className="title-line gradient-text">Shopping</span>
              <span className="title-line">Experience</span>
            </h1>
            <p className="hero-subtitle">
              Transform your shopping journey with our AI-powered platform featuring curated collections, instant delivery, and personalized recommendations.
            </p>
            <div className="hero-buttons">
              <button className="cta-button primary">
                <span>Explore Products</span>
                <div className="button-icon">→</div>
              </button>
              <button className="cta-button secondary">
                <div className="play-icon">▶</div>
                <span>Watch Demo</span>
              </button>
            </div>
            <div className="trust-indicators">
              <div className="indicator">
                <div className="indicator-icon">🏆</div>
                <span>Award Winning</span>
              </div>
              <div className="indicator">
                <div className="indicator-icon">🔒</div>
                <span>Secure Payments</span>
              </div>
              <div className="indicator">
                <div className="indicator-icon">🚀</div>
                <span>Fast Delivery</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-container">
              <div className="main-card">
                <div className="card-header">
                  <div className="card-dots">
                    <span></span><span></span><span></span>
                  </div>
                  <div className="card-title">Featured Products</div>
                </div>
                <div className="product-grid">
                  <div className="mini-product">
                    <div className="mini-image"></div>
                    <div className="mini-info">
                      <span>Headphones</span>
                      <strong>$299</strong>
                    </div>
                  </div>
                  <div className="mini-product">
                    <div className="mini-image"></div>
                    <div className="mini-info">
                      <span>Smart Watch</span>
                      <strong>$199</strong>
                    </div>
                  </div>
                  <div className="mini-product">
                    <div className="mini-image"></div>
                    <div className="mini-info">
                      <span>Speaker</span>
                      <strong>$149</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stats-card">
                <div className="stat-item">
                  <div className="stat-number">50K+</div>
                  <div className="stat-label">Customers</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">99%</div>
                  <div className="stat-label">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={`features-section animate-on-scroll ${isVisible['features'] ? 'visible' : ''}`}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <span className="badge-dot"></span>
              Why Choose Our Platform
            </div>
            <h2 className="section-title">Built for Modern Commerce</h2>
            <p className="section-subtitle">Advanced technology meets exceptional service to deliver unparalleled shopping experiences</p>
          </div>
          <div className="features-grid">
            <div className="feature-card premium">
              <div className="feature-header">
                <div className="feature-icon">⚡</div>
                <div className="feature-badge">Popular</div>
              </div>
              <h3>Lightning Performance</h3>
              <p>Sub-second page loads and instant search results powered by advanced caching technology</p>
              <div className="feature-metrics">
                <span>99.9% Uptime</span>
                <span>0.2s Load Time</span>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-header">
                <div className="feature-icon">🛡️</div>
              </div>
              <h3>Enterprise Security</h3>
              <p>Military-grade encryption and PCI DSS compliance for complete transaction security</p>
              <div className="feature-metrics">
                <span>256-bit SSL</span>
                <span>PCI Compliant</span>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-header">
                <div className="feature-icon">🤖</div>
              </div>
              <h3>AI-Powered Intelligence</h3>
              <p>Machine learning algorithms provide personalized recommendations and smart inventory management</p>
              <div className="feature-metrics">
                <span>95% Accuracy</span>
                <span>Real-time AI</span>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-header">
                <div className="feature-icon">📊</div>
              </div>
              <h3>Advanced Analytics</h3>
              <p>Comprehensive insights and reporting tools to track performance and optimize conversions</p>
              <div className="feature-metrics">
                <span>Real-time Data</span>
                <span>Custom Reports</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`services-section animate-on-scroll ${isVisible['services'] ? 'visible' : ''}`}>
        <div className="container">
          <div className="services-content">
            <div className="services-text">
              <span className="section-badge white">Our Services</span>
              <h2 className="section-title white">Complete E-commerce Solution</h2>
              <p className="section-subtitle white">From discovery to delivery, we handle every aspect of your shopping journey with precision and care.</p>
              <div className="services-list">
                <div className="service-item">
                  <div className="service-check">✓</div>
                  <div>
                    <h4>Curated Collections</h4>
                    <p>Handpicked products from verified global suppliers</p>
                  </div>
                </div>
                <div className="service-item">
                  <div className="service-check">✓</div>
                  <div>
                    <h4>Express Delivery</h4>
                    <p>Same-day and next-day delivery options available</p>
                  </div>
                </div>
                <div className="service-item">
                  <div className="service-check">✓</div>
                  <div>
                    <h4>Easy Returns</h4>
                    <p>30-day hassle-free return policy with free pickup</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="services-visual">
              <div className="service-card">
                <div className="service-icon">📦</div>
                <h4>Fast Shipping</h4>
                <p>2-day delivery</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🔒</div>
                <h4>Secure Payment</h4>
                <p>256-bit encryption</p>
              </div>
              <div className="service-card">
                <div className="service-icon">💬</div>
                <h4>24/7 Support</h4>
                <p>Always available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className={`process-section animate-on-scroll ${isVisible['process'] ? 'visible' : ''}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Simple Process</span>
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">Four simple steps to get your perfect products delivered</p>
          </div>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <div className="step-icon">🔍</div>
                <h3>Discover</h3>
                <p>Browse through our curated collection of premium products with advanced filters</p>
              </div>
              <div className="step-connector"></div>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <div className="step-icon">🛒</div>
                <h3>Select</h3>
                <p>Add your chosen items to cart with detailed product information and reviews</p>
              </div>
              <div className="step-connector"></div>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <div className="step-icon">💳</div>
                <h3>Checkout</h3>
                <p>Secure payment processing with multiple options and instant confirmation</p>
              </div>
              <div className="step-connector"></div>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-content">
                <div className="step-icon">📦</div>
                <h3>Receive</h3>
                <p>Fast delivery with real-time tracking and premium packaging</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h2>Stay Ahead of Trends</h2>
              <p>Get exclusive access to new arrivals, special offers, and insider shopping tips delivered to your inbox.</p>
            </div>
            <div className="newsletter-form">
              <div className="input-group">
                <input type="email" placeholder="Enter your email address" className="email-input" />
                <button className="subscribe-btn">
                  <span>Subscribe</span>
                  <div className="btn-arrow">→</div>
                </button>
              </div>
              <p className="privacy-text">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-background">
              <div className="cta-pattern"></div>
            </div>
            <div className="cta-text">
              <h2>Transform Your Shopping Experience</h2>
              <p>Join over 50,000 satisfied customers who trust our platform for their shopping needs. Start your journey today.</p>
            </div>
            <div className="cta-actions">
              <button className="cta-button primary large">
                <span>Get Started Now</span>
                <div className="button-shine"></div>
              </button>
              <button className="cta-button secondary large">
                <span>Explore Features</span>
              </button>
            </div>
            <div className="cta-stats">
              <div className="cta-stat">
                <strong>50K+</strong>
                <span>Active Users</span>
              </div>
              <div className="cta-stat">
                <strong>4.9/5</strong>
                <span>User Rating</span>
              </div>
              <div className="cta-stat">
                <strong>24/7</strong>
                <span>Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
