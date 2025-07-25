import productimage1 from '../assets/HomePageAssets/ProductImage1.jpg';
import productimage2 from '../assets/HomePageAssets/ProductImage2.webp';
import productimage3 from '../assets/HomePageAssets/ProductImage3.webp';

const Product = () => {
  return (
    <div className='view'>
      <div className='producttext'>Chaotic Essentials</div>
        <div className='threeproducts'>
          <div className="products">
            <div className="text">
              <h2>Mobile skins</h2>
              <p>Beacause naked phones are boring</p>
            </div>
            <img src={productimage1} alt="" srcset="" />
          </div> 
          <div className="products">
            <div className="text">
              <h2>Arc Straps</h2>
              <p>Straps that match your vibe.</p>
            </div>
            <img src={productimage2} alt="" srcset="" />
          </div> 
          <div className="products"> 
            <div className="text">
              <h2>Leptop/Tablet Skins</h2>
              <p>Style your laptop or tablet effortlessly.</p>
            </div>
            <img src={productimage3} alt="" srcset="" />
          </div> 
      </div>
    </div> 
  )
}

export default Product