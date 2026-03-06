import React from 'react';

const HomePage = () => {
  return (
    <div>
      <header>
        <nav>
          <h1>Product Listings</h1>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="products">
          <h2>Our Products</h2>
          <div className="product-list">
            {/* List of products */}
            <div className="product-item">
              <h3>Product 1</h3>
              <p>Description of Product 1.</p>
              <span>Price: $XX.XX</span>
            </div>
            <div className="product-item">
              <h3>Product 2</h3>
              <p>Description of Product 2.</p>
              <span>Price: $XX.XX</span>
            </div>
            <!-- More products can be added here -->
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;