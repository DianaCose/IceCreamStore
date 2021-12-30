import { Box } from "@mui/system";
import Header from "../Header/Header";
import Products from "../Product/Products";
import Footer from "../Footer/Footer";
import { products } from '../../db';

function App() {
  return (
    <Box sx={{ height: '100vh', background: "#FDF6EB" }}>
      <Header />
      <Products products={products}/>
      <Footer />
    </Box>
  );
}

export default App;
