import { Add, Remove } from '@mui/icons-material'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';



const Container = styled.div`

`;


const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  background-color:#d9f0ff;
 
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;


const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[2]

  const [product,setProduct] = useState({})
  const [quantity,setQuantity] = useState(1)
  const dispatch = useDispatch()
//retrieving single product
  useEffect(()=>{
      const getProduct = async ()=>{
        try{          
        const res = await axios.get(`http://localhost:5000/api/products/find/`+ id)
        setProduct(res.data)

        }
        catch{}
      }
      getProduct()
  },[id])

  //handling quantity to put in the cart 
  const handleQty = (type) =>{
    if (type === "dec"){
      quantity>1 && setQuantity(quantity-1)
    }
    else {
      setQuantity(quantity+1)
    }
  }

  //update cart
  //calling the product action and passing price and quantity as payload
  const handleCart =() =>{
    //localStorage.setItem('cart',quantity)
   dispatch(addProduct({...product, quantity}))
  }
 
  
  return (
    <Container>
      <div style={{ background: "#c5f0fc" }}>
        <Link to="/">
          <KeyboardBackspaceOutlinedIcon />
        </Link>
      </div>
      
      <Navbar />  
      <Wrapper>
        <ImgContainer>
          <Image src={product.image} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.description}</Desc>
          <Price>$ {product.price}</Price>
         
          <AddContainer>
            <AmountContainer>
              <Remove onClick={()=>handleQty("dec")}/>
              <Amount>{quantity}</Amount>
              <Add onClick={()=>handleQty("inc")}/>
            </AmountContainer>
            <Button onClick={handleCart}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;