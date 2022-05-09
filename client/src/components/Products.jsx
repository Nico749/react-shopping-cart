import { LineAxisOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../dummydata";
import Product from "./Product";
import axios from "axios";

// const cors = require ('cors')

const Container = styled.div`
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cat,sort}) => {

  const [products,setProducts] = useState([])
  //const [filteredP,setFilteredP] = useState([])

  //get products, if there is a category retrieves only few of them otherwise all of them
  useEffect(() => {
    const getProducts = async ()=>{
      try{
        const res = await axios.get(cat ? `http://localhost:5000/api/products?cat=${cat}` : `http://localhost:5000/api/products` )
        //console.log(res.data);
        setProducts(res.data)
      }
      catch{}
    }
    getProducts()
  },[cat])
//console.log(products)

// useEffect(()=>{
//   cat && setFilteredP(
//     products.map((item) => {products.push(item)})
//   )
// },[products,cat])

//console.log(filteredP);
useEffect(()=>{
  if (sort === "") {
    //take prev version of products and sort
    setProducts(prev => [...prev].sort((a,b)=>a.createdAt-b.createdAt)
    )}
  else if (sort === "asc") {
    setProducts(prev => [...prev].sort((a,b)=>a.price-b.price)
    )}
  else  {
    setProducts(prev => [...prev].sort((a,b)=>b.price-a.price)
    )}
},[sort])


  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;