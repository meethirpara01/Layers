import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAllProducts } from '../store/Reducers/WatchProductSlice';
import { addToCart } from '../store/Reducers/CartSlice';
import { useNavigate } from 'react-router-dom';

const WatchPro = () => {

    const dispatch = useDispatch();

  // Read from Redux
  const { WatchProduct } = useSelector((state) => state.WatchProduct);


  // Fetch products once
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/WatchPro.json");
        dispatch(setAllProducts(res.data.watchPro));
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [dispatch]);

  const navigate = useNavigate();

  const handelAddToCart = (item) =>
  {
      dispatch(addToCart(item));
      navigate("/cart");
  }
  
  return (
    <div className="MS-list">
        {WatchProduct.length > 0 ? (
          WatchProduct.map((item) => (
            <div key={item.id} className="product">
              <img src={item.image} alt={item.name} />
              <div className="content">
                <div className='tetxcontent'>
                    <p className='Pname'>{item.name}</p>
                    <p className='Pmaterial'>{item.material}</p>
                    <p className='Pprice'>Price :- {item.price}/-</p>
                </div>
                <button onClick={() => handelAddToCart(item)} className="addcartbtn">Add To Cart</button>
              </div>
            </div>
          ))
        ) : (
          <p>No matching products</p>
        )}
    </div>
  )
}

export default WatchPro