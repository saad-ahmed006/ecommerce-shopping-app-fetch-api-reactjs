import HomePage from "./Page/HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CartDetailPage from "./Page/CartDetail";
import Navbar from "./Component/Navbar/Navbar";
import Product from "./Component/Product/Product"
import CartPage from "./Page/CartPage";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<HomePage/>} />
      <Route exact path="/produc" element={<Product/>} />
      <Route exact path="/produc/:id" element={<CartDetailPage/>} />
      <Route exact path="/cart" element={<CartPage/>} />
      </Routes>
    </Router>

  );
}

export default App;
 