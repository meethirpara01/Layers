import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setAllProducts, setSelection } from '../store/Reducers/MobileSkinProductSlice';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../store/Reducers/CartSlice';

const MobileSkinPro = () => {
  const dispatch = useDispatch();

  // Read from Redux
  const { filteredProducts } = useSelector((state) => state.MobileSkinProduct);

  const InputSelection = {
    apple: ["iPnone 14 Pro", "iPnone 16"],
    Samsung: ["Samsung Galaxy S25", "Samsung Galaxy S25 Ultra"]
  };

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  const { register, handleSubmit } = useForm();

  // Handle brand selection
  const handleBrandChange = (e) => {
    setBrand(e.target.value);
    setModel("");
  };

  // Fetch products once
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/MobilePro.json");
        dispatch(setAllProducts(res.data.mobileProduct));
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [dispatch]);

  // Handle form submit
  const handleFormSubmit = (data) => {
    console.log("Submitted form:", data);
    dispatch(setSelection({ brand: data.brand, model: data.model }));
  };

  const navigate = useNavigate();


  const handleAddToCart = (item) => 
  {
      dispatch(addToCart(item));
      navigate("/cart");
  };

  return (
    <div className="MS-card">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <h2>Select Your Device</h2>
        <div className="inputform">
          <select {...register("brand")} value={brand} onChange={handleBrandChange}>
            <option value="">Select Brand</option>
            {Object.keys(InputSelection).map((brandName) => (
              <option key={brandName} value={brandName}>
                {brandName}
              </option>
            ))}
          </select>

          <select
            {...register("model")}
            value={model}
            onChange={(e) => setModel(e.target.value)}
            disabled={!brand}
          >
            <option value="">Select Model</option>
            {brand &&
              InputSelection[brand].map((modelName) => (
                <option key={modelName} value={modelName}>
                  {modelName}
                </option>
              ))}
          </select>
        </div>
        <button type="submit" className="submitbtn">
          Submit
        </button>
      </form>

      <div className="MS-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div key={item.id} className="product">
              <img src={item.image} alt={item.name} />
              <div className="content">
                <div className='tetxcontent'>
                    <p className='Pname'>{item.name}</p>
                    <p className='Pprice'>Price :- {item.price}/-</p>
                </div>
                <button onClick={() => handleAddToCart(item)} className="addcartbtn">Add To Cart</button>
              </div>
            </div>
          ))
        ) : (
          <p>No matching products</p>
        )}
      </div>
    </div>
  );
};

export default MobileSkinPro;
