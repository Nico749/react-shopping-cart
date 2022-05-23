
import Cart from './pages/Cart';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import AdminLogin from './pages/AdminLogin';
import AdminHome from './pages/adminHome/AdminHome';
import AdminUser from './components/adminUser/adminUser';

import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom"
import AdminProduct from './components/adminProduct/adminProduct';



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
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/home" element={<AdminHome />} />
        <Route path="/admin/user/:id" element={<AdminUser />} />
        <Route path="/admin/product/:id" element={<AdminProduct />} />
        
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
