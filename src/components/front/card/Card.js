import React from 'react'
import './Card.css'

const Card = ({ cartItems, handleAddPro, handelRemPro }) => {
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.quantity * item.prix,
      0
    );
  
    return (
      <div className='cart-items'>
        <div className='cart-items-header'>Cart Items</div>
        {cartItems.length === 0 && (
          <div className='cart-items-empty'> No items are added</div>
        )}
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className='cart-items-list'>
              <img
                className='cart-items-image'
                src={item.img}
                alt={item.title}
              />
              <div className='cart-items-name'>{item.title}</div>
              <div className='cart-items-func'>
                <button className='cart-items-add' onClick={() => handleAddPro(item)}>+</button>
                <button className='cart-items-rem' onClick={() => handelRemPro(item)}>-</button>
              </div>
              <div className='cart-items-price-name'>
                {item.quantity} * {item.prix}MAD
              </div>
            </div>
          ))}
        </div>
        <div className='cart-items-total-price-name'>
          Total price 
          <div className='cart-items-total-price'>{totalPrice}MAD</div>
        </div>
      </div>
    );
  };

export default Card