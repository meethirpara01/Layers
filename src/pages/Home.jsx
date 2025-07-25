import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion';
import anarcImg1 from '../assets/HomePageAssets/anarc_1.webp';
import anarcImg2 from '../assets/HomePageAssets/336_1_5.webp';
import anarcImg3 from '../assets/HomePageAssets/watch_2.webp';
import anarcImg4 from '../assets/HomePageAssets/group-2609501-67347d8da18ef.webp';
import anarcImg5 from '../assets/HomePageAssets/Scroll_9_copy_2.webp';
import productwatch from '../assets/HomePageAssets/watchProductimg.webp';
import mi1 from '../assets/HomePageAssets/mi1.webp';
import mi2 from '../assets/HomePageAssets/mi2.webp';
import mi3 from '../assets/HomePageAssets/mi3.webp';
import mi4 from '../assets/HomePageAssets/mi4.webp';
import mi5 from '../assets/HomePageAssets/mi5.webp';
import mi6 from '../assets/HomePageAssets/mi6.webp';
import mi7 from '../assets/HomePageAssets/mi7.webp';
import productimage1 from '../assets/HomePageAssets/ProductImage1.jpg';
import productimage2 from '../assets/HomePageAssets/ProductImage2.webp';
import productimage3 from '../assets/HomePageAssets/ProductImage3.webp';
import anarcvideo1 from '../assets/HomePageAssets/view3video.webm';
import anarcvideo2 from '../assets/HomePageAssets/view4videoone.webm';
import anarcvideo3 from '../assets/HomePageAssets/view4videosec.mp4';
import anarcvideo4 from '../assets/HomePageAssets/view4videotherd.webm';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const tiltRef = useRef(null);
  const [xVal, setxVal] = useState(0);
  const [yVal, setyVal] = useState(0);

  const mouseMoving = (e) => 
  {
    // console.log(e);
    if (!tiltRef.current) return;
    setxVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2) / 60);
    setyVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2) / 20);
    tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`;
  }

  const navigate = useNavigate();

  const HandelWatchBuy = () =>
  {
    navigate("/watchpro");
  }

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
    <div onMouseMove={(e) => {mouseMoving(e)}} className='Homecontainer'>
      <div className="herosection">
        <motion.img
          src={anarcImg1}
          alt="Anarc Product"
          className="hero-image"
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        />
        <div ref={tiltRef} className='textcontent' >
          <h2 className='h2text'>A N A R C</h2>
          <div className='p_content'>
            <p>Powerful</p>
            <p>Accurate</p>
            <p>Unique</p>
          </div>
        </div>
      </div>

      <div className='view_2'>
        <motion.div className='textcontent' whileHover={{
            textShadow: "0 0 1px #111, 0 0 1px #111, 0 0 1px #111", color: "#111"}}
            transition={{ duration: 0.3 }}>
          <h2 className='texth2'>Designed in London.</h2>
          <h2 className='texth2'>Made for India.</h2>
          <p>Beauty and geometry come together to create Anarc’s unique octagonal dial.</p>
        </motion.div>
        <div className='imgcontent'>
          <img src={anarcImg2} alt="" />
        </div>
      </div> 

      <div className='view_3'>
        <div className='imgcontent'>
          <video src={anarcvideo1} autoPlay muted loop playsInline></video>
        </div>
        <motion.div className='textcontent' whileHover={{
            textShadow: "0 0 1px #111, 0 0 1px #111, 0 0 1px #111", color: "#111"}}
            transition={{ duration: 0.3 }}>
          <h2 className='texth2'>Forged in</h2>
          <h2 className='texth2'>stainless steel.</h2>
          <p>Unmatched design and a functional crown with haptics that keeps up with you.</p>
        </motion.div>
      </div> 
      <div className='view_4'>
        <motion.div className='textcontent' whileHover={{
            textShadow: "0 0 1px #111, 0 0 1px #111, 0 0 1px #111", color: "#111"}}
            transition={{ duration: 0.3 }}>
          <h2 className='texth2'>Forged in</h2>
          <h2 className='texth2'>stainless steel.</h2>
          <p>Unmatched design and a functional crown with haptics that keeps up with you.</p>
        </motion.div>
        <div className='imgcontent'>
          <video src={anarcvideo4} autoPlay muted loop playsInline></video>
          <video src={anarcvideo3} autoPlay muted loop playsInline></video>
          <video src={anarcvideo2} autoPlay muted loop playsInline></video>
        </div>
      </div> 
      <div className='view_5'>
        <div className='imgcontent1'>
          <img src={anarcImg3} alt="" srcset="" />
          <div className='textcontent1'>
            <h2 className='texth2'>llluminate</h2>
            <h2 className='texth2'>Every Detail.</h2>
            <p>A 700 nits display and 60Hz refresh rate that <br /> shines through even in bright sunlight.</p>
          </div>
        </div>
        <div className='imgcontent2'>
          <img src={anarcImg4} alt="" srcset="" />
          <div className='textcontent1'>
            <h2 className='texth2'>Power through</h2>
            <h2 className='texth2'>7 Day Of Everyday Use.</h2>
            <p>A 350 mAh battery that lets you chase chaos <br /> without running out of power.</p>
          </div>
        </div>
      </div> 
      <div className='view_6'>
        <div className='textcontentfor6'>
            <h2 className='texth2'>Fitness,</h2>
            <h2 className='texth2'>On Point.</h2>
            <p>A 6 axis motion sensor tracks all your <br /> movements to give you accurate data at all times.</p>
        </div>
        <div className='oneimgcontent'>
          <img src={anarcImg5} alt="" srcset="" />  
        </div>
      </div> 
      <div className='view_7'>
        <div className='marquee'>
          <div className="images">
            <img src={mi1} alt="" srcset="" />
            <img src={mi2} alt="" srcset="" />
            <img src={mi3} alt="" srcset="" />
            <img src={mi4} alt="" srcset="" />
            <img src={mi5} alt="" srcset="" />
            <img src={mi6} alt="" srcset="" />
            <img src={mi7} alt="" srcset="" />
          </div>
          <div className="images">
            <img src={mi1} alt="" srcset="" />
            <img src={mi2} alt="" srcset="" />
            <img src={mi3} alt="" srcset="" />
            <img src={mi4} alt="" srcset="" />
            <img src={mi5} alt="" srcset="" />
            <img src={mi6} alt="" srcset="" />
            <img src={mi7} alt="" srcset="" />
          </div>
          <div className="images">
            <img src={mi1} alt="" srcset="" />
            <img src={mi2} alt="" srcset="" />
            <img src={mi3} alt="" srcset="" />
            <img src={mi4} alt="" srcset="" />
            <img src={mi5} alt="" srcset="" />
            <img src={mi6} alt="" srcset="" />
            <img src={mi7} alt="" srcset="" />
          </div>
        </div>
      </div> 
      <div className='view_8'>
        <h2>Are you ready to be <br /> an agent of chaos?</h2>
        <img src={productwatch} alt="" />
        <button onClick={HandelWatchBuy} className='buywatchbtn'>Buy Now at ₹ 6849 /-</button> 
      </div> 
      <div className='view_9'>
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
    </div>
  )
}

export default Home;