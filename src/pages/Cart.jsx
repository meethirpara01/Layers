import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart, decrementQuantity, incrementQuantity } from '../store/Reducers/CartSlice';

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.Cart.cartItems);

  return (
    <div className="cart-page">
      <h2 className='tourcarttitle'>Your Cart</h2>
      <div className='cart-items'>
        {cartItems && cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="details">
                <p className='item-details'>{item.name}</p>
                <p className='item-details'>{item.brand}</p>
                <p className='item-details'>{item.model}</p>
                <p className='item-details'>{item.material}</p>
                <p className='item-price'>₹ {item.price}/-</p>
                <div className="quantity-controls">
                  <button
                    onClick={() => dispatch(decrementQuantity(item.id))}
                    className="qty-btn"> - </button>
                  <span className='quantity'>{item.quantity}</span>
                  <button
                    onClick={() => dispatch(incrementQuantity(item.id))}
                    className="qty-btn"> + </button>
                </div>
                <div className='fainaltbn'>
                  <button className='fbtn'>Place Order</button>
                  <button className='fbtn' onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                </div>
              </div>
            </div>
          ))}
          <button className='ccbtn' onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </>
      ) : (
        <p>Cart is empty</p>
      )}
      </div>
    </div>
  );
};

export default Cart;
