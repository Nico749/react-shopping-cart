import { Link, useLocation } from "react-router-dom";
import "./product.css";
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux'
import { updateProduct } from "../../redux/apiCalls";
import { useState } from "react";


export default function Product() {
    const location = useLocation()
    const prodId = location.pathname.split('/')[2]
    
    const dispatch = useDispatch()
    //find the product using its id
    const updatedProduct = useSelector(state => state.product.products.find(product => product._id === prodId))
    const [product, setProduct] = useState({updateProduct})
   
   
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">


            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder={updatedProduct.title}  />
                        <label>Product Description</label>
                        <input type="text" placeholder={updatedProduct.description} />
                        <label>Product Price</label>
                        <input type="number" placeholder={updatedProduct.price}  />
                        <label>In Stock</label>
                        <select  name="inStock" id="idStock">
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                        <button  className="productButton">Update</button>
                    </div>
                    <div className="productFormRight">
                    
                    </div>
                </form>
            </div>
        </div>
    );
}