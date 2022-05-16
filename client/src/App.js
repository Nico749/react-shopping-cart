
import Cart from './pages/Cart';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        {/* no match route */}
        <Route path="*" element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
        />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
