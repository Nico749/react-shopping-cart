import { Link, useLocation } from "react-router-dom";
import "./adminProduct.css";
//import { Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function AdminProduct() {
const location = useLocation()
const prodId = location.pathname.split('/')[3]
const dispatch = useDispatch()
//const updatedProduct = useSelector(state => state.product.products.find(product => product._id === prodId))
const updatedProduct = useSelector((state) => state.product.products.find(product => product._id === prodId))
const [product, setProduct] = useState({updatedProduct})
console.log(product)

  return (
    <div className="user">
      <div className="userTitleContainer">
           
        <Link to="/">
          <button className="userAddButton">Back </button>
        </Link>
        <h1 className="userTitle">Edit Product</h1>
       
     
        <Link to="/newProduct">
          <button className="userAddButton">Create</button>
        </Link> 
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={updatedProduct.image}
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{updatedProduct.title}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Price</span>
            <div className="userShowInfo">
    
              <span className="userShowInfoTitle">{updatedProduct.price}</span>
            </div>
           <span className="userShowTitle">Description</span>
            <div className="userShowInfo">
   
              <span className="userShowInfoTitle">{updatedProduct.description}</span>
            </div>

            <span className="userShowTitle">In Stock</span>
            <div className="userShowInfo">
   {/* CHECK INSTOCK PROPERTY */}
              <span className="userShowInfoTitle">{updatedProduct.inStock}</span>
            </div>
           
            
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Title</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Description</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Price</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
              <label>In Stock</label>
                        <select  name="inStock" id="idStock">
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
              </div>
              
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src=""
                  alt=""
                />
                <label htmlFor="file">

                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}