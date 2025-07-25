import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setAllProducts, setSelection } from '../store/Reducers/LeptopSkinProductSlice';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../store/Reducers/CartSlice';

const LeptopSkinProduct = () => {

  const dispatch = useDispatch();

  // Read from Redux
  const { filteredProducts } = useSelector((state) => state.LeptopSkinProduct);

  const InputSelection = {
    Mackbook: ["Macbook Air 15-inch M2 Model A2941", "Macbook Pro 14 Inch 2021 Model A2442"],
    Windows: ["ASUS Vivobook 14 (X409FA-EK555T) 2019", "Dell Inspiron 15 7000 (2017) Model P65F"]
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
        const res = await axios.get("/leptopProduct.json");
        dispatch(setAllProducts(res.data.leptopProduct));
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
    <div className="LS-card">
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

      <div className="LS-list">
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
  )
}

export default LeptopSkinProduct