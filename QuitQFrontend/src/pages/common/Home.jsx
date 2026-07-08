import { Link } from "react-router-dom";
import {
  FaSearch,
  FaTruck,
  FaUndo,
  FaShieldAlt,
  FaMobileAlt,
  FaTshirt,
  FaCouch,
  FaGamepad,
  FaBook,
  FaFootballBall,
  FaBolt,
  FaStar,
  FaArrowRight,
  FaPlay,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

import robotMascot from "../../assets/robot-mascot.jpg";
import "./Home.css";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const categories = [
  { title: "Electronics", icon: <FaMobileAlt />, color: "#7c3aed" },
  { title: "Fashion", icon: <FaTshirt />, color: "#0891b2" },
  { title: "Home & Living", icon: <FaCouch />, color: "#059669" },
  { title: "Sports", icon: <FaFootballBall />, color: "#d97706" },
  { title: "Gaming", icon: <FaGamepad />, color: "#dc2626" },
  { title: "Books", icon: <FaBook />, color: "#7c3aed" },
];

const trendingProducts = [
  {
    name: "Wireless Headphones",
    price: "₹7,499",
    rating: 4.8,
    reviews: 1240,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
  },
  {
    name: "Smart Watch Pro",
    price: "₹9,999",
    rating: 4.7,
    reviews: 876,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
  },
  {
    name: "Modern Lounge Chair",
    price: "₹12,499",
    rating: 4.6,
    reviews: 432,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&q=80",
  },
  {
    name: "Running Shoes",
    price: "₹5,999",
    rating: 4.9,
    reviews: 2110,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
  },
];

const stats = [
  { num: "2M+", label: "Happy Customers" },
  { num: "50K+", label: "Products Listed" },
  { num: "500+", label: "Top Brands" },
  { num: "99%", label: "Satisfaction Rate" },
];

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
function Home() {
  return (
    <div className="qqhome-page">

      {/* ── HERO ── */}
      <section className="qqhome-hero-section">
        <div className="qqhome-hero-bg" />
        <div className="qqhome-hero-grid">

          {/* LEFT */}
          <div>
            <div className="qqhome-badge qqhome-fadeup">
              <FaBolt size={12} /> New Arrivals Every Week
            </div>

            <h1 className="qqhome-hero-title qqhome-fadeup qqhome-fadeup-d1">
              SHOP <span className="qqhome-gradient-text">SMARTER.</span>
              <br />LIVE BETTER.
            </h1>

            <p className="qqhome-hero-desc qqhome-fadeup qqhome-fadeup-d2">
              Discover thousands of premium products across electronics,
              fashion, home & living, and more — all at unbeatable prices.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }} className="qqhome-fadeup qqhome-fadeup-d3">
              <Link to="/login" className="qqhome-btn-primary">
                Shop Now <FaArrowRight size={14} />
              </Link>
              <Link to="/login" className="qqhome-btn-outline">
                 View Products <FaArrowRight size={14} />
              </Link>
            </div>

            {/* feature pills */}
            <div className="qqhome-feature-row qqhome-fadeup qqhome-fadeup-d4">
              {[
                { icon: <FaTruck size={15} />, label: "Free Shipping", sub: "Over ₹499" },
                { icon: <FaUndo size={15} />, label: "Easy Returns", sub: "30 days" },
                { icon: <FaShieldAlt size={15} />, label: "Secure Pay", sub: "256-bit SSL" },
              ].map((f) => (
                <div key={f.label} className="qqhome-feature-item">
                  <div className="qqhome-feature-icon">{f.icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "#e2e8f0" }}>{f.label}</div>
                    <div style={{ fontSize: "0.75rem", color: "#64748b" }}>{f.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — robot */}
          <div className="qqhome-hero-right">
            <div className="qqhome-hero-glow" />
            <div className="qqhome-hero-ring" />
            <div className="qqhome-hero-ring2" />

            <img
              src={robotMascot}
              alt="QuitQ Shopping Assistant"
              className="qqhome-robot-img"
            />

            {/* floating stat card */}
            <div className="qqhome-floating-card qqhome-stats-card">
              <div>
                <div className="qqhome-stat-num">2M+</div>
                <div className="qqhome-stat-label">Happy Shoppers</div>
              </div>
              <div style={{ fontSize: "28px" }}>🛒</div>
            </div>

            {/* floating review card */}
            <div className="qqhome-floating-card qqhome-review-card">
              <div style={{ display: "flex", gap: "4px", color: "#fbbf24", marginBottom: "4px" }}>
                {[...Array(5)].map((_, i) => <FaStar key={i} size={12} />)}
              </div>
              <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "#f1f5f9" }}>
                "Best shopping app ever!"
              </div>
              <div style={{ fontSize: "0.7rem", color: "#64748b", marginTop: "4px" }}>
                — Priya M., verified buyer
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="qqhome-stats-bar">
        <div className="qqhome-stats-bar-inner">
          {stats.map((s) => (
            <div key={s.label} className="qqhome-stat-block">
              <div className="qqhome-stat-block-num">{s.num}</div>
              <div className="qqhome-stat-block-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CATEGORIES ── */}
      <section>
        <div className="qqhome-section-wrap">
          <div className="qqhome-section-header">
            <h2 className="qqhome-section-title">BROWSE CATEGORIES</h2>
            <Link to="/login" className="qqhome-view-all">
              View All <FaArrowRight size={12} />
            </Link>
          </div>
          <div className="qqhome-category-grid">
            {categories.map((cat) => (
              <div key={cat.title} className="qqhome-category-card">
                <div
                  className="qqhome-category-icon"
                  style={{
                    background: `linear-gradient(135deg, ${cat.color}30, ${cat.color}15)`,
                    color: cat.color,
                  }}
                >
                  {cat.icon}
                </div>
                <div className="qqhome-category-label">{cat.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROMO CARDS ── */}
      <section>
        <div className="qqhome-section-wrap" style={{ paddingTop: 0 }}>
          <div className="qqhome-promo-grid">

            {/* Big card */}
            <div
              className="qqhome-promo-card"
              style={{
                background: "linear-gradient(135deg,#4f1d96,#7c3aed)",
                color: "#fff",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  right: "-20px",
                  top: "-20px",
                  width: "160px",
                  height: "160px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.08)",
                }}
              />
              <div className="qqhome-promo-card-label">⚡ Flash Sale</div>
              <div className="qqhome-promo-card-title">Up to 50%<br />Off Today</div>
              <Link to="/login" className="qqhome-promo-btn">
                Shop Deals <FaArrowRight size={11} />
              </Link>
            </div>

            {/* Card 2 */}
            <div
              className="qqhome-promo-card"
              style={{
                background: "linear-gradient(135deg,#065f46,#0891b2)",
                color: "#fff",
              }}
            >
              <div className="qqhome-promo-card-label">✨ New Arrivals</div>
              <div className="qqhome-promo-card-title">Fresh Picks<br />Just In</div>
              <Link to="/login" className="qqhome-promo-btn">
                Explore <FaArrowRight size={11} />
              </Link>
            </div>

            {/* Card 3 */}
            <div
              className="qqhome-promo-card"
              style={{
                background: "linear-gradient(135deg,#92400e,#dc2626)",
                color: "#fff",
              }}
            >
              <div className="qqhome-promo-card-label">🏆 Top Brands</div>
              <div className="qqhome-promo-card-title">Trusted By<br />Millions</div>
              <Link to="/login" className="qqhome-promo-btn">
                View Brands <FaArrowRight size={11} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── TRENDING PRODUCTS ── */}
      <section>
        <div className="qqhome-section-wrap" style={{ paddingTop: 0 }}>
          <div className="qqhome-section-header">
            <h2 className="qqhome-section-title">TRENDING NOW</h2>
            <Link to="/login" className="qqhome-view-all">
              View All <FaArrowRight size={12} />
            </Link>
          </div>
          <div className="qqhome-trending-grid">
            {trendingProducts.map((p) => (
              <div key={p.name} className="qqhome-product-card">
                <div className="qqhome-product-img-wrap">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="qqhome-product-img"
                  />
                </div>
                <div className="qqhome-product-info">
                  <div className="qqhome-product-name">{p.name}</div>
                  <div className="qqhome-product-rating">
                    {[...Array(5)].map((_, j) => (
                      <FaStar
                        key={j}
                        size={11}
                        style={{ opacity: j < Math.floor(p.rating) ? 1 : 0.3 }}
                      />
                    ))}
                    <span style={{ color: "#64748b", marginLeft: "4px" }}>
                      ({p.reviews.toLocaleString()})
                    </span>
                  </div>
                  <div className="qqhome-product-price">{p.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOIN BANNER ── */}
      <div className="qqhome-join-banner">
        <div className="qqhome-join-card">
          <div className="qqhome-join-bg" />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="qqhome-join-tag">
              🎉 Members Only
            </div>
            <div className="qqhome-join-title">
              JOIN QUITQ CLUB<br />& SAVE MORE
            </div>
            <p className="qqhome-join-desc">
              Exclusive offers, early access to sales, member-only discounts
              and reward points on every purchase.
            </p>
            <Link to="/register" className="qqhome-join-btn">
              Join Free Now <FaArrowRight size={14} />
            </Link>
          </div>
          <img
            src={robotMascot}
            alt="QuitQ Robot"
            className="qqhome-join-robot"
          />
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="qqhome-footer">
        <div className="qqhome-footer-inner">
          <div className="qqhome-footer-grid">

            <div>
              <div className="qqhome-footer-brand">QUITQ</div>
              <p className="qqhome-footer-desc">
                Your one-stop destination for premium products at
                unbeatable prices. Shop smart, live better.
              </p>
            </div>

            <div>
              <div className="qqhome-footer-heading">Shop</div>
              <ul className="qqhome-footer-list">
                {["All Products", "Featured", "New Arrivals", "Deals"].map((l) => (
                  <li key={l}>
                    <Link to="/login" className="qqhome-footer-link">{l}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="qqhome-footer-heading">Support</div>
              <ul className="qqhome-footer-list">
                {["Contact Us", "FAQs", "Shipping", "Returns"].map((l) => (
                  <li key={l}>
                    <Link to="/login" className="qqhome-footer-link">{l}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="qqhome-footer-heading">Stay Updated</div>
              <p className="qqhome-footer-desc" style={{ marginBottom: "14px" }}>
                Get the latest deals & offers straight to your inbox.
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="qqhome-email-input"
              />
              <button className="qqhome-subscribe-btn">
                Subscribe Now
              </button>
            </div>

          </div>

          <div className="qqhome-footer-bottom">
            <div className="qqhome-copyright">© 2026 QuitQ. All rights reserved.</div>
            <div className="qqhome-social-row">
              {[<FaInstagram />, <FaTwitter />, <FaFacebook />].map((icon, i) => (
                <div key={i} className="qqhome-social-icon">
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Home;