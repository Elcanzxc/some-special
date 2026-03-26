import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList() {
    const [showCart, setShowCart] = useState(false);
    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", cost: "$15" },
                { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", cost: "$12" }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                { name: "Lavender", image: "https://images.unsplash.com/photo-1565011661444-275d7428a21d", cost: "$20" },
                { name: "Jasmine", image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b", cost: "$18" }
            ]
        }
    ];

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div>
            <div className="navbar">
                <div className="tag">
                   <div className="luxury">
                       <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                       <a href="/" style={{textDecoration:'none'}}>
                           <div>
                               <h3 style={{color:'white'}}>Paradise Nursery</h3>
                               <i style={{color:'white'}}>Where Greenery Meets Peace</i>
                           </div>
                       </a>
                   </div>
                </div>
                <div className="cart-icon">
                    <a href="#" onClick={handleCartClick}>
                        <h1 className="cart">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68">
                                <rect width="156" height="156" fill="none"></rect>
                                <circle cx="80" cy="216" r="12"></circle>
                                <circle cx="184" cy="216" r="12"></circle>
                                <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.3A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" id="mainIconPathAttribute"></path>
                            </svg>
                            <span className="cart_quantity_count">{totalQuantity}</span>
                        </h1>
                    </a>
                </div>
            </div>

            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((category, index) => (
                        <div key={index}>
                            <h2 className="category-title">{category.category}</h2>
                            <div className="product-list">
                                {category.plants.map((plant, i) => (
                                    <div className="product-card" key={i}>
                                        <img className="product-image" src={plant.image} alt={plant.name} />
                                        <div className="product-title">{plant.name}</div>
                                        <div className="product-cost">{plant.cost}</div>
                                        <button 
                                            className="product-button" 
                                            onClick={() => handleAddToCart(plant)}
                                            disabled={cart.some(item => item.name === plant.name)}
                                        >
                                            {cart.some(item => item.name === plant.name) ? "Added" : "Add to Cart"}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;
