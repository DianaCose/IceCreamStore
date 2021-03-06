import { Box } from "@mui/system";
import Header from "../Header/Header";
import Products from "../Product/Products";
import ProductDetail from "../Product/ProductDetail";
import Checkout from "../Checkout/Checkout";
import Footer from "../Footer/Footer";
import { products } from "../../db";
import { Routes, Route } from "react-router-dom";

function App() {

  
  return (
    <Box sx={{ height: "100vh", background: "#FDF6EB" }}>
      <Header />
      <Routes>
        <Route path="/" element={<Products products={products} />} />
        <Route path="/:name" element={<ProductDetail products={products} />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
