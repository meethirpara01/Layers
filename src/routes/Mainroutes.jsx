import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Product = lazy(() => import("../pages/Product"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));
const About = lazy(() => import("../pages/About"));
const Login = lazy(() => import("../pages/Login"));
const NavSection = lazy(() => import("../components/NavSection"));
const MobileSkinPro = lazy(() => import("../components/MobileSkinPro"));
const LeptopSkinPro = lazy(() => import("../components/LeptopSkinPro"));
const WatchPro = lazy(() => import("../components/WatchPro"));
const Cart = lazy(() => import("../pages/Cart"));
const PageNotFound = lazy(() => import("../PageNotFound"));

const LoadingFallback = () => (
  <div style={{ textAlign: "center", marginTop: "2rem", fontSize: "1.5rem" }}>
    Loading...
  </div>
);

const Mainroutes = () => {
  return (
    // Wrap Routes inside Suspense
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/navsection" element={<NavSection />} />
        <Route path="/mobileskinpro" element={<MobileSkinPro />} />
        <Route path="/leptopskinpro" element={<LeptopSkinPro />} />
        <Route path="/watchpro" element={<WatchPro />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default Mainroutes;
