
import Cart from './pages/Cart';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import AdminLogin from './pages/AdminLogin';
import AdminHome from './pages/adminHome/AdminHome';
import AdminUser from './components/adminUser/adminUser';
import AdminEmployee from './components/adminEmployee/AdminEmployee';
import Success from './pages/Success';
import {ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom"
import AdminProduct from './components/adminProduct/adminProduct';
import NewUser from './components/newUser/newUser';
import NewProduct from './components/newProduct/newProduct';
import NewEmployee from './components/newEmployee/NewEmployee';


function App() {

  return (
    <BrowserRouter>
    <ToastContainer />
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
        <Route path="/admin/employee/:id" element={<AdminEmployee />} />
        <Route path="/newUser" element={<NewUser />} />
        <Route path="/newEmployee" element={<NewEmployee />} />
        <Route path="/success" element={<Success />} />
        <Route path="/newProduct" element={<NewProduct />} />
        
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
