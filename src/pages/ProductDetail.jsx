import { useNavigate } from 'react-router-dom';
import productimage1 from '../assets/HomePageAssets/ProductImage1.jpg';
import productimage2 from '../assets/HomePageAssets/ProductImage2.webp';
import productimage3 from '../assets/HomePageAssets/ProductImage3.webp';

const ProductDetail = () => {

  const navigate = useNavigate();

  const HandelMobailSkins = () =>
  {
    navigate("/mobileskinpro");
  }
  const HandelLeptopSkins = () =>
  {
    navigate("/leptopskinpro");
  }
  const HandelWatchPro = () =>
  {
    navigate("/watchpro");
  }
  return (
    <div className='view'>
          <div className='producttext'>Chaotic Essentials</div>
            <div className='threeproducts'>
              <div onClick={HandelMobailSkins} className="products">
                <div className="text">
                  <h2>Mobile skins</h2>
                  <p>Beacause naked phones are boring</p>
                </div>
                <img src={productimage1} alt="" srcset="" />
              </div> 
              <div onClick={HandelWatchPro} className="products">
                <div className="text">
                  <h2>Arc Straps</h2>
                  <p>Straps that match your vibe.</p>
                </div>
                <img src={productimage2} alt="" srcset="" />
              </div> 
              <div onClick={HandelLeptopSkins} className="products"> 
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

export default ProductDetail