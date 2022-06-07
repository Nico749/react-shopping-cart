import { Link, useLocation } from "react-router-dom";
import "./adminProduct.css";
//import { Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../redux/apiCalls";
import app from "../../firebase";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";





export default function AdminProduct() {
const location = useLocation()
const prodId = location.pathname.split('/')[3]

//const updatedProduct = useSelector(state => state.product.products.find(product => product._id === prodId))
const updatedProduct = useSelector((state) => state.product.products.find(product => product._id === prodId))
const [product, setProduct] = useState({updatedProduct})
//console.log(product)

const [img,setImg] =useState(null)
const [cat,setCat] = useState([])
const dispatch = useDispatch()

const handleChange =(e)=>{
  setProduct(prev=>{
   return{ ...prev, [e.target.name]:e.target.value}
  })
}
const handleCategories=(e)=>{
  //take the category as an array
  setCat(e.target.value.split(','))
}

const handleClick = (e) => {
  e.preventDefault()
  
  //give the imaghe an unique name
  const imageName = new Date().getTime() + img.name
  const storage = getStorage(app)
  const StorageRef = ref(storage, imageName)
  const uploadTask = uploadBytesResumable(StorageRef, img);

  //Firebase to manage the photo upload
  // Register three observers:
  // 1. 'state_changed' observer, called any time the state changes
  // 2. Error observer, called on failure
  // 3. Completion observer, called on successful completion
  uploadTask.on('state_changed',
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          // console.log('Upload is paused');
          break;
        case 'running':
          //console.log('Upload is running');
          break;
        default:
      }
    },
    (error) => {
      // Handle unsuccessful uploads
    },
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        //new product data
        //console.log({...product, image:downloadURL, categories:cat});
        const newProduct = { ...product, image: downloadURL, categories: cat }
        //console.log(newProduct)
        updateProduct(newProduct, dispatch)
        
        //window.location.assign('/admin/home')
      });
    }
  );
}

const handleBack = () => {
  window.location.assign('/admin/home')
}
  return (
    <div className="user">
      <div className="userTitleContainer">
           
       
          <button className="userAddButton"onClick={handleBack}>Back </button>
        
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
                <input name="title" type="text" placeholder="" onChange={handleChange}/>

              </div>
              <div className="userUpdateItem">
                <label>Description</label>
                <input name="description" type="text" placeholder="" onChange={handleChange}/>

              </div>
              <div className="userUpdateItem">
                <label>Categories:</label>
                <input type="text" placeholder="" onChange={handleCategories} />
              </div>

              <div className="userUpdateItem">
                <label>Price</label>
                <input name = "price" type="number" placeholder="" onChange={handleChange}/>

              </div>
              <div className="userUpdateItem">
              <label>In Stock</label>
              <select name = "inStock" onChange={handleChange}>

                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
              </div>
              
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
              <input type="file" id="file" onChange={e=>setImg(e.target.files[0])}/>

                <label htmlFor="file">

                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button  className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}