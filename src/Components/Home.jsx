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
          <div className="gradient-mesh"></div>
          <div className="animated-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <div className="badge-pulse"></div>
              <span>✨ Premium Shopping Experience</span>
            </div>
            <h1 className="hero-title">
              <span className="title-word">Discover</span>
              <span className="title-word gradient-text">Exceptional</span>
              <span className="title-word">Products</span>
            </h1>
            <p className="hero-subtitle">
              Curated collections from premium brands worldwide. Experience seamless shopping with AI-powered recommendations and lightning-fast delivery.
            </p>
            <div className="hero-actions">
              <button className="primary-btn">
                <span>Start Shopping</span>
                <div className="btn-glow"></div>
              </button>
              <button className="secondary-btn">
                <div className="play-btn">▶</div>
                <span>See How It Works</span>
              </button>
            </div>
            <div className="social-proof">
              <div className="proof-item">
                <div className="proof-number">50K+</div>
                <div className="proof-text">Happy Customers</div>
              </div>
              <div className="proof-item">
                <div className="proof-number">4.9★</div>
                <div className="proof-text">Average Rating</div>
              </div>
              <div className="proof-item">
                <div className="proof-number">24/7</div>
                <div className="proof-text">Support</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="product-showcase">
              <div className="showcase-card main-showcase">
                <div className="card-glow"></div>
                <div className="product-preview">
                  <div className="preview-image"></div>
                  <div className="preview-info">
                    <h4>Premium Headphones</h4>
                    <div className="price-tag">
                      <span className="current-price">$299</span>
                      <span className="old-price">$399</span>
                    </div>
                    <div className="rating-stars">★★★★★</div>
                  </div>
                </div>
              </div>
              <div className="showcase-card secondary-showcase">
                <div className="mini-preview">
                  <div className="mini-image"></div>
                  <div className="mini-details">
                    <span>Smart Watch</span>
                    <strong>$199</strong>
                  </div>
                </div>
              </div>
              <div className="showcase-card tertiary-showcase">
                <div className="mini-preview">
                  <div className="mini-image"></div>
                  <div className="mini-details">
                    <span>Wireless Speaker</span>
                    <strong>$149</strong>
                  </div>
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
            <div className="section-tag">
              <div className="tag-dot"></div>
              <span>Why Choose Us</span>
            </div>
            <h2 className="section-title">Exceptional Shopping Experience</h2>
            <p className="section-description">Premium features designed to make your shopping journey seamless and enjoyable</p>
          </div>
          <div className="features-container">
            <div className="feature-item spotlight">
              <div className="feature-visual">
                <div className="feature-icon-bg">
                  <div className="feature-icon">⚡</div>
                </div>
                <div className="feature-badge">Most Popular</div>
              </div>
              <div className="feature-content">
                <h3>Lightning Fast Delivery</h3>
                <p>Same-day delivery in major cities with real-time tracking and premium packaging for all orders</p>
                <div className="feature-stats">
                  <div className="stat"><strong>2hrs</strong> Average Delivery</div>
                  <div className="stat"><strong>99.8%</strong> On-time Rate</div>
                </div>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-visual">
                <div className="feature-icon-bg">
                  <div className="feature-icon">🛡️</div>
                </div>
              </div>
              <div className="feature-content">
                <h3>Bank-Level Security</h3>
                <p>Advanced encryption and fraud protection ensure your transactions are completely secure</p>
                <div className="feature-stats">
                  <div className="stat"><strong>256-bit</strong> Encryption</div>
                  <div className="stat"><strong>100%</strong> Secure</div>
                </div>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-visual">
                <div className="feature-icon-bg">
                  <div className="feature-icon">🎯</div>
                </div>
              </div>
              <div className="feature-content">
                <h3>Smart Recommendations</h3>
                <p>AI-powered suggestions based on your preferences and shopping history</p>
                <div className="feature-stats">
                  <div className="stat"><strong>95%</strong> Accuracy</div>
                  <div className="stat"><strong>Real-time</strong> Updates</div>
                </div>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-visual">
                <div className="feature-icon-bg">
                  <div className="feature-icon">💎</div>
                </div>
              </div>
              <div className="feature-content">
                <h3>Premium Quality</h3>
                <p>Handpicked products from verified suppliers with quality guarantee</p>
                <div className="feature-stats">
                  <div className="stat"><strong>5-Star</strong> Quality</div>
                  <div className="stat"><strong>30-Day</strong> Returns</div>
                </div>
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
