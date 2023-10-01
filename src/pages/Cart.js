import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const handleRemove = (productId) => {
    dispatch(remove(productId)); // Dispatch the 'remove' action with the product id
  };

  const cartItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f0f0f0', // Added background color back
  };

  const imageStyle = {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
  };

  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s', // Add a transition for smooth hover effect
  
    // Define the hover effect
    ':hover': {
      backgroundColor: 'red', // Change the background color on hover
    },
  };
  

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div key={product.id} style={cartItemStyle}>
            <img src={product.image} alt="" style={imageStyle} />
            <h5>{product.title}</h5>
            <h5>${product.price}</h5>
            <button className="btn hover:bg-cyan-700 to bg-red-600" onClick={() => handleRemove(product.id)} style={buttonStyle}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
