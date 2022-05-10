
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
  Link,
  Navigate
} from "react-router-dom"

import { useSelector } from 'react-redux';

function App() {
  const user=useSelector((state)=>state.user.currentUser)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        {/* <Route path="/login">{user ? <Navigate to="/" replace /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Navigate to="/" /> : <Register />}
        </Route> */}
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
