import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const items = useSelector((state) => state.cart);

  return (
    <div className='flex flex-wrap items-center justify-between p-4 bg-slate-600'>
      <Link to='/' className='text-3xl text-white font-sans'>
        WEB STORE
      </Link>

      <div className='flex items-center'>
        <Link to='/' className='navLink hover:text-yellow-300'>
          Home
        </Link>
        <Link to='/cart' className='navLink hover:text-yellow-300'>
          Cart
        </Link>

        <span className='cartCount ml-2 text-white'>
          Cart items: {items.length}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
