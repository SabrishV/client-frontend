import React from 'react';

const products = [
  { id: 1, name: 'Plain White Shirt', price: 290, image: 'path/to/image1.jpg' },
  { id: 2, name: 'Denim Jacket', price: 690, image: 'path/to/image2.jpg' },
  { id: 3, name: 'Black Polo Shirt', price: 490, image: '/client-main\public\hero\Rectangle 1 (1).svg' },
  { id: 4, name: 'Blue Sweatshirt', price: 790, image: 'path/to/image4.jpg' },
];

function Products() {
  return (
    <div className="products-page">
      <h2>Recently added Shirts!</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}.0</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
