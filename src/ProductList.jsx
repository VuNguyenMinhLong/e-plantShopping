import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  
  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plants = [
    {
      category: "Air Purifying",
      items: [
        { id: 1, name: "Snake Plant", price: 15, image: "https://images.unsplash.com/photo-1593482892290-f54927ae1b7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
        { id: 2, name: "Spider Plant", price: 12, image: "https://images.unsplash.com/photo-1593482892290-f54927ae1b7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
        { id: 3, name: "Peace Lily", price: 18, image: "https://images.unsplash.com/photo-1593482892290-f54927ae1b7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
        { id: 4, name: "Boston Fern", price: 14, image: "https://images.unsplash.com/photo-1593482892290-f54927ae1b7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
        { id: 5, name: "Rubber Plant", price: 20, image: "https://images.unsplash.com/photo-1593482892290-f54927ae1b7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
        { id: 6, name: "Aloe Vera", price: 10, image: "https://images.unsplash.com/photo-1593482892290-f54927ae1b7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }
      ]
    },
    {
      category: "Flowering",
      items: [
        { id: 7, name: "Orchid", price: 25, image: "https://images.unsplash.com/photo-1593482892290-f54927ae1b7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
        { id: 8, name: "Anthurium", price: 22, image: "https://images.unsplash.com/photo-1593482892290-f54927ae1b7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
        { id: 9, name: "African Violet", price: 16, image: "https://images.unsplash.com/photo-1593482892290-f54927ae1b7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
        { id: 10, name: "Christmas Cactus", price: 18, image: "https://images.unsplash.com/photo-1593482892290-f54927ae1b7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
        { id: 11, name: "Kalanchoe", price: 15, image: "https://images.unsplash.com/photo-1593482892290-f54927ae1b7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
        { id: 12, name: "Bromeliad", price: 20, image: "https://images.unsplash.com/photo-1593482892290-f54927ae1b7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }
      ]
    },
    {
      category: "Pet Friendly",
      items: [
        { id: 13, name: "Parlor Palm", price: 20, image: "https://images.unsplash.com/photo-1593482892290-f54927ae1b7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
        { id: 14, name: "Calathea", price: 22, image: "https://images.unsplash.com/photo-1593482892290-f54927ae1b7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
        { id: 15, name: "Peperomia", price: 15, image: "https://images.unsplash.com/photo-1593482892290-f54927ae1b7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
        { id: 16, name: "Cast Iron Plant", price: 18, image: "https://images.unsplash.com/photo-1593482892290-f54927ae1b7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
        { id: 17, name: "Ponytail Palm", price: 25, image: "https://images.unsplash.com/photo-1593482892290-f54927ae1b7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
        { id: 18, name: "Areca Palm", price: 28, image: "https://images.unsplash.com/photo-1593482892290-f54927ae1b7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }
      ]
    }
  ];

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  const isAdded = (id) => {
    return cartItems.some(item => item.id === id);
  };

  return (
    <div>
      <div className="navbar">
        <div className="logo" onClick={() => window.location.reload()} style={{cursor: 'pointer'}}>
          <h2>Paradise Nursery</h2>
        </div>
        <div className="nav-links">
          <a onClick={() => setShowCart(false)}>Plants</a>
          <a onClick={() => setShowCart(true)} className="cart-icon">
            🛒 Cart 
            {totalCartCount > 0 && <span className="cart-count">{totalCartCount}</span>}
          </a>
        </div>
      </div>

      {!showCart ? (
        <div className="products-container">
          {plants.map((cat, idx) => (
            <div key={idx} className="category">
              <h2>{cat.category}</h2>
              <div className="plant-list">
                {cat.items.map(plant => (
                  <div key={plant.id} className="plant-card">
                    <img src={plant.image} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <p>${plant.price}</p>
                    <button 
                      className="add-to-cart-btn" 
                      onClick={() => handleAddToCart(plant)}
                      disabled={isAdded(plant.id)}
                    >
                      {isAdded(plant.id) ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      )}
    </div>
  );
}

export default ProductList;
