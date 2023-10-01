import React, { useEffect, useState } from 'react';
import {add} from '../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';
const Products = () => {
const dispatch=useDispatch();

  const {data:products,status}=useSelector((state)=>state.product);
  //const [products,setProducts]=useState([]);

  useEffect(() => {
dispatch(fetchProduct());
    // const fetchProduct = async () => {
    //   try {
    //     const response = await fetch('https://fakestoreapi.com/products');
    //     if (response.ok) {
    //       const data = await response.json();
    //       setProducts(data);
    //     } else {
    //       console.error('Failed to fetch products');
    //     }
    //   } catch (error) {
    //     console.error('Error:', error);
    //   }
    // };

    // fetchProduct();

  }, [dispatch]);

  const handleAdd=(product)=>{
    //product
    dispatch(add(product)); 

  }

  if(status===STATUSES.LOADING){
    return <h2 className='text-white'>loading....</h2>
  }

  if(status===STATUSES.ERROR){
    return <h2 className='text-white'>Something went wrong!</h2>
  }
  
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.title} />
              <b>
              <h1>{product.title}</h1>
              <h4>{product.price}</h4>
              </b>
              <button onClick={()=>handleAdd(product)} className="add-to-cart-button">Add to cart</button>
            </div>
          ))}
        </div>
      );
    }
    
    export default Products;