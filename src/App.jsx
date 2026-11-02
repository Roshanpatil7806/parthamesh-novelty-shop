
import { useMemo, useState } from "react";
import "./App.css";

const products = [
  // SCHOOL STATIONERY
  { id: 1, name: "Colour Pencils Set", category: "School Stationery", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600" },
  { id: 2, name: "Sketch Pens", category: "School Stationery", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600" },
  { id: 3, name: "Cute Erasers", category: "School Stationery", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600" },
  { id: 4, name: "Pencil Sharpeners", category: "School Stationery", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600" },
  { id: 5, name: "School Notebooks", category: "School Stationery", image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600" },
  { id: 6, name: "Geometry Box", category: "School Stationery", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600" },
  { id: 7, name: "Drawing Books", category: "School Stationery", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600" },

  // SCHOOL BAGS AND BOXES
  { id: 8, name: "Kids School Bags", category: "School Bags & Boxes", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600" },
  { id: 9, name: "Fancy Pencil Boxes", category: "School Bags & Boxes", image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600" },
  { id: 10, name: "Lunch Boxes", category: "School Bags & Boxes", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600" },
  { id: 11, name: "Water Bottles", category: "School Bags & Boxes", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600" },

  // GIRLS' ACCESSORIES
  { id: 12, name: "Fancy Hair Clips", category: "Girls' Accessories", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600" },
  { id: 13, name: "Hair Bands", category: "Girls' Accessories", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600" },
  { id: 14, name: "Colourful Scrunchies", category: "Girls' Accessories", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600" },
  { id: 15, name: "Fashion Earrings", category: "Girls' Accessories", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600" },
  { id: 16, name: "Bracelets", category: "Girls' Accessories", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600" },
  { id: 17, name: "Cute Purses", category: "Girls' Accessories", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600" },
  { id: 18, name: "Fancy Necklaces", category: "Girls' Accessories", image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600" },

  // BEAUTY AND MAKEUP
  { id: 19, name: "Makeup Brush Set", category: "Beauty & Makeup", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600" },
  { id: 20, name: "Makeup Pouches", category: "Beauty & Makeup", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600" },
  { id: 21, name: "Compact Mirrors", category: "Beauty & Makeup", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600" },
  { id: 22, name: "Nail Art Accessories", category: "Beauty & Makeup", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600" },
  { id: 23, name: "Cosmetic Organizers", category: "Beauty & Makeup", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600" },

  // GIFTS AND TOYS
  { id: 24, name: "Teddy Bears", category: "Gifts & Toys", image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=600" },
  { id: 25, name: "Birthday Gift Sets", category: "Gifts & Toys", image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600" },
  { id: 26, name: "Gift Wrapping Items", category: "Gifts & Toys", image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=600" },
  { id: 27, name: "Photo Frames", category: "Gifts & Toys", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600" },
  { id: 28, name: "Soft Toys", category: "Gifts & Toys", image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=600" },
  { id: 29, name: "Decorative Gift Items", category: "Gifts & Toys", image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600" },

  // ART AND CRAFT
  { id: 30, name: "Art & Craft Kit", category: "Art & Craft", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600" },
  { id: 31, name: "Glitter Colours", category: "Art & Craft", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600" },
  { id: 32, name: "Craft Paper", category: "Art & Craft", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600" },
  { id: 33, name: "DIY Decoration Kit", category: "Art & Craft", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600" },

  // HOME AND FANCY ITEMS
  { id: 34, name: "Fancy Keychains", category: "Home & Fancy Items", image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600" },
  { id: 35, name: "Decorative Showpieces", category: "Home & Fancy Items", image: "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=600" },
  { id: 36, name: "Fancy Mugs", category: "Home & Fancy Items", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600" },
];

const categories = [
  "All Products",
  "School Stationery",
  "School Bags & Boxes",
  "Girls' Accessories",
  "Beauty & Makeup",
  "Gifts & Toys",
  "Art & Craft",
  "Home & Fancy Items",
];

function App() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All Products" ||
        product.category === activeCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="app">
      <header className="header">
        <a className="logo" href="#home">
          <span>PARTHAMESH</span>
          <small>NOVELTY SHOP</small>
        </a>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#categories">Categories</a>
          <a href="#products">Products</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-button" href="#contact">Visit Our Shop</a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow">WELCOME TO PARTHAMESH NOVELTY</span>
            <h1>
              Discover More.
              <span> Explore Happiness.</span>
            </h1>
            <p>
              Your favourite destination for school stationery, girls'
              accessories, makeup essentials, toys and beautiful gifts.
              Find something special for every occasion!
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#products">Explore Products</a>
              <a className="secondary-button" href="#contact">Visit Our Shop</a>
            </div>
            <div className="hero-highlights">
              <span>✦ School Essentials</span>
              <span>✦ Beauty & Fashion</span>
              <span>✦ Wonderful Gifts</span>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1000"
              alt="Beautiful gifts and presents"
            />
            <div className="floating-note">Something Special<br />For Every Occasion</div>
          </div>
        </section>

        <section className="categories-section" id="categories">
          <div className="section-heading">
            <span className="eyebrow">FIND YOUR FAVOURITES</span>
            <h2>Shop by Category</h2>
            <p>Explore our collection of useful and beautiful products.</p>
          </div>

          <div className="category-grid">
            {categories.slice(1).map((category, index) => (
              <button
                className="category-card"
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  document.getElementById("products")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <span className="category-icon">
                  {["✏️", "🎒", "🎀", "💄", "🎁", "🎨", "🏠"][index]}
                </span>
                <strong>{category}</strong>
                <span className="category-link">Explore products →</span>
              </button>
            ))}
          </div>
        </section>

        <section className="products-section" id="products">
          <div className="section-heading">
            <span className="eyebrow">OUR COLLECTION</span>
            <h2>Explore Our Products</h2>
            <p>Find something lovely for school, style and every celebration.</p>
          </div>

          <div className="product-tools">
            <input
              type="search"
              placeholder="Search products, e.g. teddy bear, pencil..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search products"
            />
            <span className="product-count">
              {filteredProducts.length} products found
            </span>
          </div>

          <div className="filter-list">
            {categories.map((category) => (
              <button
                key={category}
                className={activeCategory === category ? "filter active" : "filter"}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <article className="product-card" key={product.id}>
                  <div className="product-image">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.visibility = "hidden";
                      }}
                    />
                    <span className="product-tag">{product.category}</span>
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p>{product.category}</p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-products">
              <span>🔎</span>
              <h3>No products found</h3>
              <p>Try another search or choose a different category.</p>
              <button
                className="primary-button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All Products");
                }}
              >
                Show All Products
              </button>
            </div>
          )}
        </section>

        <section className="about-section" id="about">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=900"
              alt="Beautiful gift shop products"
              loading="lazy"
            />
          </div>
          <div className="about-content">
            <span className="eyebrow">ABOUT OUR SHOP</span>
            <h2>A Little Shop Full of Happiness</h2>
            <p>
              Welcome to Parthamesh Novelty Shop! We bring together school
              essentials, fun stationery, girls' accessories, beauty items,
              toys and thoughtful gifts in one place.
            </p>
            <p>
              Whether you are preparing for school, looking for a cute
              accessory or choosing a gift for someone special, explore
              our collection.
            </p>
            <a className="primary-button" href="#contact">Get in Touch</a>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <span className="eyebrow">WE WOULD LOVE TO SEE YOU</span>
          <h2>Visit Parthamesh Novelty Shop</h2>
          <p>
            Looking for something special? Visit our shop and explore
            our collection in person.
          </p>
          <p className="contact-reminder">
            Contact : 9763579891<br />
            Address : Ground Floor, opposite to  bank, <br />
            Main Road, Sarawade, Radhangari - 416212
            
          </p>
        </section>
      </main>

      <footer className="footer">
        <a className="logo footer-logo" href="#home">
          <span>PARTHAMESH</span>
          <small>NOVELTY SHOP</small>
        </a>
        <p>School essentials, beauty, accessories and gifts — all in one place.</p>

        <small>© {new Date().getFullYear()} Parthamesh Novelty Shop. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default App;
