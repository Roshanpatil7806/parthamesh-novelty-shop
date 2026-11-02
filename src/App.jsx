
import { useMemo, useState } from "react";
import "./App.css";

// Change these details to your actual shop information
const shopDetails = {
  address: "YOUR SHOP ADDRESS, CITY, PIN CODE",
  phone: "+91 XXXXXXXXXX",
  email: "yourshop@email.com",
  mapsLink: "https://www.google.com/maps",
};

// Product collection
const products = [
  {
    id: 1,
    name: "Cute Teddy Bear",
    category: "Toys",
    image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=700",
    tag: "Popular",
  },
  {
    id: 2,
    name: "Beautiful Gift Box",
    category: "Gifts",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=700",
    tag: "New",
  },
  {
    id: 3,
    name: "Creative Notebook",
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=700",
    tag: "Trending",
  },
  {
    id: 4,
    name: "Stylish Water Bottle",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=700",
    tag: "Popular",
  },
  {
    id: 5,
    name: "Home Decoration",
    category: "Home",
    image: "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=700",
    tag: "New",
  },
  {
    id: 6,
    name: "Stationery Collection",
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=700",
    tag: "Special",
  },
  {
    id: 7,
    name: "Gift Collection",
    category: "Gifts",
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=700",
    tag: "Popular",
  },
  {
    id: 8,
    name: "Kids Toy Collection",
    category: "Toys",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=700",
    tag: "New",
  },
];

const categories = [
  "All",
  "Toys",
  "Gifts",
  "Stationery",
  "Accessories",
  "Home",
];

const categoryCards = [
  { icon: "🧸", name: "Toys", description: "Fun and playful collections" },
  { icon: "🎁", name: "Gifts", description: "Make every moment special" },
  { icon: "📚", name: "Stationery", description: "Creative everyday essentials" },
  { icon: "🧴", name: "Accessories", description: "Useful everyday products" },
  { icon: "🏠", name: "Home", description: "Beautiful home collections" },
];

function Header() {
  return (
    <header className="header">
      <a href="#home" className="logo">
        <span className="logo-icon">🎁</span>
        <span className="logo-text">
          PARTHAMESH
          <small>NOVELTY SHOP</small>
        </span>
      </a>

      <nav className="navigation">
        <a href="#home">Home</a>
        <a href="#categories">Categories</a>
        <a href="#products">Products</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href="#contact" className="header-contact">
        Contact Us ↗
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="welcome-label">
          ✨ WELCOME TO PARTHAMESH NOVELTY
        </div>

        <h1>
          Discover More.
          <br />
          <span>Explore Happiness.</span>
        </h1>

        <p>
          Your favourite destination for beautiful gifts, amazing toys,
          creative stationery and everyday essentials. Explore a world
          of wonderful surprises!
        </p>

        <div className="hero-buttons">
          <a href="#products" className="primary-btn">
            Explore Products →
          </a>

          <a href="#contact" className="secondary-btn">
            Visit Our Shop
          </a>
        </div>

        <div className="hero-highlights">
          <div><strong>🎁</strong> Wonderful Gifts</div>
          <div><strong>🧸</strong> Fun Toys</div>
          <div><strong>✨</strong> Unique Finds</div>
        </div>
      </div>

      <div className="hero-gallery">
        <div className="hero-main-image">
          <img
            src="https://images.unsplash.com/photo-1513883049090-d0b7439799bf?w=1000"
            alt="Beautiful gift collection"
          />
        </div>

        <div className="hero-small-image">
          <img
            src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600"
            alt="Gift box"
          />
        </div>

        <div className="hero-floating-note">
          <span>💛</span>
          <div>
            <strong>Something Special</strong>
            <small>For Every Occasion</small>
          </div>
        </div>

        <div className="hero-circle">JOY!</div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    ["🎁", "Gift Collections", "Special surprises"],
    ["🧸", "Toys & Games", "Fun for everyone"],
    ["📚", "Stationery", "Creative essentials"],
    ["🏠", "Everyday Finds", "Something for all"],
  ];

  return (
    <section className="feature-strip">
      {features.map(([icon, title, subtitle]) => (
        <div className="feature-item" key={title}>
          <span>{icon}</span>
          <div>
            <strong>{title}</strong>
            <small>{subtitle}</small>
          </div>
        </div>
      ))}
    </section>
  );
}

function Categories({ onSelect }) {
  return (
    <section className="section categories-section" id="categories">
      <div className="section-heading">
        <span className="section-label">FIND YOUR FAVOURITES</span>
        <h2>Explore Our Categories</h2>
        <p>
          A wonderful collection of products for every interest and occasion.
        </p>
      </div>

      <div className="category-grid">
        {categoryCards.map((item) => (
          <button
            className="category-card"
            key={item.name}
            onClick={() => onSelect(item.name)}
          >
            <span className="category-icon">{item.icon}</span>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span className="category-arrow">Explore →</span>
          </button>
        ))}
      </div>
    </section>
  );
}

function Products({ category, setCategory }) {
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;

      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <section className="section products-section" id="products">
      <div className="section-heading">
        <span className="section-label">OUR COLLECTION</span>
        <h2>Discover Our Products</h2>
        <p>Take a look at our wonderful collection of products.</p>
      </div>

      <div className="product-controls">
        <div className="search-box">
          <span>⌕</span>
          <input
            type="search"
            placeholder="Search your favourite products..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <div className="filters">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <article className="product-card" key={product.id}>
            <div className="product-image">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
              />
              <span className="product-tag">{product.tag}</span>
            </div>

            <div className="product-info">
              <span className="product-category">
                {product.category}
              </span>
              <h3>{product.name}</h3>
              <div className="view-label">
                View Collection <span>→</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="no-products">
          <span>🔍</span>
          <h3>No products found</h3>
          <p>Try searching for another product.</p>
        </div>
      )}
    </section>
  );
}

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=900"
          alt="Beautiful shop decorations"
          loading="lazy"
        />
      </div>

      <div className="about-content">
        <span className="section-label">ABOUT OUR STORE</span>

        <h2>
          A Little Shop
          <br />
          Full of <span>Big Surprises!</span>
        </h2>

        <p>
          Welcome to Parthamesh Novelty! We bring together a variety
          of interesting and useful products in one place. From toys
          and gifts to stationery, accessories and home essentials,
          explore our collections and discover something you love.
        </p>

        <a href="#contact" className="primary-btn">
          Get In Touch →
        </a>
      </div>
    </section>
  );
}

function ContactBanner() {
  return (
    <section className="contact-banner">
      <span>💛</span>
      <h2>We Would Love to See You!</h2>
      <p>
        Visit Parthamesh Novelty and explore our wonderful collections in person.
      </p>
      <a href="#contact" className="contact-banner-btn">
        Find Our Shop →
      </a>
    </section>
  );
}

function Footer() {
  const cleanPhone = shopDetails.phone.replace(/[^\d+]/g, "");

  return (
    <footer className="footer" id="contact">
      <div className="footer-main">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            🎁 PARTHAMESH
          </a>
          <h3>Novelty Shop</h3>
          <p>
            Your happy place for gifts, toys, stationery and everyday surprises.
          </p>
        </div>

        <div className="footer-contact">
          <h3>Contact Information</h3>

          <div className="contact-detail">
            <span>📍</span>
            <div>
              <strong>Shop Address</strong>
              <p>{shopDetails.address}</p>
            </div>
          </div>

          <div className="contact-detail">
            <span>📞</span>
            <div>
              <strong>Phone Number</strong>
              <p>
                <a href={`tel:${cleanPhone}`}>{shopDetails.phone}</a>
              </p>
            </div>
          </div>

          <div className="contact-detail">
            <span>✉️</span>
            <div>
              <strong>Email Address</strong>
              <p>
                <a href={`mailto:${shopDetails.email}`}>
                  {shopDetails.email}
                </a>
              </p>
            </div>
          </div>

          <a
            href={shopDetails.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="map-btn"
          >
            📍 View Shop Location on Google Maps
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Parthamesh Novelty Shop. All Rights Reserved.</p>
        <a href="#home">Back to Top ↑</a>
      </div>
    </footer>
  );
}

export default function App() {
  const [category, setCategory] = useState("All");

  const selectCategory = (name) => {
    setCategory(name);
    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="shop">
      <Header />

      <main>
        <Hero />
        <Features />
        <Categories onSelect={selectCategory} />
        <Products category={category} setCategory={setCategory} />
        <About />
        <ContactBanner />
      </main>

      <Footer />
    </div>
  );
}
